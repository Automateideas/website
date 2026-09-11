import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { sheetsPage } from "@/lib/content/services/sheets";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: sheetsPage.title,
  description: sheetsPage.subtitle,
  alternates: { canonical: "/google-sheets-automation" },
  openGraph: {
    type: "website",
    url: "/google-sheets-automation",
    title: `${sheetsPage.title} | Automate Ideas`,
    description: sheetsPage.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "Service",
  data: sheetsPage,
  path: "/google-sheets-automation",
  image: "/automate-ideas-card.png",
  offersPrice: "Custom",
});

export default function SheetsAutomationPage() {
  return (
    <>
      <ContentPage data={sheetsPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}