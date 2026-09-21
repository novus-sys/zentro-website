import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Shield,
  Users,
  Terminal,
  CheckCircle,
  Database,
  GitBranch,
  Cpu,
  Zap,
  Layers,
  Sparkles,
  Bot,
  Lock
} from "lucide-react";

export default function Home() {

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
            The Autonomous Evaluation &
            <br />
            <span className="text-[#0B25A1] italic font-normal">Technical Hiring Suite</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            One unified intelligence platform for modern engineering teams</p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#0B25A1] hover:bg-[#081E85] text-white font-sans font-bold text-sm rounded-full transition-all shadow-md hover:shadow-lg shadow-[#0B25A1]/20 flex items-center gap-2"
            >
              Book Enterprise Demo <ArrowRight size={16} />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("suite-products");
                if (element) {
                  const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full font-sans font-bold text-sm text-slate-700 transition-colors shadow-xs"
            >
              Explore Products
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

      {/* Flagship Suite Products Section (Non-Pipeline Standalone Pillars) */}
      <section id="suite-products" className="py-24 border-t border-slate-200/80 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B25A1] text-[#0B25A1] text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Layers size={13} />
              The Zentro Suite
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#0F294A] tracking-tight mb-4">
              Three Flagship Pillars. One Verified Standard.
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Independent, deep-tier platforms designed to source, evaluate, and interview engineering talent on real-world capabilities—without human bias or synthetic memorization.
            </p>
          </div>

          {/* 3 Standalone Product Cards (Non-Pipeline Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Workmark Card */}
            <div className="flex flex-col justify-between bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#0B25A1]/40 rounded-2xl p-5 sm:p-7 transition-all duration-200 hover:shadow-xl group relative overflow-hidden">
              {/* Watermark numbering */}
              <span className="absolute top-3 right-4 sm:top-4 sm:right-5 text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-300/70 group-hover:text-[#0B25A1]/20 transition-colors select-none pointer-events-none leading-none">
                01
              </span>

              <div className="relative z-10">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B25A1] bg-white px-2.5 py-1 rounded-md border border-[#0B25A1] shadow-2xs">
                    Sourcing & Credentials
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-[#0B25A1] transition-colors">
                    Workmark
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                  Git-Backed Proof of Work & Talent Discovery
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 sm:mb-5">
                  Replaces self-reported resumes with objective verification. Pulls production Git commits, challenge submissions, and university hackathons into an immutable developer portfolio.
                </p>

                <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-slate-200/80 mb-5">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>100% Code-Validated:</strong> GitHub/GitLab commits with compile and lint logs.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Corporate Challenges:</strong> Pre-screened candidates graded on partner rubrics.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Blind Sourcing:</strong> Query engineers by proven skills, removing pedigree bias.</span>
                  </div>
                </div>
              </div>

              <Link
                to="/products/workmark"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-white group-hover:bg-[#0B25A1] border border-slate-200 group-hover:border-[#0B25A1] text-slate-800 group-hover:text-white font-sans font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs relative z-10"
              >
                Explore Workmark <ArrowRight size={14} />
              </Link>
            </div>

            {/* 2. Vyoma Card */}
            <div className="flex flex-col justify-between bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#0B25A1]/40 rounded-2xl p-5 sm:p-7 transition-all duration-200 hover:shadow-xl group relative overflow-hidden">
              {/* Watermark numbering */}
              <span className="absolute top-3 right-4 sm:top-4 sm:right-5 text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-300/70 group-hover:text-[#0B25A1]/20 transition-colors select-none pointer-events-none leading-none">
                02
              </span>

              <div className="relative z-10">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B25A1] bg-white px-2.5 py-1 rounded-md border border-[#0B25A1] shadow-2xs">
                    Agentic Assessments
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-[#0B25A1] transition-colors">
                    Vyoma
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                  AI-Paired Real-World Sandbox Environment
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 sm:mb-5">
                  Assess how engineers build software in the AI era. Candidates plan, prompt, debug, and review code alongside an intelligent assistant in a production-ready cloud IDE.
                </p>

                <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-slate-200/80 mb-5">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Full-Stack IDE:</strong> Multi-file projects, live terminals, and realistic tickets.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Prompting Telemetry:</strong> Evaluates prompt quality, review diligence, and recovery.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Keystroke & AST Replay:</strong> Transparent playback of engineering decisions.</span>
                  </div>
                </div>
              </div>

              <Link
                to="/products/vyoma"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-white group-hover:bg-[#0B25A1] border border-slate-200 group-hover:border-[#0B25A1] text-slate-800 group-hover:text-white font-sans font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs relative z-10"
              >
                Explore Vyoma <ArrowRight size={14} />
              </Link>
            </div>

            {/* 3. Vega Card */}
            <div className="flex flex-col justify-between bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-[#0B25A1]/40 rounded-2xl p-5 sm:p-7 transition-all duration-200 hover:shadow-xl group relative overflow-hidden">
              {/* Watermark numbering */}
              <span className="absolute top-3 right-4 sm:top-4 sm:right-5 text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-300/70 group-hover:text-[#0B25A1]/20 transition-colors select-none pointer-events-none leading-none">
                03
              </span>

              <div className="relative z-10">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B25A1] bg-white px-2.5 py-1 rounded-md border border-[#0B25A1] shadow-2xs">
                    Autonomous Interviewer
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-[#0B25A1] transition-colors">
                    Vega
                  </h3>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                  Voice-Adaptive Technical Conversational AI
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 sm:mb-5">
                  Conducts autonomous, natural voice interviews that probe deep into architectural choices, code reasoning, and trade-offs with zero scheduling delays.
                </p>

                <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-slate-200/80 mb-5">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Real-Time Voice Probing:</strong> Conversational screening with sub-second latency.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Socratic Depth Checks:</strong> Challenges superficial responses to uncover authentic depth.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-[#0B25A1] shrink-0 mt-0.5" />
                    <span><strong>Standardized Scorecards:</strong> Detailed transcripts and rubric ratings delivered instantly.</span>
                  </div>
                </div>
              </div>

              <Link
                to="/products/vega"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-white group-hover:bg-[#0B25A1] border border-slate-200 group-hover:border-[#0B25A1] text-slate-800 group-hover:text-white font-sans font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs relative z-10"
              >
                Explore Vega <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Section: Amogha AI */}
      <section id="amogha-ai" className="py-20 md:py-24 bg-[#050C2A] text-white relative overflow-hidden flex items-center justify-center">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,37,161,0.25),transparent_70%)] pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10 space-y-3">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            Powered by Amogha AI
          </h2>
          <p className="text-white text-base md:text-lg font-medium tracking-wide">
            Coming Soon
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* 2. THE COMPOUND ADVANTAGE (POINT TOOLS VS ZENTRO SUITE)       */}
      {/* ============================================================ */}
      <section id="compound-advantage" className="py-24 bg-white border-t border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B25A1] text-[#0B25A1] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-2xs">
              <Layers size={12} />
              The Platform Advantage
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#0F294A] tracking-tight">
              Why Teams Choose One Unified Suite
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Hiring with disjointed point solutions burns engineering time, fragments evaluation data, and relies on easily memorized syntax puzzles.
            </p>
          </div>

          {/* Comparison Matrix: Point Solutions vs Zentro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {/* The Disjointed Way */}
            <div className="bg-white border border-rose-200 rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">The Fragmented Point-Tool Stack</h3>
                  <p className="text-xs text-slate-500">Traditional multi-vendor hiring pipeline</p>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Unverifiable text resumes:</strong> Recruiters spend days sifting through keyword-stuffed claims with zero objective code evidence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Algorithmic LeetCode trivia:</strong> Tests rote puzzle memorization rather than how developers actually design, debug, and use AI in production.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>15+ engineering hours/week on screens:</strong> Senior tech leads lose deep focus time conducting repetitive first-round screening calls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Siloed candidate records:</strong> Sourcing data doesn't talk to code test scores, which don't talk to interviewer notes.</span>
                </li>
              </ul>
            </div>

            {/* The Zentro Suite Way */}
            <div className="bg-white border border-[#0B25A1]/30 rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0B25A1] text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">The Zentro Autonomous Suite</h3>
                  <p className="text-xs text-slate-500">One continuous intelligence backbone</p>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-xs text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0B25A1] shrink-0 mt-0.5" />
                  <span><strong>Verified Git Proof of Work (Workmark):</strong> Index candidates by authenticated production pull requests, commits, and audited hackathons.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0B25A1] shrink-0 mt-0.5" />
                  <span><strong>Agentic Real-World IDEs (Vyoma):</strong> Test candidates inside multi-file repos with live terminals, tracking prompting discipline and code review diligence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0B25A1] shrink-0 mt-0.5" />
                  <span><strong>Autonomous Conversational Voice (Vega):</strong> Conduct 100% of first-round technical loops with sub-second voice probing and instant transcript synthesis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0B25A1] shrink-0 mt-0.5" />
                  <span><strong>Single Ground-Truth Ledger:</strong> Sourcing, sandbox telemetry, and voice interviews synthesize into one unified ATS scorecard.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Metric Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pt-4 border-t border-slate-100">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 text-center space-y-1.5">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0B25A1]">65% Less</div>
              <div className="text-xs font-bold text-slate-800">Senior Engineering Time on Screening</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Vega screens hundreds of candidates simultaneously without burning developer focus hours.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 text-center space-y-1.5">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0B25A1]">100% Verified</div>
              <div className="text-xs font-bold text-slate-800">Objective Code Proof of Work</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Workmark replaces self-reported claims with Git commit audits and real challenge scores.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 text-center space-y-1.5">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0B25A1]">&lt; 24 Hours</div>
              <div className="text-xs font-bold text-slate-800">Discovery to Final Interview Loop</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Candidates complete evaluations on their schedule with zero scheduling friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TAILORED OUTCOMES BY STAKEHOLDER                          */}
      {/* ============================================================ */}
      <section id="stakeholders" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B25A1] text-[#0B25A1] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-2xs">
              <Users size={12} />
              Enterprise Solutions
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#0F294A] tracking-tight">
              Built for Every Engineering Stakeholder
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Whether you manage technical teams, run talent acquisition, or build developer credentials—Zentro delivers calibrated value at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Role 1: Engineering Leaders */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0B25A1]">
                  <Cpu size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  For CTOs & Engineering Leaders
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Protect your senior developers from interview burnout. Ensure every candidate reaching final onsite loops can actually architect, debug, and build with AI in real production environments.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Zero LeetCode trivia & memorization bias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Full replay of keystrokes & prompt logs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Consistent, standardized interview rubrics
                  </li>
                </ul>
              </div>
              <Link
                to="/corporates"
                className="text-xs font-bold text-[#0B25A1] hover:text-[#081E85] flex items-center gap-1.5"
              >
                Learn more for Engineering Teams <ArrowRight size={13} />
              </Link>
            </div>

            {/* Role 2: Talent Acquisition */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <Zap size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  For Talent & Recruiting Teams
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Stop chasing unverified resumes. Automate top-of-funnel screening with Vega and source proven talent directly through Workmark, syncing seamlessly with your ATS.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> 40% reduction in time-to-hire
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Automatic candidate score syncing into ATS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> 24/7 autonomous candidate screening loops
                  </li>
                </ul>
              </div>
              <Link
                to="/solutions/acquisition"
                className="text-xs font-bold text-[#0B25A1] hover:text-[#081E85] flex items-center gap-1.5"
              >
                Explore Sourcing Solutions <ArrowRight size={13} />
              </Link>
            </div>

            {/* Role 3: Universities & Candidates */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <Award size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  For Universities & Candidates
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Empower students and developers to prove their engineering capability through verified challenge completions, campus hackathons, and permanent Git-backed portfolios.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Verifiable Workmark credentials & badges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Direct corporate sponsor challenge tracks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#0B25A1]" /> Blind recruitment based on authentic skill
                  </li>
                </ul>
              </div>
              <Link
                to="/universities"
                className="text-xs font-bold text-[#0B25A1] hover:text-[#081E85] flex items-center gap-1.5"
              >
                Learn more for Universities <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ENTERPRISE INTEGRATIONS & GLOBAL COMPLIANCE               */}
      {/* ============================================================ */}
      <section id="integrations" className="py-24 border-t border-slate-200 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B25A1] text-[#0B25A1] text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-2xs">
              <Shield size={12} />
              Enterprise Infrastructure
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F294A]">
              Enterprise-Grade Security & Ecosystem Integration
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Zentro connects directly into your existing talent tech stack and satisfies rigorous security, privacy, and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="p-5 sm:p-7 bg-slate-50/70 border border-slate-200 rounded-2xl text-center space-y-3">
              <div className="w-11 h-11 mx-auto bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0B25A1]">
                <Database size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">ATS Synchronization</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Native two-way syncing with Greenhouse, Lever, Workday, Ashby, and SmartRecruiters. Sync candidate profiles, test scores, and interview transcripts with one click.
              </p>
            </div>

            <div className="p-5 sm:p-7 bg-slate-50/70 border border-slate-200 rounded-2xl text-center space-y-3">
              <div className="w-11 h-11 mx-auto bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-700">
                <GitBranch size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Code Repository Sync</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect GitHub, GitLab, and Bitbucket. Automatically import production commits, pull requests, and review comments into verified Candidate Workmarks.
              </p>
            </div>

            <div className="p-5 sm:p-7 bg-slate-50/70 border border-slate-200 rounded-2xl text-center space-y-3">
              <div className="w-11 h-11 mx-auto bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                <Lock size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Compliance & Privacy</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                SOC 2 Type II certified and ISO 27001 accredited. Full GDPR & CCPA compliance, keeping all candidate records secure and anonymized with Blind Evaluation Mode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. UNIVERSAL SUITE FINAL CTA                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B25A1] text-[#0B25A1] text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles size={12} />
            The Autonomous Technical Hiring Suite
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#0F294A] tracking-tight">
            Transform Your Engineering Hiring with Zentro Suite
          </h2>

          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Deploy verified sourcing, agentic coding environments, and autonomous AI screening across your entire technical organization.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#0B25A1] hover:bg-[#081E85] text-white font-sans font-bold text-sm rounded-full transition-all shadow-md hover:shadow-lg shadow-[#0B25A1]/20 flex items-center gap-2"
            >
              Book Enterprise Demo <ArrowRight size={16} />
            </a>
            <a
              href="https://auth.zentrosuite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-full font-sans font-bold text-sm text-slate-700 transition-colors shadow-xs"
            >
              Create Free Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

