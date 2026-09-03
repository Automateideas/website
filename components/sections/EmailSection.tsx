"use client";

import dynamic from "next/dynamic";

const ExpandableCard = dynamic(() => import("@/components/ExpandableCard"));

export default function EmailSection() {
  return (
    <section className="email-section">
      <div className="email-header reveal">
        <div
          className="eyebrow eyebrow-gold"
          style={{ justifyContent: "center" }}
        >
          <span className="eyebrow-line eyebrow-line-gold" />
          Communication Automation
        </div>
        <h2 className="section-h2" style={{ textAlign: "center" }}>
          Seamless Email Integration for Enhanced Collaboration
        </h2>
        <p
          className="section-body"
          style={{ textAlign: "center", marginBottom: 0 }}
        >
          Smart triggers, templated messaging, and unified inboxes {"\u2014"}{" "}
          all automated.
        </p>
      </div>
      <div className="reveal reveal-d1 reveal-flat">
        <ExpandableCard />
      </div>
    </section>
  );
}
