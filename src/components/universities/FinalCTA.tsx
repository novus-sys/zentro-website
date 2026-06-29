import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 font-body">
      <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mb-6">
          Ready to Supercharge Your Campus Career Outcomes?
        </h2>
        <p className="text-slate-550 text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Join top-tier universities utilizing Zentro Workmark to replace manual spreadsheets with AI-validated profiles, automated evaluation structures, and data-driven company placements.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0F294A] hover:bg-[#071629] text-white text-sm font-bold rounded-full transition-all shadow-sm shadow-[#0F294A]/10 hover:scale-[1.02] flex items-center gap-2 cursor-pointer border-none"
          >
            Schedule an Institutional Demo <ArrowRight size={16} />
          </a>
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-bold rounded-full transition-all shadow-xs cursor-pointer"
          >
            Talk to our Placement Experts
          </a>
        </div>
      </div>
    </section>
  );
}
