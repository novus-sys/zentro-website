import { useEffect } from "react";
import VyomaSideLines from "@/components/vyoma/VyomaSideLines";
import VyomaHero from "@/components/vyoma/VyomaHero";
import VyomaMetrics from "@/components/vyoma/VyomaMetrics";
import VyomaFeatures from "@/components/vyoma/VyomaFeatures";
import VyomaAIModes from "@/components/vyoma/VyomaAIModes";
import VyomaReport from "@/components/vyoma/VyomaReport";
import VyomaDiffGrid from "@/components/vyoma/VyomaDiffGrid";
import VyomaSDLC from "@/components/vyoma/VyomaSDLC";
import VyomaTestimonials from "@/components/vyoma/VyomaTestimonials";
import VyomaFAQ from "@/components/vyoma/VyomaFAQ";
import VyomaFinalCTA from "@/components/vyoma/VyomaFinalCTA";

export default function Vyoma() {
  // Ensure page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#F5F5F2] font-jakarta antialiased selection:bg-[#3D5BFF]/30 selection:text-white">
      {/* Decorative vertical framing lines (corridor design from Vorflux & HirePrise) */}
      <VyomaSideLines />

      {/* Main page content container */}
      <main className="relative z-10 w-full overflow-x-clip">
        {/* 1. Hero Section (Mockup at 80% height, dark mode, no MeshDrift) */}
        <VyomaHero />

        {/* 2. Key Metrics Banner */}
        <VyomaMetrics />

        {/* 3. 4-Card Feature Grid (From idea to shipped code) */}
        <VyomaFeatures />

        {/* 4. Three AI Modes (HirePrise sidebar tabs + mockups) */}
        <VyomaAIModes />

        {/* 5. The Candidate Report (HirePrise 6-box grid + 3D model) */}
        <VyomaReport />

        {/* 6. Differentiation Grid (Beyond the model / 3x2 grid) */}
        <VyomaDiffGrid />

        {/* 7. Full SDLC Harness Walkthrough (Interactive 5 phases) */}
        <VyomaSDLC />

        {/* 8. Customer Testimonials Grid */}
        <VyomaTestimonials />

        {/* 9. FAQ Accordion */}
        <VyomaFAQ />

        {/* 10. Atmospheric Radial Glow Final CTA */}
        <VyomaFinalCTA />
      </main>
    </div>
  );
}
