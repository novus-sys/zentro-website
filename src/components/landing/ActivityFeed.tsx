import { useScrollReveal } from "./useScrollReveal";
import GlowCard from "./GlowCard";

export default function ActivityFeed() {
  const ref = useScrollReveal();

  return (
    <section className="relative section-padding">
      <div ref={ref} className="container relative z-10 [&:not(.revealed)]:opacity-0 [&.revealed]:animate-[fade-in_0.5s_ease-out_forwards]">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary mb-4 block">INNOVATION FEED</span>
          <h2 className="font-display font-bold text-4xl md:text-[48px] text-foreground leading-[1.1] mb-4">
            Your campus.
            <br />
            In real time.
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            See what peers are building. Upvote ideas. Fork projects. Share your breakthroughs.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-6 max-w-4xl mx-auto">
          {/* Feed */}
          <div className="space-y-4">
            {/* Post 1 */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center font-display text-text-secondary text-xs font-bold">V</div>
                <div>
                  <p className="text-foreground text-sm font-medium">Vikram</p>
                  <p className="text-text-muted text-xs">Computer Science · 4th Year · 2h ago</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Just completed my first full-stack project using React and Node.js. Built a real-time chat application with WebSocket integration. Sharing the repo for anyone building something similar!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "WebSocket", "Full-Stack"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-secondary border border-black/10">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 text-xs text-text-muted">
                <span>4 upvotes</span>
                <span>3 comments</span>
                <span>Use as Reference</span>
                <span>Save</span>
              </div>
            </GlowCard>

            {/* Post 2 — challenge */}
            <GlowCard className="p-6 border-warning/[0.15]">
              <p className="text-warning text-sm font-display font-bold mb-2">New Challenge Posted</p>
              <p className="text-foreground font-medium mb-1">Smart Campus AI Solutions</p>
              <p className="text-xs text-text-muted mb-3">Deadline: 48 hours · Prize: ₹50,000 · Posted by Industry Partner</p>
              <button className="px-4 py-2 text-xs font-display font-semibold text-warning bg-warning/10 border border-warning/20 rounded-lg hover:bg-warning/20 transition-colors">
                Submit Idea
              </button>
            </GlowCard>

            {/* Fade out post */}
            <div className="zentro-card p-6 opacity-30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-foreground/20" />
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded bg-foreground/10" />
                  <div className="h-2 w-32 rounded bg-foreground/5" />
                </div>
              </div>
              <div className="h-3 w-full rounded bg-foreground/5 mb-2" />
              <div className="h-3 w-3/4 rounded bg-foreground/5" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block space-y-6">
            <GlowCard className="p-5">
              <p className="text-foreground text-sm font-display font-bold mb-3">🔥 Trending Topics</p>
              {[["System Design", 14], ["Sustainability Tech", 9], ["AI in Healthcare", 7]].map(([topic, count], i) => (
                <div key={topic as string} className="flex items-center gap-2 py-1.5">
                  <span className="text-text-muted text-xs font-mono">{i + 1}.</span>
                  <span className="text-text-secondary text-sm flex-1">{topic as string}</span>
                  <span className="text-text-muted text-xs">{count as number} posts</span>
                </div>
              ))}
            </GlowCard>

            <GlowCard className="p-5">
              <p className="text-foreground text-sm font-display font-bold mb-3">👁 Eyes on Your Work</p>
              <p className="text-text-secondary text-sm">IntelliCampus Project</p>
              <p className="font-mono text-foreground text-lg font-bold">49 views this week</p>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
