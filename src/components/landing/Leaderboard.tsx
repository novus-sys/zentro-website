import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

const leaderboardRows = [
  { badge: "1", name: "Riya M.", dept: "Design", pts: "1,240", trend: "+3", trendColor: "text-success" },
  { badge: "2", name: "Arjun K.", dept: "CS", pts: "1,180", trend: "+1", trendColor: "text-success" },
  { badge: "3", name: "Priya S.", dept: "Management", pts: "987", trend: "stable", trendColor: "text-text-muted" },
  { badge: "4", name: "You", dept: "", pts: "847", trend: "Up 5 spots", trendColor: "text-success", isYou: true },
  { badge: "5", name: "Siddharth P.", dept: "", pts: "820", trend: "-2", trendColor: "text-destructive" },
];

export default function Leaderboard() {
  const ref = useScrollReveal();

  return (
    <section id="leaderboard" className="relative section-padding bg-background">

      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-warning mb-4 block">HEALTHY COMPETITION</span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-foreground leading-[1.1] mb-4">
            Everyone can see you rising.
          </h2>
          <p className="font-body text-text-secondary text-lg">Two live scores. One leaderboard. Your movement tracked in real time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Leaderboard card */}
          <GlowCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <span>🏆</span>
              <span className="text-foreground font-display font-bold text-lg">Innovation Leaderboard</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-success font-mono">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                LIVE
              </span>
            </div>

            <div className="space-y-2">
              {leaderboardRows.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    row.isYou ? "bg-black/[0.04] border border-black/10 shadow-sm" : "hover:bg-black/[0.02]"
                  }`}
                >
                  <span className="text-lg w-7">{row.badge}</span>
                  <div className="flex-1">
                    <span className="text-foreground text-sm font-medium">{row.name}</span>
                    {row.dept && <span className="text-text-muted text-xs ml-2">· {row.dept}</span>}
                  </div>
                  <span className="font-mono text-sm text-text-secondary">{row.pts}</span>
                  <span className={`text-xs ${row.trendColor}`}>{row.trend}</span>
                </div>
              ))}
            </div>

            <a href="#" className="block mt-4 text-sm text-primary text-right hover:underline">View Full Leaderboard</a>
          </GlowCard>

          {/* Score explanation */}
          <div className="space-y-6">
            <GlowCard className="p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Innovation Score</h3>
              <p className="text-sm text-text-secondary mb-3">Measures your innovation activity</p>
              <div className="space-y-2">
                {["Quality of ideas submitted", "Challenges participated and won", "Projects starred and forked by peers", "Endorsements received"].map((item) => (
                  <p key={item} className="text-sm text-text-secondary"><span className="text-primary mr-2">•</span>{item}</p>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Industry Readiness %</h3>
              <p className="text-sm text-text-secondary mb-3">Measures your real-world preparedness</p>
              <div className="space-y-2">
                {["Skills and certifications added", "Projects completed and approved", "Challenge participation history", "Profile completeness"].map((item) => (
                  <p key={item} className="text-sm text-text-secondary"><span className="text-success mr-2">•</span>{item}</p>
                ))}
              </div>
            </GlowCard>

            <p className="font-body italic text-text-muted text-[15px]">
              Your scores update in real time. Every action moves your rank. Every week is a new chance to climb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
