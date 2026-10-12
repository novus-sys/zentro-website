import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function VyomaHero() {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-14 sm:pb-20 md:pb-28 overflow-hidden bg-[#000000] text-[#F5F5F2] font-jakarta">
      {/* Main hero container */}
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Pill Badge: Vyoma by Zentro logo (pure white, clean, no AI-ish effects) */}
        <div className="mb-6 sm:mb-8 md:mb-10 inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 group shadow-lg shadow-black/40"
          >
            <span className="text-[12px] sm:text-[13px] md:text-sm font-medium text-white/80 group-hover:text-white tracking-tight transition-colors">
              Vyoma by
            </span>
            <img
              src={`${import.meta.env.BASE_URL}zentro_black_logo-removebg-preview.png`}
              alt="Zentro"
              className="h-[15px] sm:h-[17px] md:h-[19px] w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Main Editorial Headline (Hero text keeps the Instrument Serif display font, pure white) */}
        <h1 className="font-serif-display font-normal text-[32px] sm:text-5xl md:text-7xl lg:text-[84px] leading-[1.1] sm:leading-[1.08] lg:leading-[92px] tracking-tight mb-5 sm:mb-7 text-white max-w-5xl mx-auto px-1 sm:px-0">
          Hire AI-Fluent Developers for
          <br />
          <span className="text-white italic font-normal">
            the Agentic Era
          </span>
        </h1>

        {/* Subhead in Plus Jakarta Sans (Balanced 2-line layout) */}
        <p className="font-jakarta font-normal text-white/60 text-[13.5px] sm:text-[15px] md:text-base max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-1 sm:px-0">
          Evaluate developers on realistic repos, not algorithmic puzzles. Banning AI is broken —<br className="hidden sm:inline" />{" "}
          observe how engineers decompose tasks, write prompts, and audit diffs on production codebases.
        </p>

        {/* Primary Call to Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-12 sm:mb-16 md:mb-20 w-full sm:w-auto">
          <button
            type="button"
            data-cal-link="sambram-k-s/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            className="w-full sm:w-auto px-7 py-3.5 bg-[#F5F5F2] hover:bg-white text-[#0A0A0B] text-sm font-semibold rounded-full transition-all duration-200 shadow-xl shadow-white/5 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Schedule a Demo</span>
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#assessment-modes"
            className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/10 hover:border-white/20 text-sm font-medium rounded-full transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles size={14} className="text-[#60A5FA]" />
            <span>Explore Candidate Report</span>
          </a>
        </div>

        {/* ======================================================== */}
        {/* PLATFORM MOCKUP - ENTERS FROM ~80% HEIGHT OF HERO FOLD  */}
        {/* ======================================================== */}
        <div className="w-full max-w-[1120px] mx-auto relative mt-4">
          {/* Mockup Card Frame (Vorflux .hero-screenshot style) */}
          <div className="relative rounded-xl sm:rounded-2xl border border-[#2A2A2D] bg-[#121214] shadow-[0_32px_90px_-30px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Window Top Chrome */}
            <div className="h-10 px-4 bg-[#161619] border-b border-[#2A2A2D] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/40" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/40" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/40" />
                <span className="ml-3 text-[11px] font-mono text-white/40 hidden sm:inline-flex items-center gap-2">
                  <span className="text-[#3D5BFF]">●</span> zentro-assessment // repo: motor-policy-engine
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono text-white/60">
                  <span>Candidate Session</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] font-mono text-white/40">
                  Active Time: 38m
                </div>
              </div>
            </div>

            {/* Platform Mockup Image */}
            <div className="relative w-full aspect-[16/9.3] overflow-hidden bg-[#000000]">
              <img
                src={`${import.meta.env.BASE_URL}vyoma/hero-mockup.jpg`}
                alt="Vyoma AI Developer Assessment Platform IDE"
                className="w-full h-full object-cover object-top select-none pointer-events-none"
                loading="eager"
              />

              {/* Bottom fade overlay for clean transition into the metrics section */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
