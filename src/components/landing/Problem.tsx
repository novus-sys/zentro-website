import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlowCard from "./GlowCard";

export default function Problem() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div
          className={`transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="font-mono text-xs text-primary uppercase tracking-[0.12em] mb-4 block">
            The Problem
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            A resume is a piece of paper.
            <br />
            Your work is real.
          </h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            You've built projects, cracked problems, ideated solutions, stayed
            up at 3am debugging something nobody asked you to debug — but when
            you sit in front of a recruiter, all you have is a 1-page PDF.
            Zentro Workmark changes that.
          </p>
        </div>

        {/* Right: Comparison Card */}
        <GlowCard
          className={`transition-all duration-600 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Resume side */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-semibold text-sm text-text-secondary">
                    Resume
                  </span>
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full rounded bg-muted/20" />
                  <div className="h-3 w-4/5 rounded bg-muted/15" />
                  <div className="h-3 w-3/5 rounded bg-muted/10" />
                  <div className="h-3 w-full rounded bg-muted/15" />
                  <div className="h-3 w-2/3 rounded bg-muted/10" />
                  <div className="h-8 w-full rounded bg-muted/10 mt-4" />
                  <div className="h-3 w-4/5 rounded bg-muted/15" />
                  <div className="h-3 w-3/5 rounded bg-muted/10" />
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-px bg-black/5" />
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-text-secondary text-xs">
                  vs
                </div>

                {/* Workmark side */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-semibold text-sm text-foreground">
                      Workmark
                    </span>
                    <span className="text-xs text-primary font-mono">Verified</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-black/[0.04]" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Student Name</div>
                      <div className="text-xs text-text-secondary">CS, VIT Vellore</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">Innovation Score</span>
                      <span className="font-mono text-foreground font-bold">847</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">Industry Readiness</span>
                      <span className="font-mono text-success font-bold">78%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-1.5 mt-1">
                      <div className="bg-success h-1.5 rounded-full w-[78%]" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {["Finalist", "3 Challenges", "12 Projects"].map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-black/[0.04] text-text-secondary border border-black/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
