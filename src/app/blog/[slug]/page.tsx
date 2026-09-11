import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/ContentPage";
import { blogArticles } from "@/lib/content/blog";
import { pageJsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.subtitle,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${article.slug}`,
      title: `${article.title} | Automate Ideas`,
      description: article.subtitle,
      publishedTime: article.publishedDate,
      authors: [article.author?.name ?? "Automate Ideas"],
      tags: article.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = pageJsonLd({
    type: "BlogPosting",
    data: article,
    path: `/blog/${article.slug}`,
    image: "/automate-ideas-card.png",
  });

  return (
    <>
      <ContentPage data={article} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}