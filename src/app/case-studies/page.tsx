import type { Metadata } from "next";
import IndexPage from "@/components/IndexPage";
import { caseStudies, caseStudiesIndexSection } from "@/lib/content/case-studies";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies",
  description: caseStudiesIndexSection.subtitle,
  keywords: caseStudiesIndexSection.keywords,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "/case-studies",
    title: "Case Studies | Automate Ideas",
    description: caseStudiesIndexSection.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "CollectionPage",
  data: {
    eyebrow: caseStudiesIndexSection.eyebrow,
    title: caseStudiesIndexSection.title,
    subtitle: caseStudiesIndexSection.subtitle,
    breadcrumbs: [],
    sections: [],
  },
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <IndexPage
        eyebrow={caseStudiesIndexSection.eyebrow}
        title={caseStudiesIndexSection.title}
        subtitle={caseStudiesIndexSection.subtitle}
        cards={caseStudies.map((c) => ({
          title: c.cardTitle,
          href: `/case-studies/${c.slug}`,
          description: c.cardDesc,
          meta: c.industry,
        }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}