export default function VyomaMetrics() {
  const metrics = [
    {
      stat: "100%",
      label: "Real-World Code Repositories",
      sub: "Production services with configs & test suites"
    },
    {
      stat: "3 Modes",
      label: "Plan, Ask & Agent Execution",
      sub: "Observe exact candidate AI collaboration"
    },
    {
      stat: "0%",
      label: "Memorized LeetCode Puzzles",
      sub: "Replaces toy algorithms with practical engineering"
    },
    {
      stat: "Complete",
      label: "Prompt & Keystroke Telemetry",
      sub: "Full session scrubber & ATS-ready decision reports"
    }
  ];

  return (
    <section className="relative bg-[#070708] border-y border-[#1C1C1E] py-8 sm:py-10 md:py-12 font-jakarta">
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-4 sm:gap-8 lg:gap-10">
          {metrics.map((item, idx) => {
            const isLeftColumnMobile = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`flex flex-col space-y-1 sm:space-y-1.5 pl-3 sm:pl-6 ${
                  isLeftColumnMobile ? "border-l-0 lg:border-l lg:first:border-l-0" : "border-l border-[#2A2A2D]/60"
                }`}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-white tracking-tight">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90">
                  {item.label}
                </div>
                <div className="text-[11px] sm:text-xs text-white/40 leading-relaxed font-normal">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
