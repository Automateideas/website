import RevealProvider from "@/components/sections/RevealProvider";
import HeroSection from "@/components/sections/HeroSection";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import StepsSection from "@/components/sections/StepsSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import EmailSection from "@/components/sections/EmailSection";
import CtaBand from "@/components/sections/CtaBand";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <div className="ai-page">
      <RevealProvider>
        <HeroSection />
        <WorkspaceSection />
        <StepsSection />
        <EcosystemSection />
        <EmailSection />
        <CtaBand />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        {/* <div className="sec-divider">
          <div className="sec-divider-inner">
            <div className="sec-divider-line" />
            <span className="sec-divider-text">Contact Us</span>
            <div className="sec-divider-line" />
          </div>
        </div> */}
        <ContactSection />
      </RevealProvider>
    </div>
  );
}
