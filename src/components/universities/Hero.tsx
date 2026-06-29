import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users, ShieldAlert, Check, UserPlus, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const [tpoSearchActive, setTpoSearchActive] = useState(false);
  const [activeLeaderboardRow, setActiveLeaderboardRow] = useState(0);

  // Trigger auto-animations for the preview mockup cards
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTpoSearchActive(true);
    }, 2000);

    const interval = setInterval(() => {
      setActiveLeaderboardRow(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, []);

  const handleScrollToFeatures = () => {
    const element = document.getElementById("tpo-features-section");
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-12 md:py-20 bg-white overflow-hidden font-body">
      {/* Light subtle background grid */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-50 via-slate-50/50 to-transparent -z-10 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Headline */}
            <h1 className="font-serif-display font-normal text-[42px] leading-[1.12] tracking-tight md:text-6xl lg:text-[68px] lg:leading-[76px] text-[#111111]">
              Accelerate Placements.
              <br />
              <span className="text-[#5048E4] italic font-normal">
                Unlock Stellar Placements.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-550 text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
              Zentro Workmark provides universities with an AI-powered placement operating system. Unlock stellar career outcomes with the <strong className="text-slate-900 font-semibold">AI-Powered TPO Portal</strong> to seamlessly bridge student codebases, coding challenges, and corporate hiring pipelines.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleScrollToFeatures}
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-650 hover:from-indigo-700 hover:to-violet-750 text-white font-sans font-bold text-sm rounded-full shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                Explore TPO Features <ArrowRight size={16} />
              </button>
              <button
                onClick={handleScrollToFeatures}
                className="px-7 py-3.5 bg-white/85 hover:bg-slate-50 border border-slate-200 rounded-full font-sans font-bold text-sm text-slate-700 transition-colors shadow-xs backdrop-blur-xs cursor-pointer"
              >
                See Platform Workflows
              </button>
            </div>
          </div>

          {/* Right Split-Screen Visual Column (Focused solely on TPO placement outcomes) */}
          <div className="lg:col-span-6 w-full relative">
            {/* Decorative Glow Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-200/30 rounded-full blur-[80px] -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Left Panel: Assessments & Leaderboard */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Coding Assessments</span>
                  <span className="text-[9px] px-2 py-0.5 bg-indigo-50 border border-indigo-150 text-indigo-600 rounded-full font-semibold">
                    Campus Contests
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center gap-2.5">
                    <Terminal size={14} className="text-indigo-600 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">
                        React Optimization Assessment
                      </h4>
                      <p className="text-[9px] text-slate-505 text-slate-500 font-mono mt-0.5">142 active submissions</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider font-mono block">Real-time Leaderboard</span>
                    
                    {/* Leaderboard Rows */}
                    <div className="space-y-1 text-[10px]">
                      {[
                        { name: "Arjun Kumar", score: "Score: 98", rank: "#1" },
                        { name: "Sarah Nguyen", score: "Score: 94", rank: "#2" },
                        { name: "Marcus Brody", score: "Score: 89", rank: "#3" }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-1.5 rounded border transition-colors ${
                            activeLeaderboardRow === index
                              ? "bg-indigo-50 border-indigo-150 text-indigo-700"
                              : "bg-white border-slate-100 text-slate-700"
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-slate-400">{item.rank}</span>
                            <span className="font-bold">{item.name}</span>
                          </div>
                          <span className="text-[9px] font-semibold">{item.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: TPO Candidate Match */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300 md:mt-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">AI Sourcing Engine</span>
                  <span className="text-[9px] px-2 py-0.5 bg-emerald-50 border border-emerald-150 text-emerald-600 rounded-full font-semibold">
                    Placements
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Search query input simulation */}
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={10} />
                    <div className="w-full pl-6 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-[10px] text-slate-800 truncate font-mono">
                      Query: Express.js & PostgreSQL
                    </div>
                  </div>

                  {/* Candidate list */}
                  <div className="space-y-2">
                    <div className="p-2.5 bg-white border border-slate-150 rounded-lg shadow-2xs relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">Aravind Kumar S</h4>
                          <p className="text-[9px] text-slate-400">Class of 2026 · CSE Branch</p>
                        </div>
                        <span className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100 shrink-0">
                          Score: 891
                        </span>
                      </div>

                      {/* Matching badge animated */}
                      {tpoSearchActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          className="absolute bottom-2 right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow-sm"
                        >
                          <Sparkles size={8} /> 97% Match
                        </motion.div>
                      )}

                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="text-[8px] px-1 bg-slate-50 border border-slate-100 text-slate-500 rounded">Node.js</span>
                        <span className="text-[8px] px-1 bg-slate-50 border border-slate-100 text-slate-500 rounded">Postgres</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
