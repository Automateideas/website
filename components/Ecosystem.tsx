"use client";

import React from "react";
import "./Ecosystem.css";

// ── STATIC SVG WHEEL ──────────────────────────────────────────────────────────
// Rotating spoke/ring/dot animations in Ecosystem.css (.cc-spin-*)
function EcosystemWheel() {
  return (
    <svg
      className="ecs-wheel"
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ecs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0f0e" />
          <stop offset="100%" stopColor="#e8390e" />
        </linearGradient>
        <filter id="ecs-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0f0f0e" floodOpacity="0.16" />
        </filter>
        <filter id="ecs-shadow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0f0f0e" floodOpacity="0.18" />
        </filter>
      </defs>

      <circle cx="320" cy="320" r="280" fill="#fef2ee" opacity="0.55" />
      <g
        stroke="rgba(232,57,14,.25)"
        strokeWidth="2"
        strokeDasharray="3 7"
        strokeLinecap="round"
      >
        <line className="ecs-spoke" x1="320" y1="320" x2="104.59" y2="255.00" />
        <line className="ecs-spoke" x1="320" y1="320" x2="213.65" y2="121.72" />
        <line className="ecs-spoke" x1="320" y1="320" x2="385.00" y2="104.59" />
        <line className="ecs-spoke" x1="320" y1="320" x2="518.28" y2="213.65" />
        <line className="ecs-spoke" x1="320" y1="320" x2="535.41" y2="385.00" />
        <line className="ecs-spoke" x1="320" y1="320" x2="426.35" y2="518.28" />
        <line className="ecs-spoke" x1="320" y1="320" x2="255.00" y2="535.41" />
        <line className="ecs-spoke" x1="320" y1="320" x2="121.72" y2="426.35" />
      </g>

      <g fill="#fff" stroke="#e8390e" strokeWidth="2.4">
        <circle className="ecs-hubdot" cx="190.76" cy="281.00" r="5" />
        <circle className="ecs-hubdot" cx="256.19" cy="201.03" r="5" />
        <circle className="ecs-hubdot" cx="359.00" cy="190.76" r="5" />
        <circle className="ecs-hubdot" cx="438.97" cy="256.19" r="5" />
        <circle className="ecs-hubdot" cx="449.24" cy="359.00" r="5" />
        <circle className="ecs-hubdot" cx="383.81" cy="438.97" r="5" />
        <circle className="ecs-hubdot" cx="281.00" cy="449.24" r="5" />
        <circle className="ecs-hubdot" cx="201.03" cy="383.81" r="5" />
      </g>

      <g className="ecs-ring-spin">
        <circle cx="320" cy="320" r="170" fill="none" stroke="url(#ecs-grad)" strokeWidth="2.4" strokeDasharray="8 14" strokeLinecap="round" />
      </g>
      <g className="ecs-pulse-spin">
        <circle className="ecs-pulse-dot" cx="320" cy="150" r="6" fill="#e8390e" />
      </g>

      <circle cx="320" cy="320" r="120" fill="#fff" filter="url(#ecs-shadow-lg)" />
      <text x="320" y="286" textAnchor="middle" fontSize="34" fontWeight="800" letterSpacing="-0.5" fill="#111827">
        AUTOMATE<tspan fill="#e8390e">IDEAS</tspan>
      </text>
      <text x="320" y="308" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="2.2" fill="#9CA3AF">
        ONE ECOSYSTEM
      </text>
      <rect x="290" y="320" width="60" height="2.5" rx="1.25" fill="url(#ecs-grad)" />
      <text x="320" y="344" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f0f0e">
        One ecosystem.
      </text>
      <text x="320" y="364" textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f0f0e">
        Endless growth.
      </text>

      {/* ── Nodes ── */}
      <g className="ecs-node-pos" transform="translate(104.59,255.00)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">STRATEGY</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(213.65,121.72)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">CONTENT</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(385.00,104.59)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">SYSTEMS</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(518.28,213.65)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">TRAINING</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(535.41,385.00)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#C2410C">GROWTH</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(426.35,518.28)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">SALES</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(255.00,535.41)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 0 1-5.8-1.6" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">MARKETING</text>
        </g>
      </g>

      <g className="ecs-node-pos" transform="translate(121.72,426.35)">
        <g className="ecs-node-card">
          <circle className="ecs-node-bg" cx="0" cy="0" r="50" fill="#fff" filter="url(#ecs-shadow)" />
          <circle className="ecs-icon-bg" cx="0" cy="-15" r="18" fill="#fef2ee" />
          <g transform="translate(-9,-24) scale(0.78)" fill="none" stroke="#e8390e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
          </g>
          <text x="0" y="16" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing=".2" fill="#111827">AUTOMATION</text>
        </g>
      </g>
    </svg>
  );
}

// ── SECTION ───────────────────────────────────────────────────────────────────
export default function Ecosystem() {
  return (
    <section id="ecosystem" className="ecs-section">
      <div className="ecs-inner">
        {/* TEXT */}
        <div className="ecs-copy">
          <div className="ecs-eyebrow">
            <span className="ecs-eyebrow-bar" />
            One Ecosystem
          </div>
          <h2 className="ecs-heading">
            One ecosystem.
            <br />
            Every function your brand needs, built to scale.
          </h2>
          <p className="ecs-lead">
            Brands don&apos;t grow through scattered efforts across ten vendors.
            They grow inside one ecosystem, where strategy, content, systems and
            people all move toward the same vision. We connect the dots. We are
            the ecosystem.
          </p>

          <ul className="ecs-points">
            <li>
              Strategy, content, systems and training: one ecosystem, not
              scattered vendors.
            </li>
            <li>Your vision is our only metric of success.</li>
            <li>
              We find gaps across your entire growth engine, not just what you
              hired us for.
            </li>
            <li>Not a vendor you manage. A partner your growth depends on.</li>
          </ul>
        </div>

        {/* WHEEL */}
        <div className="ecs-visual">
          <EcosystemWheel />
        </div>
      </div>
    </section>
  );
}