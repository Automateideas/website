import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import axios from "axios";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;
const MAX_FIELD_LENGTH = 2000;

// Upstream is a Google Apps Script web app; without a cap a slow one would
// hold the function open until the platform kills it.
const UPSTREAM_TIMEOUT_MS = 10_000;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ENTRIES = 5_000;

interface ContactPayload {
  name?: string;
  contactNo?: string;
  email?: string;
  designation?: string;
  companyName?: string;
  companySize?: string;
  interestedIn?: string;
  message?: string;
  // Honeypot. Hidden from people, irresistible to form bots.
  website?: string;
}

/**
 * Per-IP throttle held in module memory.
 *
 * Caveat worth knowing: on serverless each instance keeps its own Map, so a
 * spread-out flood can still get through more than RATE_LIMIT_MAX in total.
 * It stops the common case — one script hammering the endpoint — without
 * adding a datastore. Move this to Vercel KV / Upstash if abuse continues.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

function prune(now: number) {
  for (const [key, entry] of hits) {
    if (entry.resetAt <= now) hits.delete(key);
  }
  // Hard ceiling so a spray of unique IPs cannot grow this without bound.
  if (hits.size > RATE_LIMIT_MAX_ENTRIES) hits.clear();
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function rateLimited(request: NextRequest): boolean {
  const now = Date.now();
  prune(now);

  const ip = clientIp(request);
  const entry = hits.get(ip);

  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validations(payload: ContactPayload) {
  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const contactNo = asTrimmedString(payload.contactNo);
  const message = asTrimmedString(payload.message);

  if (!name) return "Name is required.";
  if (name.length > 200) return "Name is too long.";
  if (!email) return "Email is required.";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return "A valid email address is required.";
  }
  if (contactNo && !PHONE_RE.test(contactNo)) {
    return "A valid phone number is required.";
  }
  if (!message) return "A message is required.";
  if (message.length > MAX_FIELD_LENGTH) return "Message is too long.";

  for (const key of Object.keys(payload)) {
    const value = asTrimmedString((payload as Record<string, unknown>)[key]);
    if (value.length > MAX_FIELD_LENGTH) {
      return "One or more fields are too long.";
    }
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    if (rateLimited(request)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes and try again.",
        },
        {
          status: StatusCodes.TOO_MANY_REQUESTS,
          headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) },
        },
      );
    }

    let data: ContactPayload;
    try {
      data = (await request.json()) as ContactPayload;
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body." },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    if (typeof data !== "object" || data === null || Array.isArray(data)) {
      return NextResponse.json(
        { success: false, error: "Invalid form data." },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    // Honeypot tripped. Answer exactly like a success so the bot has nothing
    // to learn from, and forward nothing.
    if (asTrimmedString(data.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const error = validations(data);
    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    // Rebuild a clean, trimmed payload so nothing extra (the honeypot
    // included) is forwarded.
    const clean = {
      name: asTrimmedString(data.name),
      contactNo: asTrimmedString(data.contactNo),
      email: asTrimmedString(data.email),
      designation: asTrimmedString(data.designation),
      companyName: asTrimmedString(data.companyName),
      companySize: asTrimmedString(data.companySize),
      interestedIn: asTrimmedString(data.interestedIn),
      message: asTrimmedString(data.message),
    };

    if (!process.env.GOOGLE_APPS_SCRIPT_URL) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not defined");
      return NextResponse.json(
        { success: false, error: "Failed to submit form. Please try again." },
        { status: StatusCodes.INTERNAL_SERVER_ERROR },
      );
    }

    await axios.post(process.env.GOOGLE_APPS_SCRIPT_URL, clean, {
      headers: { "Content-Type": "application/json" },
      timeout: UPSTREAM_TIMEOUT_MS,
    });

    // The upstream body is not echoed back: it is an internal Apps Script
    // response and the browser has no use for it.
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    // Log the detail server-side, tell the client nothing about the upstream.
    if (axios.isAxiosError(err)) {
      console.error(
        "Contact proxy error:",
        err.code,
        err.response?.status,
        err.response?.data ?? err.message,
      );
    } else {
      console.error("Contact unexpected error:", err);
    }

    return NextResponse.json(
      { success: false, error: "Failed to submit form. Please try again." },
      { status: StatusCodes.BAD_GATEWAY },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: "healthy" },
    { status: StatusCodes.OK },
  );
}
