import {
  ShieldAlert,
  FolderGit2,
  Terminal,
  MessagesSquare,
  Lock,
  Workflow
} from "lucide-react";

export default function VyomaDiffGrid() {
  const differentiators = [
    {
      icon: ShieldAlert,
      title: "ADVERSARIAL BY DEFAULT",
      desc: "A hidden test suite and edge-case fuzzing test whether candidate code survives production failures, not just the happy path."
    },
    {
      icon: FolderGit2,
      title: "AUTHENTIC MULTI-FILE REPOSITORIES",
      desc: "Candidates navigate genuine codebases with microservices, Docker configs, and active dependency graphs — never toy algorithmic puzzles."
    },
    {
      icon: Terminal,
      title: "PROMPT & DIFF TELEMETRY",
      desc: "We measure how engineers deploy AI: prompt clarity, architectural guidance, and critical review before merging copilot code."
    },
    {
      icon: MessagesSquare,
      title: "DIFF-GENERATED AI INTERVIEW",
      desc: "The round finishes with an automated technical interview generated directly from the git diff and architecture decisions they just submitted."
    },
    {
      icon: Lock,
      title: "PROCTORING WITHOUT FRICTION",
      desc: "Paste velocity tracking, window focus telemetry, and an interactive video session scrubber guarantee genuine individual proof-of-work."
    },
    {
      icon: Workflow,
      title: "SEAMLESS ATS INTEGRATION",
      desc: "Structured 6D decision rubrics, complete transcripts, and code snapshots sync automatically into Greenhouse, Lever, Ashby, and Workday."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0B] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header (Matching Vorflux "Beyond the model" SS) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              WHAT'S DIFFERENT
            </span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white mb-5 leading-[1.08]">
            Beyond toy algorithms
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            The candidate writes the prompts; our platform verifies whether the engineered solution actually ships to production.
          </p>
        </div>

        {/* 3x2 Grid with hairline borders (Vorflux .diff-grid style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#2A2A2D]">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 border-r border-b border-[#2A2A2D] bg-[#0A0A0B] hover:bg-[#0E0E10] transition-colors flex flex-col justify-between min-h-[260px] group"
              >
                <div>
                  <div className="text-white/40 group-hover:text-[#60A5FA] transition-colors mb-6">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-mono text-xs font-semibold text-white tracking-[0.12em] uppercase mb-3">
                    {item.title}
                  </h3>

                  <p className="font-jakarta text-xs sm:text-sm text-white/50 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
