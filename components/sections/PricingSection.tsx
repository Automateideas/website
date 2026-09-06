"use client";

import { Check, MessageCircle } from "lucide-react";
import { customChips, whatsappPlans } from "@/lib/site-data";
import MetaWhatsAppPricing from "@/components/sections/MetaWhatsAppPricing";

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="pr-hero">
        <div className="pr-hero-inner reveal">
          <div className="pr-eyebrow">
            <span className="pr-eyebrow-bar" />
            Transparent & Flexible
          </div>
          <h1 className="pr-hero-h1">
            Simple, Honest <em>Pricing</em>
          </h1>
          <p className="pr-hero-sub">
            Every project is unique. Our pricing reflects your requirements and
            complexity {"\u2014"} no hidden fees, no surprises.
          </p>
        </div>
      </div>

      <section className="pr-custom">
        <div className="pr-section-eyebrow pr-blue reveal">
          <span className="pr-section-eyebrow-bar pr-bar-blue" />
          Project-Based Pricing
        </div>
        <div className="pr-custom-card reveal">
          <div>
            <h2 className="pr-custom-h2">Custom Project Pricing</h2>
            <p className="pr-custom-body">
              Whether it's a small feature or a full-scale application, we offer
              flexible pricing tailored to your requirements. Share your idea
              and we'll provide a quote based on scope, timeline, and
              complexity.
            </p>
            <div className="pr-chips">
              {customChips.map((chip) => (
                <span key={chip} className="pr-chip">
                  {chip}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary">
              <MessageCircle />
              Get a Custom Quote
            </a>
          </div>
          <div className="pr-orb" aria-hidden="true">
            <div className="pr-orb-symbol">{"\u221E"}</div>
            <div className="pr-orb-label">Unlimited</div>
            <div className="pr-orb-sub">Possibilities</div>
          </div>
        </div>
      </section>

      <MetaWhatsAppPricing />

      <section className="pr-plans">
        <div className="pr-plans-header">
          <div className="reveal">
            <div
              className="pr-section-eyebrow pr-gold"
              style={{ marginBottom: "1rem" }}
            >
              <span className="pr-section-eyebrow-bar pr-bar-gold" />
              WhatsApp API Platform
            </div>
            <h2 className="pr-plans-h2">Unofficial WhatsApp API Pricing</h2>
          </div>
          <p className="pr-plans-sub reveal">
            Fixed pricing for our WhatsApp API platform with enterprise-grade
            features, reliable uptime, and priority support.
          </p>
        </div>
        <div className="pr-plans-grid">
          {whatsappPlans.map((plan, i) => {
            const Icon = plan.icon;
            const delayClass = ["reveal-d1", "reveal-d2", "reveal-d3"][i];
            return (
              <div
                key={plan.id}
                className={`pr-plan-card reveal ${delayClass} ${plan.popular ? "pr-popular" : ""}`}
              >
                {plan.badge && (
                  <div className={`pr-badge ${plan.badgeClass}`}>
                    {plan.badge}
                  </div>
                )}
                <div className={`pr-plan-icon ${plan.iconClass}`}>
                  <Icon aria-hidden="true" />
                </div>
                <div className="pr-plan-name">{plan.name}</div>
                <div className="pr-plan-title">{plan.title}</div>
                <div className="pr-plan-price">
                  <span className="pr-price-amount">{plan.price}</span>
                  <span
                    className="pr-price-period"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {plan.period}
                  </span>
                </div>
                <div className="pr-credits">
                  <div>
                    <div className="pr-credits-num">{plan.credits}</div>
                    <div className="pr-credits-label">Credits / year</div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--muted)" }}
                  >
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <ul className="pr-features">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="pr-feature">
                      <span className="pr-check">
                        <Check aria-hidden="true" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`pr-plan-btn ${plan.btnClass}`}>
                  {plan.btnLabel}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
