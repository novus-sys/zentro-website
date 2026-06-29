import { useState } from "react";
import { Play, Pause, FileText, CheckCircle2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function EvaluateDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"notes" | "rubric" | "transcript">("notes");

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm font-body">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full font-bold">
          Interview Intelligence
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mt-3">
          Automated Rubrics & Smart Interview Summaries
        </h3>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Zentro Evaluate transcribes interviews, maps conversations to competency rubrics, and syncs directly into your ATS.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recording Playback & Live Waveform */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-slate-800 uppercase font-display">Active Session</span>
              <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1.5 bg-blue-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Live Recording
              </span>
            </div>

            {/* Candidate Identity card */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    SN
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                    AI
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none">Sarah Nguyen</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Applying for Senior Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Interactive Audio Player */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>System Design & Coding</span>
                <span>14:32 / 45:00</span>
              </div>

              {/* Waveform Visualization */}
              <div className="h-16 flex items-end justify-between gap-[2px] px-2 py-1 bg-slate-50 rounded-lg overflow-hidden border border-slate-100">
                {[12, 18, 14, 25, 32, 10, 8, 28, 42, 38, 18, 12, 30, 48, 55, 35, 12, 15, 28, 20, 35, 45, 12, 8, 16, 24, 38, 42, 28, 12, 20, 35, 18, 10, 30, 52, 45, 20, 12, 8, 22, 32, 18, 12, 24, 36, 12, 10].map((val, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-indigo-650"
                    animate={{
                      height: isPlaying ? `${val * 0.9}%` : `${Math.max(4, val * 0.2)}%`
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: isPlaying ? Infinity : 0,
                      repeatType: "reverse",
                      delay: isPlaying ? idx * 0.01 : 0
                    }}
                  />
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center hover:scale-105 transition-all shadow-sm"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-[11px] text-slate-500">
            <span>ATS Status: Synced</span>
            <span className="flex items-center gap-1 font-semibold text-emerald-600">
              <CheckCircle2 size={12} className="text-emerald-500" /> Greenhouse
            </span>
          </div>
        </div>

        {/* Right Column: AI Analysis Pane */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl flex flex-col overflow-hidden shadow-xs">
          {/* Tab Selector */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setSelectedTab("notes")}
              className={`flex-1 py-3.5 text-xs font-semibold border-b-2 font-display transition-colors ${
                selectedTab === "notes" ? "text-blue-600 border-blue-600 bg-white" : "text-slate-500 border-transparent hover:text-slate-900"
              }`}
            >
              AI Notes
            </button>
            <button
              onClick={() => setSelectedTab("rubric")}
              className={`flex-1 py-3.5 text-xs font-semibold border-b-2 font-display transition-colors ${
                selectedTab === "rubric" ? "text-blue-600 border-blue-600 bg-white" : "text-slate-500 border-transparent hover:text-slate-900"
              }`}
            >
              Competency Rubric
            </button>
            <button
              onClick={() => setSelectedTab("transcript")}
              className={`flex-1 py-3.5 text-xs font-semibold border-b-2 font-display transition-colors ${
                selectedTab === "transcript" ? "text-blue-600 border-blue-600 bg-white" : "text-slate-500 border-transparent hover:text-slate-900"
              }`}
            >
              Smart Transcript
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-6 flex-1 flex flex-col justify-between min-h-[300px]">
            {selectedTab === "notes" && (
              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">Interview Summary</h5>
                  <p className="text-sm text-slate-650 leading-relaxed text-slate-700">
                    Sarah Nguyen demonstrated deep, verified expertise in React State optimization during the coding phase. She accurately diagnosed a layout thrashing issue in the live code assessment and suggested a throttled handler implementation, referencing a similar optimization project in her Zentro Workmark timeline.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Highlights</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                      <div className="text-xs font-bold text-slate-800 mb-1">Architectural Trade-offs</div>
                      <p className="text-[11px] text-slate-500 leading-normal">Competently compared SQL and NoSQL for time-series scaling, choosing PostgreSQL with timescaleDB extension.</p>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                      <div className="text-xs font-bold text-slate-800 mb-1">Code Quality & Safety</div>
                      <p className="text-[11px] text-slate-500 leading-normal">Wrote clean, type-safe interfaces using TypeScript, ensuring strict null checking and robust error boundary usage.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "rubric" && (
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-wider">Scorecard mapped to customized rubrics</h5>
                <div className="space-y-4">
                  {/* Score 1 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">System Architecture & Scale</span>
                      <span className="font-bold text-blue-600">9.0 / 10</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[90%]" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Excellent grasp of caching strategies, load balancing, and read-replica replication lag mitigation.</p>
                  </div>

                  {/* Score 2 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">Coding Proficiency (TypeScript)</span>
                      <span className="font-bold text-indigo-600">8.5 / 10</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[85%]" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Clean implementation of async retry logic, although omitted secondary queue fallback until questioned.</p>
                  </div>

                  {/* Score 3 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">Collaborative Problem Solving</span>
                      <span className="font-bold text-emerald-600">9.5 / 10</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[95%]" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Highly collaborative; listens closely to interviewer feedback and incorporates hints immediately.</p>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "transcript" && (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                  <span className="font-bold text-indigo-600 block mb-1">Sarah Nguyen (Candidate)</span>
                  <p className="text-slate-700 leading-normal">
                    "If we use a standard debounce here, we might drop keystrokes if the user types rapidly and hits submit. I'd prefer using a throttle or checking the input status block before submitting, which is similar to the approach I implemented in the public repo hackathon challenge in 2025."
                  </p>
                </div>
                <div className="p-3 bg-blue-50/30 border border-blue-100 rounded-lg">
                  <span className="font-bold text-blue-700 block mb-1">Interviewer (Novus-Sys Tech Lead)</span>
                  <p className="text-slate-700 leading-normal">
                    "That makes sense. Can you show me how you'd structure the fallback cache in that scenario?"
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-150 flex items-center justify-between text-[11px] text-slate-400 border-slate-100">
              <span>Analysis time: 1.4s after call end</span>
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                <RefreshCw size={12} /> Re-analyze with new rubric
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
