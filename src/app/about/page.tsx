import type { Metadata } from "next";
import AboutPageView from "@/components/AboutPage";
import { aboutPage } from "@/lib/content/about";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.subtitle,
  keywords: aboutPage.keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: `${aboutPage.title} | Automate Ideas`,
    description: aboutPage.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "AboutPage",
  data: aboutPage,
  path: "/about",
  image: "/team/amit.png",
});

export default function AboutPage() {
  return (
    <>
      <AboutPageView data={aboutPage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}