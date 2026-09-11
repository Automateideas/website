"use client";

import Image from "next/image";
import Link from "next/link";
import { BOOK_CALL_URL, homeStats, marqueeItems } from "@/lib/site-data";

export default function HeroSection() {
  return (
    <>
      <section id="hero" className="hero">
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Business Automation Partner
          </div>
          <h1 className="hero-brand">
            Transform
            <br />
            Your Business
            <br />
            with <span className="line-accent">Automation</span>
          </h1>
          <p className="hero-sub">
            Discover fast, flexible automation that accelerates growth across
            every layer of your business {"\u2014"} from operations to customer
            experience.
          </p>
          <div className="hero-cta-row">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book a Free Call
            </Link>
          </div>
          <div className="hero-stats">
            {homeStats.map((s) => (
              <div key={s.num}>
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-frame">
          <Image
            src="/H2.png"
            alt="Automate Ideas"
            width={480}
            height={480}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 90vw, 460px"
            className="relative w-full max-w-[460px]"
            style={{ zIndex: 1 }}
          />
        </div>
      </section>
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-dot">{"\u25C6"}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
