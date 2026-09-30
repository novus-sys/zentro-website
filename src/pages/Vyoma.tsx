import {
  Cpu,
  ArrowRight,
  Workflow,
  Check,
  FolderTree,
  Eye
} from "lucide-react";
import MeshDriftShader from "@/components/ui/MeshDriftShader";

export default function Vyoma() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pb-20 font-body antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* ============================================================ */}
      {/* HERO SECTION - FULL SINGLE FOLD                             */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-8 md:pb-10 px-4 sm:px-8 overflow-hidden">
        {/* Animated WebGL "Mesh Drift" Shader Background */}
        <MeshDriftShader className="absolute inset-0 w-full h-full pointer-events-none z-0" />
        
        {/* Soft bottom blend to transition smoothly to page content */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-0" />

        {/* Top spacer to balance vertical center */}
        <div className="h-2 md:h-4" />

        {/* Center content */}
        <div className="container max-w-[960px] mx-auto text-center relative z-10 flex-1 flex flex-col justify-center">
          {/* Main Headline */}
          <h1 className="font-serif-display font-normal text-[44px] leading-[1.15] tracking-tight md:text-7xl lg:text-[80px] lg:leading-[88px] mb-8 text-[#111111] max-w-4xl mx-auto">
            Hire AI-Fluent Developers for
            <br />
            <span className="text-[#0B25A1] italic font-normal">the Agentic Era</span>
          </h1>

          {/* Subhead - Clean 1 Line */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Evaluate developers on realistic repos, not algorithmic puzzles.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <span>Schedule a Demo</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Key Metrics Banner anchored at the bottom of the fold */}
        <div className="container max-w-5xl mx-auto pt-6 pb-2 border-t border-slate-100/80 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Real-World Code Repositories</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">3 Modes</div>
              <div className="text-xs text-slate-500 font-medium">Plan, Ask & Agent Execution</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">0%</div>
              <div className="text-xs text-slate-500 font-medium">Memorized LeetCode Puzzles</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">Complete</div>
              <div className="text-xs text-slate-500 font-medium">AI Prompt & Edit Telemetry</div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* 4 CORE ADVANTAGES (HACKERRANK INTERVIEW MODEL)                */}
      {/* ============================================================ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Built for Modern Engineering Teams
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How Vyoma transforms technical evaluations.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Move past toy algorithmic questions. Observe how candidates actually solve engineering problems with AI tools.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FolderTree size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Realistic Multi-File Repositories</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Candidates navigate genuine production codebases with services, configs, and automated test suites. Evaluate how they understand legacy code, track dependencies, and architect real features instead of writing isolated functions.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-blue-600" />
                Backend, frontend, and full-stack repo templates
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-blue-600" />
                Integrated terminal with active test runners
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Measure AI Fluency as a First-Class Skill</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Banning AI is counterproductive when engineers use copilots daily. Vyoma lets candidates work with AI while capturing prompt clarity, critical review rigor, and how well they guide the agent toward optimal solutions.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-indigo-600" />
                Differentiates strategic prompters from blind copiers
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-indigo-600" />
                Evaluates prompt refinement and code verification
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Eye size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Complete Session Playback & Telemetry</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Every keystroke, file transition, terminal execution, and AI prompt is logged with exact timestamps. Hiring managers can scrub through the entire session timeline in minutes to verify authentic problem-solving.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" />
                Timeline scrubber with syntax diff highlighting
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" />
                Copy-paste velocity and window switch detection
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B25A1] flex items-center justify-center font-bold">
              <Workflow size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Evidence-Backed 6D Decision Reports</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Generate structured evaluations scoring Analysis, Planning, Judgement, Execution, and AI Collaboration. Sync scores, transcripts, and final code directly into Greenhouse, Lever, or Workday.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[#0B25A1]" />
                Objective rubrics calibrated for modern roles
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[#0B25A1]" />
                One-click ATS export with full code snapshots
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 AI COLLABORATION MODES BREAKDOWN                          */}
      {/* ============================================================ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 lg:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-bold text-blue-600 font-mono uppercase tracking-wider">
              Agent Collaboration Paradigms
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Three modes to evaluate candidate AI workflow.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Observe how engineers deploy AI across different stages of software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border border-slate-200/80 rounded-xl space-y-2.5">
              <div className="text-xs font-bold font-mono text-blue-600 uppercase">
                01. Plan Mode
              </div>
              <h4 className="text-sm font-bold text-slate-900">Architectural Scaffolding</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Candidates prompt the assistant for an implementation roadmap. Tests whether they can decompose complex technical tasks before diving into code.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/80 rounded-xl space-y-2.5">
              <div className="text-xs font-bold font-mono text-indigo-600 uppercase">
                02. Ask Mode
              </div>
              <h4 className="text-sm font-bold text-slate-900">Contextual Inquiries</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Candidates ask targeted questions regarding system requirements, edge cases, and API specifications. Tests curiosity and technical precision.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/80 rounded-xl space-y-2.5">
              <div className="text-xs font-bold font-mono text-emerald-600 uppercase">
                03. Agent Mode
              </div>
              <h4 className="text-sm font-bold text-slate-900">Iterative Code Generation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Candidates delegate boilerplate or implementation logic to the agent. Measures how thoroughly they inspect, debug, and refine generated code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL BOTTOM CALL TO ACTION                                  */}
      {/* ============================================================ */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-8 pt-12 pb-12">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Evaluate real engineering skill with Vyoma.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Step into the agentic era. Benchmark developer AI fluency, planning, and code review on realistic multi-file repositories.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-full transition-all shadow-md"
            >
              Book a 30-Min Demo
            </a>
            <a
              href="mailto:info@zentrosuite.com"
              className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-slate-200 font-semibold text-sm rounded-full transition-all"
            >
              Contact Engineering
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
