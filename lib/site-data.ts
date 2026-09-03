import {
  Repeat,
  LayoutDashboard,
  BarChart3,
  MessageCircle,
  Smartphone,
  Search,
  Megaphone,
  TrendingUp,
  Mail,
  ShieldCheck,
  Zap,
  Crown,
  UsersRound,
  Star,
  LaptopMinimalCheck,
} from "lucide-react";

export const BOOK_CALL_URL =
  "https://calendar.app.google/tQGZDNw8JgBJekHeA";

// ── Services Data ─────────────────────────────────────────────────────────────
export const servicesData = [
  {
    name: "Google Workspace Automation",
    icon: Repeat,
    tag: "Automation",
    category: "Google Workspace",
    color: "blue",
    description:
      "Automate your entire business workflow inside Google Workspace \u2014 Sheets pipelines, Gmail triggers, Drive file management, Calendar scheduling, and cross-app automations using Apps Script.",
    highlights: [
      "Google Sheets automation & live dashboards",
      "Gmail triggers, auto-replies & notifications",
      "Google Drive document management workflows",
      "Looker Studio & intranet portals in Google Sites",
    ],
  },
  {
    name: "App Development",
    icon: LayoutDashboard,
    tag: "Development",
    category: "Google Workspace",
    color: "blue",
    description:
      "Build tailored applications \u2014 from full custom web apps using Google Apps Script to no-code mobile & web apps with AppSheet.",
    highlights: [
      "Custom web apps with Google Apps Script",
      "AppSheet mobile & web apps (no-code/low-code)",
      "CRM, project tracking & approval systems",
      "Google Forms with conditional logic & routing",
    ],
  },
  {
    name: "Data Analytics & Reporting",
    icon: BarChart3,
    tag: "Analytics",
    category: "Google Workspace",
    color: "blue",
    description:
      "Turn raw business data into clear, actionable insights. Custom Looker Studio dashboards, automated reporting pipelines, KPI tracking systems.",
    highlights: [
      "Looker Studio dashboards connected to live data",
      "Automated daily / weekly / monthly reports",
      "KPI tracking & threshold-based alerts",
      "Multi-source data consolidation in Sheets",
    ],
  },
  {
    name: "WhatsApp Business API (Meta)",
    icon: MessageCircle,
    tag: "WhatsApp Meta",
    category: "WhatsApp",
    color: "green",
    description:
      "Integrate the official WhatsApp Business Platform (Meta) into your operations. Send transactional messages, order confirmations, OTPs at scale.",
    highlights: [
      "Official Meta-verified green-tick business account",
      "Transactional messages \u2014 invoices, OTPs, alerts",
      "Automated chatbot flows & customer support",
      "CRM & Google Sheets integration",
    ],
  },
  {
    name: "WhatsApp Automation (Unofficial API)",
    icon: Smartphone,
    tag: "WhatsApp API",
    category: "WhatsApp",
    color: "green",
    description:
      "High-volume, flexible WhatsApp messaging without Meta's approval process. Send bulk notifications, automate order updates, run chatbot workflows.",
    highlights: [
      "Bulk messaging & broadcast campaigns",
      "Automated order, delivery & reminder messages",
      "Chatbot with keyword-based response flows",
      "Google Sheets & web app integration",
    ],
  },
  {
    name: "Search Engine Optimization",
    icon: Search,
    tag: "SEO",
    category: "Digital Marketing",
    color: "gold",
    description:
      "Grow your organic visibility and attract customers actively searching for your services. Technical SEO, on-page optimization, keyword research.",
    highlights: [
      "Technical SEO audit & implementation",
      "Keyword research & on-page optimization",
      "Local SEO & Google Business Profile",
      "Monthly ranking & traffic reports",
    ],
  },
  {
    name: "Social Media Management",
    icon: Megaphone,
    tag: "Social Media",
    category: "Digital Marketing",
    color: "gold",
    description:
      "Build a strong, consistent brand presence across Instagram, Facebook, LinkedIn, and more. Content calendars, design posts, manage engagement.",
    highlights: [
      "Content calendar & post scheduling",
      "Graphic design & copywriting",
      "Community management & engagement",
      "Monthly analytics & performance reports",
    ],
  },
  {
    name: "Google Ads & Paid Marketing",
    icon: TrendingUp,
    tag: "Paid Ads",
    category: "Digital Marketing",
    color: "gold",
    description:
      "Drive immediate, high-intent traffic with expertly managed Google Search, Display, and YouTube Ads. Campaign setup, audience targeting, bid optimization.",
    highlights: [
      "Google Search, Display & YouTube Ads",
      "Audience targeting & remarketing",
      "A/B testing of ad copy & creatives",
      "Conversion tracking & ROI reporting",
    ],
  },
  {
    name: "Email Marketing Campaigns",
    icon: Mail,
    tag: "Email Marketing",
    category: "Digital Marketing",
    color: "gold",
    description:
      "Design, automate, and optimize email campaigns that convert. Onboarding sequences, promotional blasts, re-engagement flows.",
    highlights: [
      "Campaign design, copywriting & scheduling",
      "Automated drip & nurture sequences",
      "List segmentation & personalization",
      "Open rate, CTR & conversion analytics",
    ],
  },
  {
    name: "Security, Compliance & Support",
    icon: ShieldCheck,
    tag: "Support",
    category: "Support",
    color: "red",
    description:
      "Keep your Google Workspace environment secure, compliant, and running smoothly. Access controls, audit trails, data loss prevention.",
    highlights: [
      "Google Workspace security audit & hardening",
      "Admin controls, roles & access management",
      "Staff training & onboarding programmes",
      "Priority ongoing support & maintenance",
    ],
  },
];

export const svcCategories = [
  {
    id: "google-workspace",
    label: "Google Workspace",
    eyebrow: "Automation & Development",
    color: "blue",
    desc: "The full power of Google Workspace \u2014 automated, extended, and customized for your exact business needs.",
    grid: "svc-grid-3",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    eyebrow: "Messaging Integration",
    color: "green",
    desc: "Connect with customers instantly and at scale. Choose the official Meta-verified platform or a flexible high-volume solution.",
    grid: "svc-grid-2",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    eyebrow: "Growth & Visibility",
    color: "gold",
    desc: "Attract, engage, and convert your ideal customers. SEO, social, paid ads, and email \u2014 all measured and optimized.",
    grid: "svc-grid-2x2",
  },
  {
    id: "support",
    label: "Security & Support",
    eyebrow: "Always-On Partnership",
    color: "red",
    desc: "Your workspace stays secure, your team stays trained, and you always have expert backup when you need it.",
    grid: "svc-grid-1",
  },
];

export const svcStats = [
  { num: "10+", label: "Services offered" },
  { num: "50+", label: "Businesses served" },
  { num: "100%", label: "Custom built" },
  { num: "4", label: "Service areas" },
];

export const C = {
  blue: {
    ey: "svc-ey-blue",
    card: "c-blue",
    num: "n-blue",
    icon: "i-blue",
    tag: "t-blue",
    hc: "hc-blue",
    tab: "svc-tab-blue",
    count: "svc-count-blue",
  },
  green: {
    ey: "svc-ey-green",
    card: "c-green",
    num: "n-green",
    icon: "i-green",
    tag: "t-green",
    hc: "hc-green",
    tab: "svc-tab-green",
    count: "svc-count-green",
  },
  gold: {
    ey: "svc-ey-gold",
    card: "c-gold",
    num: "n-gold",
    icon: "i-gold",
    tag: "t-gold",
    hc: "hc-gold",
    tab: "svc-tab-gold",
    count: "svc-count-gold",
  },
  red: {
    ey: "svc-ey-red",
    card: "c-red",
    num: "n-red",
    icon: "i-red",
    tag: "t-red",
    hc: "hc-red",
    tab: "svc-tab-red",
    count: "svc-count-red",
  },
} as const;
export type ColorKey = keyof typeof C;

// ── Pricing Data ──────────────────────────────────────────────────────────────
export const whatsappPlans = [
  {
    id: 1,
    name: "Basic",
    title: "Basic Plan",
    price: "\u20B92,499",
    period: "/ year\nexcl. GST 18%",
    credits: "10,000",
    icon: MessageCircle,
    iconClass: "pr-icon-blue",
    btnClass: "pr-plan-btn-outline",
    btnLabel: "Get Started",
    popular: false,
    badge: null,
    badgeClass: "",
    features: ["Up to 10,000 Credits", "API Access", "Basic Analytics"],
  },
  {
    id: 2,
    name: "Pro",
    title: "Pro Plan",
    price: "\u20B97,680",
    period: "/ year\nexcl. GST 18%",
    credits: "48,000",
    icon: Zap,
    iconClass: "pr-icon-red",
    btnClass: "pr-plan-btn-filled",
    btnLabel: "Get Started",
    popular: true,
    badge: "Most Popular",
    badgeClass: "",
    features: [
      "Up to 48,000 Messages",
      "Priority API Access",
      "Priority Support",
      "99.9% Uptime SLA",
    ],
  },
  {
    id: 3,
    name: "Business",
    title: "Business Plan",
    price: "\u20B912,000",
    period: "/ year\nexcl. GST 18%",
    credits: "Unlimited",
    icon: Crown,
    iconClass: "pr-icon-gold",
    btnClass: "pr-plan-btn-dark",
    btnLabel: "Contact Us",
    popular: false,
    badge: "Enterprise",
    badgeClass: "pr-badge-gold",
    features: [
      "Premium API Access",
      "Real-time Analytics",
      "Custom Integrations",
    ],
  },
];

export const customChips = [
  "Web Applications",
  "Google Sheets + WhatsApp",
  "Custom Web Forms",
  "Custom Solutions",
];

// ── About Data ────────────────────────────────────────────────────────────────
export const coreValues = [
  {
    title: "Client Focus",
    icon: UsersRound,
    iconClass: "ab-vi-green",
    desc: "We prioritize understanding your unique business needs and delivering solutions that drive real, measurable value.",
  },
  {
    title: "Innovation",
    icon: Star,
    iconClass: "ab-vi-red",
    desc: "We continuously explore new ways to automate processes and improve workflows using the latest technologies.",
  },
  {
    title: "Quality",
    icon: LaptopMinimalCheck,
    iconClass: "ab-vi-gold",
    desc: "We're committed to delivering robust, reliable solutions with attention to detail and excellent ongoing support.",
  },
];

export const techStack = [
  "Google Apps Script",
  "Google Sheets",
  "AppSheet",
  "WhatsApp API",
  "Google Drive",
  "Gmail Automation",
  "Google Forms",
  "Looker Studio",
  "Google Sites",
  "Web Applications",
  "REST APIs",
  "Data Pipelines",
];

export const aboutStats = [
  { num: "50+", label: "Clients served" },
  { num: "6+", label: "Industries" },
  { num: "100%", label: "Custom built" },
  { num: "5\u2605", label: "Avg. rating" },
];

export const teamMembers = [
  {
    name: "Amit Kumar",
    role: "Founder & Lead Developer",
    initials: "AK",
    expertise: [
      "React JS",
      "TypeScript",
      "Apps Script",
      "System Design",
      "REST APIs",
    ],
  },
  {
    name: "Maria Santos",
    role: "Automation Engineer",
    initials: "MS",
    expertise: ["AppSheet", "Google Sheets", "Data Pipelines"],
  },
  {
    name: "Daniel Osei",
    role: "Integration Specialist",
    initials: "DO",
    expertise: ["WhatsApp API", "Gmail Automation", "Looker Studio"],
  },
  {
    name: "Priya Nair",
    role: "Client Success Manager",
    initials: "PN",
    expertise: ["Project Management", "Training", "Google Sites"],
  },
];

// ── Contact Data ──────────────────────────────────────────────────────────────
export const companySizes = [
  "1-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "501-1000",
  ">1000",
];
export const interestedOptions = [
  "Google Workspace Automation",
  "Google Workspace Training",
  "FMS & PMS Services",
  "WhatsApp Automation",
  "HRMS",
  "Website",
];
export const contactItems = [
  {
    label: "Call Us",
    value: "+91 7210756879",
    icon: "/C.gif",
    href: "tel:+917210756879",
  },
  {
    label: "WhatsApp",
    value: "+91 7210756879",
    icon: "/W.gif",
    href: "https://wa.me/917210756879",
  },
  {
    label: "Email Us",
    value: "amit23kumar04@gmail.com",
    icon: "/M.gif",
    href: "mailto:amit23kumar04@gmail.com",
  },
];

// ── Testimonials Data ─────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Stockouts and order mistakes were draining us. With Automate Ideas' system, everything is now tracked live on one dashboard. Our error rate has dropped massively.",
    name: "Nitin Verma",
    title: "Vercha Jewels",
    image: "/Vercha.jpeg",
  },
  {
    quote:
      "Automate Ideas helped us cut through the chaos of handling leads, tasks, and payments manually. The Google Workspace + WhatsApp integration alone saves us several hours a week.",
    name: "Narendra Vaid",
    title: "Copier World",
    image: "/copier-world.jpg",
  },
  {
    quote:
      "Payroll, leave tracking, compliance \u2014 all of it used to eat up time we didn't have. Automate Ideas built a system that runs these processes automatically.",
    name: "Chaitanya Agrawal",
    title: "Cranex Limited",
    image: "/cranex.webp",
  },
  {
    quote:
      "Month-end used to be chaos with invoicing and GST. Now, everything flows seamlessly with Automate Ideas' automation. Reports are ready on time.",
    name: "Saurabh Khandelwal",
    title: "Dhanvi Diamonds",
    image: "/dhanvi.png",
  },
  {
    quote:
      "Our sales process finally feels modern. From order forms to receipts, every step is automated and linked with WhatsApp and Google Workspace.",
    name: "Rahul Bhagat",
    title: "Bhagat Halwai",
    image: "/Bhagat_Halwai.webp",
  },
  {
    quote:
      "Invoicing was a nightmare before \u2014 slow, error-prone, and manual. Now PDFs are generated and emailed instantly. We save hours every week.",
    name: "Raghbir Singh",
    title: "RAGHBIR ERECTORS & FABRICATORS",
    image: "/raghbir.png",
  },
];

export const marqueeItems = [
  "Workflow Automation",
  "Google Workspace",
  "WhatsApp Integration",
  "Invoice Generation",
  "Live Dashboards",
  "GST Compliance",
  "Payroll Automation",
  "Lead Management",
  "Process Design",
];

export const homeStats = [
  { num: "50+", label: "Businesses automated" },
  { num: "6+", label: "Industries served" },
  { num: "10\u00D7", label: "Faster workflows" },
];

export const wsFeatures = [
  "Automated Google Sheets reporting",
  "Drive-based document management",
  "Gmail workflow triggers & auto-replies",
  "Google Forms,  live dashboards",
];
