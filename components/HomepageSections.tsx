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
const CtaBand = dynamic(() => import("@/components/sections/CtaBand"), {
  ssr: false,
});
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  { ssr: false },
);

export default function HomepageSections() {
  return (
    <>
      <StepsSection />
      <LazySection minHeight="420px">
        <EcosystemSection />
      </LazySection>
      <EmailSection />
      <LazySection minHeight="180px">
        <CtaBand />
      </LazySection>
      <ServicesSection />
      <LazySection minHeight="420px">
        <TestimonialsSection />
      </LazySection>
      <PricingSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}