import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { EnhancedCallButton } from "@/components/ui/EnhancedCallButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://automateideas.in";
const SITE_NAME = "Automate Ideas";

const socials = [
  "https://www.facebook.com/profile.php?id=61575991143624",
  "https://www.instagram.com/automate_ideas",
  "https://www.linkedin.com/company/automate-ideas/",
  "https://x.com/automateideas",
  "https://www.youtube.com/@AutomateIdeas",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Business Automation Services | Automate Ideas",
  description:
    "Automate your business processes with our expert solutions. From Google Sheets automation to CRM and WhatsApp, we streamline your workflows.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: "business services",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0e",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
      telephone: "+919625598603",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/Logo.png` },
      sameAs: socials,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nandgram, Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
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
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Business automation, Google Workspace & Apps Script, WhatsApp Business API, and workflow automation services.",
      telephone: "+919625598603",
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nandgram, Ghaziabad",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: "IN",
      priceRange: "$$",
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
      <body
        className={`${roboto.className} h-screen w-full bg-[--color-background] font-[--font-primary] text-[--color-foreground] antialiased`}
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1326.0"
        data-gr-ext-installed=""
      >
        <NavBar />
        {children}
        <Footer />
        <EnhancedCallButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
