import { useScrollReveal } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import GlowCard from "./GlowCard";

const bentoCards = [
  {
    span: "md:col-span-2 md:row-span-2",
    accent: "zentro-card-accent",
    eyebrow: "CORE FEATURE 01",
    eyebrowColor: "text-primary",
    title: "Real Challenges. Real Stakes.",
    body: "Solve real problems posted by your university and industry partners. AI recommends the right challenges for your skills. Get evaluated by domain experts — not just an algorithm.",
    visual: "challenge",
  },
  {
    span: "md:col-span-2",
    accent: "zentro-card-accent-cyan",
    eyebrow: "CORE FEATURE 02",
    eyebrowColor: "text-foreground",
    title: "A Profile That Proves You.",
    body: "Not a bio. A living record — verified timeline of every challenge, project, endorsement, and achievement. Shareable with anyone, anytime.",
    visual: "profile",
  },
  {
    span: "",
    accent: "zentro-card-accent-cyan",
    eyebrow: "LIVE SCORE",
    eyebrowColor: "text-foreground",
    title: "",
    body: "",
    visual: "score",
  },
  {
    span: "",
    accent: "zentro-card-accent-amber",
    eyebrow: "RANK",
    eyebrowColor: "text-warning",
    title: "See where you stand.",
    body: "",
    visual: "leaderboard",
  },
  {
    span: "md:col-span-2",
    accent: "zentro-card-accent-green",
    eyebrow: "CORE FEATURE 03",
    eyebrowColor: "text-success",
    title: "Your projects live forever.",
    body: "Every completed project goes into the university repository — discoverable by juniors, industry leaders, and recruiters years from now.",
    visual: "project",
  },
  {
    span: "",
    accent: "zentro-card-accent-violet",
    eyebrow: "AI POWERED",
    eyebrowColor: "text-violet",
    title: "Your AI coach.",
    body: "Smart recommendations on what to do next to level up your score — tailored to you, every day.",
    visual: "ai",
  },
  {
    span: "",
    accent: "zentro-card-accent",
    eyebrow: "EXPERT FEEDBACK",
    eyebrowColor: "text-primary",
    title: "Real evaluators. Real feedback.",
    body: "Strengths, gaps, suggestions — from domain experts, not just peers.",
    visual: "feedback",
  },
];

function ScoreVisual() {
  const { count, ref } = useCountUp(847);
  return (
    <div className="text-center py-4">
      <span ref={ref} className="font-mono text-[56px] text-foreground font-bold leading-none">{count}</span>
      <p className="text-text-muted text-[11px] font-mono mt-2">Innovation Score</p>
      <p className="text-success text-[13px] mt-1">+14 points this week</p>
      <div className="flex justify-center gap-1 mt-4">
        {[30, 45, 55, 70, 85].map((h, i) => (
          <div key={i} className="w-4 rounded-sm bg-foreground/30" style={{ height: `${h}%`, minHeight: `${h * 0.6}px` }} />
        ))}
      </div>
    </div>
  );
}

function ChallengeVisual() {
  return (
    <div className="zentro-card p-5 mt-4 border-primary/20">
      <p className="text-foreground text-sm font-medium mb-2">Smart Campus Energy Challenge</p>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-warning/10 text-warning border border-warning/20">₹50,000</span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-destructive/10 text-destructive border border-destructive/20">3 days remaining</span>
      </div>
      <p className="text-xs text-text-muted mb-3">Active · 143 participants</p>
      <button className="w-full py-2 text-xs font-display font-semibold text-primary-foreground bg-primary rounded-lg">Submit Idea</button>
      <div className="flex gap-2 mt-3">
        {[["Active", "bg-success/10 text-success"], ["Upcoming", "bg-warning/10 text-warning"], ["AI-Recommended", "bg-violet/10 text-violet"]].map(([label, cls]) => (
          <span key={label} className={`px-2 py-0.5 rounded text-[9px] font-mono ${cls}`}>{label}</span>
        ))}
      </div>
    </div>
  );
}

function LeaderboardMiniVisual() {
  return (
    <div className="space-y-2 mt-2">
      {[["1", "Riya M.", "1,240"], ["2", "Arjun K.", "1,180"], ["4", "You", "847"]].map(([badge, name, pts], i) => (
        <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs ${i === 2 ? "bg-black/[0.04] border border-black/10" : ""}`}>
          <span>{badge}</span>
          <span className="text-foreground font-medium">{name}</span>
          <span className="ml-auto font-mono text-text-secondary">{pts}</span>
        </div>
      ))}
      <p className="text-success text-xs">Up 5 spots this week</p>
    </div>
  );
}

function ProfileMiniVisual() {
  return (
    <div className="flex items-center gap-3 mt-3">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-xs font-bold">V</div>
      <div>
        <p className="text-foreground text-sm font-medium">Vikram</p>
        <p className="font-mono text-foreground text-xs">Score: 847</p>
      </div>
      <div className="ml-auto flex gap-1">
        {["Verified", "3 Wins", "12 Projects"].map((b) => (
          <span key={b} className="px-1.5 py-0.5 rounded text-[8px] font-mono text-text-muted border border-foreground/10">{b}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectMiniVisual() {
  return (
    <div className="zentro-card p-4 mt-3 border-success/20">
      <p className="text-foreground text-sm font-medium">IntelliCampus AI</p>
      <div className="flex gap-2 my-2">
        {["AI", "Sustainability"].map((t) => (
          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted border border-foreground/10">{t}</span>
        ))}
      </div>
      <p className="text-xs text-text-muted">⭐ 24 stars · 🔀 7 forks</p>
    </div>
  );
}

export default function BentoGrid() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="relative section-padding bg-background">

      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">EVERYTHING YOU GET</span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-foreground leading-[1.1] mb-4">
            One ecosystem.
            <br />
            Six powerful pillars.
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Everything you do on Zentro Workmark is tracked, verified, and building your reputation — automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bentoCards.map((card, i) => (
            <GlowCard key={i} accent={card.accent} wrapperClassName={card.span}>
              <span className={`eyebrow ${card.eyebrowColor} block mb-2`}>{card.eyebrow}</span>
              {card.title && <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">{card.title}</h3>}
              {card.body && <p className="font-body text-text-secondary text-sm leading-relaxed">{card.body}</p>}
              {card.visual === "score" && <ScoreVisual />}
              {card.visual === "challenge" && <ChallengeVisual />}
              {card.visual === "leaderboard" && <LeaderboardMiniVisual />}
              {card.visual === "profile" && <ProfileMiniVisual />}
              {card.visual === "project" && <ProjectMiniVisual />}
              {card.visual === "ai" && (
                <div className="mt-3">
                  <span className="text-violet text-[28px]">✦</span>
                  <div className="mt-3 px-3 py-2 rounded-lg border border-black/10 bg-black/[0.02] text-xs text-text-secondary">
                    Next Action: Complete profile +10% Readiness
                  </div>
                </div>
              )}
              {card.visual === "feedback" && (
                <div className="mt-3">
                  <span className="text-warning text-xl">💡</span>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {[["Draft", "text-text-muted border-foreground/10"], ["Under Review", "text-primary border-primary/20"], ["Approved ✓", "text-success border-success/20"]].map(([l, c]) => (
                      <span key={l} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${c}`}>{l}</span>
                    ))}
                  </div>
                </div>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
