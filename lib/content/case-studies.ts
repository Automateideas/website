import type { ContentPageData } from "./types";

export interface CaseStudy extends ContentPageData {
  slug: string;
  cardTitle: string;
  cardDesc: string;
  industry: string;
}

export const caseStudies: CaseStudy[] = [
  {
    type: "case-study",
    slug: "vercha-jewels",
    cardTitle: "Vercha Jewels — live inventory & order tracking",
    cardDesc:
      "Stockouts and order mistakes replaced by a single live dashboard for a jewellery business.",
    industry: "Jewellery & retail",
    eyebrow: "Case Study · Jewellery & Retail",
    title: "Vercha Jewels: from stockouts to a live tracking dashboard",
    subtitle:
      "How a jewellery business replaced daily stockouts and order mistakes with one automated Google Workspace dashboard — and saw its error rate drop massively.",
    breadcrumbs: [{ label: "Case Studies", href: "/case-studies" }],
    metaChips: [
      { label: "Client", value: "Vercha Jewels" },
      { label: "Industry", value: "Jewellery & retail" },
      { label: "Focus", value: "Inventory + order tracking" },
    ],
    stats: [
      { label: "Order errors", value: "Down massively" },
      { label: "Live visibility", value: "100%" },
      { label: "Manual tracking", value: "Eliminated" },
    ],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Vercha Jewels ran its day-to-day operations on manuals, phone calls, and scattered spreadsheets. Stock moved fast, but the records didn't. The result was a familiar pair of problems: stockouts on items that were actually available, and order mistakes when records fell out of sync.",
          "Nitin Verma put it plainly: \"Stockouts and order mistakes were draining us.\" Every mismatch cost trust, time, and margin.",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "We built Vercha a custom Google Workspace system centred on a live dashboard. Every sale, purchase, and movement updates the sheet automatically, and the dashboard reflects it instantly.",
        ],
        list: {
          items: [
            "A single live dashboard showing stock, orders, and recent activity in real time.",
            "Automated record-filing so nothing depends on someone remembering to update a sheet.",
            "Order capture and tracking that keeps the unit, the record, and the customer aligned.",
            "Alerts that surface discrepancies instead of burying them.",
          ],
        },
      },
      {
        heading: "The results",
        paragraphs: [
          "The change was immediate and visible. What the client described:",
        ],
        list: {
          items: [
            "\"Everything is now tracked live on one dashboard.\"",
            "\"Our error rate has dropped massively.\"",
            "Fewer stockouts because stock levels no longer rely on memory.",
            "A clear daily picture of the business with zero manual compiling.",
          ],
        },
      },
      {
        heading: "Systems used",
        list: {
          items: [
            "Google Sheets live dashboard and inventory engine",
            "[[Google Apps Script|/google-apps-script-development]] automation for filing and alerts",
            "Google Forms for structured order capture",
          ],
        },
      },
    ],
    faq: [
      {
        q: "Can this work for a business without technical staff?",
        a: "Yes — that's exactly who we build for. Vercha's team uses the dashboard through a familiar spreadsheet interface, with everything automated in the background. We handle the setup, testing, and training.",
      },
      {
        q: "How long did the Vercha build take?",
        a: "The core system was delivered and running within a few weeks. As with most of our projects, the client gave a fixed quote and a clear timeline before we started.",
      },
    ],
    ctaNote:
      "Run a business with the same problems? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll show you the fix.",
    relatedLinks: [
      { title: "Google Sheets Automation", href: "/google-sheets-automation", description: "Live dashboards and inventory systems that update themselves." },
      { title: "All case studies", href: "/case-studies", description: "More stories of businesses we've automated." },
    ],
  },
  {
    type: "case-study",
    slug: "copier-world",
    cardTitle: "Copier World — sales & leads on Workspace + WhatsApp",
    cardDesc:
      "Leads, tasks, and payments unified — saving the team several hours every week.",
    industry: "Office equipment & trading",
    eyebrow: "Case Study · Office Equipment",
    title: "Copier World: leads, tasks, and payments that run themselves",
    subtitle:
      "How an office-equipment dealer cut through manual chaos by connecting Google Workspace and WhatsApp — saving the team several hours a week.",
    breadcrumbs: [{ label: "Case Studies", href: "/case-studies" }],
    metaChips: [
      { label: "Client", value: "Copier World" },
      { label: "Industry", value: "Office equipment & trading" },
      { label: "Focus", value: "Leads + payments + WhatsApp" },
    ],
    stats: [
      { label: "Hours saved / week", value: "Several" },
      { label: "Leads unified", value: "1 system" },
      { label: "Follow-ups", value: "Automated" },
    ],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Copier World's team were juggling leads, tasks, and payments across calls, messages, and files. Details fell through the gaps: a lead noted but never followed up, a task assigned but lost, a payment logged late.",
          "Narendra Vaid described it as \"the chaos of handling leads, tasks, and payments manually.\"",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "We replaced the separate threads with one connected system. A lead now enters at one point and flows through the pipeline — with tasks, documents, and payment status all attached and updated automatically.",
        ],
        list: {
          items: [
            "A shared lead-management sheet that acts as the single source of truth.",
            "Task tracking that keeps every follow-up assigned and visible.",
            "Payment capture that updates records as soon as money comes in.",
            "[[WhatsApp integration|/whatsapp-business-api]] so the team messages customers right from the workflow.",
          ],
        },
      },
      {
        heading: "The results",
        paragraphs: [
          "The client's own summary says the most:",],
        list: {
          items: [
            "\"The Google Workspace + WhatsApp integration alone saves us several hours a week.\"",
            "No more leads living in a dozen different places.",
            "Follow-ups happen automatically instead of by luck.",
            "Payments and tasks reconcile in one view.",
          ],
        },
      },
      {
        heading: "Systems used",
        list: {
          items: [
            "[[Google Sheets automation|/google-sheets-automation]] lead & payment engine",
            "Google Apps Script task automation",
            "WhatsApp integration for instant customer messaging",
          ],
        },
      },
    ],
    faq: [
      {
        q: "Do we need to change the tools we already use?",
        a: "No. Copier World kept working in Google Workspace and WhatsApp — we just connected them. In most projects we integrate with the tools you already have rather than forcing new software.",
      },
      {
        q: "Will this scale as the team grows?",
        a: "Yes. Because the design separates data, tasks, and messaging, adding more users or more customers doesn't break the workflow — we just extend access and permissions.",
      },
    ],
    ctaNote:
      "Leads disappearing between apps? [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp Business API", href: "/whatsapp-business-api", description: "Official WhatsApp messaging integrated with your workflows." },
      { title: "All case studies", href: "/case-studies", description: "More businesses we've automated." },
    ],
  },
  {
    type: "case-study",
    slug: "cranex-limited",
    cardTitle: "Cranex Limited — payroll & compliance, automated",
    cardDesc:
      "Payroll, leave tracking, and compliance now run automatically instead of eating up staff time.",
    industry: "Engineering & manufacturing",
    eyebrow: "Case Study · Engineering",
    title: "Cranex Limited: payroll and compliance on autopilot",
    subtitle:
      "How an engineering company took payroll, leave, and compliance off its team's plate with an automated Google Workspace system.",
    breadcrumbs: [{ label: "Case Studies", href: "/case-studies" }],
    metaChips: [
      { label: "Client", value: "Cranex Limited" },
      { label: "Industry", value: "Engineering & manufacturing" },
      { label: "Focus", value: "Payroll + leave + compliance" },
    ],
    stats: [
      { label: "Payroll effort", value: "Automated" },
      { label: "Leave tracking", value: "Real-time" },
      { label: "Compliance", value: "On track" },
    ],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Payroll, leave tracking, and compliance consumed hours Cranex Limited didn't have. Manual calculations invited errors, leave records lagged reality, and compliance dates had to be tracked by memory and spreadsheet tabs.",
          "Chaitanya Agrawal summed it up: \"All of it used to eat up time we didn't have.\"",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "We designed a Google Workspace system that runs these processes automatically. Attendance and leave feed into one place, payroll figures calculate themselves, and compliance deadlines surface on a dashboard.",
        ],
        list: {
          items: [
            "Automated attendance and leave records with clear, current balances.",
            "Payroll calculations that pull from real, single-source data.",
            "A compliance tracker that flags deadlines before they arrive.",
            "Clean audit trails for every calculation and change.",
          ],
        },
      },
      {
        heading: "The results",
        paragraphs: [
          "The processes that previously ate staff time now run by themselves:",
        ],
        list: {
          items: [
            "\"Automate Ideas built a system that runs these processes automatically.\"",
            "Month-end payroll no longer means a scramble.",
            "Leave records are always current, not 'as of last week'.",
            "Compliance deadlines surface in advance, not as surprises.",
          ],
        },
      },
      {
        heading: "Systems used",
        list: {
          items: [
            "[[Google Sheets automation|/google-sheets-automation]] payroll engine",
            "Google Forms for leave and attendance requests",
            "Google Apps Script calculation and compliance alerts",
          ],
        },
      },
    ],
    faq: [
      {
        q: "Is automated payroll reliable enough?",
        a: "The calculations are deterministic code, so they don't make fatigue-driven mistakes. We keep audit trails, control who can edit, and build in alerts for anything unusual. Clients still review before payday — but the grunt work is gone.",
      },
      {
        q: "How do we handle exceptions, like unpaid leave?",
        a: "Exception rules are part of the design. Approved leave types, proration, and special cases are configured up front so the system handles them without a spreadsheet 'workaround'.",
      },
    ],
    ctaNote:
      "Your payroll deserves better than a spreadsheet marathon. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "Google Apps Script Development", href: "/google-apps-script-development", description: "The code that runs your HR and payroll workflows." },
      { title: "Case studies index", href: "/case-studies", description: "Every business we've automated." },
    ],
  },
  {
    type: "case-study",
    slug: "dhanvi-diamonds",
    cardTitle: "Dhanvi Diamonds — GST invoicing without month-end chaos",
    cardDesc:
      "Invoicing and GST flows that used to break month-end now run seamlessly, with reports ready on time.",
    industry: "Diamonds & trading",
    eyebrow: "Case Study · Diamonds & Trading",
    title: "Dhanvi Diamonds: month-end chaos replaced by seamless flows",
    subtitle:
      "How a diamond trading business automated invoicing and GST so month-end reports are ready on time — every time.",
    breadcrumbs: [{ label: "Case Studies", href: "/case-studies" }],
    metaChips: [
      { label: "Client", value: "Dhanvi Diamonds" },
      { label: "Industry", value: "Diamonds & trading" },
      { label: "Focus", value: "Invoicing + GST + reporting" },
    ],
    stats: [
      { label: "Month-end effort", value: "Seamless" },
      { label: "Invoicing", value: "Automated" },
      { label: "Reports", value: "On time" },
    ],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Month-end at Dhanvi Diamonds was a familiar circus. Invoices had to be pulled together from multiple records, GST details checked by hand, and reports compiled under deadline. One slip meant rework across the whole set.",
          "Saurabh Khandelwal's words: \"Month-end used to be chaos with invoicing and GST.\"",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "We built an automated invoicing pipeline so that each sale creates a compliant, GST-ready invoice automatically — with the records flowing into a clean reporting file.",
        ],
        list: {
          items: [
            "Invoices generated automatically from sales records, with all required GST fields.",
            "A single data flow from sale entry to invoice to report file.",
            "Reports that assemble themselves for month-end review.",
            "Checks that catch missing or inconsistent fields before invoices go out.",
          ],
        },
      },
      {
        heading: "The results",
        paragraphs: [
          "Month-end stopped being an event:",
        ],
        list: {
          items: [
            "\"Now everything flows seamlessly with Automate Ideas' automation.\"",
            "\"Reports are ready on time.\"",
            "Invoices leave with consistent GST details, not manual review.",
            "Finance gets its numbers without a last-minute scramble.",
          ],
        },
      },
      {
        heading: "Systems used",
        list: {
          items: [
            "[[Google Sheets automation|/google-sheets-automation]] invoice engine",
            "Google Apps Script GST field validation",
            "Automated reporting pipeline",
          ],
        },
      },
    ],
    faq: [
      {
        q: "Does the automation handle GST invoice rules?",
        a: "We configure the invoice format and mandatory fields to match your GST requirements, and the system validates before sending. If your structure changes, we update it under support — no re-negotiation of scope.",
      },
      {
        q: "Can we email the invoices to customers automatically?",
        a: "Yes — the pipeline can attach the generated PDF and email it on generation. That was part of the natural next step for trading businesses. See [[auto-send emails from Sheets|/blog/auto-send-emails-from-google-sheets]] for how.",
      },
    ],
    ctaNote:
      "If month-end gives you anxiety, that's a solvable problem. [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "Google Sheets Automation", href: "/google-sheets-automation", description: "Invoice and reporting pipelines for any trading business." },
      { title: "Case studies index", href: "/case-studies", description: "Every business we've automated." },
    ],
  },
];

export const caseStudiesIndexSection = {
  eyebrow: "Client Success",
  title: "Case Studies",
  subtitle:
    "Real businesses, real workflows, real time saved. Here's how our systems run inside a few of the 50+ companies we've automated.",
  keywords: [
    "business automation case studies",
    "Google Sheets automation examples",
    "WhatsApp automation examples",
    "CRM automation case studies",
    "Google Apps Script projects",
  ],
};