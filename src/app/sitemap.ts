import type { MetadataRoute } from "next";

const BASE = "https://automateideas.in";
const updated = "2026-09-11";

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  url: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
): SitemapEntry {
  return { url, lastModified: updated, changeFrequency, priority };
}

const servicePages = [
  "/google-apps-script-development",
  "/google-sheets-automation",
  "/whatsapp-business-api",
  "/whatsapp-automation-services",
];

const caseStudies = [
  "/case-studies/vercha-jewels",
  "/case-studies/copier-world",
  "/case-studies/cranex-limited",
  "/case-studies/dhanvi-diamonds",
];

const blogPosts = [
  "/blog/google-apps-script-what-is-it-and-what-can-you-automate",
  "/blog/google-apps-script-automation-examples",
  "/blog/build-a-google-apps-script-crm",
  "/blog/google-sheets-automation-business-examples",
  "/blog/google-sheets-formulas-vs-apps-script",
  "/blog/auto-send-emails-from-google-sheets",
  "/blog/google-sheets-to-whatsapp-notifications",
  "/blog/whatsapp-business-api-pricing-and-setup",
  "/blog/whatsapp-messages-headers-or-marketing-template",
  "/blog/send-bulk-whatsapp-messages-without-getting-blocked",
  "/blog/whatsapp-business-api-vs-whatsapp-for-business-app",
  "/blog/small-business-automation-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry(BASE, "weekly", 1),
    ...servicePages.map((path) => entry(`${BASE}${path}`, "monthly", 0.9)),
    entry(`${BASE}/about`, "monthly", 0.8),
    entry(`${BASE}/case-studies`, "monthly", 0.8),
    ...caseStudies.map((path) => entry(`${BASE}${path}`, "yearly", 0.6)),
    entry(`${BASE}/blog`, "weekly", 0.8),
    ...blogPosts.map((path) => entry(`${BASE}${path}`, "monthly", 0.6)),
    entry(`${BASE}/privacy-policy`, "yearly", 0.3),
    entry(`${BASE}/terms`, "yearly", 0.3),
  ];
}