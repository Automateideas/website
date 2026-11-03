import type { NextConfig } from "next";

/**
 * Security headers applied to every response.
 *
 * The CSP here is deliberately limited to frame-ancestors / object-src /
 * base-uri. A script-src policy is NOT set: the site bootstraps Google Consent
 * Mode and GTM from inline <Script> tags and ships JSON-LD inline, so any
 * script-src would need 'unsafe-inline' to work at all — and a nonce-based CSP
 * would require middleware, which would turn these statically generated pages
 * dynamic. The directives below still block clickjacking, plugin injection and
 * <base> hijacking, and they cannot break a tag added later through the GTM UI.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // No includeSubDomains / preload: both are hard to walk back, and any
  // subdomain still served over HTTP would break for a year.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'",
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // No remotePatterns on purpose. Every image on the site is local, so
    // /_next/image has no reason to fetch third-party URLs — which is the
    // entry point for the SSRF and SVG advisories against the image optimizer.
    // dangerouslyAllowSVG stays off (its default).
    remotePatterns: [],
  },
  reactStrictMode: true,
  // Do not advertise the framework version to scanners.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
