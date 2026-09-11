"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Fixed navbar height (68px) + breathing room
const HEADER_OFFSET = 84;

function scrollToHash(id: string) {
  const move = (el: HTMLElement) => {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  let el = document.getElementById(id);
  if (el) {
    move(el);
    return;
  }

  // The target section may be inside a lazy/dynamic block that is still
  // mounting, so retry for a short while before giving up.
  let tries = 0;
  const timer = window.setInterval(() => {
    el = document.getElementById(id);
    if (el) {
      window.clearInterval(timer);
      move(el);
    } else if (++tries >= 20) {
      window.clearInterval(timer);
    }
  }, 250);
}

export default function HashScroll() {
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      // Skip the very first run: on a hard load the browser natively jumps
      // to the hash (offset via scroll-margin-top in CSS).
      mounted.current = true;
      return;
    }
    // Client-side navigation to a page (e.g. "/#services" from a subpage).
    // Next.js App Router updates the URL but does NOT scroll to the hash.
    const hash = window.location.hash;
    if (hash) {
      window.setTimeout(() => scrollToHash(hash.slice(1)), 60);
    }
  }, [pathname]);

  return null;
}