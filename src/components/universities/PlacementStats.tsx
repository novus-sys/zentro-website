import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, BarChart2, Database, GitBranch, Shield, CheckCircle2 } from "lucide-react";

export default function PlacementStats() {
  const [activeSync, setActiveSync] = useState<string | null>(null);

  const metrics = [
    {
      icon: <Zap className="text-indigo-600" size={20} />,
      stat: "40% Faster",
      label: "Time-to-Hire Outcomes",
      desc: "Verified profiles skip initial coding rounds, letting recruiters proceed directly to final-round architectural audits."
    },
    {
      icon: <ShieldCheck className="text-indigo-600" size={20} />,
      stat: "100% Vetted",
      label: "Plagiarism-Free Portfolios",
      desc: "Automated syntax and structural duplication analysis guards against plagiarism and guarantees code authenticity."
    },
    {
      icon: <BarChart2 className="text-indigo-600" size={20} />,
      stat: "3.2x More",
      label: "Recruiter Engagement",
      desc: "Universities using Zentro see a massive surge in corporate sourcing inquiries due to verified capability searches."
    }
  ];

  return (
    <section id="placement-outcomes-section" className="py-24 border-t border-slate-200 bg-white font-body">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs text-indigo-650 bg-indigo-50 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
            Outcomes & Integrations
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-4">
            Placement Success & Partner Integrations
          </h2>
          <p className="text-slate-505 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Equip your TPO platform with enterprise-grade integrations. Connect student capstone repositories directly into recruiter ATS loops to fast-track hiring cycles.
          </p>
        </div>

        {/* Success Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-md hover:scale-[1.01] transition-all">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-2xl font-extrabold text-[#0F294A] font-sans tracking-tight">
                {metric.stat}
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-1 mb-2">{metric.label}</h4>
              <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="border-t border-slate-150 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-2xl md:text-3.5xl text-[#0F294A]">
              Out-of-the-Box HR Technology Sync
            </h3>
            <p className="text-slate-505 text-slate-500 text-sm leading-relaxed">
              Zentro connects directly with standard Applicant Tracking Systems and repository services. Avoid duplicate entry and let placement officers export candidates straight to corporate pipelines.
            </p>

            {/* Interactive list */}
            <div className="space-y-3">
              <div 
                onClick={() => setActiveSync("ats")}
                className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  activeSync === "ats" ? "border-indigo-600 bg-indigo-50/20" : "border-slate-200 hover:border-slate-350 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Database size={18} className="text-indigo-600" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Applicant Tracking Systems (ATS)</h4>
                    <p className="text-[10px] text-slate-400">Greenhouse, Lever, and Workday</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-semibold">
                  Click to Test Sync
                </span>
              </div>

              <div 
                onClick={() => setActiveSync("git")}
                className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  activeSync === "git" ? "border-indigo-600 bg-indigo-50/20" : "border-slate-200 hover:border-slate-350 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <GitBranch size={18} className="text-indigo-600" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Source Code Hosting</h4>
                    <p className="text-[10px] text-slate-400">GitHub, GitLab, and Bitbucket</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-semibold">
                  Click to Test Sync
                </span>
              </div>

              <div 
                onClick={() => setActiveSync("security")}
                className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                  activeSync === "security" ? "border-indigo-600 bg-indigo-50/20" : "border-slate-200 hover:border-slate-350 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-indigo-600" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Compliance & Privacy Standards</h4>
                    <p className="text-[10px] text-slate-400">SOC2 Type II, ISO 27001 Certified</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-semibold">
                  Click to Verify
                </span>
              </div>
            </div>
          </div>

          {/* Sync output logger mockup */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Integration Status Logs</span>
                <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-250 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 size={10} /> Active Loops
                </span>
              </div>

              <AnimatePresence mode="wait">
                {activeSync === "ats" && (
                  <motion.div
                    key="ats-log"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3.5 text-xs font-mono text-slate-655 text-slate-600"
                  >
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[11:42:01] Greenhouse API: Hook triggered</span>
                      <p className="font-bold text-slate-700 mt-1">Synced 14 Candidate Profiles successfully</p>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[10:15:30] Lever API: Candidate shortlist query</span>
                      <p className="font-bold text-slate-700 mt-1">Matched 3 students with "Verified Node.js" filter</p>
                    </div>
                  </motion.div>
                )}

                {activeSync === "git" && (
                  <motion.div
                    key="git-log"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3.5 text-xs font-mono text-slate-655 text-slate-600"
                  >
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[11:40:15] GitHub OAuth: Webhook triggered</span>
                      <p className="font-bold text-slate-700 mt-1">Parsed commit history for 28 campus capstone repos</p>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[09:30:10] GitLab API: Repository verify check</span>
                      <p className="font-bold text-slate-700 mt-1">Duplication checks clear. Plagiarism audit complete.</p>
                    </div>
                  </motion.div>
                )}

                {activeSync === "security" && (
                  <motion.div
                    key="sec-log"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3.5 text-xs font-mono text-slate-655 text-slate-600"
                  >
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[Global Security Profile] CCPA & GDPR compliant</span>
                      <p className="font-bold text-slate-700 mt-1">Anonymized blind-review data pipelines active</p>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-150 rounded">
                      <span className="text-[10px] text-slate-400">[Compliance] SOC 2 Type II audit logs</span>
                      <p className="font-bold text-slate-700 mt-1">Encryption-at-rest verified for candidate credentials</p>
                    </div>
                  </motion.div>
                )}

                {!activeSync && (
                  <motion.div
                    key="no-log"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-40 text-slate-400 text-xs"
                  >
                    <Database size={24} className="mb-2 text-slate-300" />
                    <span>Select an integration on the left to review verification logs.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="text-[10px] text-slate-400 mt-4 border-t border-slate-200 pt-3">
              * Verification trails are synced via secure end-to-end webhook protocols.
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
