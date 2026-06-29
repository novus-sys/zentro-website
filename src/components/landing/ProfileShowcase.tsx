import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import { Zap, TrendingUp, Calendar, Award, FileCheck } from "lucide-react";

const tabs = [
  { label: "Innovation Score", key: "score", icon: Zap },
  { label: "Industry Readiness", key: "readiness", icon: TrendingUp },
  { label: "Proof Timeline", key: "timeline", icon: Calendar },
  { label: "Endorsements", key: "endorsements", icon: Award },
  { label: "Certifications", key: "certs", icon: FileCheck },
];

function ScoreTab() {
  const { count, ref } = useCountUp(847);
  return (
    <div className="text-center py-8">
      <span ref={ref} className="font-mono text-6xl text-foreground font-bold">{count}</span>
      <p className="text-text-muted text-sm font-mono mt-2">Rank #3 of 218 peers · +14 this week</p>
      <div className="flex justify-center gap-1.5 mt-6">
        {[20, 35, 30, 45, 50, 60, 75, 85].map((h, i) => (
          <div key={i} className="w-6 rounded-sm bg-foreground/20 transition-all" style={{ height: `${h}px` }} />
        ))}
      </div>
      <p className="text-[11px] text-text-ghost mt-4">Calculated from challenges entered, ideas approved, project stars, and peer endorsements.</p>
    </div>
  );
}

function ReadinessTab() {
  return (
    <div className="py-8 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full border-[6px] border-success/30 flex items-center justify-center relative">
        <span className="font-mono text-4xl text-success font-bold">78%</span>
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="58" fill="none" stroke="hsl(160 60% 51% / 0.4)" strokeWidth="6" strokeDasharray={`${0.78 * 364} 364`} strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {["Problem Solving", "Presentation", "Project Execution", "Domain Knowledge"].map((s) => (
          <span key={s} className="px-3 py-1 rounded-full text-xs font-mono text-success border border-success/20 bg-success/[0.04]">{s}</span>
        ))}
      </div>
    </div>
  );
}

function TimelineTab() {
  const events = [
    { date: "Jan 2026", text: "Challenge Finalist — Smart Campus AI", color: "text-warning" },
    { date: "Dec 2025", text: "Project Approved — IntelliCampus Platform", color: "text-success" },
    { date: "Nov 2025", text: "Certified — Design Thinking Fundamentals", color: "text-primary" },
    { date: "Oct 2025", text: "Idea Submitted — EcoTrack App", color: "text-foreground" },
  ];
  return (
    <div className="py-6 space-y-4 pl-6 border-l border-black/10">
      {events.map((e) => (
        <div key={e.date} className="relative">
          <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-black/20 border-2 border-black/40" />
          <p className="text-xs text-text-muted font-mono">{e.date}</p>
          <p className={`text-sm font-medium ${e.color}`}>{e.text}</p>
          <span className="text-[10px] text-primary font-mono">Verified</span>
        </div>
      ))}
    </div>
  );
}

function EndorsementsTab() {
  const people = ["Priya R.", "Arjun K.", "Meera S.", "Rahul T.", "Ananya P.", "Vikram D."];
  const skills = ["Problem Solving", "Leadership", "System Design", "Communication", "Innovation", "Teamwork"];
  return (
    <div className="py-6 grid grid-cols-3 gap-4">
      {people.map((p, i) => (
        <div key={p} className="text-center">
          <div className="w-12 h-12 rounded-full bg-black/[0.04] flex items-center justify-center font-display text-text-secondary text-xs font-bold mx-auto mb-2">
            {p.split(" ").map(w => w[0]).join("")}
          </div>
          <p className="text-xs text-foreground font-medium">{p}</p>
          <p className="text-[10px] text-text-muted">endorsed {skills[i]}</p>
        </div>
      ))}
    </div>
  );
}

function CertsTab() {
  const certs = [
    { name: "Design Thinking", issuer: "IDEO", color: "border-primary/20" },
    { name: "Data Analytics", issuer: "Google", color: "border-foreground/20" },
    { name: "Web Development", issuer: "Meta", color: "border-success/20" },
    { name: "AI Fundamentals", issuer: "IBM", color: "border-violet/20" },
    { name: "Cloud Computing", issuer: "AWS", color: "border-warning/20" },
    { name: "Agile Methods", issuer: "Scrum.org", color: "border-primary/20" },
  ];
  return (
    <div className="py-6 grid grid-cols-2 md:grid-cols-3 gap-3">
      {certs.map((c) => (
        <GlowCard key={c.name} className={`p-3 border ${c.color}`}>
          <p className="text-xs text-foreground font-medium">{c.name}</p>
          <p className="text-[10px] text-text-muted">{c.issuer}</p>
        </GlowCard>
      ))}
    </div>
  );
}

const tabComponents: Record<string, React.FC> = {
  score: ScoreTab,
  readiness: ReadinessTab,
  timeline: TimelineTab,
  endorsements: EndorsementsTab,
  certs: CertsTab,
};

export default function ProfileShowcase() {
  const [active, setActive] = useState("score");
  const ref = useScrollReveal();
  const ActiveTab = tabComponents[active];

  return (
    <section className="relative section-padding bg-background">

      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">YOUR IDENTITY</span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-foreground leading-[1.1] mb-4">
            More than a LinkedIn.
            <br />
            More than a resume.
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Everything a recruiter, evaluator, or collaborator needs — in one place, verified, beautiful.
          </p>
        </div>

        <GlowCard className="p-6 md:p-10 max-w-3xl mx-auto">
          {/* Tab bar */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 -mx-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                    active === tab.key
                      ? "bg-black/10 text-foreground border border-black/20"
                      : "text-text-muted hover:text-text-secondary border border-transparent"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveTab />
            </motion.div>
          </AnimatePresence>
        </GlowCard>
      </div>
    </section>
  );
}
