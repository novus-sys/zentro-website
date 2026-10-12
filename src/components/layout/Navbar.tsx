import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Terminal,
  Bot,
  Award,
  Sparkles,
  Trophy,
  GraduationCap,
  ShieldCheck,
  Building2,
  FileText,
  Workflow,
  Cpu,
  Lock,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppTheme } from "@/context/ThemeContext";

type MenuType = "products" | "solutions" | "resources" | null;

export default function Navbar() {
  const { isDark } = useAppTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isVyomaPage = location.pathname.includes("/vyoma");

  const handleMenuEnter = (menu: MenuType) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 font-jakarta ${
        isDark
          ? mobileOpen
            ? "bg-[#0A0A0B]/95 backdrop-blur-xl shadow-2xl border-b border-[#1C1C1E]"
            : scrolled
            ? "bg-[#0A0A0B]/85 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#1C1C1E]"
            : "bg-transparent backdrop-blur-none border-b border-transparent shadow-none"
          : mobileOpen
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/60"
          : scrolled
          ? "bg-white/75 backdrop-blur-md shadow-xs border-b border-slate-200/50"
          : "bg-transparent backdrop-blur-none border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1240px] mx-auto relative flex items-center justify-between h-[68px] px-4 sm:px-6 lg:px-8">
        {/* Left Section: Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link
            to={isVyomaPage ? "/products/vyoma" : "/"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => handleMenuEnter(null)}
            className="flex items-center shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}${isVyomaPage ? "vyoma-logo.png" : "zentro_black_logo-removebg-preview.png"}`}
              alt={isVyomaPage ? "Vyoma Logo" : "Zentro Suite Logo"}
              className={`${
                isVyomaPage ? "h-[22px] md:h-[24px]" : "h-6 md:h-7"
              } ${isDark ? "brightness-0 invert" : ""} w-auto object-contain transition-all duration-200`}
            />
          </Link>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
            {/* Products Mega-Menu Trigger */}
            <div
              className="relative h-[68px] flex items-center group"
              onMouseEnter={() => handleMenuEnter("products")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] leading-[20px] font-medium font-jakarta transition-colors outline-none ${
                  isDark
                    ? activeMenu === "products"
                      ? "text-white"
                      : "text-[#F5F5F2]/80 hover:text-[#F5F5F2]"
                    : activeMenu === "products"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Product</span>
                <ChevronDown
                  size={12}
                  className={`${isDark ? "text-[#F5F5F2]/60" : "text-black"} transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Solutions Mega-Menu Trigger */}
            <div
              className="relative h-[68px] flex items-center group"
              onMouseEnter={() => handleMenuEnter("solutions")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] leading-[20px] font-medium font-jakarta transition-colors outline-none ${
                  isDark
                    ? activeMenu === "solutions"
                      ? "text-white"
                      : "text-[#F5F5F2]/80 hover:text-[#F5F5F2]"
                    : activeMenu === "solutions"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={12}
                  className={`${isDark ? "text-[#F5F5F2]/60" : "text-black"} transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Resources Dropdown Trigger */}
            <div
              className="relative h-[68px] flex items-center group"
              onMouseEnter={() => handleMenuEnter("resources")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] leading-[20px] font-medium font-jakarta transition-colors outline-none ${
                  isDark
                    ? activeMenu === "resources"
                      ? "text-white"
                      : "text-[#F5F5F2]/80 hover:text-[#F5F5F2]"
                    : activeMenu === "resources"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  size={12}
                  className={`${isDark ? "text-[#F5F5F2]/60" : "text-black"} transition-transform duration-200 ${
                    activeMenu === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Pricing Direct Link */}
            <Link
              to="/pricing"
              onMouseEnter={() => handleMenuEnter(null)}
              className={`px-3 py-2 text-[13px] leading-[20px] font-medium font-jakarta transition-colors ${
                isDark ? "text-[#F5F5F2]/80 hover:text-[#F5F5F2]" : "text-slate-700 hover:text-black"
              }`}
            >
              Pricing
            </Link>
        </div>

        {/* Right Section: Talk to us (Ghost) & Sign up now → (White Pill) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Talk to us Button (Ghost Pill) */}
          <button
            type="button"
            data-cal-link="sambram-k-s/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            onMouseEnter={() => handleMenuEnter(null)}
            className={`h-[38px] px-5 inline-flex items-center justify-center rounded-full text-[13px] leading-[20px] font-medium font-jakarta transition-all whitespace-nowrap cursor-pointer ${
              isDark
                ? "text-[#F5F5F2] bg-transparent hover:bg-white/[0.04] border border-[#2A2A2D] hover:border-white/30"
                : "text-slate-900 bg-white/30 hover:bg-white/50 border border-slate-300"
            }`}
          >
            Talk to us
          </button>

          {/* Sign up now Button (Solid White Pill with Arrow) */}
          <a
            href="https://auth.zentrosuite.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMenuEnter(null)}
            className={`h-[38px] px-5 inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] leading-[20px] font-medium font-jakarta transition-all whitespace-nowrap group hover:-translate-y-0.5 ${
              isDark
                ? "text-[#0A0A0B] bg-[#F5F5F2] hover:bg-white shadow-sm"
                : "text-white bg-black hover:bg-neutral-800"
            }`}
          >
            <span>Sign up now</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Actions: Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className={`p-2 transition-colors ${
              isDark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-slate-950"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP MEGA-MENUS CONTAINER                                  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 w-full pt-2 z-50 hidden lg:block pointer-events-none"
          >
            <div className="max-w-[1040px] mx-auto px-4 sm:px-6 pointer-events-none">
              <div
                className={`${
                  isDark
                    ? "bg-[#0A0A0B] border-[#222225] text-[#F5F5F2] shadow-[0_28px_80px_rgba(0,0,0,0.95)]"
                    : "bg-white border-slate-200 text-slate-900 shadow-2xl"
                } border rounded-2xl overflow-hidden p-6 md:p-7 pointer-events-auto transition-all duration-200`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                
                {/* 1. PRODUCTS MEGA-MENU */}
                {activeMenu === "products" && (
                  <div className="grid grid-cols-12 gap-7">
                    {/* Left: 4 Core Platform Products & Architecture */}
                    <div className="col-span-8 flex flex-col justify-between">
                      <div>
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] font-mono ${
                          isDark ? "text-white/40" : "text-slate-400"
                        }`}>
                          Core Platform Products
                        </span>

                        <div className="grid grid-cols-2 gap-3 pt-3">
                          {/* Product 1: Vyoma */}
                          <Link
                            to="/products/vyoma"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-[#3D5BFF]/15 text-[#60A5FA]" : "bg-blue-50 text-blue-600"
                              }`}>
                                <Terminal size={14} />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <h4 className={`text-[13px] font-semibold transition-colors ${
                                  isDark ? "text-white group-hover:text-[#60A5FA]" : "text-slate-900 group-hover:text-blue-600"
                                }`}>
                                  Vyoma
                                </h4>
                                <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  isDark ? "bg-[#3D5BFF]/10 text-[#60A5FA]" : "bg-blue-50 text-blue-600"
                                }`}>
                                  Assessments
                                </span>
                              </div>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Agentic assessment environment with IDE copilot, task briefs, and telemetry on real repos.
                            </p>
                          </Link>

                          {/* Product 2: Workmark */}
                          <Link
                            to="/products/workmark"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600"
                              }`}>
                                <Award size={14} />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <h4 className={`text-[13px] font-semibold transition-colors ${
                                  isDark ? "text-white group-hover:text-emerald-400" : "text-slate-900 group-hover:text-emerald-600"
                                }`}>
                                  Workmark
                                </h4>
                                <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"
                                }`}>
                                  Proof of Work
                                </span>
                              </div>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Verified Git-backed developer credentials, campus hackathons, and talent discovery.
                            </p>
                          </Link>

                          {/* Product 3: Vega */}
                          <Link
                            to="/products/vega"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-indigo-500/15 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                              }`}>
                                <Bot size={14} />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <h4 className={`text-[13px] font-semibold transition-colors ${
                                  isDark ? "text-white group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
                                }`}>
                                  Vega
                                </h4>
                                <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                                }`}>
                                  AI Interviewer
                                </span>
                              </div>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Autonomous technical interviewer that adapts in real time with transcript-backed reports.
                            </p>
                          </Link>

                          {/* Product 4: Amogha AI */}
                          <Link
                            to="/platform"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-sky-500/15 text-sky-400" : "bg-sky-50 text-sky-600"
                              }`}>
                                <Cpu size={14} />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <h4 className={`text-[13px] font-semibold transition-colors ${
                                  isDark ? "text-white group-hover:text-sky-400" : "text-slate-900 group-hover:text-sky-600"
                                }`}>
                                  Amogha AI
                                </h4>
                                <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  isDark ? "bg-sky-500/10 text-sky-400" : "bg-sky-50 text-sky-600"
                                }`}>
                                  Engine Core
                                </span>
                              </div>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              The unified intelligence layer powering Socratic assessments, interviews, and scoring.
                            </p>
                          </Link>
                        </div>
                      </div>

                      {/* Bottom Architecture / Platform Row */}
                      <div className={`p-3 rounded-xl border flex items-center justify-between mt-4 ${
                        isDark
                          ? "bg-[#121214] border-[#222225]"
                          : "bg-slate-50 border-slate-200"
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Sparkles size={15} className={isDark ? "text-[#60A5FA]" : "text-blue-600"} />
                          <div>
                            <span className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                              Unified Architecture:
                            </span>
                            <span className={`text-xs ml-1.5 ${isDark ? "text-white/50" : "text-slate-500"}`}>
                              How Vyoma, Vega, and Workmark share real-time candidate proof-of-work.
                            </span>
                          </div>
                        </div>
                        <Link
                          to="/platform"
                          className={`text-xs font-semibold flex items-center gap-1 shrink-0 ${
                            isDark ? "text-[#60A5FA] hover:text-white" : "text-blue-600 hover:text-blue-800"
                          }`}
                        >
                          Platform Overview <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Clean Editorial Highlight Panel */}
                    <div className={`col-span-4 rounded-xl p-5 flex flex-col justify-between border ${
                      isDark
                        ? "bg-[#121214] border-[#222225]"
                        : "bg-slate-50 border-slate-200/80"
                    }`}>
                      <div className="space-y-3">
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] font-mono ${
                          isDark ? "text-[#60A5FA]" : "text-blue-600"
                        }`}>
                          PLATFORM ARCHITECTURE
                        </span>
                        <h4 className={`text-sm font-semibold leading-snug ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          Built for the Agentic Era
                        </h4>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/60" : "text-slate-600"
                        }`}>
                          Evaluate candidates on how they plan, write, and review code in real environments—not memorized algorithmic puzzles.
                        </p>
                        <ul className={`space-y-2 pt-1 text-xs ${
                          isDark ? "text-white/70" : "text-slate-600"
                        }`}>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF] shrink-0" />
                            Role-specific rubrics for AI & Systems
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF] shrink-0" />
                            Transcript-backed evidence reports
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF] shrink-0" />
                            Direct Greenhouse & Lever integration
                          </li>
                        </ul>
                      </div>

                      <div className={`pt-4 mt-4 border-t flex items-center justify-between ${
                        isDark ? "border-[#222225]" : "border-slate-200/60"
                      }`}>
                        <Link
                          to="/pricing"
                          className={`text-xs font-medium transition-colors ${
                            isDark ? "text-white/50 hover:text-white" : "text-slate-700 hover:text-slate-950"
                          }`}
                        >
                          View Pricing
                        </Link>
                        <button
                          type="button"
                          data-cal-link="sambram-k-s/30min"
                          data-cal-namespace="30min"
                          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                          className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer ${
                            isDark ? "text-[#60A5FA] hover:text-white" : "text-blue-600 hover:text-blue-800"
                          }`}
                        >
                          Book a Demo <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. SOLUTIONS MEGA-MENU */}
                {activeMenu === "solutions" && (
                  <div className="grid grid-cols-12 gap-7">
                    {/* Left: Strategic Hiring Objectives */}
                    <div className="col-span-8 flex flex-col justify-between">
                      <div>
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] font-mono ${
                          isDark ? "text-white/40" : "text-slate-400"
                        }`}>
                          Hiring & Assessment Solutions
                        </span>

                        <div className="grid grid-cols-2 gap-3 pt-3">
                          <Link
                            to="/corporates#ai-screening"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-[#3D5BFF]/15 text-[#60A5FA]" : "bg-blue-50 text-blue-600"
                              }`}>
                                <Cpu size={14} />
                              </div>
                              <h4 className={`text-[13px] font-semibold transition-colors ${
                                isDark ? "text-white group-hover:text-[#60A5FA]" : "text-slate-900 group-hover:text-blue-600"
                              }`}>
                                AI-Fluent Developer Hiring
                              </h4>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Evaluate how engineers prompt, critically reason, and build with AI assistants in real repos.
                            </p>
                          </Link>

                          <Link
                            to="/corporates#campus-sourcing"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-indigo-500/15 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                              }`}>
                                <GraduationCap size={14} />
                              </div>
                              <h4 className={`text-[13px] font-semibold transition-colors ${
                                isDark ? "text-white group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
                              }`}>
                                Campus Talent Sourcing
                              </h4>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Discover pre-vetted college talent ranked by actual challenge performance across cohorts.
                            </p>
                          </Link>

                          <Link
                            to="/corporates#screening"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50 text-emerald-600"
                              }`}>
                                <ShieldCheck size={14} />
                              </div>
                              <h4 className={`text-[13px] font-semibold transition-colors ${
                                isDark ? "text-white group-hover:text-emerald-400" : "text-slate-900 group-hover:text-emerald-600"
                              }`}>
                                Pre-Employment Screening
                              </h4>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Replace LeetCode trivia with ground-truth proof-of-work histories and multi-file system tasks.
                            </p>
                          </Link>

                          <Link
                            to="/corporates#vega-interviews"
                            className={`p-3.5 rounded-xl transition-all group block ${
                              isDark
                                ? "bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                                : "bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                isDark ? "bg-sky-500/15 text-sky-400" : "bg-sky-50 text-sky-600"
                              }`}>
                                <Workflow size={14} />
                              </div>
                              <h4 className={`text-[13px] font-semibold transition-colors ${
                                isDark ? "text-white group-hover:text-sky-400" : "text-slate-900 group-hover:text-sky-600"
                              }`}>
                                Automated First-Round Loops
                              </h4>
                            </div>
                            <p className={`text-xs leading-relaxed ${
                              isDark ? "text-white/50 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"
                            }`}>
                              Let Vega AI conduct consistent first-round technical interviews without consuming dev hours.
                            </p>
                          </Link>
                        </div>
                      </div>

                      {/* University / Institutional Partner row */}
                      <div className={`p-3 rounded-xl border flex items-center justify-between mt-4 ${
                        isDark
                          ? "bg-[#121214] border-[#222225]"
                          : "bg-slate-50 border-slate-200"
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <Building2 size={15} className={isDark ? "text-indigo-400" : "text-indigo-600"} />
                          <div>
                            <span className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                              For Universities & TPOs:
                            </span>
                            <span className={`text-xs ml-1.5 ${isDark ? "text-white/50" : "text-slate-500"}`}>
                              Empower your student cohorts with verified career scorecards and direct corporate visibility.
                            </span>
                          </div>
                        </div>
                        <Link
                          to="/universities"
                          className={`text-xs font-semibold flex items-center gap-1 shrink-0 ${
                            isDark ? "text-indigo-400 hover:text-white" : "text-indigo-600 hover:text-indigo-800"
                          }`}
                        >
                          TPO Network <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Featured Proof / Case Study */}
                    <div className={`col-span-4 rounded-xl p-5 flex flex-col justify-between border ${
                      isDark
                        ? "bg-[#121214] border-[#222225]"
                        : "bg-slate-50 border-slate-200/80"
                    }`}>
                      <div className="space-y-3">
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] font-mono ${
                          isDark ? "text-[#60A5FA]" : "text-blue-600"
                        }`}>
                          HIRING VELOCITY BENCHMARK
                        </span>
                        <div className={`text-2xl font-bold font-mono ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          40% Less Time
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/60" : "text-slate-600"
                        }`}>
                          Enterprise engineering teams eliminate candidate resume spam and bypass repetitive phone screens by assessing verified Workmark credentials and Vega interview transcripts.
                        </p>
                      </div>

                      <button
                        type="button"
                        data-cal-link="sambram-k-s/30min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                        className={`pt-4 mt-4 border-t text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isDark
                            ? "border-[#222225] text-[#60A5FA] hover:text-white"
                            : "border-slate-200/60 text-slate-900 hover:text-blue-600"
                        }`}
                      >
                        Schedule an Enterprise Consultation <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. RESOURCES DROPDOWN */}
                {activeMenu === "resources" && (
                  <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-8 grid grid-cols-2 gap-3">
                      <div className={`p-3.5 rounded-xl transition-all cursor-pointer ${
                        isDark ? "hover:bg-white/[0.04] text-white" : "hover:bg-slate-50 text-slate-900"
                      }`}>
                        <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                          <FileText size={15} className={isDark ? "text-[#60A5FA]" : "text-blue-600"} />
                          AI Developer Skills Report 2026
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}>
                          Annual data on developer AI fluency, prompt patterns, and code quality in the agentic era.
                        </p>
                      </div>

                      <div className={`p-3.5 rounded-xl transition-all cursor-pointer ${
                        isDark ? "hover:bg-white/[0.04] text-white" : "hover:bg-slate-50 text-slate-900"
                      }`}>
                        <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                          <Workflow size={15} className="text-indigo-400" />
                          ATS & Tool Integrations
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}>
                          Export candidate scores and transcripts directly into Greenhouse, Lever, and Workday.
                        </p>
                      </div>

                      <div className={`p-3.5 rounded-xl transition-all cursor-pointer ${
                        isDark ? "hover:bg-white/[0.04] text-white" : "hover:bg-slate-50 text-slate-900"
                      }`}>
                        <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                          <Lock size={15} className="text-emerald-400" />
                          Trust & Security Center
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}>
                          SOC 2 Type II certified, ISO 27001 accredited, GDPR compliant with blind evaluation modes.
                        </p>
                      </div>

                      <div className={`p-3.5 rounded-xl transition-all cursor-pointer ${
                        isDark ? "hover:bg-white/[0.04] text-white" : "hover:bg-slate-50 text-slate-900"
                      }`}>
                        <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                          <Trophy size={15} className="text-amber-400" />
                          Customer Case Studies
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isDark ? "text-white/50" : "text-slate-500"
                        }`}>
                          See how high-growth startups and enterprises hire pre-vetted engineers with zero LeetCode bias.
                        </p>
                      </div>
                    </div>

                    <div className={`col-span-4 rounded-xl p-5 flex flex-col justify-between border ${
                      isDark
                        ? "bg-[#121214] border-[#222225]"
                        : "bg-slate-50 border-slate-200/80"
                    }`}>
                      <div>
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] font-mono ${
                          isDark ? "text-white/40" : "text-slate-400"
                        }`}>
                          NEED HELP?
                        </span>
                        <h4 className={`text-sm font-semibold mt-2 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          Explore Documentation & APIs
                        </h4>
                        <p className={`text-xs mt-1.5 leading-relaxed ${
                          isDark ? "text-white/60" : "text-slate-500"
                        }`}>
                          Learn how to set up custom rubrics, integrate ATS webhooks, or launch branded university hackathons.
                        </p>
                      </div>
                      <a
                        href="mailto:info@zentrosuite.com"
                        className={`pt-4 mt-4 border-t text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                          isDark
                            ? "border-[#222225] text-[#60A5FA] hover:text-white"
                            : "border-slate-200/60 text-blue-600 hover:text-blue-800"
                        }`}
                      >
                        Contact Technical Support <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* MOBILE RESPONSIVE DRAWER                                     */}
      {/* ============================================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden w-full overflow-hidden shadow-xl ${
              isDark ? "bg-[#060911] text-white border-b border-white/10" : "bg-white text-slate-900"
            }`}
          >
            <div className="container px-5 py-6 space-y-6">
              
              {/* Products Mobile Accordion */}
              <div className={`border-b ${isDark ? "border-white/10" : "border-slate-100"} pb-4`}>
                <button
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === "products" ? null : "products")
                  }
                  className={`w-full flex items-center justify-between text-sm font-bold py-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileAccordion === "products" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileAccordion === "products" && (
                  <div className="mt-3 pl-2 space-y-2">
                    {/* 1. Vyoma */}
                    <Link
                      to="/products/vyoma"
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Vyoma</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                          Assessments
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Agentic assessment environment on real codebases.
                      </div>
                    </Link>

                    {/* 2. Workmark */}
                    <Link
                      to="/products/workmark"
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Workmark</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                          Proof of Work
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Verified Git-backed developer credentials & challenges.
                      </div>
                    </Link>

                    {/* 3. Vega */}
                    <Link
                      to="/products/vega"
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Vega</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                          AI Interviewer
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Autonomous AI technical interviewer adapting in real time.
                      </div>
                    </Link>

                    {/* 4. Amogha AI */}
                    <Link
                      to="/platform"
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Amogha AI</span>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                          Engine Core
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Unified platform intelligence layer powering assessments.
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Mobile Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === "solutions" ? null : "solutions")
                  }
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-900 py-1"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileAccordion === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileAccordion === "solutions" && (
                  <div className="mt-3 pl-2 space-y-2 text-xs">
                    <Link
                      to="/corporates#ai-screening"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-slate-700 hover:text-black"
                    >
                      AI-Fluent Developer Hiring
                    </Link>
                    <Link
                      to="/corporates#campus-sourcing"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-slate-700 hover:text-black"
                    >
                      Campus Talent Sourcing
                    </Link>
                    <Link
                      to="/corporates#screening"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-slate-700 hover:text-black"
                    >
                      Pre-Employment Screening
                    </Link>
                    <Link
                      to="/universities"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-indigo-600 font-bold hover:text-indigo-800"
                    >
                      For Universities & TPOs
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Mobile Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === "resources" ? null : "resources")
                  }
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-900 py-1"
                >
                  <span>Resources</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileAccordion === "resources" ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileAccordion === "resources" && (
                  <div className="mt-3 pl-2 space-y-2 text-xs">
                    <div className="p-1.5 rounded-lg hover:bg-slate-50">
                      <div className="font-bold text-slate-900">AI Developer Skills Report 2026</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Annual data on developer AI fluency & code quality.
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg hover:bg-slate-50">
                      <div className="font-bold text-slate-900">ATS & Tool Integrations</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Greenhouse, Lever, and Workday integrations.
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg hover:bg-slate-50">
                      <div className="font-bold text-slate-900">Trust & Security Center</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        SOC 2 Type II, ISO 27001, and GDPR compliant.
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg hover:bg-slate-50">
                      <div className="font-bold text-slate-900">Customer Case Studies</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        How companies hire pre-vetted engineers with zero bias.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Mobile Links */}
              <div className="flex flex-col gap-3 font-semibold text-sm">
                <Link
                  to="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-800 hover:text-black py-1"
                >
                  Pricing
                </Link>
                <Link
                  to="/products/workmark"
                  onClick={() => setMobileOpen(false)}
                  className="text-blue-600 hover:text-blue-700 py-1 flex items-center justify-between font-bold"
                >
                  <span>For Candidates</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <a
                  href="https://auth.zentrosuite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-2.5 text-center text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-full"
                >
                  Log In
                </a>
                <button
                  type="button"
                  data-cal-link="sambram-k-s/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                  className="w-full block py-2.5 text-center text-xs font-semibold text-slate-900 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-slate-300/80 rounded-full transition-all cursor-pointer"
                >
                  Request Demo
                </button>
                <a
                  href="https://auth.zentrosuite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-2.5 text-center text-xs font-semibold text-white bg-black hover:bg-neutral-800 rounded-full"
                >
                  Create a free account
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
