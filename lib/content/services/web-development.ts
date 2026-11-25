import type { ContentPageData } from "../types";

export const webDevelopmentPage: ContentPageData = {
  type: "page",
  eyebrow: "Software & Web",
  title: "Website Development",
  subtitle:
    "Business websites that load fast, read clearly to search engines and turn visitors into enquiries — built on Next.js and handed over for you to own.",
  breadcrumbs: [{ label: "Services", href: "/#services" }],
  keywords: [
    "website development",
    "website development company India",
    "business website design",
    "landing page development",
    "Next.js development",
    "SEO friendly website",
    "website redesign",
    "website development Ghaziabad",
  ],
  stats: [
    { label: "Businesses served", value: "50+" },
    { label: "Industries served", value: "6+" },
    { label: "Code you own", value: "100%" },
  ],
  sections: [
    {
      heading: "A website is a lead channel, not a brochure",
      paragraphs: [
        "Plenty of businesses have a site that nobody finds and nobody enquires through. It looks acceptable, it cost money, and it does nothing. The usual reasons are the same three: it is slow, search engines cannot read it properly, and there is no obvious next step for a visitor who is interested.",
        "We build sites that fix those three things first, then make them look good. Speed and structure are not finishing touches you add later — they decide whether anyone ever sees the design.",
      ],
    },
    {
      heading: "What we build",
      list: {
        items: [
          "Business and marketing websites — the pages that explain what you do and why someone should call you.",
          "Landing pages for a specific campaign, service, or ad, built around one action.",
          "Service and location pages that target how customers actually search.",
          "Product or service catalogues, with enquiry forms rather than a checkout where that fits better.",
          "Blog and resource sections wired into a content structure that can grow.",
          "Redesigns and rebuilds of sites that have become slow or impossible to edit.",
        ],
      },
    },
    {
      heading: "What ships with every site",
      paragraphs: [
        "These are not extras we quote separately. A site without them is not finished, so they are part of the build.",
      ],
      table: {
        headers: ["Area", "What you get"],
        rows: [
          [
            "Speed",
            "Server-rendered pages, compressed images, and a build that scores well on Core Web Vitals",
          ],
          [
            "Search",
            "Clean URL structure, unique titles and descriptions, XML sitemap, and robots rules",
          ],
          [
            "Structured data",
            "Organization, breadcrumb, and page schema so search engines and AI assistants can read the site",
          ],
          [
            "Mobile",
            "Designed at phone width first, tested there, with no horizontal scroll",
          ],
          [
            "Security headers",
            "Clickjacking, MIME-sniffing, and referrer protections set at the server",
          ],
          [
            "Enquiries",
            "Forms that route into Google Sheets, email, or WhatsApp, with spam protection",
          ],
          [
            "Analytics",
            "Tracking installed behind a consent banner, so measurement does not cost you compliance",
          ],
        ],
      },
    },
    {
      heading: "Built on a stack you can keep",
      paragraphs: [
        "We build on Next.js and React with TypeScript. That means static pages where speed matters, server rendering where content matters, and a codebase any competent developer can pick up later.",
        "This site is built the same way. If you want to judge the work before hiring us, measure the one you are reading.",
        "Where a site needs to do more than publish pages — a portal, a booking system, a customer dashboard — that crosses into [[custom software|/custom-software-development]], and we will say so rather than stretching a website to do a job it is wrong for.",
      ],
    },
    {
      heading: "How a build runs",
      list: {
        ordered: true,
        items: [
          "We agree what the site is for: which visitors, which action, which searches matter.",
          "We map the page structure and URLs before any design work, because that is what search engines read.",
          "We design and build, with a preview link you can click from day one.",
          "We connect forms, analytics, and search tooling, then test on real phones.",
          "We launch, submit the site for indexing, and hand over the code and the accounts.",
        ],
      },
    },
    {
      heading: "After launch",
      paragraphs: [
        "A site that nobody updates slowly stops working. Search engines favour pages that stay current, and so do the AI assistants that increasingly answer on their behalf.",
        "We can hand over completely and leave you to it, or stay on for content, new pages, and the occasional fix. Both are fine. What we will not do is hold the site hostage — you get the repository, the domain, and the hosting account in your own name.",
      ],
    },
  ],
  faq: [
    {
      q: "How much does a website cost in India?",
      a: "It depends on how many pages you need and how much of the content exists already. A focused landing page is a fraction of a full business site. We quote fixed after a short call about scope, so you are not comparing vague ranges.",
    },
    {
      q: "How long does it take?",
      a: "A landing page is usually days. A full business site is typically a few weeks, and the content is almost always the slow part rather than the build. We tell you up front what we need from you and when.",
    },
    {
      q: "Will the site rank on Google?",
      a: "We build the foundations that ranking depends on — speed, clean structure, titles and descriptions, schema, sitemaps, and mobile performance. Ranking itself also needs content and links over time, and nobody can honestly promise a position. We will tell you what the site can and cannot do on its own.",
    },
    {
      q: "Can I edit the site myself afterwards?",
      a: "Yes. We set up content so that text, pages, and images can be changed without touching code, and we record a walkthrough showing how. If you would rather we handle updates, that is available too.",
    },
    {
      q: "Do you work on an existing website?",
      a: "Often, yes. Sometimes the right answer is fixing what you have — speed, structure, and conversion paths can usually be improved without a rebuild. We will look at the current site first and tell you whether a rebuild is actually worth it.",
    },
    {
      q: "Who owns the site and the domain?",
      a: "You do. The domain and hosting are registered in your name, the code goes into your repository, and there is no licence or monthly fee owed to us for the site to stay online.",
    },
  ],
  ctaNote:
    "Send us your current site, or tell us what the new one needs to do. We will tell you plainly whether it needs a rebuild or just a fix. [[Book a free consultation|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
  relatedLinks: [
    {
      title: "Custom Software Development",
      href: "/custom-software-development",
      description:
        "For when the site needs to do more than publish pages.",
    },
    {
      title: "Google Sheets Automation",
      href: "/google-sheets-automation",
      description: "Route website enquiries straight into a system that acts.",
    },
    {
      title: "WhatsApp Business API",
      href: "/whatsapp-business-api",
      description: "Reply to new enquiries automatically on WhatsApp.",
    },
  ],
};
