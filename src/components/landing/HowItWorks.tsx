import { useScrollReveal } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import GlowCard from "./GlowCard";

const steps = [
  {
    num: "01",
    title: "Build your Workmark Profile",
    body: "Add your education, skills, certifications, interests, and achievements. Link your LinkedIn. Add your social presence. Your profile is the canvas — every action you take on Zentro paints it richer.",
    visual: "profile",
  },
  {
    num: "02",
    title: "Take on Real Industry Challenges",
    body: "Browse live challenges. Filter by your department, deadline, or prize. AI recommends what fits you best. Submit your idea with one click — directly linked to the challenge context.",
    visual: "challenge",
  },
  {
    num: "03",
    title: "Receive Structured Expert Feedback",
    body: "Your submissions are reviewed by real domain evaluators. You receive detailed feedback: Strengths, Areas for Improvement, Specific Suggestions, and an overall score.",
    visual: "feedback",
  },
  {
    num: "04",
    title: "Build a reputation that lasts",
    body: "Every action adds to your Innovation Score. The leaderboard shows your movement. Your Proof Timeline grows with every submission, every win, every certification.",
    visual: "score",
  },
];

function ProfileVisual() {
  return (
    <GlowCard className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center">
          <span className="font-display text-primary font-bold text-sm">78%</span>
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">Profile Completeness</p>
          <p className="text-xs text-text-muted">+10% per section completed</p>
        </div>
      </div>
      <div className="space-y-2">
        {[["Education", true], ["Interests", true], ["Certifications", false], ["First Challenge", false]].map(([label, done]) => (
          <div key={label as string} className={`text-xs font-mono ${done ? "text-success" : "text-text-muted"}`}>{label as string}</div>
        ))}
      </div>
    </GlowCard>
  );
}

function FeedbackVisual() {
  return (
    <GlowCard className="p-5 space-y-2">
      {[
        ["", "Strengths", "Strong market research, clear problem definition", "text-success"],
        ["", "Areas for Improvement", "Technical feasibility section needs work", "text-warning"],
        ["", "Suggestions", "Add a prototype or PoC", "text-primary"],
        ["", "Overall Score: 82/100", "", "text-foreground"],
      ].map(([icon, title, desc, color]) => (
        <div key={title} className="px-3 py-2 rounded-lg border border-foreground/[0.06]">
          <p className={`text-xs font-medium ${color}`}>{title}</p>
          {desc && <p className="text-[11px] text-text-muted mt-0.5">{desc}</p>}
        </div>
      ))}
    </GlowCard>
  );
}

function ScoreVisual() {
  const { count, ref } = useCountUp(847);
  return (
    <GlowCard className="p-5 text-center">
      <span ref={ref} className="font-mono text-5xl text-foreground font-bold">{count}</span>
      <p className="text-text-muted text-xs font-mono mt-2">Innovation Score</p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-text-muted text-xs">Rank #12</span>
        <span className="text-success text-xs">-</span>
        <span className="text-success text-xs font-bold">Rank #3</span>
      </div>
    </GlowCard>
  );
}

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="relative section-padding bg-surface-1">
      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">THE JOURNEY</span>
          <h2 className="font-display font-bold text-4xl md:text-[52px] text-foreground leading-[1.1] mb-4">
            From student. To standout.
          </h2>
          <p className="font-body text-text-secondary text-lg">Four steps. Continuous progress. One growing reputation.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px border-l border-dashed border-primary/[0.15]" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="relative grid md:grid-cols-[64px_1fr_1fr] gap-6 items-start">
                {/* Step indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary/30 border-2 border-primary animate-pulse-dot" />
                  <span className="font-display font-extrabold text-[100px] leading-none text-primary/[0.05] select-none">{step.num}</span>
                </div>

                {/* Copy */}
                <div>
                  <span className="eyebrow text-primary mb-2 block">STEP {step.num}</span>
                  <h3 className="font-display font-bold text-2xl md:text-[36px] text-foreground leading-tight mb-4">{step.title}</h3>
                  <p className="font-body text-text-secondary text-[17px] leading-[1.8]">{step.body}</p>
                </div>

                {/* Visual */}
                <div>
                  {step.visual === "profile" && <ProfileVisual />}
                  {step.visual === "challenge" && (
                    <GlowCard className="p-5">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Active", "My Department", "AI Recommended"].map((f) => (
                          <span key={f} className="px-2 py-1 rounded text-[10px] font-mono text-primary border border-primary/20 bg-primary/[0.06]">{f}</span>
                        ))}
                      </div>
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/[0.04]">
                        <p className="text-foreground text-sm font-medium mb-1">Smart Campus AI Solutions</p>
                        <p className="text-xs text-text-muted mb-2">48 hours · ₹50,000</p>
                        <button className="w-full py-1.5 text-xs font-display font-semibold text-primary-foreground bg-primary rounded-lg animate-shimmer">Submit Idea</button>
                      </div>
                    </GlowCard>
                  )}
                  {step.visual === "feedback" && <FeedbackVisual />}
                  {step.visual === "score" && <ScoreVisual />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
