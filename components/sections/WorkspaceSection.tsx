"use client";

import Image from "next/image";
import { wsFeatures } from "@/lib/site-data";

export default function WorkspaceSection() {
  return (
    <>
      <section className="workspace-section">
        <div className="workspace-img-wrap reveal">
          <div className="workspace-glow" aria-hidden="true" />
          <Image
            src="/H3.svg"
            alt="Google Workspace Integration"
            width={520}
            height={520}
            className="relative w-full max-w-[520px]"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="reveal reveal-d1">
          <div className="eyebrow eyebrow-blue">
            <span className="eyebrow-line eyebrow-line-blue" />
            Productivity Layer
          </div>
          <h2 className="section-h2">
            Unlock the Full Power of{" "}
            <span className="text-blue">Google Workspace</span>
          </h2>
          <p className="section-body">
            Seamlessly connect your business tools with Google Workspace.
            Automate document workflows, supercharge team collaboration, and
            eliminate repetitive manual tasks.
          </p>
          <div className="feature-list">
            {wsFeatures.map((feat) => (
              <div key={feat} className="feature-item">
                <div className="feature-check">{"\u2713"}</div>
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
