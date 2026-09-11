import type { Metadata } from "next";
import IndexPage from "@/components/IndexPage";
import { blogArticles, blogIndexData } from "@/lib/content/blog";
import { pageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description: blogIndexData.subtitle,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog | Automate Ideas",
    description: blogIndexData.subtitle,
  },
};

const jsonLd = pageJsonLd({
  type: "CollectionPage",
  data: {
    eyebrow: blogIndexData.eyebrow,
    title: blogIndexData.title,
    subtitle: blogIndexData.subtitle,
    breadcrumbs: [],
    sections: [],
  },
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <IndexPage
        eyebrow={blogIndexData.eyebrow}
        title={blogIndexData.title}
        subtitle={blogIndexData.subtitle}
        cards={blogArticles.map((a) => ({
          title: a.cardTitle,
          href: `/blog/${a.slug}`,
          description: a.cardDesc,
          meta: `${a.cluster} · ${a.readTime} read`,
        }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}