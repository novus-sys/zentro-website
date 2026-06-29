import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Problem from "@/components/landing/Problem";
import BentoGrid from "@/components/landing/BentoGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import ActivityFeed from "@/components/landing/ActivityFeed";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import ForUniversities from "@/components/landing/ForUniversities";
import FinalCTA from "@/components/landing/FinalCTA";

export default function WorkmarkCreator() {
  return (
    <div className="grain-overlay min-h-screen bg-background text-foreground">
      <Hero />
      <SocialProof />
      <Problem />
      <BentoGrid />
      <HowItWorks />
      <ActivityFeed />
      <Benefits />
      <Testimonials />
      <ForUniversities />
      <FinalCTA />
    </div>
  );
}
