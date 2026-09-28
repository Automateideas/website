import type { ContentPageData } from "./types";

export const aboutPage: ContentPageData = {
  type: "page",
  eyebrow: "About Automate Ideas",
  title: "We build automation that pays for itself",
  subtitle:
    "Automate Ideas helps small and mid-size businesses stop doing repetitive work by hand. We design systems inside Google Workspace and WhatsApp that save hours every week — and we've done it for 50+ businesses across 6+ industries.",
  breadcrumbs: [{ label: "About", href: "/about" }],
  keywords: [
    "business automation company India",
    "business automation agency",
    "Google Workspace consultant",
    "Google Apps Script developer",
    "business process automation services",
  ],
  stats: [
    { label: "Clients served", value: "50+" },
    { label: "Industries", value: "6+" },
    { label: "Custom built", value: "100%" },
    { label: "Avg. rating", value: "5★" },
  ],
  missionVision: [
    {
      label: "Our Mission",
      heading: "Give every business the systems a large company takes for granted",
      paragraphs: [
        "To make powerful automation affordable and understandable for small and mid-size businesses — so a two-person team in Ghaziabad can run operations with the same speed, accuracy, and reach as a company ten times its size.",
        "We do that by building inside the tools businesses already own: Google Workspace, Sheets, Forms, Drive, Gmail, and WhatsApp. No new platform to learn, no migration to fear, no licence that quietly grows every month.",
      ],
    },
    {
      label: "Our Vision",
      heading: "A world where nobody wastes a working day on work a machine should do",
      paragraphs: [
        "We want every owner and operator to be able to automate their own business the way a programmer would — even without a programmer in the room. In that world, hours saved go into growth instead of data entry.",
        "Automate Ideas exists to build that future one business at a time: honest fixed pricing, systems clients fully own, and support that continues long after launch. Fifty businesses are the start of that, not the finish line.",
      ],
    },
  ],
  sections: [
    {
      heading: "Our story",
      style: "split",
      paragraphs: [
        "Automate Ideas started with a simple observation: most business teams spend their best hours on tasks a machine could finish in seconds. Copying data between sheets, typing the same invoice, chasing the same follow-up, reconciling the same figures.",
        "We founded the agency to fix that gap — not with expensive software implementations, but with the tools businesses already use. Google Sheets, Gmail, Forms, Drive, and WhatsApp are powerful enough to run an entire operation when they're automated properly. We make that happen for our clients.",
        "Today our solutions run day-to-day operations for jewellery retailers, office-equipment dealers, engineering firms, diamond merchants, travel agencies, and more. Every build is custom, every client owns their system, and every project is measured by the time it gives back.",
      ],
    },
    {
      heading: "Meet the founder",
      style: "founder",
      image: "/team/amit.png",
      paragraphs: [
        "Amit Kumar, our founder and lead developer, has spent years building automation for Indian businesses — from live inventory dashboards and GST-ready invoicing to CRM systems and WhatsApp integrations. He leads each project personally, from the first discovery call to the final handover.",
        "Around Amit is a small specialist team covering development, design, content, and ongoing support — so one point of contact stays with you from start to finish.",
      ],
    },
    {
      heading: "What we believe",
      style: "values",
      list: {
        items: [
          "Automation should be simple — your team shouldn't need training courses to use it.",
          "You should own everything — code, sheets, documentation, the lot.",
          "Price should be fixed and honest — no monthly surprises, no lock-in contracts.",
          "Support matters as much as building — we stay with you after launch.",
        ],
      },
    },
    {
      heading: "The technologies we work with",
      style: "chips",
      paragraphs: ["The full stack we automate and build on:"],
      list: {
        items: [
          "Google Apps Script, Google Sheets, Google Forms, Google Drive, Gmail automation",
          "AppSheet and custom web applications",
          "WhatsApp Business API and WhatsApp automation",
          "Looker Studio dashboards and data pipelines",
          "REST APIs, webhooks, and integrations with the tools you already use",
        ],
      },
    },
    {
      heading: "Industries we serve",
      style: "split",
      paragraphs: [
        "Six-plus industries and counting — including jewellery and retail, office equipment, engineering and manufacturing, diamonds and trading, travel, food and hospitality, and placement services. If your work runs on spreadsheets, forms, and messages, we can automate it.",
      ],
    },
    {
      heading: "Some of our work",
      style: "links",
      paragraphs: [
        "We're proud of the systems we've built and the businesses they run. Explore a few in detail:",
      ],
      list: {
        items: [
          "[[Vercha Jewels|/case-studies/vercha-jewels]] — stockouts and order mistakes eliminated with a live tracking dashboard.",
          "[[Copier World|/case-studies/copier-world]] — leads, tasks, and payments unified with Workspace + WhatsApp.",
          "[[Cranex Limited|/case-studies/cranex-limited]] — payroll and leave compliance automated end-to-end.",
          "[[Dhanvi Diamonds|/case-studies/dhanvi-diamonds]] — month-end invoicing and GST chaos replaced with seamless flows.",
        ],
      },
    },
    {
      heading: "Let's automate something together",
      paragraphs: [
        "Whether you have one painful process or a whole business built on manual work, we'd love to see it. A short, free call is enough to tell you what's automatable and roughly what it costs.",
      ],
    },
  ],
  ctaNote:
    "[[Book a free 20-minute call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] — no pitch, just a straight answer on what we can automate for you.",
  relatedLinks: [
    {
      title: "Google Apps Script Development",
      href: "/google-apps-script-development",
      description: "Custom automation and web apps inside Google Workspace.",
    },
    {
      title: "WhatsApp Automation",
      href: "/whatsapp-automation-services",
      description: "Bulk messaging, chatbots, and order updates that launch fast.",
    },
    {
      title: "Client case studies",
      href: "/case-studies",
      description: "See the systems we've built, and the numbers behind them.",
    },
  ],
};