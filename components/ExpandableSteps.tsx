"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import "./ExpandableCard.css";

// ── Feature content renderer ──────────────────────────────────────────────────
type ContentItem = { label: string; body: string };

function FeatureList({ items }: { items: ContentItem[] }) {
  return (
    <ul className="ec-feature-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="ec-feature-icon">✓</span>
          <span className="ec-feature-text">
            <strong>{item.label}</strong>
            {item.body}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Steps data ───────────────────────────────────────────────────────────────
const steps = [
  {
    tag: "Step 01",
    title: "Consultation & Needs Assessment",
    src: "/CO.svg",
    items: [
      {
        label: "Discovery:",
        body: " We take time to understand your goals, pain points, and workflow before proposing anything.",
      },
    ],
  },
  {
    tag: "Step 02",
    title: "Custom Solution Design",
    src: "/CS.svg",
    items: [
      {
        label: "Strategy:",
        body: " We craft a tailored automation strategy — no templates, no shortcuts — built for your exact business.",
      },
    ],
  },
  {
    tag: "Step 03",
    title: "Implementation & Integration",
    src: "/IN.svg",
    items: [
      {
        label: "Delivery:",
        body: " We wire our solutions into your existing tools — Google Workspace, WhatsApp, and more.",
      },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ExpandableSteps() {
  const [active, setActive] = useState<(typeof steps)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="ec-root">
      {/* ── Backdrop ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            className="ec-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* ── Modal ── */}
      <AnimatePresence>
        {active && (
          <div className="ec-modal-wrap">
            <motion.div
              key={`modal-${active.title}-${id}`}
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="ec-modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              <button
                className="ec-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* LEFT — large image panel */}
              <motion.div
                layoutId={`img-${active.title}-${id}`}
                className="ec-modal-img"
              >
                <div className="ec-modal-img-glow" aria-hidden="true" />
                <Image
                  src={active.src}
                  alt={active.title}
                  width={640}
                  height={500}
                />
              </motion.div>

              {/* RIGHT — scrollable content */}
              <div className="ec-modal-content">
                <div className="ec-modal-tag">{active.tag}</div>
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="ec-modal-title"
                >
                  {active.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FeatureList items={active.items} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Card Grid ── */}
      <div className="ec-grid">
        {steps.map((step) => (
          <motion.div
            key={step.title}
            layoutId={`card-${step.title}-${id}`}
            className="ec-tile"
            onClick={() => setActive(step)}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              layoutId={`img-${step.title}-${id}`}
              className="ec-img-wrap"
            >
              <Image src={step.src} alt={step.title} width={320} height={220} />
            </motion.div>
            <div className="ec-body">
              <div className="ec-tag">{step.tag}</div>
              <motion.h3
                layoutId={`title-${step.title}-${id}`}
                className="ec-title"
              >
                {step.title}
              </motion.h3>
              <div className="ec-hint">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
                Click to learn more
              </div>
              <span className="ec-arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
