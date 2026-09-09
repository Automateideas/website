"use client";

import { useState } from "react";
import { faqItems } from "@/lib/site-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq">
      <div className="faq-hero">
        <div className="faq-hero-inner reveal">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-bar" />
            Got Questions
          </div>
          <h2 className="faq-hero-h1">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="faq-hero-sub">
            Everything you need to know about working with Automate Ideas.
            Can&apos;t find the answer here? Reach out and we&apos;ll help.
          </p>
        </div>
      </div>

      <div className="faq-body">
        <div className="faq-list">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`faq-item${open ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  id={`faq-q-${i}`}
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-q-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq-a-wrap"
                >
                  <div className="faq-a">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}