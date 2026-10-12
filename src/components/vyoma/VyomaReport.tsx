import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function VyomaReport() {
  const metrics = [
    {
      value: "79%",
      title: "Fit for the role",
      description: "Scored against the role requirements, one at a time with calibrated rubrics."
    },
    {
      value: "6 / 4",
      title: "Hire signals and concerns",
      description: "Each one points to a specific prompt, commit, or failing test in the session."
    },
    {
      value: "23",
      title: "Prompts, phase-tagged",
      description: "The full transcript, tagged as planning, building or debugging, with file references highlighted."
    },
    {
      value: "1 / 12",
      title: "Failing tests, explained",
      description: "Which line failed, what it returned and what it should have returned, marked in the workspace snapshot."
    },
    {
      value: "142k / 200k",
      title: "Tokens used",
      description: "Planning, building and debugging shown separately, against the token budget."
    },
    {
      value: "38m",
      title: "Active time of 45",
      description: "Time to first edit, how long they read the brief, and when the sample suite went green."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0B] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#3D5BFF]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              THE CANDIDATE REPORT
            </span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5 leading-[1.15]">
            Evidence, not impressions.
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            Every claim in the report points back to an exact prompt, a git commit or a failing test in the session. No subjective guesswork.
          </p>
        </div>

        {/* Main Grid: Left 6 Boxes + Right 3D Model (Directly matching HirePrise SS) */}
        <div className="rounded-2xl border border-[#2A2A2D] bg-[#0E0E10] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl shadow-black/80">
          
          {/* Left Column: 2x3 Metric Boxes (HirePrise parameter box style) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-[#2A2A2D] border-b lg:border-b-0 lg:border-r border-[#2A2A2D]">
            {metrics.map((item, idx) => {
              // Calculate border classes for grid styling
              const isEven = idx % 2 === 0;
              const isTopRow = idx < 2;
              const isMiddleRow = idx >= 2 && idx < 4;
              const isBottomRow = idx >= 4;

              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors ${
                    isEven ? "sm:border-r border-[#2A2A2D]" : ""
                  } ${
                    !isBottomRow ? "sm:border-b border-[#2A2A2D]" : ""
                  }`}
                >
                  <div>
                    {/* Big Metric Value in Clean Sans/Mono font */}
                    <div className="text-3xl sm:text-4xl font-bold font-jakarta text-white tracking-tight mb-2.5">
                      {item.value}
                    </div>

                    {/* Metric Label */}
                    <h4 className="text-sm font-semibold text-white/90 mb-2 tracking-tight">
                      {item.title}
                    </h4>

                    {/* Metric Description */}
                    <p className="text-xs text-white/50 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Model Visualization (Matching HirePrise right side) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-8 sm:p-12 bg-[#070708] min-h-[420px] lg:min-h-[540px]">
            {/* Subtle glow behind 3D sculpture */}
            <div className="absolute inset-0 bg-radial from-[#3D5BFF]/15 via-transparent to-transparent pointer-events-none" />

            {/* 3D Model Artwork Container (Awaiting Spline 3D model) */}
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
              {/* Spline 3D Model will be mounted here */}
            </div>
          </div>

        </div>

        {/* Bottom Report Sample Action Callout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl border border-[#2A2A2D] bg-[#121214] gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-white">
              Want to inspect a full, anonymized candidate assessment report?
            </div>
            <div className="text-xs text-white/40 font-normal">
              Includes prompt histories, video session scrubber, test case diffs, and ATS sync payload.
            </div>
          </div>

          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-[#0A0A0B] text-xs font-semibold hover:bg-white/90 transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Request Sample Report (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
