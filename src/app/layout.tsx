import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { EnhancedCallButton } from "@/components/ui/EnhancedCallButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { faqItems } from "@/lib/site-data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
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
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
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
    "Automate your business processes with our expert solutions. From Google Sheets automation to CRM and WhatsApp, we streamline your workflows.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: "business services",
  keywords: [
    "business automation",
    "Google Sheets automation",
    "Apps Script automation",
    "WhatsApp Business API",
    "CRM automation",
    "workflow automation India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Business Automation Services | Automate Ideas",
    description:
      "Transform your business with our comprehensive automation services.",
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
      "Transform your business with our comprehensive automation services.",
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
      email: CONTACT_EMAIL,
      telephone: "+919625598603",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/Logo.png` },
      sameAs: socials,
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
      priceRange: "$$",
    },
    // AEO/GEO: FAQPage schema — answer engines (Google AI Overviews,
    // Perplexity, ChatGPT browsing, Gemini) frequently lift Q&A pairs
    // like this directly into generated answers. Content is read from
    // lib/site-data `faqItems` so it always matches the on-page FAQ.
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    // AEO/GEO: Speakable — signals which content is suited for
    // voice/AI assistant readout.
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-sub"],
      },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
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
        {/*
          Google Consent Mode v2 defaults — set to denied BEFORE any
          analytics/ads tag loads so nothing tracks until the visitor
          consents (compliance with DPDP Act 2023 & EU GDPR).
        */}
        <Script id="consent-mode-defaults">
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9HEQETZC6E"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9HEQETZC6E');
          `}
        </Script>
        {/* End Google tag (gtag.js) */}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
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
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${dmSans.className} h-screen w-full bg-[--color-background] text-[--color-foreground] antialiased`}
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
        {children}
        <Footer />
        <EnhancedCallButton />
        <BackToTop />
        <CookieConsent />
        <ServiceWorkerRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
