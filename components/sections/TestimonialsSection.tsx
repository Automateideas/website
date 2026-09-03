"use client";

import dynamic from "next/dynamic";
import { testimonials } from "@/lib/site-data";

const InfiniteMovingCards = dynamic(
  () => import("@/components/InfiniteMovingCards"),
  { ssr: false },
);

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header reveal">
        <div>
          <div className="t-badge">{"\u2B50"} Client Stories</div>
          <h2 className="testimonials-h2">What Our Clients Say</h2>
        </div>
        <div className="testimonials-sub">
          Our workflow has never been smoother thanks to Automate Ideas.
        </div>
      </div>
      <div
        className="reveal"
        style={{ overflow: "hidden", borderRadius: "12px" }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}
