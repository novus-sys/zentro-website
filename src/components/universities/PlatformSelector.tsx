import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lightbulb, Code, Building, BarChart2, CheckCircle2, Star, ShieldCheck, Cpu } from "lucide-react";

export default function PlatformSelector() {
  const [selectedTpoSkill, setSelectedTpoSkill] = useState<string | null>(null);

  const features = [
    {
      icon: <Sparkles className="text-indigo-600" size={18} />,
      title: "AI-Powered Talent Search",
      desc: "Move beyond static resumes. Recruiters and TPOs search candidate pools using filters like 'Verified Node.js,' 'Has production deployments,' and 'Top 5% Challenge Rank.'"
    },
    {
      icon: <Lightbulb className="text-indigo-600" size={18} />,
      title: "Contextual AI Match Justification",
      desc: "Every matching candidate profile features an AI-written explanation: '98% Match: Deployed 2 verified backend projects using Node.js/Express, showing 340+ GitHub contributions.'"
    },
    {
      icon: <Code className="text-indigo-600" size={18} />,
      title: "Assessments & Campus Contests",
      desc: "Create university-private coding challenges and assessments. Manage a secure campus question bank, prevent plagiarism with built-in checks, and watch real-time leaderboards update."
    },
    {
      icon: <Building className="text-indigo-600" size={18} />,
      title: "Hiring Partner CRM",
      desc: "Maintain complete visibility over corporate connections. Track job postings, recruitment drive dates, student application pipelines, and salary benchmarks."
    },
    {
      icon: <BarChart2 className="text-indigo-600" size={18} />,
      title: "Placement Funnel Analytics",
      desc: "Monitor your campus placement performance in real-time. View interview conversion rates, highest package trends, and track student success metrics from shortlist to offer letter."
    }
  ];

  return (
    <section id="tpo-features-section" className="py-20 border-t border-slate-200 bg-slate-50 font-body">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs text-indigo-650 bg-indigo-50 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
            Placement Engine
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-4">
            The Placement & Career Accelerator
          </h2>
          <p className="text-slate-505 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Empower placement teams and placement officers with corporate sourcing tools. Index candidate skills based on verified project outputs and assessments.
          </p>
        </div>

        {/* Panel Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Feature grids and info */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feat, index) => (
                <div 
                  key={index} 
                  className={`bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:scale-[1.01] transition-all ${
                    index === 4 ? "md:col-span-2 hover:scale-[1.005]" : ""
                  }`}
                >
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                  <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High Fidelity TPO Student Showcase Mockup */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">Candidate Profile Insight</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck size={10} /> Zentro Verified
                </span>
              </div>

              <p className="text-xs text-slate-505 text-slate-500 mb-4 leading-relaxed">
                Review a candidate's readiness scores. <strong className="text-slate-800">Click a verified skill badge</strong> to view live audit credentials.
              </p>

              {/* Student Profile Card */}
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Aravind Kumar S</h4>
                    <p className="text-[9px] text-slate-400 font-mono">CSE Branch · Batch of 2026</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-[8px] font-bold text-slate-400 tracking-wide font-mono uppercase">Zentro Score</div>
                    <div className="text-xs font-extrabold text-indigo-650 text-indigo-600 font-mono flex items-center gap-0.5 justify-end">
                      <Star size={10} className="fill-indigo-600 text-indigo-600" /> 891 <span className="text-[8px] text-slate-400 font-semibold">(top 4%)</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 border-y border-slate-150 py-3 text-center">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-mono">Industry Readiness</span>
                    <strong className="text-xs font-extrabold text-slate-800">78% Ready</strong>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-mono">Verified Commit History</span>
                    <strong className="text-xs font-extrabold text-slate-800">420+ Commits</strong>
                  </div>
                </div>

                {/* Interactive Badges */}
                <div className="space-y-2">
                  <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider font-mono block">Verified Skill Badges</span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setSelectedTpoSkill("nodejs")}
                      className={`text-[9px] px-2.5 py-1 rounded border font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                        selectedTpoSkill === "nodejs"
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-100/50"
                      }`}
                    >
                      Node.js (Github)
                    </button>
                    <button
                      onClick={() => setSelectedTpoSkill("postgresql")}
                      className={`text-[9px] px-2.5 py-1 rounded border font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                        selectedTpoSkill === "postgresql"
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-100/50"
                      }`}
                    >
                      PostgreSQL (Challenge)
                    </button>
                  </div>
                </div>

                {/* Match Justification */}
                <div className="p-3 bg-white border border-slate-150 rounded-lg">
                  <div className="text-[9px] font-bold text-slate-400 font-mono uppercase mb-1">AI Match Justification</div>
                  <p className="text-[10px] text-slate-655 text-slate-600 leading-relaxed italic">
                    "Strong match — 4 verified Node.js backend projects with production deployments. Challenge scores rank in top 5% of platform."
                  </p>
                </div>
              </div>
            </div>

            {/* Badge Detail output */}
            <div className="mt-5 h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {selectedTpoSkill === "nodejs" && (
                  <motion.div
                    key="node-audit"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] text-slate-700 bg-indigo-50 border border-indigo-200 p-2 rounded-lg flex items-start gap-2 max-w-sm"
                  >
                    <Cpu size={14} className="text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Github Integration Audit:</strong> 4 repos verified with clean compile histories, structure testing, and 24 active coding weeks.
                    </div>
                  </motion.div>
                )}
                {selectedTpoSkill === "postgresql" && (
                  <motion.div
                    key="postgres-audit"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] text-slate-700 bg-indigo-50 border border-indigo-200 p-2 rounded-lg flex items-start gap-2 max-w-sm"
                  >
                    <Cpu size={14} className="text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Challenge Audit:</strong> Completed the <i>Solaris Concurrency Challenge</i>, scoring 94/100. Verification backed by Solaris Corp database metrics.
                    </div>
                  </motion.div>
                )}
                {!selectedTpoSkill && (
                  <motion.div
                    key="no-badge"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-slate-400"
                  >
                    Select a badge above to query evaluation logs.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
