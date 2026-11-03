"use client";

import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

const StepsSection = dynamic(() => import("@/components/sections/StepsSection"));
const EmailSection = dynamic(() => import("@/components/sections/EmailSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

const EcosystemSection = dynamic(() => import("@/components/sections/EcosystemSection"), {
  ssr: false,
});
// Server-rendered on purpose: the client names, companies and quotes in these
// two sections have to reach crawlers that do not execute JavaScript (GPTBot,
// PerplexityBot, Bingbot). dynamic() still code-splits their JS; only ssr:false
// and the LazySection wrapper would have kept them out of the HTML.
const CtaBand = dynamic(() => import("@/components/sections/CtaBand"));
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
);

export default function HomepageSections() {
  return (
    <>
      <StepsSection />
      <LazySection minHeight="420px">
        <EcosystemSection />
      </LazySection>
      <EmailSection />
      <CtaBand />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}