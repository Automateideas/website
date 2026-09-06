"use client";

import Image from "next/image";
import {
  aboutStats,
  coreValues,
  teamMembers,
  techStack,
} from "@/lib/site-data";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="ab-hero">
        <div className="ab-hero-inner reveal">
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-bar" />
            Who We Are
          </div>
          <h2 className="ab-hero-h1">
            About <em>Us</em>
          </h2>
          <p className="ab-hero-sub">
            A team of passionate Google Workspace automation experts committed
            to helping businesses streamline operations, eliminate waste, and
            boost productivity.
          </p>
        </div>
      </div>

      <div className="ab-body">
        <div className="ab-story">
          <div className="reveal">
            <div className="ab-section-eyebrow ab-ey-blue">
              <span className="ab-section-eyebrow-bar" />
              Our Story
            </div>
          </div>
          <div className="ab-story-block reveal">
            <p>
              We are a team of passionate Google Workspace automation experts
              committed to helping businesses streamline operations and boost
              productivity. Our journey began with a realization: countless
              hours were being lost to repetitive, manual tasks.
            </p>
            <p>
              With deep expertise in Google Workspace technologies {"\u2014"}
              including Apps Script, AppSheet, and third-party tools like
              WhatsApp {"\u2014"} we've helped clients across various industries
              transform workflows, reduce costs, and regain focus on what truly
              matters.
            </p>
          </div>
          <div className="ab-mission reveal">
            <div className="ab-mission-label">Our Mission</div>
            <p>
              To empower businesses with smart automation solutions that save
              time, eliminate errors, and free teams to do more impactful work.
            </p>
          </div>
          <div className="ab-stats reveal">
            {aboutStats.map((s) => (
              <div key={s.num} className="ab-stat">
                <div className="ab-stat-num">{s.num}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ab-values">
          <div className="reveal">
            <div className="ab-section-eyebrow ab-ey-red">
              <span className="ab-section-eyebrow-bar" />
              What Drives Us
            </div>
            <h2 className="ab-values-heading">Our Core Values</h2>
          </div>
          {coreValues.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className={`ab-value-card reveal`}>
                <div className={`ab-value-icon ${v.iconClass}`}>
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <div className="ab-value-title">{v.title}</div>
                  <p className="ab-value-desc">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="ab-tech">
        <div className="ab-tech-eyebrow reveal">
          <span className="ab-tech-eyebrow-bar" />
          Technologies We Work With
        </div>
        <div className="ab-tech-grid reveal">
          {techStack.map((tech) => (
            <span key={tech} className="ab-tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="ab-team">
        <div className="ab-team-header">
          <div className="reveal">
            <div className="ab-section-eyebrow ab-ey-blue">
              <span className="ab-section-eyebrow-bar" />
              The People Behind It
            </div>
            <h2 className="ab-team-h2">Meet Our Team</h2>
            <p className="ab-team-sub">
              Specialists who genuinely care about your workflows {"\u2014"} and
              know exactly how to fix them.
            </p>
          </div>
          <div className="ab-team-count reveal" aria-hidden="true">
            0{teamMembers.length}
          </div>
        </div>
        <div className="ab-team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className={`ab-member-card reveal`}>
              <div className="ab-member-photo-wrap">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="ab-member-photo"
                    width={10000}
                    height={10000}
                  />
                ) : (
                  <div className="ab-member-avatar-placeholder">
                    {member.initials}
                  </div>
                )}
                <div className="ab-member-role-badge">{member.role}</div>
              </div>
              <div className="ab-member-info">
                <div className="ab-member-name">{member.name}</div>
                <div className="ab-member-title">{member.role}</div>
                <div className="ab-member-tags">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="ab-member-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
