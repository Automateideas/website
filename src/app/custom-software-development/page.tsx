import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { customSoftwarePage } from "@/lib/content/services/custom-software";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: customSoftwarePage.title,
  description: customSoftwarePage.subtitle,
  keywords: customSoftwarePage.keywords,
  alternates: { canonical: "/custom-software-development" },
  openGraph: {
    type: "website",
    url: "/custom-software-development",
    title: `${customSoftwarePage.title} | Automate Ideas`,
    description: customSoftwarePage.subtitle,
  },
};

// No offersPrice: these projects are quoted per scope, and schema.org requires a
// numeric price, so the Offer is omitted rather than filled with a placeholder.
const jsonLd = pageJsonLd({
  type: "Service",
  data: customSoftwarePage,
  path: "/custom-software-development",
  image: "/automate-ideas-card.png",
});

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <ContentPage data={customSoftwarePage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
