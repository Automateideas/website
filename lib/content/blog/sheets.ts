import type { BlogArticle } from "./apps-script";

export const sheetsArticles: BlogArticle[] = [
  {
    type: "blog",
    slug: "google-sheets-automation-business-examples",
    cardTitle: "11 Sheets automation examples",
    cardDesc: "Practical spreadsheet automations for Indian businesses.",
    cluster: "Google Sheets",
    eyebrow: "Blog · Google Sheets",
    title: "11 Google Sheets automation examples for Indian businesses",
    subtitle:
      "From GST-ready invoicing to attendance, stock alerts, and month-end reports — here are eleven Google Sheets automations that save Indian businesses real hours every week.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-11",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "8 min",
    tags: ["Google Sheets", "Automation"],
    sections: [
      {
        heading: "The spreadsheet is your business",
        paragraphs: [
          "Walk into almost any small or mid-size Indian business and you'll find the same thing: the real business lives in spreadsheets. Orders in one file, payroll in another, stock somewhere else, all glued together with copy-paste and WhatsApp screenshots.",
          "Google Sheets automation is the upgrade that doesn't throw any of that away. It takes the files you already trust and makes them update themselves. Here are eleven automations that come up again and again.",
        ],
      },
      {
        heading: "Sales, orders & invoices",
        list: {
          items: [
            "Order capture — a Google Form creates the order record, computes totals, and files everything to the right tab.",
            "GST-ready invoicing — generate the invoice with correct fields (HSN, GSTIN, tax) the moment an order is confirmed.",
            "PDF + email — send the invoice to the customer automatically and store a copy in Drive.",
            "Payment tracking — mark paid/unpaid with ageing columns that recalculate every night.",
          ],
        },
      },
      {
        heading: "Stock & inventory",
        list: {
          items: [
            "Live stock levels — sales and purchases adjust quantities automatically.",
            "Reorder alerts — flash (or message) when an item crosses its minimum.",
            "Supplier follow-up — automatically draft the 'we're low on X' message the supplier needs.",
          ],
        },
      },
      {
        heading: "People & operations",
        list: {
          items: [
            "Attendance & leave — form-based submissions, auto-calculated totals and balances.",
            "Payroll calculations — clean, formula-driven payroll from attendance records.",
            "Employee KRA/KPI tracking — goals and scores in one sheet with monthly auto-summaries.",
            "Asset & task register — a self-maintaining log with ownership and due dates.",
          ],
        },
      },
      {
        heading: "Reporting",
        list: {
          items: [
            "Auto reports — a script emails tonight's summary every day at 8 pm.",
            "Management dashboard — KPI cards that refresh from live tabs, no rebuilds.",
            "Month-end assembly — GST summary, collections, and pending invoices compile themselves.",
          ],
        },
      },
      {
        heading: "Why hire this out",
        paragraphs: [
          "You can learn to build these — and some, like formulas, you absolutely should. But the moment automation touches money, customers, or compliance, an experienced builder matters. Edge cases (GST fields, round-offs, failed sends) are exactly where a DIY sheet breaks and a professionally built one keeps running.",
          "That's the difference you buy with [[Google Sheets automation services|/google-sheets-automation]]: not the formula, but the reliability.",
        ],
      },
    ],
    faq: [
      {
        q: "Are these automations possible without coding?",
        a: "A few (payment ageing, conditional alerts) are nearly all formulas. Most need Google Apps Script for the automation part — which we build for you. Either way, you keep working in the same Sheets tabbed file you already use.",
      },
      {
        q: "Which automation should I start with?",
        a: "Start where errors cost the most: invoices (money + GST) or stock (money + customers). The others are natural add-ons once one system is live.",
      },
    ],
    ctaNote:
      "Show us one of these you're doing by hand and we'll quote it. [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "Auto-send emails from Sheets", href: "/blog/auto-send-emails-from-google-sheets", description: "Email every row in your sheet automatically." },
      { title: "Sheets formulas vs Apps Script", href: "/blog/google-sheets-formulas-vs-apps-script", description: "When to use which." },
      { title: "Google Sheets automation", href: "/google-sheets-automation", description: "Built for you, fixed price." },
    ],
  },
  {
    type: "blog",
    slug: "google-sheets-formulas-vs-apps-script",
    cardTitle: "Formulas vs Apps Script",
    cardDesc: "When to use a formula, and when to reach for code.",
    cluster: "Google Sheets",
    eyebrow: "Blog · Google Sheets",
    title: "Google Sheets formulas vs Apps Script: when to use which",
    subtitle:
      "Both formulas and Apps Script can transform your spreadsheet. Here's a practical rule for when each is the right tool — and when a formula is secretly a liability.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-10",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["Google Sheets", "Apps Script", "Formulas"],
    sections: [
      {
        heading: "The honest rule of thumb",
        paragraphs: [
          "Formula: value changes based on what's already in the sheet. Apps Script: something needs to happen outside the sheet — email, file, message, approval, or an action that's not in a cell.",
          "If your answer is 'sum the sales for the last 30 days', that's a formula. If it's 'email the owner once the sale clears 50,000 rupees', that's a script. Everything below is detail on that core rule.",
        ],
      },
      {
        heading: "When formulas are clearly better",
        list: {
          items: [
            "Live calculation — totals, ratios, ageing, lookups that recompute as data changes.",
            "Formatting and conditional colouring — data bars, highlights, colour scales.",
            "Data validation — dropdowns and input rules that keep your sheet clean.",
            "Transparency — a Formula: QUERY or a simple SUM that anyone can read and edit.",
          ],
        },
      },
      {
        heading: "When Apps Script wins",
        list: {
          items: [
            "Sending anything — emails, WhatsApp, notifications, documents.",
            "Creating files — invoices, PDFs, contracts, folder structures.",
            "Reacting to time — daily/weekly/monthly jobs ('every Monday at 9').",
            "Reacting to changes — 'when this cell changes, do that'.",
            "Talking to other systems — APIs, CRMs, payment gateways, databases.",
            "Cleaning messy data — scaling, trimming, deduping across tens of thousands of rows whose formats are all over the place.",
          ],
        },
      },
      {
        heading: "The formula that's secretly a liability",
        paragraphs: [
          "There's a class of 'viral formulas' — the ten-line QUERY/ARRAYFORMULA/IMPORTXML monster that one person built and nobody can edit. They break when a column moves, run slower every month, and become the least understood part of your business.",
          "If a formula is (a) longer than a paragraph, (b) critical to money, and (c) only understood by one person, ask whether a script (or a cleaner structure) should replace it. Code can be tested, documented, and handed over; a monster formula can't.",
        ],
      },
      {
        heading: "Using both, deliberately",
        paragraphs: [
          "The best spreadsheets use formulas for the visible, live layer and scripts for the 'do things' layer. Screenshot-ready dashboard? Formulas. Weekend data pipeline that fills it? Script. Learn to label each layer and you'll stop fighting Google Sheets and start using it.",
          "For the automation layer, that's where [[Google Apps Script development|/google-apps-script-development]] comes in — we build, test, and document the script side so your formulas keep working on good data.",
        ],
      },
    ],
    faq: [
      {
        q: "Can formulas trigger emails or messages?",
        a: "No. Formulas can only calculate and format values that exist in the sheet. Anything that 'sends' — email, WhatsApp, notifications — needs Apps Script or an integration service.",
      },
      {
        q: "Is Apps Script faster than formulas?",
        a: "For single calculations, formulas are usually faster and lighter. For bulk operations — cleaning 50,000 rows, generating 500 invoices — Apps Script batch operations outrun per-cell formulas by a wide margin.",
      },
    ],
    ctaNote:
      "Stuck with a spreadsheet monster? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll make it manageable.",
    relatedLinks: [
      { title: "What is Google Apps Script?", href: "/blog/google-apps-script-what-is-it-and-what-can-you-automate", description: "The code layer, explained." },
      { title: "Auto-send emails from Sheets", href: "/blog/auto-send-emails-from-google-sheets", description: "The classic script-only task." },
      { title: "Sheets automation service", href: "/google-sheets-automation", description: "We build the layer that acts." },
    ],
  },
  {
    type: "blog",
    slug: "auto-send-emails-from-google-sheets",
    cardTitle: "Auto-send emails from Sheets",
    cardDesc: "Send personalised emails from each row in your sheet.",
    cluster: "Google Sheets",
    eyebrow: "Blog · Google Sheets",
    title: "How to auto-send emails from Google Sheets",
    subtitle:
      "Send a personalised email to every row in your Google Sheet automatically — invoices, reminders, welcome letters, receipts. Here's how it's done and the pitfalls to avoid.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-09",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["Google Sheets", "Gmail", "Apps Script"],
    sections: [
      {
        heading: "The workflow",
        paragraphs: [
          "Emailing from a spreadsheet is the single most common task we automate. The recipe is always the same: a sheet where each row is one message, a template that fills in the row's values, and a trigger that fires the send.",
          "Your rows already hold the ingredients — customer name, invoice number, due date, attachment link. Apps Script reads a row, fills your template, attaches the file, and sends through your Gmail.",
        ],
      },
      {
        heading: "The status column pattern",
        paragraphs: [
          "The professional way to run this is with a status column. Each email is sent once — the script skips rows already marked 'sent' and marks rows as it finishes them. Double-sending is the #1 amateur mistake in this niche; the status column eliminates it.",
          "You also get a natural log: run it again tomorrow and only new rows go out. Maintenance, reminders, and re-sends all become a matter of editing a cell.",
        ],
      },
      {
        heading: "The failure cases that matter",
        list: {
          items: [
            "Duplicate sends — fixed with the status column above.",
            "Partial failure — 500 emails, 4 fail; your script should retry or flag, never lose the count.",
            "Bouncing addresses — log the bounce so you can clean your list, don't just ignore it.",
            "Personalisation bugs — a template variable missing a fallback = 'Hi undefined'. Test with a real row first.",
            "Daily quotas — Gmail limits how much a script can send per day; schedule across days for big lists.",
          ],
        },
      },
      {
        heading: "Triggers you can use",
        list: {
          items: [
            "On-form-submit — email the customer the moment their order lands.",
            "On-edit — react when a cell changes (e.g. marked 'approved').",
            "Time-driven — a daily digest, a weekly follow-up, or a monthly report.",
            "Button click — a 'Send now' button in the sheet for human control.",
          ],
        },
      },
      {
        heading: "When to build vs buy",
        paragraphs: [
          "For low volume and simple content, the status-column pattern is buildable with Apps Script tutorials. For volume, attachments, GST invoices, or anything that touches customers, tested code with error alerts is worth the hire. That's [[Google Sheets automation|/google-sheets-automation]] territory: fixed quote, tested sends, documented handover.",
        ],
      },
    ],
    faq: [
      {
        q: "How many emails can I send from a sheet per day?",
        a: "Gmail-based Apps Script sending is limited by your account's daily quota (hundreds to thousands depending on your plan). For big broadcast lists, we'd split across days or use a proper email service via API.",
      },
      {
        q: "Can attachments be included automatically?",
        a: "Yes — the most common one is a generated PDF invoice. The script creates or locates the file in Drive and attaches it. Send limits still apply, but attachments don't change the mechanics.",
      },
    ],
    ctaNote:
      "Emailing invoices or reminders manually? We'll automated your first flow this month. [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "Sheets automation examples", href: "/blog/google-sheets-automation-business-examples", description: "Eleven workflows you can steal." },
      { title: "Formulas vs Apps Script", href: "/blog/google-sheets-formulas-vs-apps-script", description: "Why sending needs a script." },
      { title: "Google Sheets automation", href: "/google-sheets-automation", description: "Email pipelines built for you." },
    ],
  },
  {
    type: "blog",
    slug: "google-sheets-to-whatsapp-notifications",
    cardTitle: "Sheets → WhatsApp notifications",
    cardDesc: "Trigger WhatsApp messages when your spreadsheet changes.",
    cluster: "WhatsApp",
    eyebrow: "Blog · Google Sheets + WhatsApp",
    title: "Google Sheets to WhatsApp notifications: automate your alerts",
    subtitle:
      "A new order lands, stock crosses its minimum, a payment comes in — and a WhatsApp message goes out automatically. Here's how Sheets-to-WhatsApp notifications work and what they can do.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-09",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["Google Sheets", "WhatsApp", "Notifications"],
    sections: [
      {
        heading: "The pattern",
        paragraphs: [
          "Your spreadsheet already knows everything important: new orders, stock levels, payment status, deadlines. The only missing step is telling the right person at the right moment. Sheets-to-WhatsApp notifications close that gap — when a sheet changes, a WhatsApp message goes out automatically.",
          "It's the same trigger model as email (see [[auto-send emails from Sheets|/blog/auto-send-emails-from-google-sheets]]), but WhatsApp messages are read. A stale email sits in the inbox; a WhatsApp alert gets opened.",
        ],
      },
      {
        heading: "What you can notify with it",
        list: {
          items: [
            "Team alerts — 'Order #4821 needs fulfilment', sent to the operations group.",
            "Stock alerts — 'SKU-009 below minimum', straight to the buyer.",
            "Customer updates — delivery confirmations, invoice links, reminders (via official channels).",
            "Payment alerts — '₹1,20,000 received from ABC Traders' to finance.",
            "Error alerts — 'Payroll sheet edit failed validation', to you, before customers see it.",
          ],
        },
      },
      {
        heading: "Official vs flexible routing",
        paragraphs: [
          "There are two ways to reach people on WhatsApp from a sheet. For transactional customer messages — invoices, OTPs, delivery updates — the [[official WhatsApp Business API|/whatsapp-business-api]] is the compliant route: verified number, templates, reliable delivery. For team alerts and internal notifications, a [[flexible WhatsApp automation|/whatsapp-automation-services]] route is fast, cheap, and ideal for broadcasting to your own teams.",
        ],
      },
      {
        heading: "The technical shape",
        list: {
          items: [
            "A Google Apps Script watches your sheet (on-edit or on a time interval).",
            "Conditions map to messages — when an order is added, when stock crosses a threshold, when a status changes.",
            "The WhatsApp API call sends the message, and a log row records the result.",
            "Failures retry and alert — your notifications never silently die.",
          ],
        },
      },
      {
        heading: "The one design rule",
        paragraphs: [
          "Alert fatigue is real: if everything gets a message, nothing gets attention. Decide what's message-worthy before building — usually two or three events, not every cell change. Your team should come to associate WhatsApp pings with 'action needed', not noise.",
        ],
      },
    ],
    faq: [
      {
        q: "Does this require a Meta-approved business account?",
        a: "For messages to customers, the official WhatsApp Business API (Meta-verified) is required — templates and approvals included. For internal team alerts, flexible automation routes work immediately without approvals.",
      },
      {
        q: "Can recipients reply to these messages?",
        a: "On the official API, yes, within the 24-hour service window, and replies land in your team inbox. On flexible routes, replies can be captured back into your sheet via the log flow.",
      },
    ],
    ctaNote:
      "Your sheet, your WhatsApp, zero manual messages. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp Business API", href: "/whatsapp-business-api", description: "The official route for customer messages." },
      { title: "WhatsApp Automation Services", href: "/whatsapp-automation-services", description: "Fast, flexible WhatsApp messaging." },
      { title: "Auto-send emails from Sheets", href: "/blog/auto-send-emails-from-google-sheets", description: "The email version of this flow." },
    ],
  },
];