import Hero from "@/components/ui/neural-network-hero";
import HeroHeader from "@/components/ui/hero-header";
import TechStack from "@/components/ui/tech-stack";
import ProblemStatement from "@/components/ui/problem-statement";
import SolutionOverview from "@/components/ui/solution-overview";
import FeatureHighlights from "@/components/ui/feature-highlights";
import FAQSection from "@/components/ui/faq-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      <HeroHeader />
      <Hero 
        title="Zentro Suite: The Future of Organisational Innovation"
        description="Transform your organisation's innovation pipeline with AI-powered idea management."
        badgeText="AI-Powered Innovation"
        badgeLabel="New"
        ctaButtons={[
          { text: "Join Waitlist", href: "https://tally.so/r/mZ0jgy", primary: true, target: "_blank"}
        ]}
        microDetails={["Organisation Ready", "Real-time Evaluation", "Intelligent Processing"]}
        splineUrl="https://prod.spline.design/y9nA3V6Cm8fEp2hR/scene.splinecode"
      />
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="problem">
        <ProblemStatement />
      </div>
      <div id="solution">
        <SolutionOverview />
      </div>
      <div id="features">
        <FeatureHighlights />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
