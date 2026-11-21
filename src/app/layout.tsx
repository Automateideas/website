import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles.css";
import NavBar from "@/components/NavBar";
import HashScroll from "@/components/HashScroll";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { EnhancedCallButton } from "@/components/ui/EnhancedCallButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { testimonials } from "@/lib/site-data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://automateideas.in";
const SITE_NAME = "Automate Ideas";
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "automation@automateideas.in";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const socials = [
  "https://www.facebook.com/profile.php?id=61575991143624",
  "https://www.instagram.com/automate_ideas",
  "https://www.linkedin.com/company/automate-ideas/",
  "https://x.com/automateideas",
  "https://www.youtube.com/@AutomateIdeas",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Business Automation Services | Automate Ideas",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Automate Ideas is a business automation company in India offering Google Workspace automation services — Google Apps Script development, Google Sheets automation, and WhatsApp Business API integration for 50+ businesses.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: "business services",
  keywords: [
    "Google Workspace automation",
    "Google Workspace automation services",
    "Google Apps Script development",
    "Google Sheets automation services",
    "WhatsApp Business API integration",
    "WhatsApp automation services",
    "business process automation services",
    "CRM automation services",
    "AppSheet development services",
    "business automation company India",
    "business automation",
    "workflow automation India",
    "business task automation",
    "automate business tasks",
    "automate business operations",
    "business automation solutions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Business Automation Services | Automate Ideas",
    description:
      "Google Workspace automation services in India — Apps Script development, Google Sheets automation, and WhatsApp Business API integration.",
    images: [
      {
        url: "/automate-ideas-card.png",
        width: 1200,
        height: 630,
        alt: "Automate Ideas - Business Automation Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation Services | Automate Ideas",
    description:
      "Google Workspace automation services in India — Apps Script development, Google Sheets automation, and WhatsApp Business API integration.",
    images: ["/automate-ideas-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Automate Ideas",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  // Helps AI crawlers / answer engines (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)
  // understand this is a legitimate, indexable business site. Fine-grained bot rules
  // still need to be added in robots.txt separately.
  other: {
    "ai-content-declaration": "human-authored",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// ---- Structured data (JSON-LD) ----
// Includes standard SEO schema plus AEO/GEO-oriented additions:
// FAQPage (answer engines lift these directly into AI answers),
// Speakable (voice assistants), and a fuller Service/knowsAbout graph
// so LLM-based engines (ChatGPT, Gemini, Perplexity, Claude) can
// accurately summarize what the business does.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Business automation company in India offering Google Workspace automation, Google Apps Script development, Google Sheets automation, and WhatsApp Business API integration.",
      email: CONTACT_EMAIL,
      telephone: "+919625598603",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/Logo.png` },
      sameAs: socials,
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Amit Kumar",
        jobTitle: "Founder & Lead Developer",
        url: `${SITE_URL}/about`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+919625598603",
        email: CONTACT_EMAIL,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      // Client testimonials, named so answer engines can attribute them.
      // Deliberately no reviewRating / aggregateRating: no numeric rating was
      // ever collected from these clients (the five stars on the cards are
      // decoration), and inventing one would breach Google’s review
      // guidelines. Self-published reviews are not eligible for review rich
      // results either way — the value here is machine-readable attribution.
      review: testimonials.map((t) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.name,
          worksFor: { "@type": "Organization", name: t.title },
        },
        reviewBody: t.quote,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nandgram, Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Business Process Automation",
        "Google Workspace Automation",
        "Google Apps Script",
        "WhatsApp Business API",
        "CRM Automation",
        "Workflow Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${SITE_NAME} - Business Automation Agency`,
      url: SITE_URL,
      image: `${SITE_URL}/automate-ideas-card.png`,
      description:
        "Business automation, Google Workspace & Apps Script, WhatsApp Business API, and workflow automation services.",
      telephone: "+919625598603",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nandgram, Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: "IN",
      sameAs: socials,
      priceRange: "$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="msvalidate.01" content="2372E673C12F5E94C2D124164FD48251" />
        {/*
          Google Consent Mode v2 defaults — set to denied BEFORE any
          analytics/ads tag loads so nothing tracks until the visitor
          consents (compliance with DPDP Act 2023 & EU GDPR).
        */}
        <Script id="consent-mode-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 700,
            });
          `}
        </Script>

        {/* Google Tag Manager — GA4 (G-9HEQETZC6E) is loaded inside GTM, so no separate gtag.js */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="lazyOnload">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
        {/* End Google Tag Manager */}
      </head>
      <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1344.0"
        data-gr-ext-installed=""
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${syne.variable} ${dmSans.className} bg-background text-foreground h-screen w-full antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        <NavBar />
        <HashScroll />
        {children}
        <Footer />
        <EnhancedCallButton />
        <BackToTop />
        <CookieConsent />
        <ServiceWorkerRegister />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
