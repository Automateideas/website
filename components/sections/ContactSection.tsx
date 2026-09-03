"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  companySizes,
  contactItems,
  interestedOptions,
} from "@/lib/site-data";

type AlertType = "success" | "error" | "warning" | "info";
interface AlertItem {
  id: number;
  type: AlertType;
  message: string;
  duration?: number;
}

const EMPTY_FORM = {
  name: "",
  contactNo: "",
  email: "",
  designation: "",
  companyName: "",
  companySize: "",
  interestedIn: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

export default function ContactSection() {
  const [isPending, setIsPending] = useState(false);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [formData, setFormData] = useState({ ...EMPTY_FORM });

  const addAlert = (type: AlertType, message: string, duration = 4000) => {
    const id = Date.now() + Math.random();
    setAlerts((prev) => [...prev, { id, type, message, duration }]);
  };
  const removeAlert = (id: number) =>
    setAlerts((prev) => prev.filter((a) => a.id !== id));

  const set =
    (field: keyof typeof EMPTY_FORM) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = (data: typeof EMPTY_FORM): string | null => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!data.email.trim()) return "Please enter your email address.";
    if (!EMAIL_RE.test(data.email.trim()))
      return "Please enter a valid email address.";
    if (data.contactNo.trim() && !PHONE_RE.test(data.contactNo.trim()))
      return "Please enter a valid phone number.";
    if (!data.message.trim())
      return "Please tell us a little about your project or challenge.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, v.trim()]),
    ) as typeof EMPTY_FORM;

    const error = validate(cleaned);
    if (error) {
      addAlert("error", error);
      return;
    }

    setIsPending(true);
    try {
      addAlert("info", "Sending your message\u2026", 2500);
      await axios.post("/api/contact-us", cleaned, {
        headers: { "Content-Type": "application/json" },
      });
      addAlert("success", "Message sent! We'll get back to you soon.");
      setFormData({ ...EMPTY_FORM });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) {
          addAlert(
            "error",
            "Network error. Check your connection and try again.",
          );
        } else if (err.response.status === 429) {
          addAlert(
            "warning",
            "Too many requests. Please wait a moment and try again.",
          );
        } else if (
          err.response.status === 400 &&
          err.response.data?.error
        ) {
          addAlert("error", err.response.data.error);
        } else {
          addAlert("error", "Failed to send. Please try again later.");
        }
      } else {
        addAlert("error", "Failed to send. Please try again later.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <section id="contact">
        <div className="ct-hero">
          <div className="ct-hero-inner reveal">
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-bar" />
              Let's Talk
            </div>
            <h1 className="ct-hero-h1">
              Get in <em>Touch</em>
              <br />
              with Us
            </h1>
            <p className="ct-hero-sub">
              Ready to streamline your business with Google Workspace
              automation? Contact us for a free consultation {"\u2014"} we'll
              help you save time, reduce errors, and focus on what truly
              matters.
            </p>
          </div>
        </div>

        <div className="ct-body">
          <div className="ct-info reveal">
            <p className="ct-info-lead">
              Reach out through any channel below, or fill in the form and
              we'll respond within one business day.
            </p>
            <div className="ct-contact-list">
              {contactItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="ct-contact-item"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <div className="ct-contact-icon">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="ct-contact-label">{item.label}</div>
                    <div className="ct-contact-value">{item.value}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="ct-divider" />
            <div className="ct-trust">
              &quot;We typically respond within a few hours during business
              days. All consultations are completely free with no
              obligation.&quot;
            </div>
          </div>

          <div className="ct-form-card reveal">
            <div className="ct-form-header">
              <div className="ct-form-eyebrow">Free Consultation</div>
              <div className="ct-form-title">Send Us a Message</div>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="ct-form-grid">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">
                    Name <span>*</span>
                  </label>
                  <input
                    id="ct-name"
                    className="ct-input"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={set("name")}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-contact">
                    Contact No.
                  </label>
                  <input
                    id="ct-contact"
                    className="ct-input"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.contactNo}
                    onChange={set("contactNo")}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">
                    Email <span>*</span>
                  </label>
                  <input
                    id="ct-email"
                    className="ct-input"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={formData.email}
                    onChange={set("email")}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-designation">
                    Designation
                  </label>
                  <input
                    id="ct-designation"
                    className="ct-input"
                    type="text"
                    placeholder="e.g. CEO, Manager"
                    value={formData.designation}
                    onChange={set("designation")}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-company">
                    Company Name
                  </label>
                  <input
                    id="ct-company"
                    className="ct-input"
                    type="text"
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={set("companyName")}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-size">
                    Company Size
                  </label>
                  <div className="ct-select-wrap">
                    <select
                      id="ct-size"
                      className="ct-select"
                      value={formData.companySize}
                      onChange={set("companySize")}
                    >
                      <option value="" disabled>
                        Select size
                      </option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>
                          {s} employees
                        </option>
                      ))}
                    </select>
                    <span className="ct-select-arrow">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ct-field ct-col-full">
                  <label className="ct-label" htmlFor="ct-interest">
                    Interested In
                  </label>
                  <div className="ct-select-wrap">
                    <select
                      id="ct-interest"
                      className="ct-select"
                      value={formData.interestedIn}
                      onChange={set("interestedIn")}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {interestedOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="ct-select-arrow">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ct-field ct-col-full">
                  <label className="ct-label" htmlFor="ct-message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="ct-message"
                    className="ct-textarea"
                    placeholder="Tell us about your project or challenge\u2026"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={set("message")}
                  />
                </div>
              </div>
              <button type="submit" className="ct-submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <span className="ct-spinner" /> Sending{"\u2026"}
                  </>
                ) : (
                  <>Send Message </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastStack alerts={alerts} onClose={removeAlert} />
    </>
  );
}

function ToastStack({
  alerts,
  onClose,
}: {
  alerts: AlertItem[];
  onClose: (id: number) => void;
}) {
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    alerts.forEach((a) => {
      if (a.duration) {
        const t = setTimeout(() => onClose(a.id), a.duration);
        timers.push(t);
      }
    });
    return () => timers.forEach(clearTimeout);
  }, [alerts, onClose]);

  return (
    <div className="ct-toast-stack">
      {alerts.map((a) => (
        <div key={a.id} className={`ct-toast ct-toast-${a.type}`}>
          <div className={`ct-toast-dot ct-toast-dot-${a.type}`} />
          <span className="ct-toast-msg">{a.message}</span>
          <button
            className="ct-toast-close"
            onClick={() => onClose(a.id)}
            aria-label="Dismiss"
          >
            {"\u2715"}
          </button>
        </div>
      ))}
    </div>
  );
}
