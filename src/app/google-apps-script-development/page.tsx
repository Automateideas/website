import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { appsScriptPage } from "@/lib/content/services/apps-script";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: appsScriptPage.title,
  description: appsScriptPage.subtitle,
  alternates: { canonical: "/google-apps-script-development" },
  openGraph: {
    type: "website",
    url: "/google-apps-script-development",
    title: `${appsScriptPage.title} | Automate Ideas`,
    description: appsScriptPage.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "Service",
  data: appsScriptPage,
  path: "/google-apps-script-development",
  image: "/automate-ideas-card.png",
  offersPrice: "Custom",
});

export default function AppsScriptDevelopmentPage() {
  return (
    <>
      <ContentPage data={appsScriptPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}