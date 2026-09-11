import type { BlogArticle } from "./apps-script";
import { appsScriptArticles } from "./apps-script";
import { sheetsArticles } from "./sheets";
import { whatsappArticles } from "./whatsapp";
import { businessArticles } from "./business";
import { blogIndexData } from "./business";

export type { BlogArticle };
export { blogIndexData };

export const blogArticles: BlogArticle[] = [
  ...appsScriptArticles,
  ...sheetsArticles,
  ...whatsappArticles,
  ...businessArticles,
];

export const blogClusters: { name: string; description: string }[] = [
  { name: "Apps Script", description: "Google Apps Script guides and examples" },
  { name: "Google Sheets", description: "Spreadsheet automation and workflows" },
  { name: "WhatsApp", description: "WhatsApp API, templates, and messaging" },
  { name: "Business", description: "Automation strategy for small businesses" },
];