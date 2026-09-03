"use client";

import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

// ── Data ──────────────────────────────────────────────────────────────────────
const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61575991143624",
    src: "/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/automate_ideas",
    src: "/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/automate-ideas/",
    src: "/linkedin.svg",
    alt: "LinkedIn",
  },
  { href: "https://x.com/automateideas", src: "/x.svg", alt: "X (Twitter)" },
  {
    href: "https://www.youtube.com/@AutomateIdeas",
    src: "/youtube.svg",
    alt: "YouTube",
  },
  {
    href: "https://wa.me/917210756879?text=I%27m%20interested%20in%20your%20services",
    src: "/whatsapp.svg",
    alt: "WhatsApp",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];
const services = [
  "Google Workspace",
  "WhatsApp API",
  "Process Automation",
  "Data Analytics",
  "Custom Web Apps",
];

// ── Component ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="ft-footer">
      {/* ── Top grid ── */}
      <div className="ft-top">
        {/* Brand */}
        <div className="ft-brand">
          <Link href="/" className="ft-logo">
            <Image
              src="/Logo.png"
              alt="Automate Ideas"
              width={34}
              height={34}
              className="ft-logo-img"
            />
            {/* DM Serif Display + italic accent — mirrors NavBar logo */}
            <span className="ft-logo-text">
              Automate <em>Ideas</em>
            </span>
          </Link>

          <p className="ft-brand-body">
            We empower businesses to optimize their operations by automating key
            processes within Google Workspace — saving time, reducing errors,
            and boosting productivity.
          </p>

          <div className="ft-socials">
            {socialLinks.map(({ href, src, alt }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-social-link"
                aria-label={alt}
              >
                <Image src={src} width={16} height={16} alt={alt} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="ft-col">
          <div className="ft-col-label">Quick Links</div>
          <div className="ft-links">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={item.href === "/"}
                className="ft-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="ft-col">
          <div className="ft-col-label">Services</div>
          <div className="ft-links">
            {services.map((s) => (
              <Link key={s} href="#services" className="ft-link">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <div className="ft-copy">
          © 2025 Automate Ideas
          <span className="ft-copy-dot" />
          All rights reserved
        </div>

        <div className="ft-legal">
          <Link href="/privacy-policy" className="ft-legal-link">
            Privacy Policy
          </Link>
          <Link href="/terms" className="ft-legal-link">
            Terms of Use
          </Link>
        </div>

        <div className="ft-made">
          Built with <span>♥</span> in India
        </div>
      </div>
    </footer>
  );
}

export default Footer;
