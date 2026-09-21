import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Terminal,
  Code2,
  GitBranch,
  ArrowRight,
  FolderTree,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function VyomaWorkspacePreview() {
  const [activeMode, setActiveMode] = useState<"plan" | "ask" | "agent">("plan");

  return (
    <div className="w-full">
      {/* Top Description Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B25A1] uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B25A1] animate-pulse" />
            Vyoma Agentic IDE Sandbox
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Real-World Repository Assessment with AI Telemetry
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Evaluate how engineers plan, prompt, debug, and review code alongside an AI assistant in a live cloud workspace.
          </p>
        </div>
        <Link
          to="/products/vyoma"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B25A1] hover:text-[#081E85] shrink-0"
        >
          Explore Vyoma Platform <ArrowRight size={14} />
        </Link>
      </div>

      {/* Main IDE Container */}
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

            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Live Telemetry
            </span>
          </div>
        </div>

        {/* Main 3-Column IDE Viewport */}
        <div className="grid grid-cols-12 min-h-[460px]">
          {/* Column 1: Multi-File Repository Tree */}
          <div className="hidden lg:block col-span-3 border-r border-slate-800/80 p-4 bg-slate-950/70 text-xs font-mono text-slate-400 space-y-3">
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

          {/* Column 2: Live Code Editor */}
          <div className="col-span-12 lg:col-span-5 p-5 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                <span className="text-slate-200 font-semibold flex items-center gap-2">
                  <Code2 size={14} className="text-blue-400" /> queue_worker.py
                </span>
                <span className="text-[11px] text-slate-500">Line 24:40 • Candidate Session</span>
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

            {/* Terminal */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300 font-bold">
                  <Terminal size={12} className="text-blue-400" /> pytest tests/test_dlq.py
                </span>
                <span className="text-emerald-400 font-bold">Passed 14/14 tests</span>
              </div>
              <div className="text-slate-500 text-[10px]">
                [pytest] test_dlq_poison_pill_routing ... PASSED [100%]
              </div>
            </div>
          </div>

          {/* Column 3: Embedded AI Copilot Panel */}
          <div className="col-span-12 lg:col-span-4 p-5 bg-slate-900 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">AI Assistant</div>
                    <div className="text-[10px] text-slate-400">Telemetry Active • Visible to Reviewers</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                  {activeMode.toUpperCase()}
                </span>
              </div>

              {activeMode === "plan" && (
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    <strong>Prompt:</strong> "Create an architecture plan for DLQ backoff routing."
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
                    <div className="font-semibold text-emerald-400 text-[11px] flex items-center gap-1">
                      <CheckCircle2 size={13} /> Architecture Verified:
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-400 pl-3 list-disc">
                      <li>Verify maximum retry count before dead-letter publication.</li>
                      <li>Preserve original message partition key during replay.</li>
                      <li>Acknowledge receipt to avoid message thrashing.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeMode === "ask" && (
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    <strong>Candidate Inquiry:</strong> "How does this queue consumer handle unhandled exception timeouts?"
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300">
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      "Exceptions in <code className="text-blue-400 font-mono">process_stream</code> bubble up to the supervisor coroutine in <code className="text-blue-400 font-mono">backoff.py</code>, triggering exponential jitter."
                    </p>
                  </div>
                </div>
              )}

              {activeMode === "agent" && (
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    <strong>Execution Log:</strong> AI Agent generated diff for lines 21–28.
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300">
                    <div className="text-[10px] font-mono text-blue-400 mb-1">
                      Telemetry Grade: 94/100
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Candidate performed manual inspection, corrected payload structure, and validated partition routing.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Keystrokes: 1,420</span>
              <span className="text-emerald-400 font-bold">Prompt Diligence: High (94%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
