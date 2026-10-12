import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, FileCode2, Terminal, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function VyomaSDLC() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      index: "01",
      tag: "PHASE 01: SEEDING",
      title: "Real repos, ready in seconds.",
      desc: "Connect your team's actual tech stack or select from 30+ production templates. Each workspace boots with dependencies installed, background services running, and active test suites.",
      stats: [
        { label: "Spin-up Time", val: "< 3.2s" },
        { label: "Supported Stacks", val: "TypeScript, Python, Go, Rust, Java" }
      ],
      previewType: "repo"
    },
    {
      index: "02",
      tag: "PHASE 02: SPECIFICATION",
      title: "The PM brief, not an algorithmic riddle.",
      desc: "Candidates receive a realistic ticket or product specification. They must parse business rules, handle data constraints, and map out their implementation roadmap before writing code.",
      stats: [
        { label: "Brief Formats", val: "PM Spec, Bug Report, Refactor PR" },
        { label: "Acceptance Criteria", val: "Deterministic & Measurable" }
      ],
      previewType: "brief"
    },
    {
      index: "03",
      tag: "PHASE 03: EXECUTION & AI",
      title: "Full cloud IDE with transparent telemetry.",
      desc: "Candidates write code with an embedded AI assistant. Plan mode forces architectural forethought; Agent mode executes while we capture prompt quality, diff review diligence, and token spend.",
      stats: [
        { label: "Telemetry Captured", val: "100% Keystrokes & AI Prompts" },
        { label: "Scrubbing", val: "Full Video Session Timeline" }
      ],
      previewType: "ai"
    },
    {
      index: "04",
      tag: "PHASE 04: AUTOMATED TESTING",
      title: "Sample tests in-editor, hidden suite on submit.",
      desc: "While building, candidates validate logic against a local test suite. Upon submission, an isolated cloud runner executes exhaustive hidden suites to evaluate corner cases and concurrency.",
      stats: [
        { label: "Feedback Loop", val: "Sub-second terminal runners" },
        { label: "Adversarial Suite", val: "Hidden fuzzing & regression tests" }
      ],
      previewType: "tests"
    },
    {
      index: "05",
      tag: "PHASE 05: DECISION REPORT",
      title: "6D evaluation rubrics with hard evidence.",
      desc: "Every assessment yields a standardized score breakdown: Analysis, Planning, Judgment, Execution, Code Rigor, and AI Collaboration. Backed by diff links and ready to sync to your ATS.",
      stats: [
        { label: "ATS Support", val: "Greenhouse, Lever, Ashby, Workday" },
        { label: "Time Saved", val: "7.5 hrs per engineering hire" }
      ],
      previewType: "report"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#070708] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              THE FULL SDLC HARNESS
            </span>
          </div>

          <h2 className="font-jakarta text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
            Simulate the entire engineering lifecycle.
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl px-1 sm:px-0">
            From repo checkout to merged pull request. See how your candidate works across all five phases.
          </p>
        </div>

        {/* Phase Selector Tabs (Swipeable on mobile, 5-col grid on desktop) */}
        <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-5 gap-2 mb-8 sm:mb-10 pb-3 sm:pb-4 border-b border-[#2A2A2D] -mx-4 px-4 sm:mx-0 sm:px-0">
          {steps.map((s, idx) => {
            const isActive = currentStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`text-left relative p-2.5 sm:p-3 pl-3.5 sm:pl-4 overflow-hidden rounded-xl sm:rounded-none shrink-0 min-w-[125px] sm:min-w-0 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#121214] text-white"
                    : "text-white/40 hover:text-white/80 hover:bg-white/[0.02]"
                }`}
              >
                {/* Blue indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeSdlcStepIndicator"
                    className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-[#3D5BFF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="font-mono text-xs font-semibold text-[#60A5FA] mb-0.5 sm:mb-1">
                  {s.index}
                </div>
                <div className="text-xs font-medium truncate">
                  {s.tag.split(": ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* 2-Column Interactive Stage (Vorflux SDLC style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center bg-[#0A0A0B] border border-[#2A2A2D] rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 shadow-2xl">
          
          {/* Left Column: Stage Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D5BFF]/10 border border-[#3D5BFF]/30 text-xs font-mono text-[#60A5FA]">
              <span>{steps[currentStep].tag}</span>
            </div>

            <h3 className="font-jakarta text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug">
              {steps[currentStep].title}
            </h3>

            <p className="font-jakarta text-xs sm:text-sm md:text-base text-white/60 leading-relaxed font-normal">
              {steps[currentStep].desc}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#1C1C1E]">
              {steps[currentStep].stats.map((stat, i) => (
                <div key={i} className="space-y-0.5 sm:space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                ← Previous Phase
              </button>
              <button
                onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-1.5 rounded-full bg-[#3D5BFF] hover:bg-[#324CD6] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Next Phase →
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage Representation */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#2A2A2D] bg-[#121214] overflow-hidden shadow-2xl">
              {/* Top simulated bar */}
              <div className="px-4 py-3 bg-[#161619] border-b border-[#2A2A2D] flex items-center justify-between text-xs font-mono text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-white/60">{steps[currentStep].tag}</span>
                </div>
                <span className="text-[#60A5FA]">Active Stage</span>
              </div>

              {/* Dynamic Mockup Viewport */}
              <div className="p-6 sm:p-8 space-y-4">
                {currentStep === 0 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-emerald-400 flex items-center gap-2">
                      <Check size={14} /> Repository Cloned: github.com/enterprise/payment-service-v3
                    </div>
                    <div className="text-white/60 pl-5 space-y-1">
                      <div>▸ Docker container initialized (node:20-alpine)</div>
                      <div>▸ Dependencies resolved (248 packages installed)</div>
                      <div>▸ Local PostgreSQL test instance running on port 5432</div>
                      <div className="text-[#60A5FA]">▸ Workspace ready for candidate session</div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-3 font-jakarta">
                    <div className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider">
                      Task Specification: BRIEF-402
                    </div>
                    <div className="text-base font-semibold text-white">
                      Refactor Token Revocation for Distributed Edge Gateways
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      "Our authentication service currently invalidates tokens synchronously across regional clusters. Implement an asynchronous bloom filter sync with Redis Sentinel fallback."
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-white/50">Acceptance Tests: 4</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-white/50">Time Allocated: 45m</span>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2D]">
                      <span className="text-[#60A5FA]">AI Copilot Session Logs</span>
                      <span className="text-white/40">Tokens: 84k / 150k</span>
                    </div>
                    <div className="text-white/70 space-y-2">
                      <div><strong className="text-white">Candidate [00:08:14]:</strong> "How does the token cache handle eventual consistency across regions?"</div>
                      <div className="p-2.5 rounded bg-[#0A0A0B] border border-[#2A2A2D] text-white/60">
                        <strong className="text-[#60A5FA]">Agent:</strong> "The distributed cache invalidates via pub/sub with a 15-second TTL fallback."
                      </div>
                      <div><strong className="text-white">Candidate [00:15:30]:</strong> Applied diff with manual edits to concurrency mutex.</div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-between">
                      <span>✓ Sample Tests: 6/6 Passed (1.2s)</span>
                      <span className="text-[10px] uppercase tracking-wider">Local Runner</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#3D5BFF]/10 border border-[#3D5BFF]/30 text-[#60A5FA] font-medium space-y-1">
                      <div className="flex items-center justify-between">
                        <span>Hidden Test Suite (18 cases)</span>
                        <span className="text-[10px] text-white/60">Queued for grading</span>
                      </div>
                      <div className="text-[11px] text-white/40">
                        Adversarial edge cases, stress testing 10,000 req/sec, and memory leak analysis.
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-3 font-jakarta">
                    <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2D]">
                      <span className="text-sm font-bold text-white">Overall Signal: Strong Hire (92%)</span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-[#0A0A0B] border border-[#2A2A2D]">
                        <div className="text-white/40 text-[10px]">AI Prompt Quality</div>
                        <div className="font-bold text-white text-sm">94 / 100</div>
                      </div>
                      <div className="p-2 rounded bg-[#0A0A0B] border border-[#2A2A2D]">
                        <div className="text-white/40 text-[10px]">Code Review Rigor</div>
                        <div className="font-bold text-white text-sm">90 / 100</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-white/50 pt-1">
                      Candidate verified generated code, caught concurrency vulnerability, and added defensive unit test.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
