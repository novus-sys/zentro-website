import { ArrowRight, Sparkles } from "lucide-react";

export default function VyomaFinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-[#070708] text-[#F5F5F2] font-jakarta overflow-hidden border-t border-[#1C1C1E]">
      {/* Subtle grid texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 245, 242, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="container max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#60A5FA] mb-8">
          <Sparkles size={13} />
          <span>START BENCHMARKING REAL ENGINEERING</span>
        </div>

        {/* Display Headline */}
        <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-8 leading-[1.05] max-w-4xl">
          Evaluate real engineering skill with Vyoma.
        </h2>

        {/* Subhead */}
        <p className="font-jakarta text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Step into the agentic era. Benchmark developer AI fluency, architecture planning, and critical review on realistic production codebases.
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            data-cal-link="sambram-k-s/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            className="w-full sm:w-auto px-8 py-4 bg-[#F5F5F2] hover:bg-white text-[#0A0A0B] text-sm font-bold rounded-full transition-all duration-200 shadow-2xl shadow-white/10 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book a 30-Min Demo</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="mailto:info@zentrosuite.com"
            className="w-full sm:w-auto px-7 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium rounded-full transition-all duration-200 flex items-center justify-center"
          >
            Contact Engineering Team
          </a>
        </div>

        {/* Guarantee metadata */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40">
          <span>✓ Setup in 10 minutes</span>
          <span>✓ No candidate installation needed</span>
          <span>✓ ATS integration included</span>
        </div>

      </div>
    </section>
  );
}
