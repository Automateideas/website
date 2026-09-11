import type { ContentPageData } from "../types";

export interface BlogArticle extends ContentPageData {
  slug: string;
  cardTitle: string;
  cardDesc: string;
  cluster: string;
}

export const appsScriptArticles: BlogArticle[] = [
  {
    type: "blog",
    slug: "google-apps-script-what-is-it-and-what-can-you-automate",
    cardTitle: "What is Google Apps Script?",
    cardDesc: "A plain-English intro to the tool running inside your Google Workspace.",
    cluster: "Apps Script",
    eyebrow: "Blog · Google Apps Script",
    title: "What is Google Apps Script (and what can you automate with it?)",
    subtitle:
      "Google Apps Script is the free, JavaScript-based engine inside Google Workspace that connects your Sheets, Gmail, Drive, Forms, and Calendar. Here's what it is and, more importantly, what it can automate for your business.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-11",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["Apps Script", "Google Workspace"],
    sections: [
      {
        heading: "Apps Script in one sentence",
        paragraphs: [
          "Google Apps Script is a scripting platform built by Google that lets you write small programs (scripts) which automatically do things inside your Google apps — like reading a spreadsheet, sending an email, creating a file, or updating a calendar.",
          "It runs in the cloud, is free with your Google account, needs no servers or installations, and uses JavaScript — one of the most common languages on earth. That combination makes it the fastest way businesses go from 'we copy-paste this every day' to 'this happens by itself'.",
        ],
      },
      {
        heading: "What can you actually automate?",
        paragraphs: [
          "Practically anything that involves repeated clicks across Google's apps. The popular ones we build for businesses:",
        ],
        list: {
          items: [
            "Google Sheets — auto-generating invoices, reports, and dashboards; reacting to new rows with calculations or alerts.",
            "Gmail — sending emails, auto-replying, labelling, and attaching files based on your rules.",
            "Google Drive — creating, renaming, filing, and sharing documents automatically.",
            "Google Forms — processing submissions the moment they arrive.",
            "Google Calendar — scheduling, attendees, and reminders without manual entry.",
            "Custom web apps — small tools with a login screen, built entirely inside Workspace.",
            "External APIs — talking to payment gateways, CRMs, WhatsApp, or your own systems.",
          ],
        },
      },
      {
        heading: "A before-and-after example",
        paragraphs: [
          "Take invoicing. Before: a sale happens, someone opens a spreadsheet, types the customer's details, writes the invoice manually, checks the GST fields, exports a PDF, and emails it. Around 10 minutes per invoice, with a new chance of a typo each time.",
          "After: the sale is recorded once in a Google Form. Apps Script creates the invoice from your template, fills in the amounts and GST, saves a PDF to Drive, emails it to the customer, and logs everything back to the sheet. Ten minutes becomes seconds — and the invoice is identical every time.",
        ],
      },
      {
        heading: "What Apps Script can't do (be honest with yourself)",
        paragraphs: [
          "Apps Script is brilliant but not everything. It's not built for heavy number-crunching on millions of rows, it won't run AI training workloads, and it has usage limits per day. For a small or mid-size business — orders, leads, reports, reminders, documents — those limits are generous. For data-heavy processing, we'd pair it with Looker Studio or a proper database instead. See how [[Apps Script vs Excel formulas|/blog/google-sheets-formulas-vs-apps-script]] compare to know when code is the right call.",
        ],
      },
      {
        heading: "Do you need a developer?",
        paragraphs: [
          "You don't need to be one. If you can describe the workflow you're tired of, we can script it. That's exactly the kind of project we specialise in — see what a typical [[Google Apps Script development|/google-apps-script-development]] engagement looks like, including fixed quotes and a handover your team can actually use.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Google Apps Script really free?",
        a: "Yes. It runs on Google's infrastructure at no cost within the normal quotas of your Google account. Most business automations sit comfortably inside those limits, and Google Workspace paid plans get bigger quotas.",
      },
      {
        q: "Can Apps Script replace my expensive software?",
        a: "For invoices, CRMs, attendance, and reporting, a well-built Apps Script system frequently replaces paid subscriptions. You can't export your data out of most tools; with Apps Script you already own everything.",
      },
    ],
    ctaNote:
      "Wonder if your workflow can be scripted? [[Book a free 20-minute call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll tell you straight.",
    relatedLinks: [
      { title: "Apps Script automation examples", href: "/blog/google-apps-script-automation-examples", description: "12 real-world automations you can adapt." },
      { title: "How to build a CRM in Sheets", href: "/blog/build-a-google-apps-script-crm", description: "Skip the expensive CRM — build one in Sheets." },
      { title: "Google Apps Script development", href: "/google-apps-script-development", description: "Custom automation and web apps built for you." },
    ],
  },
  {
    type: "blog",
    slug: "google-apps-script-automation-examples",
    cardTitle: "12 Apps Script automation examples",
    cardDesc: "Real workflows you can automate with Google Apps Script today.",
    cluster: "Apps Script",
    eyebrow: "Blog · Google Apps Script",
    title: "12 Google Apps Script automation examples for your business",
    subtitle:
      "From auto-generated invoices to attendance trackers and manager alerts — here are twelve Google Apps Script automations that remove real, daily busywork for small and mid-size businesses.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-11",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "9 min",
    tags: ["Apps Script", "Automation", "Google Workspace"],
    sections: [
      {
        heading: "Why examples matter more than theory",
        paragraphs: [
          "When people say 'I want to automate my business', what they usually mean is 'I have a specific spreadsheet task I do by hand'. Examples make automation concrete. Here are twelve we've built or see constantly — in rough order of how often they save serious hours.",
        ],
      },
      {
        heading: "The sheet-based examples",
        list: {
          items: [
            "Auto-generated invoices — create a PDF invoice from your template when a row is added, email it to the customer, and log it. (The classic time-saver.)",
            "Attendance and leave tracker — employees submit via a Google Form; overtime, balances, and monthly totals calculate themselves.",
            "Inventory with reorder alerts — stock levels live in Sheets, and the script flags (or messages) anything running low.",
            "Expense tracker with approval — submissions route to the right approver and file themselves once approved.",
            "Weekly management report — the script compiles totals from your sheets and emails a summary every Monday morning.",
          ],
        },
      },
      {
        heading: "The email and messaging examples",
        list: {
          items: [
            "Gmail auto-triage — label, forward, or reply to emails based on rules (e.g. support tickets vs invoices).",
            "[[Auto-send emails from Sheets|/blog/auto-send-emails-from-google-sheets]] — send a personalised email to each row in your sheet, one by one.",
            "[[WhatsApp notifications from Sheets|/blog/google-sheets-to-whatsapp-notifications]] — trigger a WhatsApp message when a sheet changes, like an order or a stock alert.",
            "Reminder sequences — automatic reminders for renewals, overdue payments, or document submissions.",
          ],
        },
      },
      {
        heading: "The process examples",
        list: {
          items: [
            "Document generator — create contracts, offer letters, or PO documents from a template and fill them with the right data.",
            "CRM without the subscription — a Sheets-based [[CRM with Apps Script|/blog/build-a-google-apps-script-crm]] that tracks leads, stages, and follow-ups.",
            "Approval workflow — a Google Form submission triggers a chain of approvals and notifications until it's done.",
          ],
        },
      },
      {
        heading: "How to pick your first one",
        paragraphs: [
          "Choose the task that costs the most time per week, not the one that sounds most impressive. The invoice generator is a crowd favourite because it's visible, daily, and error-prone by hand. If stock or money is involved, that's usually the highest-ROI target.",
          "Once you know what you want, a good developer is the difference between a script that runs forever and a hack that breaks on Fridays. See what proper [[Google Apps Script development|/google-apps-script-development]] includes — testing, error alerts, and handover are non-negotiables.",
        ],
      },
    ],
    faq: [
      {
        q: "Are all twelve automations actually possible in Apps Script?",
        a: "Yes. Every one of these is a standard Apps Script build. Some (like WhatsApp) use Apps Script plus an external API, which we integrate for you.",
      },
      {
        q: "Which example saves the most time?",
        a: "In our experience it's automated invoicing — it touches sales, finance, and customers every single day. Attendance/payroll is a close second for companies with 20+ staff.",
      },
    ],
    ctaNote:
      "Pick one of these and we'll build it for you. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "What is Google Apps Script?", href: "/blog/google-apps-script-what-is-it-and-what-can-you-automate", description: "The plain-English primer." },
      { title: "Sheets automation examples", href: "/blog/google-sheets-automation-business-examples", description: "Spreadsheet-focused workflows." },
      { title: "App development service", href: "/google-apps-script-development", description: "Custom automation built for your workflow." },
    ],
  },
  {
    type: "blog",
    slug: "build-a-google-apps-script-crm",
    cardTitle: "Build a CRM in Google Sheets",
    cardDesc: "A practical blueprint for a lightweight CRM with Apps Script.",
    cluster: "Apps Script",
    eyebrow: "Blog · Google Apps Script",
    title: "How to build a CRM in Google Sheets (with Apps Script)",
    subtitle:
      "Most small businesses don't need a ₹4-lakh CRM — they need a sheet they actually use. Here's a practical blueprint for a lightweight, custom CRM on Google Sheets and Apps Script.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-10",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "8 min",
    tags: ["Apps Script", "CRM", "Google Sheets"],
    sections: [
      {
        heading: "Why a Sheets CRM works",
        paragraphs: [
          "The best CRM is the one your team actually opens. For teams of 3–30, a Google Sheets CRM does 90% of what enterprise tools promise, for ₹0 in subscriptions — because your team already lives in Google. You see the same columns, colours, and filters they're used to.",
          "The missing piece is the plumbing: stages that move automatically, follow-up reminders that fire, and updates that log themselves. That's exactly where Apps Script comes in.",
        ],
      },
      {
        heading: "The core design",
        list: {
          items: [
            "A Leads sheet — one row per lead: name, company, stage, value, owner, source, next action, next action date.",
            "A dropdown for stage (New → Contacted → Demo → Proposal → Won / Lost) with conditional colours.",
            "A Logs sheet — append an entry whenever a lead changes, so you always have audit history.",
            "An Automation sheet — settings your team can edit without touching scripts.",
          ],
        },
      },
      {
        heading: "The automations that make it a 'system'",
        list: {
          items: [
            "On-form: when a lead is submitted (or added), set defaults and assign the owner.",
            "On-stage-change: moving a lead to Won triggers a frozen copy; moving to Lost logs the reason.",
            "Daily digest: each morning, email each owner their leads due for follow-up today.",
            "Reminders: WhatsApp or email when 'next action date' passes with no update.",
            "Dashboard: a summary tab of pipeline value by stage that updates itself for the weekly meeting.",
          ],
        },
      },
      {
        heading: "Where to be careful",
        paragraphs: [
          "A spreadsheet CRM fails when there are no rules — when anyone can type anything in any column. The guardrails that keep it clean: dropdowns on stage and source, a script that validates new rows, and ownership so every lead has exactly one person responsible.",
          "Also plan the exit: because everything lives in Sheets, exporting to a real CRM later (HubSpot, Zoho, Pipedrive) is trivial if you ever grow out of it. That's a feature most paid tools can't match.",
        ],
      },
      {
        heading: "Building it vs buying it",
        paragraphs: [
          "If you have the time and comfort, the blueprint above is buildable yourself. If that sounds like a weekend project you don't want, that's what we do — this exact system, plus WhatsApp integration and live dashboards, is one of our most common builds. It's part of [[Google Apps Script development|/google-apps-script-development]].",
        ],
      },
    ],
    faq: [
      {
        q: "How many leads can a Sheets CRM handle?",
        a: "For record-keeping, thousands. Google Sheets handles large data sets easily for typical CRM volume. Beyond roughly tens of thousands of rows you'd want performance tuning or a database — and even then, a sheet view on top works fine.",
      },
      {
        q: "Can more than one person use it at once?",
        a: "Yes — that's a core strength. With proper sharing and permissions, the whole team works in the same file simultaneously, with edit history and ownership tracking.",
      },
    ],
    ctaNote:
      "Want this CRM built and live this month? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "What is Google Apps Script?", href: "/blog/google-apps-script-what-is-it-and-what-can-you-automate", description: "Start with the basics." },
      { title: "Sheets-to-WhatsApp notifications", href: "/blog/google-sheets-to-whatsapp-notifications", description: "Alert your team (or customers) when a lead changes." },
      { title: "Google Apps Script development", href: "/google-apps-script-development", description: "Custom CRM and web apps built for you." },
    ],
  },
];