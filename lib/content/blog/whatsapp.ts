import type { BlogArticle } from "./apps-script";

export const whatsappArticles: BlogArticle[] = [
  {
    type: "blog",
    slug: "whatsapp-business-api-pricing-and-setup",
    cardTitle: "WhatsApp Business API: pricing & setup",
    cardDesc: "What it actually costs and how to get approved.",
    cluster: "WhatsApp",
    eyebrow: "Blog · WhatsApp Business API",
    title: "WhatsApp Business API: pricing and setup, explained",
    subtitle:
      "The WhatsApp Business API has setup steps, template approvals, and conversation pricing. Here's an honest breakdown of what it costs and how getting started actually works.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-11",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "9 min",
    tags: ["WhatsApp", "Business API", "Pricing"],
    sections: [
      {
        heading: "The three costs people don't expect",
        paragraphs: [
          "Most businesses ask 'what does the WhatsApp Business API cost?' and expect one number. There are actually three:",
        ],
        list: {
          items: [
            "The business setup — a verified Meta Business account, business verification, BSP (Business Solution Provider) onboarding. In our plan, that's bundled and includes the platform you run on.",
            "Meta's conversation fees — Meta charges roughly ₹0.2–₹1.3 per conversation depending on category and destination; plus a price per message at some providers.",
            "The platform — dashboard, chatbot builder, team inbox, templates. Paid per year, or free on open-source BSPs at the cost of your own engineering time.",
          ],
        },
      },
      {
        heading: "How conversation pricing works",
        paragraphs: [
          "Meta prices per conversation (a 24-hour thread with one customer), not per message, and rates are set by the conversation's category: service, utility, or marketing. Marketing costs more than utility; utility more than service.",
          "Well-designed flows mostly use service and utility conversations — order updates, OTPs, confirmations — which is why well-built integrations cost a fraction of what marketers imagine. Broadcast marketing campaigns are the expensive ones, and they're also the ones most likely to face template scrutiny.",
        ],
      },
      {
        heading: "The setup checklist",
        list: {
          items: [
            "Meta Business Manager with your company details and a website.",
            "Business verification — identity and legal documents approved by Meta.",
            "A WhatsApp Business number (or multiple) not in active app use.",
            "Message templates written and approved — each template is a 'free-form' or catalog-based model that must pass Meta review.",
            "A BSP or platform to send through — dashboard, API keys, webhooks.",
            "Testing with a small recipient list before going live.",
          ],
        },
      },
      {
        heading: "Timelines and gotchas",
        paragraphs: [
          "Verification is the long pole: typically days to two weeks. Template approvals vary — marketing templates get the most scrutiny. The biggest gotcha is a spike in message reports: send too aggressively too fast and Meta pauses or bans the number. Realistic ramping and quality content matter more than clever setup.",
          "That's why nearly every failure in WhatsApp automation is a 'sent too much, too fast' failure, not a technical one. See [[how to send bulk messages without getting blocked|/blog/send-bulk-whatsapp-messages-without-getting-blocked]] for the full playbook.",
        ],
      },
      {
        heading: "What we'd quote for you",
        paragraphs: [
          "For Indian small businesses, our plans bundle the platform and onboarding: the Basic plan from ₹12,000/year for starting out, Standard at ₹24,000 with chatbots and inbox, and Advanced from ₹36,000 with AI (ChatGPT / Dialogflow) and 10 agents. Meta's per-conversation fees apply on top at the platform's actual rates.",
          "If you don't need Meta verification and want faster, cheaper broadcast messaging, the [[WhatsApp automation route|/whatsapp-automation-services]] starts at ₹2,499/year. We'll recommend honestly which fits your use case.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I avoid Meta conversation fees?",
        a: "Meta's fees are fixed by WhatsApp and apply to every provider. Service conversations are the cheapest; designing your flows to use them keeps the total low.",
      },
      {
        q: "How long until my number is verified?",
        a: "Typically a few days to two weeks. We prepare documents and brand assets in advance and chase approvals so you're not waiting in queues.",
      },
    ],
    ctaNote:
      "Setup done for you, approvals chased, no guesswork. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp Business API service", href: "/whatsapp-business-api", description: "We handle the whole setup." },
      { title: "API vs Business app", href: "/blog/whatsapp-business-api-vs-whatsapp-for-business-app", description: "Which one do you actually need?" },
      { title: "WhatsApp Automation services", href: "/whatsapp-automation-services", description: "The fast, no-approval route." },
    ],
  },
  {
    type: "blog",
    slug: "whatsapp-messages-headers-or-marketing-template",
    cardTitle: "WhatsApp template messages decoded",
    cardDesc: "Header, photo, text template? Which to use when.",
    cluster: "WhatsApp",
    eyebrow: "Blog · WhatsApp Messages",
    title: "WhatsApp messages: header, or marketing template? Choosing correctly",
    subtitle:
      "Between a free-form template, a header message, and a marketing template, your inbox's economics and approval chances change. Here's how to pick the right WhatsApp message type for the job.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-10",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["WhatsApp", "Templates", "Messaging"],
    sections: [
      {
        heading: "The taxonomy of WhatsApp messages",
        paragraphs: [
          "On the WhatsApp Business API there are two broad families of outbound message: session messages (within the 24-hour window after a customer messages you — unlimited, cheap, use whatever you like) and template messages (beyond the window — pre-approved, structured, priced by category).",
          "Basically every 'can we WhatsApp them?' question is a template-message question. And that's where header vs marketing actually matters.",
        ],
      },
      {
        heading: "Free-form vs header templates",
        list: {
          items: [
            "Free-form template — plain body text, no header. Cheapest, easiest to approve, good for transactional notes.",
            "Header template — adds a small pre-header line (e.g. 'Order #4821'). Costs a couple of rupees more, useful when you need a stable, scannable label above changing body text.",
            "Media templates — header is an image/video; used for product visuals, receipts, or brochures.",
          ],
        },
      },
      {
        heading: "Where the word 'marketing' bites",
        paragraphs: [
          "Meta classifies template messages by content. Anything promotional — discounts, festive offers, announcements, 'come back' messages — is marketing, priced around 2–3× utility rates and the most scrutinised at approval and the most likely to drive user complaints.",
          "A very common mistake: businesses create one 'marketing' template because they think in categories, then pay the highest rate for routine messages — money and approval risk that a simple re-word to utility or service language avoids.",
        ],
      },
      {
        heading: "Our default cheat-sheet",
        table: {
          headers: ["Message", "Best type"],
          rows: [
            ["Order / delivery / invoice update", "Utility (free-form body)"],
            ["OTP / verification", "Utility (free-form)"],
            ["Receipt with a stable label", "Utility (header)"],
            ["Product photo + price + CTA", "Marketing (media)"],
            ["Festive discount broadcast", "Marketing (free-form)"],
            ["Reply to a customer question", "Session message (no template)"],
          ],
        },
      },
      {
        heading: "The cheap trick: session messages",
        paragraphs: [
          "Because session messages (the 24-hour window after a customer contacts you) are unlimited and often free/service-priced, the cheapest '[WhatsApp] strategy is to start conversations', not to bore your list. Notifications people expect — 'your order is arriving' — are utility work; broadcast ads are marketing work. Keep the two lanes distinct and your costs drop.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I send marketing messages without approval?",
        a: "Template approval applies to all outbound non-session messages on the official API. On the flexible WhatsApp automation route, there's no template approval — one reason it wins for fast campaigns.",
      },
      {
        q: "Does the header template cost meaningfully more?",
        a: "A few paise to a rupee more per message depending on destination. Use it only where the label adds real value; most transactional notes are fine free-form.",
      },
    ],
    ctaNote:
      "Choosing templates blind wastes money. Let us map your message plan. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp Business API", href: "/whatsapp-business-api", description: "The official platform, set up for you." },
      { title: "Pricing & setup explained", href: "/blog/whatsapp-business-api-pricing-and-setup", description: "The costs behind the messages." },
      { title: "WhatsApp Automation", href: "/whatsapp-automation-services", description: "No-approval bulk messaging." },
    ],
  },
  {
    type: "blog",
    slug: "send-bulk-whatsapp-messages-without-getting-blocked",
    cardTitle: "Bulk WhatsApp without getting blocked",
    cardDesc: "The compliance playbook for WhatsApp outreach.",
    cluster: "WhatsApp",
    eyebrow: "Blog · WhatsApp Messaging",
    title: "How to send bulk WhatsApp messages without getting blocked",
    subtitle:
      "Numbers get blocked because recipients report and Meta acts. Here's the delivery playbook that keeps your number alive for bulk WhatsApp campaigns.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-09",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "8 min",
    tags: ["WhatsApp", "Bulk Messaging", "Compliance"],
    sections: [
      {
        heading: "How numbers actually get blocked",
        paragraphs: [
          "WhatsApp doesn't block a number because you 'sent 5,000 messages today'. It blocks when a high proportion of those messages are reported as spam or unwanted — reports are the real signal, and volume is only a proxy for them.",
          "So the whole game is: keep recipients happy enough that, whatever they do with your message, they don't tap 'report spam'. That's a content and relevance problem more than a technical one.",
        ],
      },
      {
        heading: "The opt-in foundation",
        list: {
          items: [
            "Send only to people who genuinely asked or expect it — an order or purchase is opt-in for transactional updates.",
            "Keep a documented, clean list. Purchased lists are the fastest route to the blocklist.",
            "Promotional messages to people who never heard of you? That's spam, by definition.",
          ],
        },
      },
      {
        heading: "The delivery playbook",
        list: {
          items: [
            "Start slow — new numbers ramp: nobody from cold volume on day one.",
            "Use a warmup — send to 10–20% of the list first, watch results, scale gradually.",
            "Segment — your 'repeat buyers' list and your 'festive enquiry' list are different audiences with different copy.",
            "Time it right — workplace hours beat weekends for B2B; festival timing changes everything in India.",
            "Always include a stop path — an opt-out reply that's actually honoured.",
            "Delete hard bounces and 'stopped' contacts from the list immediately.",
          ],
        },
      },
      {
        heading: "Official API vs flexible route",
        paragraphs: [
          "The [[official WhatsApp Business API|/whatsapp-business-api]] bakes in compliance: approved templates, quality rating on the number, and Meta watching engagement. It's the safe home for transactional marketing at scale. The [[flexible automation route|/whatsapp-automation-services]] is faster and cheaper for campaigns but puts delivery discipline on you and your provider — opt-in matters even more there.",
          "Honestly: if it's customer money and customer trust on the line, official. If it's an internal team broadcast or a short campaign, flexible.",
        ],
      },
      {
        heading: "What happens if it goes wrong",
        paragraphs: [
          "If a number gets restricted, you typically get a warning period, then limitation, then block. Acting early — adequate copy, remove complaint sources, pause honing — can restore it. A permanent block means a new number, a new warm-up, and lost message history. Prevention beats recovery by miles.",
        ],
      },
    ],
    faq: [
      {
        q: "Is bulk WhatsApp legal?",
        a: "Legal when it's genuine, user-initiated communication with opt-in and opt-out, and aligned with platform policies. An unsolicited broadcast to a purchased list is both a platform and (under India's DPDP Act) a compliance problem.",
      },
      {
        q: "What's a safe message volume per day?",
        a: "There's no magic number — it's a ratio. A trusted number with a good quality rating can send a lot; a cold number cannot. We ramp based on reply/report ratios, not arbitrary caps.",
      },
    ],
    ctaNote:
      "Run your first campaign safely — we'll handle the warmup and the list hygiene. [[Book a free audit|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp automation services", href: "/whatsapp-automation-services", description: "Campaigns done right, fast." },
      { title: "WhatsApp Business API", href: "/whatsapp-business-api", description: "The compliant route for scale." },
      { title: "Sheets to WhatsApp alerts", href: "/blog/google-sheets-to-whatsapp-notifications", description: "Automated, targeted messaging." },
    ],
  },
  {
    type: "blog",
    slug: "whatsapp-business-api-vs-whatsapp-for-business-app",
    cardTitle: "WhatsApp API vs Business app",
    cardDesc: "Which WhatsApp tool does your business actually need?",
    cluster: "WhatsApp",
    eyebrow: "Blog · WhatsApp",
    title: "WhatsApp Business API vs WhatsApp Business app: which do you need?",
    subtitle:
      "One is a manual tool with labels, the other is a platform for automation. If your business is deciding between the WhatsApp Business app and the official API, this is the decision tree.",
    breadcrumbs: [{ label: "Blog", href: "/blog" }],
    publishedDate: "2026-09-08",
    updatedDate: "2026-09-11",
    author: { name: "Amit Kumar", role: "Founder & Lead Developer" },
    readTime: "7 min",
    tags: ["WhatsApp", "Business App", "API"],
    sections: [
      {
        heading: "The two tools in one picture",
        paragraphs: [
          "WhatsApp Business app is a free mobile/desktop app: one number, a catalogue, quick replies, labels, and broadcasts to groups you choose manually. WhatsApp Business API (the official platform, Meta-verified) is a programmable service: templates, chatbots, team inbox, integrations, and per-conversation pricing.",
          "A rough translation: the app is Instagram stories; the API is a CRM with a messaging engine. Both are official WhatsApp — the app isn't 'less legal', it's just manual.",
        ],
      },
      {
        heading: "When the app is enough",
        list: {
          items: [
            "Under ~50–150 messages a day and one or two people handling it.",
            "You want manual replies with a professional profile (catalogue, hours, labels).",
            "No automation, no integrations, no team inbox needed.",
            "You don't need messaging beyond the 24-hour reply window.",
          ],
        },
      },
      {
        heading: "When you need the API",
        list: {
          items: [
            "Automated sends — order updates, OTPs, invoices, confirmations.",
            "Scale — bulk messages without manual tapping.",
            "Multiple agents — a shared inbox with histories and ownership.",
            "Integration — with Sheets, CRM, webhooks, or your own systems.",
            "Transactional reach — messaging customers outside the 24-hour window.",
          ],
        },
      },
      {
        heading: "And the third option: flexible WhatsApp automation",
        paragraphs: [
          "There's a third lane most businesses never hear about: the [[WhatsApp automation route|/whatsapp-automation-services]] — fast, flexible bulk messaging without Meta's approval process. It's the middle ground: more power than the app, less compliance ceremony than the API. For campaigns and internal alerts it's often the right size.",
        ],
      },
      {
        heading: "The decision tree",
        list: {
          items: [
            "Just need a nicer profile and manual replies? → WhatsApp Business app.",
            "Need order updates, bots, or a team inbox at scale? → [[WhatsApp Business API|/whatsapp-business-api]].",
            "Need to broadcast fast and cheap without approval queues? → [[WhatsApp automation|/whatsapp-automation-services]].",
            "Same-and-same but different? → Many businesses genuinely use two.",
          ],
        },
      },
    ],
    faq: [
      {
        q: "Can I use the app and the API on the same number?",
        a: "Not on the same number at the same time. The API number is managed by the platform; the app is owned by the phone. Businesses typically keep a small 'human' number and a separate API number.",
      },
      {
        q: "Is switching from app to API hard?",
        a: "Not technically — but it needs number planning, template approvals, and a documented migration so customer history isn't lost. We handle that as part of the [[WhatsApp Business API setup|/whatsapp-business-api]].",
      },
    ],
    ctaNote:
      "Not sure which route fits? 20 minutes on a call settles it. [[Book a free call|https://calendar.app.google/tQGZDNw8JgBJekHeA]].",
    relatedLinks: [
      { title: "WhatsApp Business API", href: "/whatsapp-business-api", description: "Automation, scale, team inbox." },
      { title: "WhatsApp Automation services", href: "/whatsapp-automation-services", description: "The flexible middle route." },
      { title: "Pricing & setup", href: "/blog/whatsapp-business-api-pricing-and-setup", description: "What either route costs." },
    ],
  },
];