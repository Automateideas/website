import type { BlogArticle } from "./apps-script";

export const businessArticles: BlogArticle[] = [
  {
    type: "blog",
    slug: "small-business-automation-guide",
    cardTitle: "Small business automation guide",
    cardDesc: "The 7 processes to automate first (in order of ROI).",
    cluster: "Business",
    eyebrow: "Blog · Business",
    title: "Small business automation: the 7 processes to automate first",
    subtitle:
      "You don't automate everything at once — you automate where the hours and errors actually are. Here are the seven processes small businesses get the most ROI from, in the order we'd tackle them.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-08",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "9 min",
    tags: ["Automation", "Small Business", "Strategy"],
    sections: [
      {
        heading: "The mistake every automation-skeptic makes",
        paragraphs: [
          "Either 'automation is a big scary project' (so do nothing, keep paying the manual tax) or 'automate everything now' (so build five systems that don't get used). The honest answer is smaller, and the ROI order matters more than the feature list.",
          "Start where the cost is concentrated: money-handling, compliance, and customer contact. Those three are where errors are expensive and automation is visible.",
        ],
      },
      {
        heading: "1. Invoicing & billing",
        paragraphs: [
          "Invoices touch revenue, GST, and customers — the worst combination to get wrong manually. An invoice generator that creates, emails, and logs the PDF on order confirmation is the single most proven automation we ship. See [[how it works in Sheets|/blog/auto-send-emails-from-google-sheets]].",
        ],
      },
      {
        heading: "2. Lead capture & follow-up",
        paragraphs: [
          "A lead is worthless the moment it goes cold. A Google Form plus a [[Sheets-based CRM|/blog/build-a-google-apps-script-crm]] captures enquiries from every channel and schedules the follow-up so nobody is 'going to get to it later'.",
        ],
      },
      {
        heading: "3. Inventory & stock alerts",
        paragraphs: [
          "Stockouts lose sales; over-stock ties up cash. A live inventory sheet with reorder alerts keeps you buying on data, not on gut feel — often the difference between a comfortable and a chaotic month.",
        ],
      },
      {
        heading: "4. Attendance & payroll",
        paragraphs: [
          "For 10+ staff, attendance, leave, and payroll become a weekly tax on your admin people. Form-based attendance and auto-calculated payroll turn three days a month into an hour. That's the [[Cranex-style system|/case-studies/cranex-limited]].",
        ],
      },
      {
        heading: "5. Reporting",
        paragraphs: [
          "Your own numbers, delivered automatically: daily sales, collections, stock, team performance. A self-compiling report is the automation that starts informing every decision — not because anyone remembered to build it, but because it arrives.",
        ],
      },
      {
        heading: "6. WhatsApp & email notifications",
        paragraphs: [
          "Order updates, delivery confirmations, payment reminders. When your sheet or CRM changes, a message goes out — via email or [[WhatsApp|/whatsapp-business-api]]. This is the automation customers actually feel.",
        ],
      },
      {
        heading: "7. Back-office documents",
        paragraphs: [
          "Contracts, offer letters, PO documents, certificates — templates plus data equals instant paperwork. Boring, invisible, and endlessly valuable.",
        ],
      },
      {
        heading: "Sequencing them like a pro",
        paragraphs: [
          "Do #1 and #2 first (revenue and customers). Add #3 and #6 when they're stable (stock and communication). Add #4 and #5 when the team grows (compliance and visibility). Two systems live and used beat eight systems built and ignored.",
          "We build by this exact sequence, so a client typically runs the first automation within a couple of weeks — see the [[service|/google-apps-script-development]] description for how an engagement is scoped.",
        ],
      },
    ],
    faq: [
      {
        q: "What's the cheapest automation to start with?",
        a: "Invoicing in Google Sheets, for us, is the highest ROI-to-cost ratio. It's live in days, touches money daily, and costs a fraction of what one invoice mistake costs in rework.",
      },
      {
        q: "Do I need to plan the whole roadmap first?",
        a: "No. Pick the process that hurts most this month. The others become easier to sequence once one system is live — automations naturally share data, and you'll see the next step clearly.",
      },
    ],
    ctaNote:
      "Want this seven-step sequence mapped to your business? [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "Apps Script automation examples", href: "/blog/google-apps-script-automation-examples", description: "The twelve most common builds." },
      { title: "Sheets automation examples", href: "/blog/google-sheets-automation-business-examples", description: "Workflows for Indian businesses." },
      { title: "About Automate Ideas", href: "/about", description: "Who builds yours and how." },
    ],
  },
];

export const blogIndexData = {
  eyebrow: "Insights",
  title: "The Automate Ideas Blog",
  subtitle:
    "Practical, no-fluff guides on Google Workspace automation, Google Sheets, and WhatsApp for small and mid-size businesses in India.",
};