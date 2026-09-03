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
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
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

  // Close drawer on route change
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header className={`nb-header${scrolled ? " nb-scrolled" : ""}`}>
        <div className="nb-inner">
          {/* ── Logo ── */}
          <Link href="/" className="nb-logo">
            <Image
              src="/Logo.png"
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
              const active = item.href === "/" ? isHome : false;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={item.href === "/"}
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
                const active = item.href === "/" ? isHome : false;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nb-drawer-link${active ? "nb-drawer-active" : ""}`}
                    onClick={() => setOpen(false)}
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
