"use client";

import { Check } from "lucide-react";
import {
  C,
  servicesData,
  svcCategories,
  svcStats,
  type ColorKey,
} from "@/lib/site-data";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="svc-hero">
        <div className="svc-hero-inner reveal">
          <div className="svc-eyebrow">
            <span className="svc-eyebrow-bar" />
            What We Do
          </div>
          <h1 className="svc-hero-h1">
            Our <em>Services</em>
          </h1>
          <p className="svc-hero-sub">
            From Google Workspace automation and WhatsApp integration to
            digital marketing and security {"\u2014"} we build tools, systems,
            and campaigns that help your business grow.
          </p>
          <div className="svc-hero-stats">
            {svcStats.map((s) => (
              <div key={s.num} className="svc-stat-pill">
                <span className="svc-stat-dot" />
                <span className="svc-stat-num">{s.num}</span>
                <span className="svc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="svc-cat-nav" aria-label="Service categories">
        {svcCategories.map((cat) => {
          const c = C[cat.color as ColorKey];
          const count = servicesData.filter(
            (s) =>
              s.category === cat.label ||
              (cat.id === "support" && s.category === "Support"),
          ).length;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`svc-cat-tab ${c.tab}`}
            >
              {cat.label}
              <span className={`svc-cat-count ${c.count}`}>{count}</span>
            </a>
          );
        })}
      </nav>

      {svcCategories.map((cat) => {
        const c = C[cat.color as ColorKey];
        const catServices = servicesData.filter((s) =>
          cat.id === "support"
            ? s.category === "Support"
            : s.category === cat.label,
        );
        const isWide = cat.id === "support";
        return (
          <section key={cat.id} id={cat.id} className="svc-cat-section">
            <div className="svc-cat-header reveal">
              <div>
                <div className={`svc-sec-eyebrow ${c.ey}`}>
                  <span className="svc-sec-eyebrow-bar" />
                  {cat.eyebrow}
                </div>
                <h2 className="svc-cat-h2">{cat.label}</h2>
              </div>
              <p className="svc-cat-desc">{cat.desc}</p>
            </div>
            <div className={`svc-cards-grid ${cat.grid}`}>
              {catServices.map((svc, si) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.name}
                    className={`svc-card ${c.card} ${isWide ? "svc-wide" : ""} reveal`}
                  >
                    {isWide ? (
                      <>
                        <div className="svc-left">
                          <span
                            className={`svc-num ${c.num}`}
                            aria-hidden="true"
                          >
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          <div className={`svc-icon ${c.icon}`}>
                            <Icon />
                          </div>
                          <div className={`svc-tag ${c.tag}`}>{svc.tag}</div>
                          <h3 className="svc-title">{svc.name}</h3>
                          <p className="svc-desc">{svc.description}</p>
                        </div>
                        <div className="svc-right">
                          <ul className="svc-highlights">
                            {svc.highlights.map((h) => (
                              <li key={h} className="svc-hi">
                                <span className={`svc-hi-check ${c.hc}`}>
                                  <Check aria-hidden="true" />
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <span
                          className={`svc-num ${c.num}`}
                          aria-hidden="true"
                        >
                          {String(si + 1).padStart(2, "0")}
                        </span>
                        <div className={`svc-icon ${c.icon}`}>
                          <Icon />
                        </div>
                        <div className={`svc-tag ${c.tag}`}>{svc.tag}</div>
                        <h3 className="svc-title">{svc.name}</h3>
                        <p className="svc-desc">{svc.description}</p>
                        <div className="svc-divider" />
                        <ul className="svc-highlights">
                          {svc.highlights.map((h) => (
                            <li key={h} className="svc-hi">
                              <span className={`svc-hi-check ${c.hc}`}>
                                <Check aria-hidden="true" />
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </section>
  );
}
