import { CheckCircle, Users, Zap, ShieldAlert, BarChart } from "lucide-react";

export default function SolutionsAcquisition() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />

      {/* Hero */}
      <div className="container max-w-4xl text-center mb-16">
        <span className="font-mono text-xs text-[#0F294A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
          Solutions for Recruiting
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-[#0F294A] mt-4 mb-6 leading-tight">
          Find and Hire Verified Tech Talent Faster
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Skip screening calls and subjective coding screens. Hire top talent validated by ground-truth proof-of-work histories and partner-evaluated challenges.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#0F294A] hover:bg-[#071629] text-white text-sm font-bold rounded-md transition-all shadow-sm"
          >
            Get Sourcing Access
          </a>
        </div>
      </div>

      {/* Sourcing Pain points */}
      <div className="container max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-6">
              The Problem with Standard Tech Sourcing
            </h3>
            <p className="text-slate-505 text-slate-505 text-slate-500 text-sm leading-relaxed mb-4">
              Recruiting software engineers has become an exercise in volume filtering. Recruiters parse hundreds of keyword-stuffed resumes, host repetitive screening calls, and subject candidates to standard LeetCode tests that can easily be optimized or memorized.
            </p>
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 flex items-start gap-3">
              <ShieldAlert size={18} className="shrink-0 mt-0.5" />
              <div>
                <strong>The Cost:</strong> High pipeline rejection rates, weeks spent on scheduling, and massive engineering time wasted reviewing candidates who lack actual project capability.
              </div>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-md p-8 space-y-6">
            <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">How Zentro Changes Sourcing</h4>
            <ul className="space-y-4 text-xs text-slate-700">
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] shrink-0 mt-0.5" />
                <div>
                  <strong>Pre-Vetted Candidate Pool:</strong> Source directly from our network of student and professional creators who have established a verified Zentro Workmark.
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] shrink-0 mt-0.5" />
                <div>
                  <strong>Verified Challenge Outcomes:</strong> Access complete candidate code repositories, partner-sponsor grade scorecards, and challenge ranks before the first loop.
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-[#0F294A] shrink-0 mt-0.5" />
                <div>
                  <strong>ATS Synchronization:</strong> Sync candidate scorecards and challenge summaries directly to your existing ATS loops (Greenhouse, Lever, etc.).
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="border-t border-slate-200 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-650 text-blue-600">
              <Zap size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">40% Less Time-to-Hire</h4>
            <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">
              Bypass initial assessments. Candidates with established Workmarks are ready for final-stage architectural reviews on day one.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
              <Users size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">Objective Assessments</h4>
            <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">
              Provide your interview loops with clear, verified project scorecards, ensuring candidates are evaluated strictly on skills and solution quality.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
              <BarChart size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">Mitigate Sourcing Cost</h4>
            <p className="text-xs text-slate-550 text-slate-500 leading-relaxed">
              Reduce dependency on external sourcing search firms and expensive screening software. Access verified creators directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
