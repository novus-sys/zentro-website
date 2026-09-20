import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  Code2,
  Cpu,
  GitBranch,
  Play,
  CheckCircle2,
  ArrowRight,
  FileText,
  Shield,
  Workflow,
  Sparkles,
  Layers,
  Zap,
  Check,
  FolderTree,
  Eye,
  MessageSquare,
  Clock,
  ExternalLink
} from "lucide-react";

export default function Vyoma() {
  const [activeMode, setActiveMode] = useState<"plan" | "ask" | "agent">("plan");

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 pb-20 font-body antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-[650px] bg-gradient-to-b from-slate-50 via-white to-transparent -z-10 pointer-events-none" />

      {/* ============================================================ */}
      {/* HERO SECTION - FULL SINGLE FOLD                             */}
      {/* ============================================================ */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-6 md:py-10 px-4 sm:px-8">
        {/* Top spacer to balance vertical center */}
        <div className="h-2 md:h-4" />

        {/* Center content */}
        <div className="container max-w-[960px] mx-auto text-center relative z-10 flex-1 flex flex-col justify-center">
          {/* Main Headline */}
          <h1 className="font-serif-display font-normal text-[44px] leading-[1.15] tracking-tight md:text-7xl lg:text-[80px] lg:leading-[88px] mb-8 text-[#111111] max-w-4xl mx-auto">
            Hire AI-Fluent Developers for
            <br />
            <span className="text-violet-600 italic font-normal">the Agentic Era</span>
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

            <a
              href="#agentic-ide"
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 text-sm font-semibold rounded-full border border-slate-200 transition-all shadow-2xs flex items-center justify-center gap-2"
            >
              <Play size={14} className="text-blue-600 fill-blue-600" />
              <span>Explore Agentic IDE Mock</span>
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
      {/* INTERACTIVE AGENTIC IDE WORKSPACE PREVIEW                     */}
      {/* ============================================================ */}
      <section id="agentic-ide" className="container max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-800 flex items-center gap-2">
                <GitBranch size={13} className="text-blue-400" />
                repo: cloud-distributed-queue • branch: feature/dlq-handler
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Mode Toggle Buttons */}
              <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-lg">
                <button
                  onClick={() => setActiveMode("plan")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                    activeMode === "plan" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Plan Mode
                </button>
                <button
                  onClick={() => setActiveMode("ask")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                    activeMode === "ask" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Ask Mode
                </button>
                <button
                  onClick={() => setActiveMode("agent")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                    activeMode === "agent" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Agent Mode
                </button>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Live Session
              </span>
            </div>
          </div>

          {/* Main 3-Column IDE Viewport */}
          <div className="grid grid-cols-12 min-h-[520px]">
            
            {/* Column 1: Multi-File Repository Tree (span-2) */}
            <div className="hidden lg:block col-span-2 border-r border-slate-800/80 p-4 bg-slate-950/70 text-xs font-mono text-slate-400 space-y-3">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <FolderTree size={12} /> Explorer
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="text-slate-300 font-semibold">▾ src/</div>
                <div className="pl-3 space-y-1 text-slate-400">
                  <div className="text-blue-400 flex items-center gap-1">
                    <span>▸</span> queue_worker.py
                  </div>
                  <div>dead_letter.py</div>
                  <div>telemetry.py</div>
                  <div>backoff.py</div>
                </div>
                <div className="text-slate-400">▸ config/</div>
                <div className="text-slate-400">▸ tests/</div>
                <div className="text-slate-500 pt-2 border-t border-slate-800/80">
                  Dockerfile
                </div>
                <div className="text-slate-500">requirements.txt</div>
              </div>
            </div>

            {/* Column 2: Live Code Editor with Syntax Highlighting (span-6) */}
            <div className="col-span-12 lg:col-span-6 p-6 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span className="text-slate-200 font-semibold flex items-center gap-2">
                    <Code2 size={14} className="text-blue-400" /> queue_worker.py
                  </span>
                  <span className="text-[11px] text-slate-500">Line 24:40 • Candidate Typing</span>
                </div>

                {/* Editor Content */}
                <div className="font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  <div><span className="text-slate-500">18</span> <span className="text-blue-400">async def</span> <span className="text-amber-300">process_dead_letter_stream</span>(self, message: QueueMessage):</div>
                  <div><span className="text-slate-500">19</span>     <span className="text-slate-500">"""Dispatch poison messages to quarantine dead-letter topic."""</span></div>
                  <div><span className="text-slate-500">20</span>     <span className="text-blue-400">if</span> message.retry_count &gt;= self.max_retries:</div>
                  <div><span className="text-slate-500">21</span>         payload = &#123;</div>
                  <div><span className="text-slate-500">22</span>             <span className="text-emerald-400">"message_id"</span>: message.id,</div>
                  <div><span className="text-slate-500">23</span>             <span className="text-emerald-400">"error_trace"</span>: message.last_exception,</div>
                  <div><span className="text-slate-500">24</span>             <span className="text-emerald-400">"quarantine_ts"</span>: time.time_ns()</div>
                  <div><span className="text-slate-500">25</span>         &#125;</div>
                  <div><span className="text-slate-500">26</span>         <span className="text-slate-500"># Audit: candidate reviewed and verified agent prompt suggestion</span></div>
                  <div><span className="text-slate-500">27</span>         <span className="text-blue-400">await</span> self.dlq_publisher.publish(payload, partition=message.shard_key)</div>
                  <div><span className="text-slate-500">28</span>         <span className="text-blue-400">await</span> self.ack_source_queue(message.receipt_handle)</div>
                  <div><span className="text-slate-500">29</span>         <span className="text-blue-400">return</span> <span className="text-emerald-400">True</span></div>
                </div>
              </div>

              {/* Integrated Sandbox Terminal */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-300 font-bold">
                    <Terminal size={13} className="text-blue-400" /> Terminal: pytest tests/test_dlq.py
                  </span>
                  <span className="text-emerald-400 font-bold">Passed 14/14 tests</span>
                </div>
                <div className="text-slate-500 text-[10px]">
                  [pytest] test_dlq_poison_pill_routing ... PASSED [100%]
                </div>
              </div>
            </div>

            {/* Column 3: Embedded AI Copilot Panel (Plan / Ask / Agent) (span-4) */}
            <div className="col-span-12 lg:col-span-4 p-5 bg-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* AI Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center">
                      <Sparkles size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">AI Assistant</div>
                      <div className="text-[10px] text-slate-400">Telemetry Active • Visible to Interviewer</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                    {activeMode.toUpperCase()}
                  </span>
                </div>

                {/* Mode Dynamic Content */}
                {activeMode === "plan" && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400">
                      <strong>Candidate Prompt:</strong> "Generate an implementation plan for routing failed queue items to our dead-letter sink without dropping transactions."
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
                      <div className="text-blue-400 font-bold text-[11px]">AI Plan:</div>
                      <ol className="list-decimal pl-4 space-y-1 text-[11px] text-slate-400 leading-relaxed">
                        <li>Inspect <code className="text-slate-300">retry_count</code> against <code className="text-slate-300">max_retries</code>.</li>
                        <li>Format quarantine payload with exception telemetry.</li>
                        <li>Publish to DLQ with shard-key preservation.</li>
                        <li>Ack source queue only after DLQ ack succeeds.</li>
                      </ol>
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-mono">
                      <CheckCircle2 size={12} /> Candidate adopted plan with custom ack ordering
                    </div>
                  </div>
                )}

                {activeMode === "ask" && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400">
                      <strong>Candidate Query:</strong> "How does partition key distribution prevent consumer hot-spotting when messages enter DLQ?"
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
                      <div className="text-blue-400 font-bold text-[11px]">Assistant Response:</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        By reusing the source queue's <code className="text-slate-300">shard_key</code>, poisoned messages land on corresponding consumer shards, maintaining partition affinity without overwhelming a single dead-letter node.
                      </p>
                    </div>
                  </div>
                )}

                {activeMode === "agent" && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400">
                      <strong>Agent Action:</strong> "Drafting quarantine payload dictionary..."
                    </div>
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-[11px] text-slate-300 font-mono">
                      <div>+ payload = &#123;</div>
                      <div>+   "message_id": message.id,</div>
                      <div>+   "error_trace": message.last_exception,</div>
                      <div>+   "quarantine_ts": time.time_ns()</div>
                      <div>+ &#125;</div>
                    </div>
                    <div className="text-[10px] text-blue-400 font-mono">
                      Diff status: Candidate reviewed & accepted in 4.2s
                    </div>
                  </div>
                )}

              </div>

              {/* Real-Time Assessment Telemetry */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">AI Collaboration Score:</span>
                <span className="font-mono text-emerald-400 font-bold">94% (Strategic User)</span>
              </div>
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
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Workflow size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Evidence-Backed 6D Decision Reports</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Generate structured evaluations scoring Analysis, Planning, Judgement, Execution, and AI Collaboration. Sync scores, transcripts, and final code directly into Greenhouse, Lever, or Workday.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-purple-600" />
                Objective rubrics calibrated for modern roles
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-purple-600" />
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
