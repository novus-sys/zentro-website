import { Shield, CheckCircle, Database, GitBranch, Cpu, Award } from "lucide-react";

export default function Platform() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />

      {/* Header */}
      <div className="container max-w-4xl text-center mb-20">
        <span className="font-mono text-xs text-[#0F294A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
          The Architecture
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-[#0F294A] mt-4 mb-6 leading-tight">
          How Zentro Workmark Validates Technical Skills
        </h1>
        <p className="text-slate-550 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Zentro Workmark is built on verified, ground-truth project credentials. We bridge the gap between self-reported resume statements and actual coding capability.
        </p>
      </div>

      {/* Details Container */}
      <div className="container space-y-28">
        {/* Detail 1: Verification Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-[#0F294A]">
              <GitBranch size={22} />
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0F294A]">
              Verified Project Outcomes
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every Workmark profile links back to actual project achievements. Zentro tracks code repository updates, lint audit reports, compile checks, and partner evaluations to compile an objective technical profile for each candidate.
            </p>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>Code Validation:</strong> Code submissions are checked and logged, ensuring authenticity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>Sponsor Mentor Audits:</strong> Challenges are graded by senior engineers and corporate sponsors, scoring candidates based on industry rubrics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>Anti-Plagiarism Guardrails:</strong> System detects code duplication, structure matching, and AI-generation inconsistencies to maintain credibility.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-md p-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Candidate Verification Logs</span>
              <span className="text-[10px] font-semibold text-[#0F5132] bg-[#D1E7DD] px-2 py-0.5 rounded">Verified Records</span>
            </div>
            <div className="space-y-4 text-xs">
              <div className="bg-white p-3.5 border border-slate-200 rounded-md">
                <div className="font-bold text-slate-800">React Hook Optimization Challenge</div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">Project ID: #4928 · evaluator: Solaris Corp</div>
                <div className="mt-2 text-slate-500">Graded: 94/100 (Top 5%). Code optimized compile steps and reduced hook cycles by 30%.</div>
              </div>
              <div className="bg-white p-3.5 border border-slate-200 rounded-md">
                <div className="font-bold text-slate-800">PostgreSQL Schema Sharding Assessment</div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">Project ID: #4912 · evaluator: Canyon Tech</div>
                <div className="mt-2 text-slate-500">Graded: 88/100. Implemented clean multi-tenant partition key routing.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail 2: Sourcing Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 border border-slate-200 rounded-md p-6 order-last lg:order-first">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Workmark Sourcing vector</span>
              <span className="text-[10px] font-semibold text-[#0F294A] bg-blue-50 px-2 py-0.5 rounded">Active</span>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 bg-white border border-slate-150 rounded-md">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Candidate matches</span>
                  <span className="text-blue-600 font-bold">98% match</span>
                </div>
                <div className="text-xs font-semibold text-slate-800">Target Skill: Backend System Optimization</div>
                <p className="text-[11px] text-slate-500 mt-1">Verified: Top 2% in Canyon-Tech Infrastructure challenge.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-150 rounded-md">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>Candidate matches</span>
                  <span className="text-blue-600 font-bold">94% match</span>
                </div>
                <div className="text-xs font-semibold text-slate-800">Target Skill: Complex SQL Query tuning</div>
                <p className="text-[11px] text-slate-500 mt-1">Verified: Completed Solaris Concurrency challenge.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-[#0F294A]">
              <Cpu size={22} />
            </div>
            <h2 className="font-display font-bold text-3xl text-[#0F294A]">
              Challenge-Based Skills Alignment
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Zentro Workmark indexes candidates based on their verified solutions to real-world corporate challenges. Recruiters query the database using technical attributes, matching candidates who have successfully solved similar problems in university contests and sponsored hackathons.
            </p>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>No Text-Matching Biases:</strong> Candidate indexing relies on verified coding scorecards, avoiding keywords or self-reported lists.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>Pre-Screened Pipeline:</strong> Review complete code, mentor feedback scores, and challenge ranks before the initial call.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] mt-0.5 shrink-0" />
                <span><strong>Blind Evaluation Mode:</strong> Anonymizes candidate names, genders, and universities, allowing loops to focus on coding skill.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Integrations & Compliance */}
        <div id="integrations" className="border-t border-slate-200 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl text-[#0F294A]">
              Enterprise Grade Security & Ecosystem
            </h2>
            <p className="text-slate-505 text-slate-500 text-sm mt-3">
              Zentro fits directly into your existing HR technology stack and conforms to world-class security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4">
                <Database size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">ATS Integration</h4>
              <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">
                Out-of-the-box syncing with Greenhouse, Lever, Workday, and SmartRecruiters. Export scores and project summaries automatically.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-indigo-50 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                <GitBranch size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Code Repository Sync</h4>
              <p className="text-xs text-slate-505 text-slate-505 text-slate-500 leading-relaxed">
                Connect GitHub, GitLab, and Bitbucket. Import verified public repositories and commit logs into Candidate Workmarks.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-emerald-50 rounded-md flex items-center justify-center text-emerald-600 mb-4">
                <Shield size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Compliance & Privacy</h4>
              <p className="text-xs text-slate-505 text-slate-505 text-slate-500 leading-relaxed">
                SOC2 Type II certified. Full GDPR & CCPA compliance, keeping all candidate records secure and anonymized when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
