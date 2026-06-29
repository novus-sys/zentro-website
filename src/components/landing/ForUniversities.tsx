import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

export default function ForUniversities() {
  const ref = useScrollReveal();

  return (
    <section id="for-universities" className="relative section-padding bg-surface-1">
      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <GlowCard accent="zentro-card-accent" className="p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="eyebrow text-primary mb-4 block">FOR INSTITUTIONS</span>
              <h2 className="font-display font-bold text-3xl md:text-[36px] text-foreground leading-tight mb-4">
                Partner with Zentro Workmark
              </h2>
              <p className="font-body text-text-secondary text-[17px] leading-relaxed mb-6">
                Universities and colleges can post innovation challenges, access student talent analytics, and track campus-wide innovation activity in real time. Elevate your institution's innovation ecosystem.
              </p>
              <button className="px-6 py-3 text-sm font-display font-semibold text-text-secondary border border-black/10 rounded-lg hover:bg-black/5 transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Post Challenges", "Evaluate Submissions", "Track Campus Innovation", "Industry Partner Network"].map((chip) => (
                <span key={chip} className="px-4 py-2 rounded-lg text-sm font-body text-foreground border border-black/10 bg-black/[0.04]">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
