import type { ContentPageData } from "../types";

export const whatsappAutoPage: ContentPageData = {
  type: "page",
  eyebrow: "WhatsApp Messaging",
  title: "WhatsApp Automation Services",
  subtitle:
    "Bulk WhatsApp messaging, chatbots, and order-update flows that launch fast and cost less — no Meta approval process, no waiting, no per-conversation fees. Plans start at ₹2,499/year.",
  breadcrumbs: [{ label: "Services" }],
  stats: [
    { label: "Plan from", value: "₹2,499" },
    { label: "Messages", value: "Unlimited*" },
    { label: "Launch time", value: "Days" },
  ],
  sections: [
    {
      heading: "The no-approval WhatsApp automation route",
      paragraphs: [
        "The [[official WhatsApp Business API|/whatsapp-business-api]] is the right choice for verified, transactional, compliance-critical messaging. But many businesses need to move faster: campaigns this week, bulk updates without templates, and chatbots without Meta's approval queue.",
        "Our WhatsApp automation service gives you high-volume messaging and chatbot flows on a flexible integration, with a clean dashboard, Google Sheets connectivity, and plans starting at ₹2,499 per year. You stay in control of your number and your contacts.",
      ],
    },
    {
      heading: "What's included",
      list: {
        items: [
          "Bulk messaging and broadcast campaigns to segmented contact lists.",
          "Automated order, delivery, payment, and reminder messages.",
          "Keyword-based chatbot flows that answer and capture leads 24/7.",
          "Google Sheets integration — message people, or log replies, automatically.",
          "A dashboard that tracks message status, replies, and campaign results.",
          "Media and document sending as part of your flows.",
        ],
      },
    },
    {
      heading: "Plans that fit how you send",
      table: {
        headers: ["Plan", "Best for", "Credits", "Price (per year)"],
        rows: [
          ["Basic", "Small business broadcasts", "10,000", "₹2,499"],
          ["Pro", "Active campaigns & order updates", "48,000", "₹7,680"],
          ["Business", "High-volume & unlimited messaging", "Unlimited", "₹12,000"],
        ],
      },
    },
    {
      heading: "How fast can we launch?",
      list: {
        ordered: true,
        items: [
          "You share what you want to send and to whom.",
          "We set up your number, dashboard, and first campaign in days.",
          "We test with a small list, then launch to your full contacts.",
          "We train your team and hand over with documentation.",
        ],
      },
    },
    {
      heading: "Where it shines",
      list: {
        items: [
          "Promotions and festive-season broadcasts to thousands of customers.",
          "Bulk updates — price changes, schedule changes, policy announcements.",
          "Order status automation over WhatsApp when your team is busy.",
          "Lead capture via WhatsApp from your website or ads.",
          "Follow-ups and reminders that would otherwise eat your staff's day.",
        ],
      },
    },
    {
      heading: "Official API vs this the flexible route",
      paragraphs: [
        "Choosing between the [[official WhatsApp Business API|/whatsapp-business-api]] and WhatsApp automation depends on your use case. The API is for verified transactional messaging and team inboxes; this route is for speed, cost, and flexibility. We'll recommend honestly after a few questions — and many businesses use both.",
      ],
    },
  ],
  faq: [
    {
      q: "Is WhatsApp automation against WhatsApp's rules?",
      a: "We follow industry-standard delivery practices: opt-in contacts, clear sender identity, frequency limits, and an option for recipients to stop messages. You own the number and the strategy. We're transparent about what each approach can and can't do.",
    },
    {
      q: "What does a 'credit' mean?",
      a: "One credit equals roughly one message sent. The Basic plan includes 10,000 credits per year, the Pro plan 48,000, and the Business plan is unlimited. Unused credits from campaigns balance out across the year, so you're not paying per campaign.",
    },
    {
      q: "Can I import my existing contact list?",
      a: "Yes. We import your contacts from Google Sheets, Excel, or your CRM, clean duplicates, and let you segment by label — for example, 'customers', 'repeat buyers', or 'festive list'.",
    },
    {
      q: "Will my WhatsApp number get blocked?",
      a: "Numbers get blocked when recipients report messages at high volume. We keep your sending within safe thresholds, honour opt-outs, and rotate or manage messages to minimise risk — while being upfront that broadcast WhatsApp carries more risk than official channels.",
    },
    {
      q: "Can it integrate with Google Sheets?",
      a: "Yes — this is one of our most-used integrations. A new row in your sheet can trigger a WhatsApp message, and replies can be logged straight back into the sheet. See [[Sheets + WhatsApp notifications|/blog/google-sheets-to-whatsapp-notifications]] for examples.",
    },
  ],
  ctaNote:
    "Need to reach 10,000 customers on WhatsApp next week? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll have a plan (and a price) for you today.",
  relatedLinks: [
    {
      title: "WhatsApp Business API (Meta)",
      href: "/whatsapp-business-api",
      description: "The official, verified route for transactional messaging.",
    },
    {
      title: "Bulk WhatsApp without getting blocked",
      href: "/blog/send-bulk-whatsapp-messages-without-getting-blocked",
      description: "Safe delivery practices that protect your number.",
    },
    {
      title: "Sheets to WhatsApp notifications",
      href: "/blog/google-sheets-to-whatsapp-notifications",
      description: "Trigger WhatsApp messages from a simple spreadsheet row.",
    },
  ],
};