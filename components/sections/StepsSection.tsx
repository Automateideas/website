"use client";

import dynamic from "next/dynamic";

const ExpandableSteps = dynamic(() => import("@/components/ExpandableSteps"));
export const Ecosystem = dynamic(() => import("@/components/Ecosystem"));

export default function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-header">
        <div className="reveal">
          <div className="eyebrow eyebrow-red">
            <span className="eyebrow-line eyebrow-line-red" />
            Our Process
          </div>
          <h2 className="section-h2">
            Revolutionize Your Workflow in 3 Strategic Steps
          </h2>
        </div>
        <p
          className="section-body reveal reveal-d1"
          style={{ marginBottom: 0 }}
        >
          A proven methodology {"\u2014"} from discovery to deployment{" "}
          {"\u2014"}
          designed to deliver lasting impact without the complexity.
        </p>
      </div>
      <ExpandableSteps />
    </section>
  );
}
