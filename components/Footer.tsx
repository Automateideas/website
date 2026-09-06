"use client";

import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

// ── Data ──────────────────────────────────────────────────────────────────────
const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61575991143624",
    src: "/logo/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/automate_ideas",
    src: "/logo/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/automate-ideas/",
    src: "/logo/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/automateideas",
    src: "/logo/x_dark.svg",
    alt: "X (Twitter)",
  },
  {
    href: "https://www.youtube.com/@AutomateIdeas",
    src: "/logo/youtube.svg",
    alt: "YouTube",
  },
  {
    href: "https://wa.me/919625598603?text=I%27m%20interested%20in%20your%20services",
    src: "/logo/whatsapp.svg",
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

const contactPoints = [
  { label: "Email us", value: "amit23kumar04@gmail.com", icon: "✉" },
  { label: "Call us", value: "+91 96255 98603", icon: "✆" },
];

// ── Component ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="ft-footer">
      {/* ── CTA band ── */}
      <div className="ft-cta">
        <div className="ft-cta-inner">
          <div>
            <div className="ft-cta-eyebrow">Let's build together</div>
            <h2 className="ft-cta-title">
              Ready to automate your <em>business?</em>
            </h2>
          </div>
          <div className="ft-cta-actions">
            <a className="ft-cta-btn ft-cta-btn-primary" href="#contact">
              Get a Free Audit
            </a>
            <a className="ft-cta-btn ft-cta-btn-ghost" href="https://wa.me/919625598603" target="_blank" rel="noopener noreferrer">
              Talk to Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Top grid ── */}
      <div className="ft-top">
        {/* Brand */}
        <div className="ft-brand">
          <Link href="/" className="ft-logo">
            <Image
              src="/Logo.png"
              alt="Automate Ideas"
              width={38}
              height={38}
              className="ft-logo-img"
            />
            <span className="ft-logo-text">
              Automate <em>Ideas</em>
            </span>
          </Link>

          <p className="ft-brand-body">
            We empower businesses to optimize their operations by automating key
            processes within Google Workspace — saving time, reducing errors,
            and boosting productivity.
          </p>

          <div className="ft-contact">
            {contactPoints.map((cp) => (
              <div className="ft-contact-row" key={cp.label}>
                <span className="ft-contact-icon" aria-hidden="true">{cp.icon}</span>
                <div>
                  <div className="ft-contact-label">{cp.label}</div>
                  <div className="ft-contact-value">{cp.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="ft-socials">
            {socialLinks.map(({ href, src, alt }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  src === "/x.svg"
                    ? "ft-social-link ft-social-link-x"
                    : "ft-social-link"
                }
                aria-label={alt}
              >
                <Image src={src} width={22} height={22} alt={alt} />
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
          <span className="ft-copy-dot" />
          <div className="ft-made">
            Built with <span>♥</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
