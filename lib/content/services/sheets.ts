import type { ContentPageData } from "../types";

export const sheetsPage: ContentPageData = {
  type: "page",
  eyebrow: "Google Workspace",
  title: "Google Sheets Automation",
  subtitle:
    "Turn spreadsheets from manual data-entry jobs into self-updating systems — live dashboards, auto-generated invoices, inventory and attendance trackers, and reporting pipelines that build themselves.",
  breadcrumbs: [{ label: "Services" }],
  stats: [
    { label: "Hours saved weekly", value: "10+" },
    { label: "Businesses automated", value: "50+" },
    { label: "Faster reporting", value: "10×" },
  ],
  sections: [
    {
      heading: "Why automate Google Sheets?",
      paragraphs: [
        "Most businesses live in spreadsheets — but they often end up doing the data entry by hand, formatting the same reports every week, and emailing the same file to whoever needs it. That work is invisible, annoying, and expensive.",
        "We build Google Sheets systems that collect, organise, calculate, and distribute data automatically. Connect a Google Form and your records appear in the right place. Place a purchase order and an invoice generates itself. Add a row and the dashboard, the manager alert, and the WhatsApp message all update at once.",
      ],
    },
    {
      heading: "What we automate in Sheets",
      list: {
        items: [
          "Live dashboards — KPI cards, charts, and summaries that refresh from your data automatically.",
          "Invoice generation — [[GST-ready invoices|/blog/google-sheets-automation-business-examples]] created and emailed to customers on order confirmation.",
          "Inventory and stock management — quantities, reorder alerts, and supplier notifications in real time.",
          "Attendance, leave, and payroll trackers that calculate totals and flag issues.",
          "Order and sales management — from form submission to payment tracking on one screen.",
          "Auto-updating reports — daily/weekly/monthly digests emailed straight to you.",
          "Data consolidation — combining files from your team into one clean master sheet.",
        ],
      },
    },
    {
      heading: "How it works",
      paragraphs: [
        "Every solution is built on Google Sheets with Google Apps Script doing the heavy lifting behind the scenes. You keep the familiar spreadsheet interface your team already knows — we just make it work for you instead of the other way round. See [[what Apps Script development|/google-apps-script-development]] involves if you'd like the technical detail.",
      ],
      list: {
        ordered: true,
        items: [
          "We review your current files and map the process around them.",
          "We design the sheet structure, formulas, scripts, and dashboard.",
          "We connect your forms, Gmail, and other tools so data flows in and out.",
          "We test with your real data, train your team, and hand over with documentation.",
        ],
      },
    },
    {
      heading: "Real results clients see",
      table: {
        headers: ["Pain point", "After automation"],
        rows: [
          ["Manual data entry from forms & emails", "Records created automatically"],
          ["Weekly report building", "Reports compile and email themselves"],
          ["Invoice errors & missed GST details", "Auto-generated, error-checked invoices"],
          ["Stockouts & over-ordering", "Live inventory + reorder alerts"],
          ["Month-end reconciliation chaos", "Self-balancing, audit-ready sheets"],
        ],
      },
    },
    {
      heading: "Sheets + your other tools",
      paragraphs: [
        "A Sheets system is most powerful when it talks to the rest of your stack. We routinely connect Sheets to Gmail, Google Drive, Google Calendar, Looker Studio, and [[WhatsApp|/whatsapp-business-api]] so that one entry updates everything.",
        "If your spreadsheet problem is really a lead-management, invoicing, or reporting problem, start with the use case that hurts most — the fix is usually one system, not five.",
      ],
    },
    {
      heading: "What you get",
      list: {
        items: [
          "A fixed quote before we start, and timelines we actually meet.",
          "Fully documented sheets and scripts that your team owns.",
          "Error alerts and safety checks on every automation.",
          "Training sessions recorded for new team members.",
          "A warranty period plus optional ongoing support.",
        ],
      },
    },
  ],
  faq: [
    {
      q: "Do we need Apps Script to automate Google Sheets?",
      a: "For simple reporting you can often get far with formulas, but true automation — auto-generating invoices, emailing reports, reacting to new submissions — needs Google Apps Script. We build it for you, free of charge to run within your Google Workspace.",
    },
    {
      q: "Will automation break my existing spreadsheets?",
      a: "We build in a copy of your file first, so nothing in your live workflow changes until the new system is fully tested. We keep your old habits working alongside the automation during handover.",
    },
    {
      q: "Can Sheets really replace proper accounting or CRM software?",
      a: "For businesses with 5–100 staff, a well-built Sheets system frequently replaces paid software for invoices, leads, attendance, and inventory. If you later outgrow it, the data exports cleanly into any professional tool.",
    },
    {
      q: "How much does Google Sheets automation cost?",
      a: "Each project is quoted individually after a free workflow review. Simple automations start from a few thousand rupees, and most full systems land well below the annual cost of paid software subscriptions.",
    },
    {
      q: "Who owns the finished system?",
      a: "You do — 100%. The sheets, the scripts, and the documentation are all delivered into your Google Workspace. There are no subscriptions or lock-ins, and you can get support from us whenever you need changes.",
    },
  ],
  ctaNote:
    "Show us the spreadsheet you hate and we'll show you what it looks like automated. [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
  relatedLinks: [
    {
      title: "Google Apps Script Development",
      href: "/google-apps-script-development",
      description: "The custom code that powers your Sheets automations.",
    },
    {
      title: "Sheets automation business examples",
      href: "/blog/google-sheets-automation-business-examples",
      description: "11 ways Indian businesses automate their spreadsheets.",
    },
    {
      title: "Auto-send emails from Google Sheets",
      href: "/blog/auto-send-emails-from-google-sheets",
      description: "How to email custom messages to each row, automatically.",
    },
  ],
};