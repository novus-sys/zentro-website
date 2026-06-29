import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

const testimonials = [
  {
    quote: "I used to feel invisible during placements. Now my Workmark profile shows three challenge wins, two industry evaluations, and a score that speaks before I even open my mouth. A recruiter from a Bangalore startup reached out to me through my profile — without me applying.",
    name: "Priya S.",
  },
  {
    quote: "The Innovation Score sounds like a game, but it genuinely changed how I approach every semester. I study with intent now because I know my Workmark is watching. It keeps me honest and hungry at the same time.",
    name: "Arjun K.",
  },
  {
    quote: "My professor saw my Proof Timeline and recommended me for a research collaboration without me asking. A resume would never have done that. The timeline showed my entire thinking journey — not just the result.",
    name: "Riya M.",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding">
      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">STUDENT VOICES</span>
          <h2 className="font-display font-bold text-3xl md:text-[44px] text-foreground leading-[1.1]">
            What happens when your work finally speaks for itself.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <GlowCard key={t.name} className="p-8 hover:translate-y-0">
              <span className="font-display text-[72px] leading-none text-primary/[0.15] block mb-2">"</span>
              <p className="font-body font-light italic text-text-secondary text-[17px] leading-[1.8] mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center font-display text-text-secondary text-xs font-bold">
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
                <p className="text-foreground text-sm font-medium">{t.name}</p>
              </div>

            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
