import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { whatsappAutoPage } from "@/lib/content/services/whatsapp-auto";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: whatsappAutoPage.title,
  description: whatsappAutoPage.subtitle,
  keywords: whatsappAutoPage.keywords,
  alternates: { canonical: "/whatsapp-automation-services" },
  openGraph: {
    type: "website",
    url: "/whatsapp-automation-services",
    title: `${whatsappAutoPage.title} | Automate Ideas`,
    description: whatsappAutoPage.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "Service",
  data: whatsappAutoPage,
  path: "/whatsapp-automation-services",
  image: "/automate-ideas-card.png",
  offersPrice: "₹2,499",
});

export default function WhatsAppAutomationPage() {
  return (
    <>
      <ContentPage data={whatsappAutoPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}