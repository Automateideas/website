import type { MetadataRoute } from "next";

// Explicit allow-list for AI answer-engine crawlers so there's no ambiguity
// about access (ChatGPT/SearchGPT, Perplexity, Claude, Gemini/AI Overviews).
// The wildcard rule below keeps everything else indexed too.
const AI_BOT_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_BOT_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://automateideas.in/sitemap.xml",
  };
}