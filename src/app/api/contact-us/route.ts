import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import axios from "axios";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;
const MAX_FIELD_LENGTH = 2000;

interface ContactPayload {
  name?: unknown;
  contactNo?: unknown;
  email?: unknown;
  designation?: unknown;
  companyName?: unknown;
  companySize?: unknown;
  interestedIn?: unknown;
  message?: unknown;
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

    const error = validations(data);
    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    // Rebuild a clean, trimmed payload so nothing extra is forwarded.
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
        { error: "Google Apps Script URL not configured" },
        { status: 500 },
      );
    }

    const response = await axios.post(
      process.env.GOOGLE_APPS_SCRIPT_URL,
      clean,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json(
      { success: true, result: response.data },
      { status: 200 },
    );
  } catch (err: unknown) {
    if (typeof err === "object" && err !== null && "response" in err) {
      const axiosError = err as {
        response?: {
          data?: { message?: string };
          status?: number;
        };
        message?: string;
      };

      console.error(
        "Proxy error:",
        axiosError.response?.data || axiosError.message,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            axiosError.response?.data?.message ||
            "Failed to submit form. Please try again.",
        },
        {
          status:
            axiosError.response?.status || StatusCodes.INTERNAL_SERVER_ERROR,
        },
      );
    }

    console.error("Unexpected error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred.",
      },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json(
      {
        message: "Contact API is working",
        status: "healthy",
        timestamp: new Date().toISOString(),
      },
      { status: StatusCodes.OK },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Contact API health check failed",
        status: "unhealthy",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}
