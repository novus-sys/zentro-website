import { useScrollReveal } from "./useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding overflow-hidden bg-background">
      <div ref={ref} className="container relative z-10 flex flex-col items-center text-center max-w-[700px] [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        {/* Badge */}
        <span
          className="inline-block font-mono text-xs text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-8">
          ✦ FREE · NO CREDIT CARD · START TODAY
        </span>

        <h2 className="font-serif-display font-normal text-[44px] leading-[1.12] tracking-tight md:text-7xl lg:text-[76px] lg:leading-[84px] mb-6 text-[#111111]">
          Start building your
          <br />
          <span className="text-[#5048E4] italic font-normal">
            Workmark
          </span>.
        </h2>

        <p className="text-slate-550 text-slate-500 text-sm md:text-base max-w-[500px] leading-relaxed mb-8 mx-auto">
          Every week you wait is a week your proof-of-work trail doesn't grow. Every challenge you skip is a story never told. Join Zentro Workmark today and start building what actually matters.
        </p>

        <div className="flex justify-center">
          <a
            href="https://tally.so/r/mZ0jgy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-650 hover:from-indigo-700 hover:to-violet-750 text-white font-sans font-bold text-sm rounded-full shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer border-none"
          >
            Join the Waitlist <ArrowRight size={16} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-text-muted mt-6">
          No credit card required · No resume needed · Just your work
        </p>
      </div>
    </section>
  );
}