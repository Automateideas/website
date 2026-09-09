"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  COOKIE_SETTINGS_EVENT,
  getConsent,
  hasConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";
import "./CookieConsent.css";

type Mode = "hidden" | "banner" | "manager";

export default function CookieConsent() {
  const [mode, setMode] = useState<Mode>("hidden");

  useEffect(() => {
    // Show the settings manager when requested from the footer.
    const onRequest = () => {
      setMode((prev) => (prev === "hidden" ? "manager" : prev));
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, onRequest);

    if (!hasConsent()) {
      // Small delay so the page paints first.
      const t = setTimeout(() => setMode("banner"), 800);
      return () => {
        clearTimeout(t);
        window.removeEventListener(COOKIE_SETTINGS_EVENT, onRequest);
      };
    }
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onRequest);
  }, []);

  const decide = (choice: ConsentChoice) => {
    saveConsent(choice);
    setMode("hidden");
  };

  // Lock body scroll while the centered settings modal is open.
  useEffect(() => {
    if (mode === "manager") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mode]);

  if (mode === "hidden") return null;

  return (
    <div
      className={`cc-root cc-root-${mode}`}
      role="dialog"
      aria-modal={mode === "manager"}
      aria-live="polite"
      aria-label="Cookie consent"
      onClick={(e) => {
        if (e.target === e.currentTarget) setMode("hidden");
      }}
    >
      {mode === "banner" ? (
        <Banner
          onAccept={() => decide("granted")}
          onDecline={() => decide("denied")}
          onManage={() => setMode("manager")}
        />
      ) : (
        <Manager
          initial={getConsent()}
          onSave={decide}
          onClose={() => setMode("hidden")}
        />
      )}
    </div>
  );
}

function Banner({
  onAccept,
  onDecline,
  onManage,
}: {
  onAccept: () => void;
  onDecline: () => void;
  onManage: () => void;
}) {
  return (
    <div className="cc-card">
      <div className="cc-title">We value your privacy</div>
      <p className="cc-text">
        We use cookies and similar technologies to improve your experience,
        analyse site traffic, and (with your consent) support marketing. We
        comply with India&apos;s DPDP Act, 2023 and, where it applies, the EU
        GDPR. Please choose how we use your data.
      </p>
      <div className="cc-actions">
        <button type="button" className="cc-btn cc-btn-primary" onClick={onAccept}>
          Accept all
        </button>
        <button type="button" className="cc-btn cc-btn-ghost" onClick={onDecline}>
          Decline
        </button>
        <button type="button" className="cc-btn cc-btn-link" onClick={onManage}>
          Cookie settings
        </button>
      </div>
      <p className="cc-foot">
        Read our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Use</Link>.
      </p>
    </div>
  );
}

function Toggle({
  label,
  desc,
  value,
  onChange,
}: {
  label: string;
  desc: string;
  value: ConsentChoice;
  onChange: (v: ConsentChoice) => void;
}) {
  return (
    <div className="cc-row">
      <div className="cc-row-info">
        <div className="cc-row-label">{label}</div>
        <div className="cc-row-desc">{desc}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value === "granted"}
        className={`cc-switch${value === "granted" ? " cc-on" : ""}`}
        onClick={() => onChange(value === "granted" ? "denied" : "granted")}
      >
        <span className="cc-switch-thumb" />
      </button>
    </div>
  );
}

function Manager({
  initial,
  onSave,
  onClose,
}: {
  initial: ConsentChoice | null;
  onSave: (choice: ConsentChoice) => void;
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState<ConsentChoice>(
    initial === "granted" ? "granted" : "denied",
  );
  const [marketing, setMarketing] = useState<ConsentChoice>(
    initial === "granted" ? "granted" : "denied",
  );

  const save = () => {
    onSave(
      analytics === "granted" || marketing === "granted"
        ? "granted"
        : "denied",
    );
  };

  return (
    <div className="cc-card cc-manager">
      <div className="cc-mgr-head">
        <div className="cc-title">Cookie settings</div>
        <button
          type="button"
          className="cc-mgr-close"
          aria-label="Close"
          onClick={onClose}
        >
          {"\u2715"}
        </button>
      </div>
      <p className="cc-text">
        Your consent governs how our website handles your data under the DPDP
        Act, 2023 and GDPR. Use the toggles below to refine your choices.
      </p>

      <div className="cc-row cc-disabled">
        <div className="cc-row-info">
          <div className="cc-row-label">Essential</div>
          <div className="cc-row-desc">
            Required for the website to function securely (security storage).
            Always active.
          </div>
        </div>
        <span className="cc-always-on">Always on</span>
      </div>

      <Toggle
        label="Analytics"
        desc="Helps us understand how visitors use the site to improve it."
        value={analytics}
        onChange={setAnalytics}
      />
      <Toggle
        label="Marketing"
        desc="Allows targeted ads, advertising, and measurement via platforms like Google and Meta."
        value={marketing}
        onChange={setMarketing}
      />

      <div className="cc-actions">
        <button type="button" className="cc-btn cc-btn-primary" onClick={save}>
          Save preferences
        </button>
      </div>
      <p className="cc-foot">
        Read our <Link href="/privacy-policy">Privacy Policy</Link> to learn
        more about how we use your data.
      </p>
    </div>
  );
}