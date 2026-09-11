import RevealProvider from "@/components/sections/RevealProvider";
import HeroSection from "@/components/sections/HeroSection";
import WorkspaceSection from "@/components/sections/WorkspaceSection";
import HomepageSections from "@/components/HomepageSections";

export default function Page() {
  return (
    <div className="ai-page">
      <RevealProvider>
        <HeroSection />
        <WorkspaceSection />
        <HomepageSections />
      </RevealProvider>
    </div>
  );
}