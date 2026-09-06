"use client";

import { Fragment, useState } from "react";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import {
  BOOK_CALL_URL,
  metaWhatsAppCompare,
  metaWhatsAppIncludes,
  metaWhatsAppPlans,
} from "@/lib/site-data";

type Billing = "yearly" | "monthly";

const inr = (n: number) => "\u20B9" + n.toLocaleString("en-IN");

const BILLING_LABEL: Record<Billing, string> = {
  yearly: "year",
  monthly: "month",
};

export default function MetaWhatsAppPricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="meta-wa-pricing" className="mw-section">
      <div className="mw-head reveal">
        <div className="mw-eyebrow">
          <span className="mw-eyebrow-bar" />
          Meta Official
          <ShieldCheck className="mw-eyebrow-verified" aria-hidden="true" />
        </div>
        <div className="mw-title-wrap">
          <h2 className="mw-h2">WhatsApp Business API Plans</h2>
          <span className="mw-badge">
            <Check aria-hidden="true" /> Meta Official WhatsApp API
          </span>
        </div>
        <p className="mw-sub">
          Scale your WhatsApp business communication with our comprehensive API
          solutions. From basic messaging to advanced team collaboration
          {" \u2014 "}we've got you covered.
        </p>

        <div className="mw-billing" role="group" aria-label="Billing period">
          <button
            type="button"
            className={`mw-bill-btn ${billing === "yearly" ? "mw-bill-active" : ""}`}
            aria-pressed={billing === "yearly"}
            onClick={() => setBilling("yearly")}
          >
            Bill Yearly<span className="mw-bill-save">-20%</span>
          </button>
          <button
            type="button"
            className={`mw-bill-btn ${billing === "monthly" ? "mw-bill-active" : ""}`}
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
          >
            Bill Monthly
          </button>
          <span className="mw-bill-note">
            Save 20% with annual billing
          </span>
        </div>
      </div>

      <div className="mw-grid">
        {metaWhatsAppPlans.map((plan, i) => {
          const Icon = plan.icon;
          const price = billing === "yearly" ? plan.yearly : plan.monthly;
          const delayClass = ["reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4"][i];
          return (
            <div
              key={plan.id}
              className={`mw-card reveal ${delayClass} ${plan.popular ? "mw-popular" : ""}`}
            >
              {plan.badge && <span className="mw-badge-top">{plan.badge}</span>}
              <div className={`mw-card-icon ${plan.iconClass}`}>
                <Icon aria-hidden="true" />
              </div>
              <div className="mw-card-title">{plan.title}</div>
              <div className="mw-price">
                {price ? (
                  <>
                    <span className="mw-price-amount">{inr(price)}</span>
                    <span className="mw-price-period">
                      / {BILLING_LABEL[billing]}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="mw-price-amount mw-price-custom">
                      Custom
                    </span>
                    <span className="mw-price-period">tailored to you</span>
                  </>
                )}
              </div>
              <div className="mw-price-sub">
                {plan.yearly === null
                  ? "Let's design the right fit"
                  : billing === "yearly"
                    ? "Billed annually \u2014 20% off"
                    : "Billed every month"}
              </div>
              <ul className="mw-features">
                {plan.features.map((feat, j) => (
                  <li key={j} className="mw-feature">
                    <span className="mw-check">
                      <Check aria-hidden="true" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mw-btn ${plan.btnClass}`}>
                {plan.btnLabel}
                <MessageCircle aria-hidden="true" />
              </a>
            </div>
          );
        })}
      </div>

      <div className="mw-comp reveal">
        <h3 className="mw-comp-h3">Compare WhatsApp API Plans</h3>
        <p className="mw-comp-sub">
          Detailed comparison of our WhatsApp Business API plans. Choose the
          perfect solution that matches your business requirements and team
          size.
        </p>
        <div className="mw-table-wrap">
          <table className="mw-table">
            <thead>
              <tr>
                <th className="mw-th-feat">Features &amp; Capabilities</th>
                {metaWhatsAppPlans.slice(0, 3).map((plan) => {
                  const price = billing === "yearly" ? plan.yearly : plan.monthly;
                  return (
                    <th
                      key={plan.id}
                      className={plan.popular ? "mw-th-pop" : ""}
                    >
                      {plan.title.split(" \u2014 ")[0]}
                      {price ? (
                        <span className="mw-th-price">
                          {inr(price)}/
                          {billing === "yearly" ? "year" : "month"}
                        </span>
                      ) : null}
                      {plan.badge && (
                        <span className="mw-th-badge">{plan.badge}</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {metaWhatsAppCompare.map((group, gi) => (
                <Fragment key={gi}>
                  <tr className="mw-row-group">
                    <td colSpan={4}>{group.group}</td>
                  </tr>
                  {group.rows.map((row, ri) => (
                    <tr key={ri}>
                      <td className="mw-td-label">{row.label}</td>
                      {row.values.map((val, vi) => (
                        <td key={vi}>
                          {val === true ? (
                            <span className="mw-table-check" title="Included">
                              <Check aria-hidden="true" />
                            </span>
                          ) : val === false ? (
                            <span className="mw-table-dash">{"\u2014"}</span>
                          ) : (
                            <span className="mw-table-text">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mw-includes reveal">
        <h3 className="mw-includes-h3">What's Included in All Plans</h3>
        <ul className="mw-includes-list">
          {metaWhatsAppIncludes.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mw-cta reveal">
        <p>
          Ready to transform your customer communication with WhatsApp Business
          API?
        </p>
        <div className="mw-cta-row">
          <a href={BOOK_CALL_URL} className="btn-primary">
            <MessageCircle aria-hidden="true" />
            Book a Free Call
          </a>
          <a href="#contact" className="mw-cta-link">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}