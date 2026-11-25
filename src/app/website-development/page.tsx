import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { webDevelopmentPage } from "@/lib/content/services/web-development";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: webDevelopmentPage.title,
  description: webDevelopmentPage.subtitle,
  keywords: webDevelopmentPage.keywords,
  alternates: { canonical: "/website-development" },
  openGraph: {
    type: "website",
    url: "/website-development",
    title: `${webDevelopmentPage.title} | Automate Ideas`,
    description: webDevelopmentPage.subtitle,
  },
};

// Quoted per scope, so no numeric price and therefore no Offer node.
const jsonLd = pageJsonLd({
  type: "Service",
  data: webDevelopmentPage,
  path: "/website-development",
  image: "/automate-ideas-card.png",
});

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <ContentPage data={webDevelopmentPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
