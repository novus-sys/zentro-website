import Hero from "@/components/universities/Hero";
import PlatformSelector from "@/components/universities/PlatformSelector";
import PlacementStats from "@/components/universities/PlacementStats";
import FinalCTA from "@/components/universities/FinalCTA";

export default function Universities() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-20 overflow-hidden font-body">
      <Hero />
      <PlatformSelector />
      <PlacementStats />
      <FinalCTA />
    </div>
  );
}
