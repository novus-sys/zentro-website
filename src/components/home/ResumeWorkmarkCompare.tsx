import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, FileText, Cpu, ArrowRight, ShieldCheck, Award, Zap, Code } from "lucide-react";

export default function ResumeWorkmarkCompare() {
  const [transformed, setTransformed] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm font-body">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full font-bold">
          Verification Paradigm
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mt-3">
          Stop Guessing Based on Unverified Resumes
        </h3>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Candidates can write anything on a PDF. Zentro Workmark verifies skills through actual project execution and peer review.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative min-h-[460px]">
        {/* Left Side: Traditional Resume */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col relative overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <FileText className="text-slate-400" size={18} />
              <span className="text-sm font-semibold text-slate-500">traditional_resume.pdf</span>
            </div>
            <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full flex items-center gap-1">
              <AlertCircle size={10} /> Unverified
            </span>
          </div>

          <div className="space-y-4 opacity-60 select-none">
            <div>
              <div className="w-32 h-4 bg-slate-200 rounded mb-1" />
              <div className="w-48 h-3 bg-slate-100 rounded" />
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <div className="w-20 h-3 bg-slate-250 rounded mb-1" />
              <div className="h-3 bg-slate-100 rounded w-full" />
              <div className="h-3 bg-slate-100 rounded w-5/6" />
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              <div className="w-16 h-3 bg-slate-200 rounded" />
              {/* Fake Self-Reported Skills */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-500 rounded">
                  React (Expert)
                </span>
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-500 rounded">
                  Node.js (Advanced)
                </span>
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-500 rounded">
                  TypeScript (5 Years)
                </span>
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-xs text-slate-500 rounded">
                  Machine Learning
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <div className="w-24 h-3 bg-slate-200 rounded mb-1" />
              <div className="h-3 bg-slate-100 rounded w-11/12" />
            </div>
          </div>

          {/* Alert Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent p-6 pt-16 flex flex-col items-center justify-end text-center">
            <p className="text-xs text-slate-500 mb-4 max-w-[280px]">
              How do you know they actually built these systems?
            </p>
            {!transformed && (
              <button
                onClick={() => setTransformed(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm hover:scale-[1.01] transition-all"
              >
                Transform to Zentro Workmark <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Zentro Workmark Dashboard */}
        <div className="bg-white border border-blue-200 rounded-xl p-6 flex flex-col relative overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Award className="text-blue-600" size={18} />
              <span className="text-sm font-semibold text-slate-900 font-display">Zentro Verified Workmark</span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-250 px-2 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck size={10} className="fill-emerald-700/10" /> Verified Skill Logs
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!transformed ? (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-4"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 mb-3">
                  <Cpu size={20} />
                </div>
                <p className="text-xs text-slate-400 max-w-xs">
                  Click "Transform to Zentro Workmark" to fetch proof-of-work records, challenge ratings, and expert scores.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Candidate Overview */}
                <div className="flex items-center gap-3 mb-5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-none">Arjun K.</h4>
                    <span className="text-[10px] text-slate-500 font-mono">Workmark ID: #ZNT-8893A</span>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="text-[9px] text-slate-400 block font-semibold">WORKMARK SCORE</span>
                    <span className="text-sm font-extrabold text-blue-600 font-mono">
                      895 / 1000
                    </span>
                  </div>
                </div>

                {/* Proof-of-Work Timeline */}
                <div className="space-y-3 flex-1 mb-4">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Verified Projects & Challenges</div>

                  {/* Project 1 */}
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <Code size={14} className="text-blue-600" />
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Full-Stack Realtime Auction Platform</div>
                        <div className="text-[10px] text-slate-500">Challenge sponsor: Novus-Sys · Completed in 48 hours</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Rank #4/180
                    </span>
                  </div>

                  {/* Project 2 */}
                  <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-indigo-650" />
                      <div>
                        <div className="text-xs font-semibold text-slate-800">Smart Contract Gas Optimization Challenge</div>
                        <div className="text-[10px] text-slate-500">Community Hackathon · Verified by 3 Expert Auditors</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Top 2%
                    </span>
                  </div>
                </div>

                {/* Skills Graph */}
                <div className="border-t border-slate-100 pt-3">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Verified Skill Proficiencies</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-600 mb-1">
                        <span>React / TypeScript</span>
                        <span className="font-semibold text-blue-600">92%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-600 mb-1">
                        <span>Rust / Node.js</span>
                        <span className="font-semibold text-indigo-600">84%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-indigo-605 bg-indigo-600 h-full w-[84%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-400">record: Project ID #4992</span>
                  <button
                    onClick={() => setTransformed(false)}
                    className="text-[10px] font-semibold text-blue-650 hover:text-blue-800 text-blue-600 hover:underline transition-colors"
                  >
                    Reset Demo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
