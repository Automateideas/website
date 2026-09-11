import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { whatsappApiPage } from "@/lib/content/services/whatsapp-api";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: whatsappApiPage.title,
  description: whatsappApiPage.subtitle,
  alternates: { canonical: "/whatsapp-business-api" },
  openGraph: {
    type: "website",
    url: "/whatsapp-business-api",
    title: `${whatsappApiPage.title} | Automate Ideas`,
    description: whatsappApiPage.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "Service",
  data: whatsappApiPage,
  path: "/whatsapp-business-api",
  image: "/automate-ideas-card.png",
  offersPrice: "₹12,000",
});

export default function WhatsAppBusinessApiPage() {
  return (
    <>
      <ContentPage data={whatsappApiPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}