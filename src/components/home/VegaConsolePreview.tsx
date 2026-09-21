import { Link } from "react-router-dom";
import {
  Code2,
  Terminal,
  Volume2,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function VegaConsolePreview() {
  return (
    <div className="w-full">
      {/* Top Description Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B25A1] uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B25A1] animate-pulse" />
            Vega Autonomous AI Interviewer
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Voice-Adaptive Conversational Technical Screening
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Vega conducts natural voice interviews, adapts questions dynamically based on candidate code, and delivers objective scorecards.
          </p>
        </div>
        <Link
          to="/products/vega"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B25A1] hover:text-[#081E85] shrink-0"
        >
          Explore Vega Platform <ArrowRight size={14} />
        </Link>
      </div>

      {/* Main Console Container */}
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
              Vega Session #VG-9481 • Senior AI Infrastructure Loop
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
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Column: Candidate Live Code Workspace */}
          <div className="lg:col-span-7 p-5 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
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
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Terminal size={12} className="text-emerald-400" />
                <span>Tests: 18 passed in 0.42s (100% throughput)</span>
              </span>
              <span className="text-slate-500">Anti-Cheat: Verified Native Typing</span>
            </div>
          </div>

          {/* Right Column: Vega AI Interactive Audio & Probe Stream */}
          <div className="lg:col-span-5 p-5 bg-slate-950 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Vega Voice & Probing State Indicator */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <Volume2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      Vega AI Interviewer
                      <span className="text-[10px] text-indigo-400 font-mono">Audio Active</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Probing lines 13–18 concurrency</div>
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
              <div className="space-y-2.5">
                {/* Vega Probe */}
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-indigo-300">Vega (41:04)</span>
                    <span className="text-slate-500 font-mono">Depth Probe</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    "I notice in line 13 you chained the Redis operations via a pipeline. Under high concurrent write volumes across multiple app instances, why could this approach cause race conditions compared to an atomic Lua script?"
                  </p>
                </div>

                {/* Candidate Answer */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-300">Candidate (41:22)</span>
                    <span className="text-emerald-400 font-mono">✓ High Depth</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Because Redis pipeline executes commands as a batch, but commands from other client connections can still be interleaved between the read and write steps unless an atomic EVAL script or MULTI/EXEC transaction block isolates the sequence."
                  </p>
                </div>
              </div>
            </div>

            {/* Scorecard Snapshot */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Concurrency Rubric:</span>
              <span className="text-emerald-400 font-bold">Grade: 96/100 (Exceptional)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
