import { FolderGit2, FileText, Bot, ShieldCheck } from "lucide-react";

export default function VyomaFeatures() {
  const steps = [
    {
      step: "01 / 04",
      title: "Connect & Seed",
      desc: "Real multi-file production repos with active dependencies, configs, and test runners — not empty scratchpads.",
      icon: FolderGit2,
      preview: {
        type: "repo",
        label: "github / repo: api-gateway",
        badge: "Dockerized • 24 Files",
        highlight: "src/controllers/auth.ts"
      }
    },
    {
      step: "02 / 04",
      title: "The PM Brief",
      desc: "Work arrives like real life: acceptance criteria, API signatures, business rules, and edge-case specs.",
      icon: FileText,
      preview: {
        type: "brief",
        label: "BRIEF-104: Rate Limiter Spec",
        badge: "P0 Feature • Acceptance Tests",
        highlight: "Requirement 3: Exponential Backoff"
      }
    },
    {
      step: "03 / 04",
      title: "AI-Augmented IDE",
      desc: "Candidates collaborate with AI. Every prompt, plan, diff rejection, and manual fix is logged with timestamps.",
      icon: Bot,
      preview: {
        type: "ai",
        label: "Vyoma Copilot // Agent Mode",
        badge: "Prompt Telemetry Active",
        highlight: "Applied diff: 14 lines modified"
      }
    },
    {
      step: "04 / 04",
      title: "Hidden Suite & Scoring",
      desc: "Sample tests run in the IDE; an exhaustive hidden suite grades edge cases, efficiency, and code quality.",
      icon: ShieldCheck,
      preview: {
        type: "tests",
        label: "Evaluation Pipeline",
        badge: "18 / 18 Hidden Tests Pass",
        highlight: "Overall Signal: Ready to Ship"
      }
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0B] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Eyebrow and Section Header (Vorflux .section-head style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              HOW VYOMA WORKS
            </span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white mb-5 leading-[1.1]">
            From ticket to verified pull request
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            One continuous engineering session. Watch how candidates decompose problems, query copilots, and verify edge cases.
          </p>
        </div>

        {/* 4-Column Feature Grid (Vorflux style with thumbnail headers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-[#2A2A2D] bg-[#121214] p-5 sm:p-6 flex flex-col justify-between hover:bg-[#151518] hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                <div>
                  {/* Top Mockup Thumbnail Card */}
                  <div className="w-full h-36 rounded-xl bg-[#0A0A0B] border border-[#2A2A2D] p-3 mb-5 flex flex-col justify-between overflow-hidden relative group-hover:border-[#3D5BFF]/40 transition-colors">
                    {/* Top simulated window bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white/20" />
                        <span className="w-2 h-2 rounded-full bg-white/20" />
                        <span className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[10px] font-mono text-white/40 truncate max-w-[130px]">
                        {item.preview.label}
                      </span>
                    </div>

                    {/* Middle preview content */}
                    <div className="my-auto space-y-1.5 py-1">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#3D5BFF]/15 border border-[#3D5BFF]/30 text-[10px] font-mono text-[#60A5FA]">
                        <Icon size={11} />
                        <span>{item.preview.badge}</span>
                      </div>
                      <div className="text-[11px] font-mono text-white/70 truncate">
                        {item.preview.highlight}
                      </div>
                    </div>

                    {/* Bottom subtle progress line */}
                    <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                      <div className="w-2/3 h-full bg-gradient-to-r from-[#3D5BFF] to-[#60A5FA] rounded-full" />
                    </div>
                  </div>

                  {/* Step counter */}
                  <div className="font-mono text-xs font-semibold text-[#60A5FA] tracking-wider mb-2">
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="font-jakarta text-lg sm:text-xl font-semibold text-white mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-jakarta text-xs sm:text-sm text-white/50 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-white/40">
                  <span>Phase {idx + 1}</span>
                  <span className="text-[#60A5FA] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
