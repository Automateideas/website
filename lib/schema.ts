import type { ContentPageData } from "@/lib/content/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://automateideas.in";
const SITE_NAME = "Automate Ideas";
const ORG_ID = `${SITE_URL}/#organization`;
const AUTHOR_NAME = "Amit Kumar";

export type PageSchemaType =
  | "Service"
  | "Article"
  | "BlogPosting"
  | "AboutPage"
  | "CollectionPage"
  | "WebPage";

interface PageSchemaParams {
  type: PageSchemaType;
  data: ContentPageData;
  path: string;
  image?: string;
  offersPrice?: string;
}

export function pageJsonLd({ type, data, path, image, offersPrice }: PageSchemaParams) {
  const url = `${SITE_URL}${path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/Logo.png` },
      telephone: "+919625598603",
    },
  ];

  const main: Record<string, unknown> = {
    "@id": `${url}#root`,
    url,
    name: data.title,
    headline: data.title,
    description: data.subtitle,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: url,
  };

  if (type === "Service") {
    Object.assign(main, {
      "@type": "Service",
      serviceType: data.title,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "IN" },
      offers: {
        "@type": "Offer",
        price: offersPrice ?? "Custom",
        priceCurrency: "INR",
        url,
      },
      image: image ? { "@type": "ImageObject", url: `${SITE_URL}${image}` } : undefined,
    });
  } else if (type === "BlogPosting") {
    Object.assign(main, {
      "@type": "BlogPosting",
      author: { "@type": "Person", name: AUTHOR_NAME, url: `${SITE_URL}/about` },
      publisher: { "@id": ORG_ID },
      datePublished: data.publishedDate,
      dateModified: data.updatedDate ?? data.publishedDate,
      keywords: data.tags?.join(", "),
      image: image ? `${SITE_URL}${image}` : `${SITE_URL}/automate-ideas-card.png`,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".cp-hero-h1", ".cp-sub-container"] },
    });
  } else if (type === "Article") {
    Object.assign(main, {
      "@type": "Article",
      author: { "@type": "Person", name: AUTHOR_NAME, url: `${SITE_URL}/about` },
      publisher: { "@id": ORG_ID },
      datePublished: data.publishedDate,
      dateModified: data.updatedDate ?? data.publishedDate,
      image: image ? `${SITE_URL}${image}` : `${SITE_URL}/automate-ideas-card.png`,
    });
  } else if (type === "AboutPage") {
    Object.assign(main, {
      "@type": "AboutPage",
      about: {
        "@type": "Organization",
        "@id": ORG_ID,
      },
    });
  } else if (type === "CollectionPage") {
    main["@type"] = "CollectionPage";
  } else {
    main["@type"] = "WebPage";
  }

  graph.push(main);

  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      ...data.breadcrumbs.flatMap((b, i) => [
        {
          "@type": "ListItem",
          position: i + 2,
          name: b.label,
          item: b.href ? `${SITE_URL}${b.href}` : undefined,
        },
      ]),
    ].filter((item) => item.item),
  });

  if (data.faq && data.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}