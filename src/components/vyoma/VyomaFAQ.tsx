import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VyomaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is AI actually allowed during the assessment?",
      a: "Yes. AI is allowed, expected, and measured. Every prompt in the session is captured, so the report shows how the candidate used the agent — whether they planned systematically, caught errors, or blindly accepted generated code."
    },
    {
      q: "How does Vyoma prevent cheating and plagiarism?",
      a: "Unlike static LeetCode puzzles with answers online, Vyoma tasks sit inside multi-file repositories with unique requirements and hidden test suites. We track copy-paste velocity, window blur events, and provide a full keystroke session scrubber."
    },
    {
      q: "Can our team bring our own private repository?",
      a: "Absolutely. You can import your own Dockerized repos or select from our library of 30+ pre-built full-stack, backend, and distributed systems repositories calibrated across junior to principal roles."
    },
    {
      q: "How long does a typical assessment take?",
      a: "You configure the duration when setting up the round — typically 45 to 60 minutes. It's one focused, timed session: read the brief, work in the repo, run sample tests, and submit. The post-submission interview and decision report follow immediately."
    },
    {
      q: "Does Vyoma integrate with Greenhouse, Lever, and Ashby?",
      a: "Yes. Scores, prompt transcripts, and 6D decision rubrics sync automatically via native integrations into your existing applicant tracking system."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#070708] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[960px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              FREQUENTLY ASKED
            </span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5 leading-[1.15]">
            The ones hiring teams ask first.
          </h2>

          <p className="font-jakarta text-sm sm:text-base text-white/50 leading-relaxed">
            Everything about the round, the AI copilot, and what lands on your desk afterwards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#2A2A2D] divide-y divide-[#2A2A2D]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-7">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#60A5FA] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-white/10" : "bg-white/[0.02]"
                    }`}
                  >
                    <ChevronDown size={15} className="text-white/60" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
