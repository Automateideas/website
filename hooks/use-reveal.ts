"use client";

import { useEffect } from "react";

// Scroll reveal observer. Observes every `.reveal` node and adds `.visible`
// when it enters the viewport. A MutationObserver watches for newly-inserted
// `.reveal` nodes (e.g. from lazy-loaded chunks) so they get observed too.
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );

    const observeAll = (root: ParentNode) => {
      root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    };

    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("reveal")) io.observe(node);
          observeAll(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
