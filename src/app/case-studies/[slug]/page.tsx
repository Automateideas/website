import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { caseStudies } from "@/lib/content/case-studies";
import { pageJsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.subtitle,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/case-studies/${study.slug}`,
      title: `${study.title} | Automate Ideas`,
      description: study.subtitle,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const jsonLd = pageJsonLd({
    type: "Article",
    data: study,
    path: `/case-studies/${study.slug}`,
    image: "/automate-ideas-card.png",
  });

  return (
    <>
      <ContentPage data={study} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}