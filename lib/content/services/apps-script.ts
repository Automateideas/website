import type { ContentPageData } from "../types";

export const appsScriptPage: ContentPageData = {
  type: "page",
  eyebrow: "Google Workspace",
  title: "Google Apps Script Development",
  subtitle:
    "Custom automation and web apps built on Google Apps Script — connecting Sheets, Gmail, Drive, Docs, Calendar, and Forms into one streamlined system that runs your business on autopilot.",
  breadcrumbs: [{ label: "Services" }],
  keywords: [
    "Google Apps Script development",
    "Apps Script developer",
    "Apps Script consultant",
    "CRM automation services",
    "AppSheet development services",
    "Google Workspace automation",
    "Google Workspace consultant",
  ],
  stats: [
    { label: "Faster workflows", value: "10×" },
    { label: "Businesses automated", value: "50+" },
    { label: "Industries served", value: "6+" },
  ],
  sections: [
    {
      heading: "What is Google Apps Script?",
      paragraphs: [
        "Google Apps Script is a free JavaScript-based platform that runs inside Google Workspace. It lets you write code that connects your Google apps — Sheets, Gmail, Drive, Docs, Calendar, Forms, and more — and automates the repetitive work your team does every day.",
        "We build production-grade Apps Script solutions for businesses in India and beyond: scripts that open invoices when an order arrives, send reminders when a deadline is near, sync data between apps, and power custom web apps that your team can use from any browser. No extra servers, no monthly subscriptions — it runs on the Google Workspace you already pay for.",
      ],
    },
    {
      heading: "What we build for you",
      paragraphs: [
        "Every engagement starts with your workflow, not our templates. Depending on your goal, we typically deliver one or more of the following:",
      ],
      list: {
        items: [
          "[[Google Sheets automation|/google-sheets-automation]] — live dashboards, invoice generators, attendance trackers, and inventory systems that update themselves.",
          "Gmail automation — auto-labelling, alerting, scheduled digests, and triggered replies based on your business rules.",
          "Google Drive workflows — automatic document creation, renaming, filing, and permission management.",
          "Custom web apps — internal tools, approval systems, and client portals with a login screen and simple interface.",
          "Google Forms pipelines — form submissions that create records, notify the right people, and update your systems.",
          "CRM and lead management — a light, custom CRM built inside Sheets that tracks every deal without the cost of heavy software.",
        ],
      },
    },
    {
      heading: "How we work",
      paragraphs: [
        "We keep projects simple, transparent, and on a fixed price. Most Apps Script builds are delivered within 1–3 weeks.",
      ],
      list: {
        ordered: true,
        items: [
          "Discovery — we map your current process, find the bottlenecks, and agree the exact automations you need.",
          "Build — we develop the script in a sandbox, wiring it to your real sheets, forms, and folders.",
          "Test — we run your real data through the flow, fix edge cases, and harden permissions.",
          "Handover — we document everything, train your team, and put wraparound error alerts in place.",
          "Support — every project includes a warranty period plus optional ongoing maintenance.",
        ],
      },
    },
    {
      heading: "Technologies we work with",
      table: {
        headers: ["Area", "What we connect"],
        rows: [
          ["Spreadsheets", "Google Sheets, Google Forms, Looker Studio"],
          ["Mail & chat", "Gmail, Google Calendar, Google Meet, Google Chat"],
          ["Storage", "Google Drive, Google Docs, Google Slides"],
          ["External APIs", "REST APIs, webhooks, WhatsApp, payment gateways, CRMs"],
          ["Front-end", "HTML Service, Google Sites, web apps, AppSheet"],
        ],
      },
    },
    {
      heading: "Common use cases",
      paragraphs: [
        "Here are the workflows we automate most often for small and mid-size businesses:",
      ],
      list: {
        items: [
          "Auto-generating GST-ready invoices and emailing PDFs to customers the moment an order is confirmed.",
          "Building attendance, leave, and [[payroll automation|/blog/google-apps-script-automation-examples]] systems that replace manual spreadsheets.",
          "Sending automated order, delivery, and payment reminders to customers.",
          "Syncing sheet rows to [[WhatsApp|/whatsapp-automation-services]] so your team and customers never miss an update.",
          "Creating weekly management reports that compile themselves every Monday morning.",
          "Watching inventory levels and raising alerts before you run out of stock.",
        ],
      },
    },
    {
      heading: "What you get",
      list: {
        items: [
          "Clean, documented, and reusable Apps Script code you fully own.",
          "Error alerts so problems are caught before they reach your customers.",
          "A simple handover guide written for your team, not for developers.",
          "A fixed quote before we start — no surprise charges.",
          "A warranty and ongoing support options after delivery.",
        ],
      },
    },
  ],
  faq: [
    {
      q: "Is Google Apps Script really free to use?",
      a: "Apps Script itself is free within Google Workspace. There are consumption limits for personal accounts, but for a business using Google Workspace paid plans, the quotas are generous and suffice for the vast majority of business workloads. We design scripts to stay comfortably inside those limits.",
    },
    {
      q: "Can unfinished or manual Google Workspace processes be automated?",
      a: "Almost always, yes. If a task is repeated more than a few times a week and involves Sheets, Gmail, Drive, Forms, or Calendar, there is a good chance it can be automated. We start every project with a free workflow review to confirm what's possible.",
    },
    {
      q: "Will automations keep working if something breaks?",
      a: "We build error handling into every script and add email alerts so you know the moment something needs attention. You also get a warranty period after delivery, and optional support packages keep your automations running as your business changes.",
    },
    {
      q: "Do we need technical staff to maintain an Apps Script solution?",
      a: "No. We hand over with full documentation and training for your team. The automation runs in the background of tools you already use. If you later want changes, we can handle those for you under support.",
    },
    {
      q: "How long does an Apps Script project take?",
      a: "Simple automations are often live within 3–5 days. Larger builds — custom web apps, multi-step workflows — typically take 1–3 weeks. You get a clear timeline and a fixed quote before we begin.",
    },
  ],
  ctaNote:
    "Have a process you copy-paste weekly? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll tell you in 20 minutes whether it can be automated — and what it would cost.",
  relatedLinks: [
    {
      title: "Google Sheets Automation",
      href: "/google-sheets-automation",
      description: "Live dashboards, invoice generators, and self-updating trackers.",
    },
    {
      title: "What is Google Apps Script?",
      href: "/blog/google-apps-script-what-is-it-and-what-can-you-automate",
      description: "A plain-English primer on what Apps Script can do for your business.",
    },
    {
      title: "Apps Script automation examples",
      href: "/blog/google-apps-script-automation-examples",
      description: "12 real-world automations you can steal for your own business.",
    },
  ],
};