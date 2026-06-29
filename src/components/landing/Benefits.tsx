import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

const benefits = [
  {
    accent: "zentro-card-accent",
    titlePrefix: "For Your",
    titleMain: "Career",
    body: "Proof-of-Work beats a resume every time. Your Workmark shows recruiters verified evidence of what you've actually done — not just what you claim.",
    chip: "Proof-of-Work > Any Resume",
    chipColor: "text-text-secondary border-black/10 bg-black/[0.04]",
  },
  {
    accent: "zentro-card-accent-cyan",
    titlePrefix: "For Your",
    titleMain: "Ideas",
    body: "Stop wondering if your idea is good. Get structured feedback from real domain experts — specific strengths, honest gaps, and a clear path forward.",
    chip: "Expert Evaluation · Not Just Peer Votes",
    chipColor: "text-foreground border-foreground/20 bg-foreground/[0.06]",
  },
  {
    accent: "zentro-card-accent-green",
    titlePrefix: "For Your",
    titleMain: "Growth",
    body: "The Innovation Score turns your progress into a number you can see growing. The leaderboard gives you context. AI nudges tell you exactly what to do next.",
    chip: "Gamified · AI-Powered · Weekly Progress",
    chipColor: "text-success border-success/20 bg-success/[0.06]",
  },
  {
    accent: "zentro-card-accent-amber",
    titlePrefix: "For Your",
    titleMain: "Legacy",
    body: "Projects you build today become resources that juniors discover three years from now. Fork others' work. Attach prototypes. Your work doesn't disappear — it compounds.",
    chip: "Discoverable Forever · Fork & Cite",
    chipColor: "text-warning border-warning/20 bg-warning/[0.06]",
  },
];

export default function Benefits() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding bg-surface-1">
      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">WHY IT MATTERS</span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-foreground leading-[1.1] mb-4">
            Built for your ambition.
            <br />
            Every step of the way.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <GlowCard key={b.titleMain} accent={b.accent} className="p-7">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {b.titlePrefix} <span className="font-serif-display text-[2.00em] text-[#5048E4] italic font-normal leading-none inline-block align-baseline ml-1">{b.titleMain}</span>
              </h3>
              <p className="font-body text-text-secondary text-[15px] leading-relaxed mb-4">{b.body}</p>
              <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-mono border ${b.chipColor}`}>{b.chip}</span>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
