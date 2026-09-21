import { useState } from "react";
import {
  Bot,
  Play,
  CheckCircle2,
  AlertCircle,
  Shield,
  Clock,
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  Sparkles,
  Users,
  BarChart3,
  Layers,
  ChevronRight,
  Volume2,
  FileText,
  Lock,
  Zap,
  Check
} from "lucide-react";

export default function Vega() {
  const [activeRole, setActiveRole] = useState<"ai" | "backend" | "fullstack">("ai");
  const [activeTab, setActiveTab] = useState<"transcript" | "telemetry" | "scorecard">("transcript");

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
            An AI Interviewer that Runs Interviews
            <br />
            <span className="text-[#0B25A1] italic font-normal">Like Your Best Engineer</span>
          </h1>

          {/* Subhead - Clean 1 Line */}
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Evaluate technical depth, architectural reasoning, and real-time adaptability.
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
              href="#live-preview"
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 text-sm font-semibold rounded-full border border-slate-200 transition-all shadow-2xs flex items-center justify-center gap-2"
            >
              <Play size={14} className="text-indigo-600 fill-indigo-600" />
              <span>Explore Live Session Mock</span>
            </a>
          </div>
        </div>

        {/* Proof Metrics Ribbon anchored at the bottom of fold */}
        <div className="container max-w-5xl mx-auto pt-6 pb-2 border-t border-slate-100/80 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">0%</div>
              <div className="text-xs text-slate-500 font-medium">Interviewer Fatigue or Friday Bias</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Consistent Role-Configured Rubrics</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">40%</div>
              <div className="text-xs text-slate-500 font-medium">Faster Engineering Hiring Velocity</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold font-mono text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Transcript & Code Quote Backed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE LIVE INTERVIEW CONSOLE PREVIEW                   */}
      {/* ============================================================ */}
      <section id="live-preview" className="container max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-800">
                Vega Session #VG-9481 • Senior AI Infrastructure Engineer
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Probing
              </span>
              <span className="text-xs font-mono text-slate-500">Duration: 42:18</span>
            </div>
          </div>

          {/* Main Console Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Column: Candidate Live Code Workspace (span-7) */}
            <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span className="text-slate-300 font-semibold flex items-center gap-2">
                    <Code2 size={14} className="text-indigo-400" /> rate_limiter.py
                  </span>
                  <span className="text-[11px] text-slate-500">Python 3.11 • Sandboxed</span>
                </div>

                {/* Code Lines with Syntax Styling */}
                <div className="font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  <div><span className="text-slate-500">01</span> <span className="text-indigo-400">import</span> time, asyncio, redis.asyncio <span className="text-indigo-400">as</span> aioredis</div>
                  <div><span className="text-slate-500">02</span> </div>
                  <div><span className="text-slate-500">03</span> <span className="text-indigo-400">class</span> <span className="text-amber-300">DistributedSlidingWindowRateLimiter</span>:</div>
                  <div><span className="text-slate-500">04</span>     <span className="text-indigo-400">def</span> <span className="text-blue-400">__init__</span>(self, redis_client, window_size_sec=<span className="text-emerald-400">60</span>, max_requests=<span className="text-emerald-400">1000</span>):</div>
                  <div><span className="text-slate-500">05</span>         self.redis = redis_client</div>
                  <div><span className="text-slate-500">06</span>         self.window = window_size_sec</div>
                  <div><span className="text-slate-500">07</span>         self.limit = max_requests</div>
                  <div><span className="text-slate-500">08</span> </div>
                  <div><span className="text-slate-500">09</span>     <span className="text-indigo-400">async def</span> <span className="text-blue-400">allow_request</span>(self, key: str) -&gt; bool:</div>
                  <div><span className="text-slate-500">10</span>         now = time.time()</div>
                  <div><span className="text-slate-500">11</span>         cutoff = now - self.window</div>
                  <div><span className="text-slate-500">12</span>         <span className="text-slate-500"># Atomic Lua script execution to prevent concurrency race</span></div>
                  <div><span className="text-slate-500">13</span>         pipeline = self.redis.pipeline()</div>
                  <div><span className="text-slate-500">14</span>         pipeline.zremrangebyscore(key, <span className="text-emerald-400">0</span>, cutoff)</div>
                  <div><span className="text-slate-500">15</span>         pipeline.zadd(key, &#123;str(now): now&#125;)</div>
                  <div><span className="text-slate-500">16</span>         pipeline.zcard(key)</div>
                  <div><span className="text-slate-500">17</span>         pipeline.expire(key, int(self.window) + <span className="text-emerald-400">1</span>)</div>
                  <div><span className="text-slate-500">18</span>         _, _, count, _ = <span className="text-indigo-400">await</span> pipeline.execute()</div>
                  <div><span className="text-slate-500">19</span>         <span className="text-indigo-400">return</span> count &lt;= self.limit</div>
                </div>
              </div>

              {/* Terminal Log Output */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Terminal size={13} className="text-emerald-400" />
                  <span>Tests: 18 passed in 0.42s (100% throughput)</span>
                </span>
                <span className="text-slate-500">Integrity Check: Normal Keystrokes</span>
              </div>
            </div>

            {/* Right Column: Vega AI Interactive Audio & Probe Stream (span-5) */}
            <div className="lg:col-span-5 p-6 bg-slate-950 flex flex-col justify-between">
              <div className="space-y-5">
                
                {/* Vega Voice & Probing State Indicator */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <Volume2 size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        Vega AI Interviewer
                        <span className="text-[10px] text-indigo-400 font-mono">Audio Active</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Probing line 13–18 concurrency</div>
                    </div>
                  </div>

                  {/* Audio Waveform Simulation */}
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse" />
                    <span className="w-1 h-5 bg-indigo-400 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-indigo-500 rounded-full animate-pulse delay-150" />
                    <span className="w-1 h-4 bg-indigo-400 rounded-full animate-pulse delay-100" />
                  </div>
                </div>

                {/* Live Conversation Transcript */}
                <div className="space-y-3.5">
                  {/* Vega Probe */}
                  <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-indigo-300">Vega (41:04)</span>
                      <span className="text-slate-500 font-mono">Depth Probe</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      "I notice in line 13 you chained the Redis operations via a pipeline. Under high concurrent write volumes across multiple app instances, why could this approach cause race conditions compared to an atomic Lua script?"
                    </p>
                  </div>

                  {/* Candidate Answer */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-300">Candidate (41:22)</span>
                      <span className="text-emerald-400 font-mono">✓ High Depth</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "A pipeline packages commands to reduce round-trip latency, but other Redis clients can still interleave commands between steps. For strict atomicity, wrapping this in an EVALSHA Lua script guarantees execution without interleaving."
                    </p>
                  </div>
                </div>

              </div>

              {/* Real-Time Assessment Telemetry */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Architectural Judgment:</span>
                <span className="font-mono text-emerald-400 font-bold">96 / 100 (Exceptional)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 CORE PILLARS (CHAKRA BENCHMARK)                            */}
      {/* ============================================================ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-indigo-600 font-mono uppercase tracking-wider">
            Why Vega Changes Technical Hiring
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Built to interview like your highest-performing engineers.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Traditional coding bots ask trivia. Human interviews suffer from fatigue and bias. Vega combines the best of both.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Zap size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Adapts in Real Time</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Vega doesn't follow a rigid questionnaire. It listens, inspects code diffs as they are authored, and steers follow-up technical questions based on the candidate's actual design choices.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Cpu size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Probes for Depth</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Vega challenges candidates on computational complexity, memory overhead, edge cases, concurrent failure modes, and alternative system trade-offs.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Shield size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Integrity Built In</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tracks multi-tab switches, clipboard paste velocity, and code provenance. Surfaces clear behavioral integrity signals in the report without intrusive spyware.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B25A1] flex items-center justify-center font-bold">
              <Layers size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Consistent by Design</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Every candidate receives an identical, objective evaluation against your company's configured rubric. Eliminates interviewer fatigue, bad moods, and gut feelings.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Transcript-Backed Evidence</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              No vague impressions. Every scorecard score is backed by timestamps, quote excerpts, and code diffs so hiring managers can audit decisions in under three minutes.
            </p>
          </div>

          {/* Pillar 6: Ready for Next-Gen Roles */}
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">Configured for AI & Modern Roles</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Specialized interview environments for AI/ML Engineers, Systems Specialists, Full-Stack Architects, and Forward Deployed Engineers.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* EVIDENCE-BACKED REPORT PREVIEW SECTION                       */}
      {/* ============================================================ */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 lg:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                Auditable Evaluation Artifact
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                The Vega Candidate Decision Report
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                Recommendation: Strong Hire (92/100)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Competency Scores (span-5) */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">
                Evaluated Competencies
              </h4>

              <div className="space-y-3">
                <div className="p-3 bg-white border border-slate-200/70 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Problem Decomposition & Planning</span>
                    <span className="font-mono text-emerald-600 font-bold">94%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[94%]" />
                  </div>
                </div>

                <div className="p-3 bg-white border border-slate-200/70 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Architectural Trade-Off Judgment</span>
                    <span className="font-mono text-emerald-600 font-bold">90%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[90%]" />
                  </div>
                </div>

                <div className="p-3 bg-white border border-slate-200/70 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Code Rigor & Concurrency Handling</span>
                    <span className="font-mono text-emerald-600 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[92%]" />
                  </div>
                </div>

                <div className="p-3 bg-white border border-slate-200/70 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Technical Defense & Communication</span>
                    <span className="font-mono text-emerald-600 font-bold">91%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[91%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Concrete Transcript Evidence (span-7) */}
            <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 font-mono uppercase">
                  Concrete Evidence Rationale
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  ATS Sync: Greenhouse Ready
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Identified Race Condition Instantly:</strong>{" "}
                    <span className="text-slate-600">
                      When probed by Vega at [41:04], candidate immediately explained why Redis pipeline commands are non-atomic compared to Lua EVAL execution.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Defended Algorithmic Efficiency:</strong>{" "}
                    <span className="text-slate-600">
                      Proactively articulated the memory tradeoffs of sorted sets (O(log(N)+M)) versus fixed-bucket counters.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Zero Integrity Anomalies:</strong>{" "}
                    <span className="text-slate-600">
                      100% active window retention, continuous typing velocity, clean code provenance.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Evaluator: Vega AI Engine • SOC 2 Verified</span>
                <a
                  href="https://calendly.com/sambramsm28/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-800"
                >
                  View Sample Full PDF →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE: TRADITIONAL VS CHAKRA/VEGA                 */}
      {/* ============================================================ */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 text-center mb-10">
          How Vega Compares
        </h3>

        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-700 font-semibold font-mono">
                <th className="p-4">Dimension</th>
                <th className="p-4">Traditional Human Loops</th>
                <th className="p-4">Standard Screening Bots</th>
                <th className="p-4 bg-indigo-50/50 text-indigo-950 font-bold">Vega AI Interviewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-4 font-bold text-slate-900">Interviewer Scheduling</td>
                <td className="p-4 text-red-600">3–7 business days delay</td>
                <td className="p-4">Instant</td>
                <td className="p-4 bg-indigo-50/20 font-semibold text-emerald-700">Instant on-demand 24/7</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900">Engineering Time Spent</td>
                <td className="p-4 text-red-600">10–15 hours / hire</td>
                <td className="p-4">0 hours (low signal)</td>
                <td className="p-4 bg-indigo-50/20 font-semibold text-emerald-700">0 hours with senior-engineer signal</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900">Technical Probing</td>
                <td className="p-4">Variable based on engineer skill</td>
                <td className="p-4 text-red-600">None (multiple choice or unit test only)</td>
                <td className="p-4 bg-indigo-50/20 font-semibold text-emerald-700">Deep real-time Socratic follow-ups</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900">Evaluation Consistency</td>
                <td className="p-4 text-red-600">Vulnerable to fatigue & bias</td>
                <td className="p-4">Strict (binary tests)</td>
                <td className="p-4 bg-indigo-50/20 font-semibold text-emerald-700">100% standardized to role rubrics</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900">Evidence Backing</td>
                <td className="p-4">Subjective interviewer notes</td>
                <td className="p-4">Test pass / fail counts</td>
                <td className="p-4 bg-indigo-50/20 font-semibold text-emerald-700">Timestamped quotes + code diffs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL BOTTOM CALL TO ACTION                                  */}
      {/* ============================================================ */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-8 pt-8 pb-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              Transform Your Engineering Loops
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Start evaluating developers with Vega AI.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Eliminate screening bottlenecks, protect your senior engineering team's time, and make high-conviction hiring decisions.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/sambramsm28/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-full transition-all shadow-md"
            >
              Book a 30-Min Walkthrough
            </a>
            <a
              href="mailto:info@zentrosuite.com"
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-full transition-all"
            >
              Talk to Engineering
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
