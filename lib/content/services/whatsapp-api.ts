import type { ContentPageData } from "../types";

export const whatsappApiPage: ContentPageData = {
  type: "page",
  eyebrow: "WhatsApp Messaging",
  title: "WhatsApp Business API",
  subtitle:
    "Go official with Meta's WhatsApp Business Platform — verify your business, send transactional messages, OTPs, order updates, and automated chatbot flows at scale, with a green-tick account your customers can trust.",
  breadcrumbs: [{ label: "Services" }],
  keywords: [
    "WhatsApp Business API integration",
    "WhatsApp Business API India",
    "WhatsApp chatbot development",
    "WhatsApp CRM integration",
    "WhatsApp automation services",
  ],
  stats: [
    { label: "Official platform", value: "Meta" },
    { label: "Message delivery", value: "99%" },
    { label: "Setup handled", value: "100%" },
  ],
  sections: [
    {
      heading: "What is the WhatsApp Business API?",
      paragraphs: [
        "The WhatsApp Business API is Meta's official platform for sending messages to customers at scale. Unlike the WhatsApp Business app, it's built for automation: delivery confirmations, appointment reminders, invoices, OTPs, and chatbot conversations — all triggered automatically and tracked in one dashboard.",
        "There are two ways to use WhatsApp for business messaging. The official API needs Meta verification and approved templates. The [[flexible high-volume solution|/whatsapp-automation-services]] skips that approval process for businesses that need to move fast. This page covers the official route.",
      ],
    },
    {
      heading: "Why go official with Meta",
      list: {
        items: [
          "A verified business account with the green tick that builds trust with customers.",
          "Transactional messages — invoices, OTPs, alerts — that work even outside the 24-hour customer window.",
          "Full compliance with WhatsApp and Meta policies, so your number isn't at risk of being blocked.",
          "Official dashboard with templates, analytics, and conversation history.",
          "Multi-agent team inbox so enquiries don't slip through the cracks.",
        ],
      },
    },
    {
      heading: "What we set up for you",
      list: {
        items: [
          "Meta Business verification and WhatsApp Business API approval — we handle the paperwork and tech.",
          "A branded WhatsApp profile with your logo, description, and business hours.",
          "Message templates written and submitted for Meta approval.",
          "A chatbot flow builder for instant replies, FAQs, and lead capturing.",
          "[[Google Sheets integration|/google-sheets-automation]] so conversations and leads save themselves.",
          "Team inbox setup with multiple agents and shared customer history.",
        ],
      },
    },
    {
      heading: "What you can automate",
      list: {
        items: [
          "Order and delivery confirmations sent the moment your system updates.",
          "Appointment reminders and no-show recovery messages.",
          "Invoice, receipt, and document delivery in chat.",
          "Payment follow-ups and failed-payment alerts.",
          "OTP and one-time verification codes.",
          "Always-on chatbot replies when your team is offline.",
        ],
      },
    },
    {
      heading: "Pricing at a glance",
      paragraphs: [
        "You pay Meta for conversation fees, plus a small platform fee. We keep the total simpler than most: choose a plan that fits your message volume — from the Basic plan for businesses starting out, to Advanced plans with AI (ChatGPT/Dialogflow) chatbots and 10-agent team inboxes.",
      ],
      table: {
        headers: ["Plan", "Ideal for", "Price (per year)"],
        rows: [
          ["Basic", "Businesses starting WhatsApp automation", "₹12,000"],
          ["Standard", "Growing teams needing chatbots & inbox", "₹24,000"],
          ["Advanced", "AI chatbots, multi-agent inbox, full automation", "₹36,000"],
          ["Enterprise", "Large-scale, custom integrations", "Custom quote"],
        ],
      },
    },
    {
      heading: "The WhatsApp Automation alternative",
      paragraphs: [
        "If you don't need Meta verification and want maximum flexibility with bulk messaging and chatbot flows right now, we also offer [[WhatsApp automation on the unofficial API|/whatsapp-automation-services]]. It's faster to launch, cheaper for high-volume broadcast, and ideal for campaigns — with orders starting at ₹2,499/year.",
      ],
    },
  ],
  faq: [
    {
      q: "How long does WhatsApp Business API approval take?",
      a: "Meta verification usually completes within a few days to two weeks. We prepare your business documents and brand assets in advance, submit everything correctly the first time, and chase approvals for you so nothing sits in a queue.",
    },
    {
      q: "Do I need a new phone number for the Business API?",
      a: "Yes, you'll typically use a number (or numbers) that can't be actively used by the WhatsApp Business app at the same time. We help you choose numbers, set up the routing, and migrate your contacts and business profile cleanly.",
    },
    {
      q: "Can customers still reply to messages?",
      a: "Yes. Messages you send open a 24-hour customer-service window in which your team can reply in an inbox that supports multiple agents. Beyond that window you reach customers again with approved templates.",
    },
    {
      q: "Is the WhatsApp Business API better than the Business app?",
      a: "For automation, scale, and multiple agents — yes, decisively. The app is manual and limited to broadcasting to labels. The API automates everything and keeps a clean message-delivery history. See our comparison of [[API vs app|/blog/whatsapp-business-api-vs-whatsapp-for-business-app]] for the details.",
    },
    {
      q: "What about WhatsApp message pricing?",
      a: "Meta charges per conversation, split between marketing, utility, and service categories. We design your flows to mostly use utility and service conversations, which keeps costs far lower than most businesses expect.",
    },
  ],
  ctaNote:
    "Want a verified WhatsApp business account that sends messages automatically? [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]] and we'll map your setup in one sitting.",
  relatedLinks: [
    {
      title: "WhatsApp Automation (Unofficial API)",
      href: "/whatsapp-automation-services",
      description: "Fast, flexible bulk messaging without Meta's approval process.",
    },
    {
      title: "WhatsApp Business API pricing & setup",
      href: "/blog/whatsapp-business-api-pricing-and-setup",
      description: "Everything costs before you start — including Meta fees.",
    },
    {
      title: "How to send bulk messages without getting blocked",
      href: "/blog/send-bulk-whatsapp-messages-without-getting-blocked",
      description: "Compliance-safe strategies for WhatsApp outreach.",
    },
  ],
};