import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-09-10";
  return [
    {
      url: "https://automateideas.in",
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://automateideas.in/privacy-policy",
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://automateideas.in/terms",
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}