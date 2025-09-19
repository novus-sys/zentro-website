import Hero from "@/components/ui/neural-network-hero";
import HeroHeader from "@/components/ui/hero-header";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      <HeroHeader />
      <Hero 
        title="Zentro Suite: The Future of Business Innovation"
        description="Experience next-generation analytics powered by Artificial Intelligence. Transform your data into actionable insights with our AI-driven business suite."
        badgeText="AI-Powered Analytics"
        badgeLabel="New"
        ctaButtons={[
          { text: "Join Waitlist", href: "https://tally.so/r/mZ0jgy", primary: true, target: "_blank"}
        ]}
        microDetails={["Enterprise Ready", "Real-time Processing", "Artificial Intelligence"]}
        splineUrl="https://prod.spline.design/y9nA3V6Cm8fEp2hR/scene.splinecode"
      />
    </div>
  );
};

export default Index;
