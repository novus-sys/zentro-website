import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function VyomaAIModes() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isClickScrolling = useRef<boolean>(false);

  const tabs = [
    {
      id: "brief",
      navTitle: "A brief, in a real project",
      title: "Real brief, real project, real codebase.",
      description:
        "The task arrives the way work actually does: a product manager brief with acceptance criteria, business constraints, and API contracts. It lands directly inside a multi-file working repo with test suites, not an empty browser scratchpad.",
      image: `${import.meta.env.BASE_URL}vyoma/mode-brief.jpg`,
      alt: "Vyoma Project Brief View",
      badge: "Requirement Engineering"
    },
    {
      id: "ai",
      navTitle: "AI beside the editor",
      title: "AI allowed, expected, and measured.",
      description:
        "Candidates have a native AI copilot with Plan mode, Ask mode, and Agent execution. Every prompt, time between edits, rejected diff, and token count is captured — revealing whether they guide the agent deliberately or blindly paste output.",
      image: `${import.meta.env.BASE_URL}vyoma/mode-ai.jpg`,
      alt: "Vyoma AI Assistant Beside Editor",
      badge: "Prompt Telemetry & Verification"
    },
    {
      id: "tests",
      navTitle: "Visible and hidden tests",
      title: "Tight feedback loops with exhaustive grading.",
      description:
        "A sample test suite runs in the cloud IDE while candidates work, giving the instant feedback loop of a real dev machine. When they submit, an automated hidden test suite grades edge cases, regressions, and performance.",
      image: `${import.meta.env.BASE_URL}vyoma/mode-tests.jpg`,
      alt: "Vyoma Visible and Hidden Test Runner",
      badge: "Deterministic Verification"
    }
  ];

  // Scroll effect: observe scrolling down and up to switch active option
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const viewportReadingLine = window.innerHeight * 0.42;
      let closestIdx = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        // Check if the section spans across the reading line
        if (rect.top <= viewportReadingLine && rect.bottom >= viewportReadingLine) {
          closestIdx = idx;
          minDistance = 0;
        } else {
          // Otherwise find the one closest to the reading line
          const elCenter = rect.top + rect.height * 0.35;
          const dist = Math.abs(elCenter - viewportReadingLine);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      setActiveTab(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to target section when left option is clicked
  const scrollToTab = (idx: number) => {
    setActiveTab(idx);
    isClickScrolling.current = true;
    const target = sectionRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);
  };

  return (
    <section id="assessment-modes" className="relative py-16 sm:py-20 md:py-28 bg-[#0A0A0B] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              THE ENGINEERING ROUND
            </span>
          </div>

          <h2 className="font-jakarta text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 sm:mb-5 leading-[1.15]">
            A real project, a clear brief and a set time limit.
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl px-1 sm:px-0">
            The candidate opens a working repository, reads the brief the way work actually arrives, and ships a change that a reviewer could merge.
          </p>
        </div>

        {/* 2-Column Layout: Left Sticky Sidebar + Right Scrolling Sections */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Fixed / Sticky Navigation in Position */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 flex flex-col space-y-3 z-20">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToTab(idx)}
                  className="text-left relative py-3.5 pl-5 pr-4 flex flex-col justify-center transition-colors duration-200 group cursor-pointer"
                >
                  {/* Blue indicator line on the left option */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-2 bottom-2 w-[2.5px] bg-[#3D5BFF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span
                    className={`text-base tracking-tight transition-colors duration-150 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/40 group-hover:text-white/70 font-medium"
                    }`}
                  >
                    {tab.navTitle}
                  </span>

                  {/* Badge kept in the left option */}
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-xs text-white/50 leading-relaxed font-normal pt-1"
                    >
                      {tab.badge}
                    </motion.p>
                  )}
                </button>
              );
            })}

            {/* Quick action button under sidebar */}
            <div className="pt-6 border-t border-[#1C1C1E] mt-4">
              <button
                type="button"
                data-cal-link="sambram-k-s/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors cursor-pointer"
              >
                <span>Walk through a live assessment demo</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Sections (Each fits completely in 1 fold) */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#1C1C1E] lg:border-l lg:border-[#1C1C1E] lg:pl-12">
            {tabs.map((tab, idx) => (
              <div
                key={tab.id}
                id={`tab-section-${tab.id}`}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className="min-h-[calc(100vh-140px)] flex flex-col justify-center py-10 lg:py-16 first:pt-0 last:pb-0"
              >
                {/* Headline & Description (No badge on the right side) */}
                <div className="flex flex-col space-y-2.5 mb-6 max-w-3xl">
                  <h3 className="font-jakarta text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {tab.title}
                  </h3>

                  <p className="font-jakarta text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                    {tab.description}
                  </p>
                </div>

                {/* High-Fidelity Mockup Window (Sized to fit in fold without cut-off) */}
                <div className="rounded-xl sm:rounded-2xl border border-[#2A2A2D] bg-[#0A0A0B] overflow-hidden shadow-2xl shadow-black/80 max-w-4xl">
                  {/* Window Chrome */}
                  <div className="h-9 px-4 bg-[#141416] border-b border-[#2A2A2D] flex items-center justify-between text-xs font-mono text-white/40">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="ml-2 text-white/50">{tab.navTitle}</span>
                    </div>
                    <div className="text-[11px] text-[#60A5FA]">
                      Active Telemetry View
                    </div>
                  </div>

                  {/* Mockup Image */}
                  <div className="relative w-full aspect-[16/10] max-h-[48vh] overflow-hidden bg-[#0A0A0B]">
                    <img
                      src={tab.image}
                      alt={tab.alt}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
