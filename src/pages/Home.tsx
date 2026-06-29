import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Award, Check, X, Shield, Users, Terminal, CheckCircle, Database, GitBranch, Cpu, Zap, ShieldAlert, BarChart } from "lucide-react";
import ResumeWorkmarkCompare from "@/components/home/ResumeWorkmarkCompare";
import SourcingDashboard from "@/components/home/SourcingDashboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"compare" | "search">("compare");

  // Scroll to hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Height of navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-20 overflow-hidden font-body">
      {/* Light subtle background grid */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section id="overview" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-8 md:py-12">
        {/* Top spacer to balance visual weight */}
        <div className="h-2 md:h-6" />

        {/* Center content */}
        <div className="container text-center max-w-[960px] relative z-10 flex-1 flex flex-col justify-center">
          {/* Headline */}
          <h1 className="font-serif-display font-normal text-[44px] leading-[1.15] tracking-tight md:text-7xl lg:text-[80px] lg:leading-[88px] mb-8 text-[#111111]">
            Verified Sourcing Platform for
            <br />
            <span className="text-violet-600 italic font-normal">Proven Tech Talent</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Source top engineering talent verified by objective proof of work.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-sm rounded-full transition-colors shadow-sm flex items-center gap-2"
            >
              Book Enterprise Demo <ArrowRight size={16} />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("how-it-works");
                if (element) {
                  const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-full font-sans font-bold text-sm text-slate-700 transition-colors shadow-xs"
            >
              Explore Platform
            </button>
          </div>
        </div>

        {/* Bottom marquee content */}
        <div className="container max-w-4xl mx-auto text-center z-10">
          <p className="text-xs font-bold text-slate-400 font-sans uppercase tracking-wider mb-5">
            Verifying Technical Skills for Fortune 500 Companies
          </p>
          <div className="relative w-full overflow-hidden py-3">
            {/* Fade gradient overlays on left and right */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max gap-16 animate-marquee whitespace-nowrap opacity-40 hover:opacity-75 transition-opacity duration-300">
              {Array(2).fill(0).map((_, groupIndex) => (
                <div key={groupIndex} className="flex justify-around gap-16 items-center shrink-0 min-w-full">
                  <span className="font-display font-black text-slate-500 text-lg tracking-tight select-none">MICROSOFT</span>
                  <span className="font-display font-bold text-slate-500 text-lg tracking-tight select-none">SALESFORCE</span>
                  <span className="font-display font-extrabold text-slate-500 text-lg tracking-tight select-none">AMAZON</span>
                  <span className="font-display font-semibold text-slate-500 text-lg tracking-tight select-none">ACCENTURE</span>
                  <span className="font-display font-black text-slate-500 text-lg tracking-tight select-none">J.P. MORGAN</span>
                  <span className="font-display font-bold text-slate-500 text-lg tracking-tight select-none">GOLDMAN SACHS</span>
                  <span className="font-display font-extrabold text-slate-500 text-lg tracking-tight select-none">INTEL</span>
                  <span className="font-display font-semibold text-slate-500 text-lg tracking-tight select-none">ORACLE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Sourcing Challenge / Comparison tabs */}
      <section className="py-20 border-t border-slate-200 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#0F294A]">
              The Trust Gap in Modern Recruiting
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Traditional talent systems rely on unverified text (resumes) or practice-run interviews. Zentro Workmark evaluates candidate skills based on ground-truth project outcomes.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="mb-10 flex justify-center gap-2 border-b border-slate-200 pb-4 max-w-sm mx-auto">
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-4 py-2.5 text-xs font-bold font-sans rounded-md transition-all ${
                activeTab === "compare" ? "bg-white text-[#0F294A] border border-slate-200 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Workmark Skill Verification
            </button>
            <button
              onClick={() => setActiveTab("search")}
              className={`px-4 py-2.5 text-xs font-bold font-sans rounded-md transition-all ${
                activeTab === "search" ? "bg-white text-[#0F294A] border border-slate-200 shadow-xs" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Enterprise Sourcing Dashboard
            </button>
          </div>

          <div className="transition-all duration-200">
            {activeTab === "compare" ? <ResumeWorkmarkCompare /> : <SourcingDashboard />}
          </div>
        </div>
      </section>

      {/* Section: How it Works (Consolidated Platform Page) */}
      <section id="how-it-works" className="py-24 border-t border-slate-200 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="font-mono text-xs text-[#0F294A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
              The Architecture
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-6 leading-tight">
              How Zentro Workmark Validates Technical Skills
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Zentro Workmark is built on verified, ground-truth project credentials. We bridge the gap between self-reported resume statements and actual coding capability.
            </p>
          </div>

          <div className="space-y-24">
            {/* Verification Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-[#0F294A]">
                  <GitBranch size={22} />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0F294A]">
                  Verified Project Outcomes
                </h3>
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

              {/* Sample Logs Graphic */}
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

            {/* Aligning Skills Detail */}
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
                <h3 className="font-display font-bold text-2xl text-[#0F294A]">
                  Challenge-Based Skills Alignment
                </h3>
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
          </div>
        </div>
      </section>

      {/* Section: Sourcing Pipeline (Consolidated Solutions Page) */}
      <section id="sourcing-pipeline" className="py-24 border-t border-slate-200 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="font-mono text-xs text-[#0F294A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
              Sourcing & Acquisition Solutions
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-6 leading-tight">
              Find and Hire Verified Tech Talent Faster
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Skip screening calls and subjective coding screens. Hire top talent validated by ground-truth proof-of-work histories and partner-evaluated challenges.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">
                  The Problem with Standard Tech Sourcing
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Recruiting software engineers has become an exercise in volume filtering. Recruiters parse hundreds of keyword-stuffed resumes, host repetitive screening calls, and subject candidates to standard LeetCode tests that can easily be optimized or memorized.
                </p>
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 flex items-start gap-3">
                  <ShieldAlert size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <strong>The Cost:</strong> High pipeline rejection rates, weeks spent on scheduling, and massive engineering time wasted reviewing candidates who lack actual project capability.
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-md p-8 space-y-6">
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
                      <strong>ATS Integration:</strong> Sync candidate scorecards and challenge summaries directly to your existing ATS loops (Greenhouse, Lever, etc.).
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sourcing Benefits Row */}
            <div className="border-t border-slate-200 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Zap size={18} />
                </div>
                <h4 className="text-base font-bold text-slate-900">40% Less Time-to-Hire</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bypass initial assessments. Candidates with established Workmarks are ready for final-stage architectural reviews on day one.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                  <Users size={18} />
                </div>
                <h4 className="text-base font-bold text-slate-900">Objective Vetting</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provide your interview loops with clear, verified project scorecards, ensuring candidates are evaluated strictly on skills and solution quality.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <BarChart size={18} />
                </div>
                <h4 className="text-base font-bold text-slate-900">Mitigate Sourcing Cost</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Reduce dependency on external sourcing search firms and expensive screening software. Access verified creators directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Integrations & Compliance */}
      <section id="integrations" className="py-24 border-t border-slate-200 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl text-[#0F294A]">
              Enterprise Grade Security & Integration
            </h2>
            <p className="text-slate-505 text-slate-505 text-slate-500 text-sm mt-3">
              Zentro fits directly into your existing HR technology stack and conforms to world-class security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4">
                <Database size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">ATS Integration</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Out-of-the-box syncing with Greenhouse, Lever, Workday, and SmartRecruiters. Export scores and project summaries automatically.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-indigo-50 rounded-md flex items-center justify-center text-indigo-600 mb-4">
                <GitBranch size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Code Repository Sync</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect GitHub, GitLab, and Bitbucket. Import verified public repositories and commit logs into Candidate Workmarks.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <div className="w-10 h-10 mx-auto bg-emerald-50 rounded-md flex items-center justify-center text-emerald-600 mb-4">
                <Shield size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Compliance & Privacy</h4>
              <p className="text-xs text-slate-505 text-slate-500 leading-relaxed">
                SOC2 Type II certified. Full GDPR & CCPA compliance, keeping all candidate records secure and anonymized when needed.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container text-center max-w-2xl relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mb-6">
            Get Ground-Truth Sourcing
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            Deploy a verification network that ensures you hire candidates who can execute and maps capabilities based on true project performance.
          </p>
          <div className="flex justify-center">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-md transition-colors shadow-sm"
            >
              Request Sourcing Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
