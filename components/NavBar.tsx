"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./NavBar.css";

// ── Data ──────────────────────────────────────────────────────────────────────
const BOOK_CALL_URL = "https://calendar.app.google/tQGZDNw8JgBJekHeA";

const navMenu = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact Us", href: "/#contact", sectionId: "contact" },
];

// ── Component ─────────────────────────────────────────────────────────────────
function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scrollspy — highlight the nav item for the section currently in view.
  // A probe line sits at 45% of the viewport height; the *smallest* section
  // containing it wins, so a nested section (e.g. #meta-wa-pricing inside
  // #pricing) is preferred over its parent.
  const [activeId, setActiveId] = useState("hero");
  const lastUrlRef = useRef<string>("");

  // Fixed header height + breathing room; matches HashScroll/CSS scroll-margin.
  const HEADER_OFFSET = 84;

  // True when this item is the "current" page/section.
  const isActive = (item: (typeof navMenu)[number]) =>
    item.sectionId
      ? pathname === "/" && activeId === item.sectionId
      : pathname === item.href;

  // Scroll to a home-page section manually. When we're already on "/", Next
  // Link's hash navigation is unreliable, so we take over and smooth-scroll.
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    setActiveId(sectionId);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    let ticking = false;

    // Keep the URL hash in sync with the section currently in view (scrollspy).
    // replaceState avoids polluting history / causing scroll jumps on every tick.
    const updateUrl = (id: string) => {
      const target =
        id === "hero"
          ? `${window.location.pathname}${window.location.search}`
          : `#${id}`;
      if (lastUrlRef.current !== target) {
        lastUrlRef.current = target;
        window.history.replaceState(null, "", target);
      }
    };

    const probe = () => {
      ticking = false;
      const line = window.innerHeight * 0.45;
      let best: string | null = null;
      let bestHeight = Infinity;
      for (const m of navMenu) {
        if (!m.sectionId) continue;
        const el = document.getElementById(m.sectionId);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line && r.height < bestHeight) {
          bestHeight = r.height;
          best = m.sectionId;
        }
      }
      if (best) {
        setActiveId(best);
        updateUrl(best);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(probe);
      }
    };

    probe();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close drawer on route change
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <header className={`nb-header${scrolled ? "nb-scrolled" : ""}`}>
        <div className="nb-inner">
          {/* ── Logo ── */}
          <Link href="/" className="nb-logo">
            <Image
              src="/logo/Logo.png"
              alt="Automate Ideas"
              width={36}
              height={36}
              priority
              className="nb-logo-img"
            />
            {/* DM Serif Display + italic accent mirrors hero h1 .line-accent */}
            <span className="nb-logo-text">
              Automate <em>Ideas</em>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <nav className="nb-nav" aria-label="Main navigation">
            {navMenu.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={item.href === "/"}
                  onClick={(e) =>
                    item.sectionId && scrollToSection(e, item.sectionId)
                  }
                  className={`nb-link${active ? "nb-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-cta"
          >
            Book a Free Call →
          </Link>

          {/* ── Mobile hamburger ── */}
          <button
            className="nb-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={17} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="nb-drawer-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="nb-drawer" role="dialog" aria-label="Navigation menu">
            {/* Head */}
            <div className="nb-drawer-head">
              <Link
                href="/"
                className="nb-drawer-logo"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/Logo.png"
                  alt="Automate Ideas"
                  width={26}
                  height={26}
                />
                Automate&nbsp;<em>Ideas</em>
              </Link>
              <button
                className="nb-drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={13} />
              </button>
            </div>

            {/* Links */}
            <nav className="nb-drawer-links" aria-label="Mobile navigation">
              <div className="nb-drawer-section-label">Navigation</div>
              {navMenu.map((item) => {
                const active = isActive(item);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nb-drawer-link${active ? "nb-drawer-active" : ""}`}
                    onClick={(e) => {
                      if (item.sectionId) {
                        scrollToSection(e, item.sectionId);
                      }
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    <span className="nb-drawer-link-arrow"></span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer CTA */}
            <div className="nb-drawer-footer">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-drawer-cta"
                onClick={() => setOpen(false)}
              >
                Book a Free Call →
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
