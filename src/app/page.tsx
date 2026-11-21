import RevealProvider from "@/components/sections/RevealProvider";
import HeroSection from "@/components/sections/HeroSection";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import HomepageSections from "@/components/HomepageSections";
import { faqItems } from "@/lib/site-data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://automateideas.in";

/**
 * Home-page-only structured data.
 *
 * These two nodes used to sit in the root layout, which meant every URL on the
 * site claimed the home page's FAQ and declared a WebPage whose url was "/".
 * The FAQ section only renders here, so the markup belongs here.
 *
 * On FAQPage: Google retired FAQ rich results on 7 May 2026, so this earns no
 * rich result. It stays because the answer engines we care about (AI Overviews,
 * Perplexity, ChatGPT) still read it, and it describes a real, visible FAQ
 * section on this page.
 */
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      // Speakable: which passages suit a voice / AI assistant readout.
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-sub"],
      },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Page() {
  return (
    <div className="ai-page">
      <RevealProvider>
        <HeroSection />
        <WorkspaceSection />
        <HomepageSections />
      </RevealProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </div>
  );
}
