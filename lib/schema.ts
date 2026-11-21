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
  // No Organization node here: the root layout already emits a complete one
  // under this same @id on every page. Two nodes sharing an @id with different
  // properties is a conflict, not a merge. Reference it instead.
  const graph: Record<string, unknown>[] = [];

  const main: Record<string, unknown> = {
    "@id": `${url}#root`,
    url,
    name: data.title,
    headline: data.title,
    description: data.subtitle,
    keywords: data.keywords?.join(", "),
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
      // schema.org requires a numeric price: no currency symbol, no thousands
      // separator. Pages without a fixed price simply get no Offer rather than
      // an invalid one.
      ...(offersPrice
        ? {
            offers: {
              "@type": "Offer",
              price: offersPrice,
              priceCurrency: "INR",
              url,
            },
          }
        : {}),
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

  // Full trail: site root -> section crumbs -> this page.
  //
  // The previous version filtered out every crumb without an href, which
  // collapsed a three-level service breadcrumb ("Automate Ideas > Services >
  // Google Sheets Automation") down to a single useless item, and never
  // included the current page at all. Skip the trailing self-crumb when the
  // last breadcrumb already points at this path, so index pages do not list
  // themselves twice.
  const lastCrumb = data.breadcrumbs[data.breadcrumbs.length - 1];
  const trail: { name: string; item?: string }[] = [
    { name: SITE_NAME, item: SITE_URL },
    ...data.breadcrumbs.map((b) => ({
      name: b.label,
      item: b.href ? `${SITE_URL}${b.href}` : undefined,
    })),
    ...(lastCrumb?.href === path ? [] : [{ name: data.title, item: url }]),
  ];

  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.item ? { item: c.item } : {}),
    })),
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