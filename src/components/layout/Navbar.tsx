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

type MenuType = "products" | "solutions" | "resources" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

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
      className="fixed top-0 inset-x-0 w-full z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left Section: Brand Logo + Nav Links clustered together */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => handleMenuEnter(null)}
            className="flex items-center shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}zentro_black_logo-removebg-preview.png`}
              alt="Zentro Suite Logo"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Products Mega-Menu Trigger */}
            <div
              className="relative h-16 flex items-center group"
              onMouseEnter={() => handleMenuEnter("products")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors outline-none ${
                  activeMenu === "products"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180 text-black" : "text-slate-400 group-hover:text-slate-700"
                  }`}
                />
              </button>
            </div>

            {/* Solutions Mega-Menu Trigger */}
            <div
              className="relative h-16 flex items-center group"
              onMouseEnter={() => handleMenuEnter("solutions")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors outline-none ${
                  activeMenu === "solutions"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180 text-black" : "text-slate-400 group-hover:text-slate-700"
                  }`}
                />
              </button>
            </div>

            {/* Resources Dropdown Trigger */}
            <div
              className="relative h-16 flex items-center group"
              onMouseEnter={() => handleMenuEnter("resources")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors outline-none ${
                  activeMenu === "resources"
                    ? "text-black font-semibold"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    activeMenu === "resources" ? "rotate-180 text-black" : "text-slate-400 group-hover:text-slate-700"
                  }`}
                />
              </button>
            </div>

            {/* Pricing Direct Link */}
            <Link
              to="/pricing"
              onMouseEnter={() => handleMenuEnter(null)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Section: Log In, Request Demo, Create a free account */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {/* Log In Link (Direct to auth.zentrosuite.com, no dropdown) */}
          <a
            href="https://auth.zentrosuite.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMenuEnter(null)}
            className="text-sm font-medium text-slate-700 hover:text-black px-2 py-2 transition-colors"
          >
            Log In
          </a>

          {/* Request Demo Button (Sharp corners, no rounded) */}
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMenuEnter(null)}
            className="px-4 py-2 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-none transition-colors whitespace-nowrap"
          >
            Request Demo
          </a>

          {/* Create a free account Button (Direct to auth.zentrosuite.com, sharp corners) */}
          <a
            href="https://auth.zentrosuite.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMenuEnter(null)}
            className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-neutral-800 rounded-none transition-colors whitespace-nowrap"
          >
            Create a free account
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-slate-950 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            className="absolute top-full left-0 w-full pt-2 z-40 hidden lg:block pointer-events-none"
          >
            <div className="container max-w-7xl mx-auto px-4 sm:px-8 pointer-events-none">
              <div
                className="bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 pointer-events-auto"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                
                {/* 1. PRODUCTS MEGA-MENU */}
                {activeMenu === "products" && (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Left: 4 Core Platform Products & Architecture */}
                    <div className="col-span-8 space-y-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Core Platform Products
                      </span>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Product 1: Vyoma */}
                        <Link
                          to="/products/vyoma"
                          className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group block"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Vyoma
                            </h4>
                            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                              Assessments
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Agentic assessment environment where candidates plan, prompt, and review with an AI assistant on real codebases.
                          </p>
                        </Link>

                        {/* Product 2: Workmark */}
                        <Link
                          to="/products/workmark"
                          className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group block"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                              Workmark
                            </h4>
                            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                              Proof of Work
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Verified Git-backed developer credentials, branded campus hackathons, custom challenges, and talent discovery.
                          </p>
                        </Link>

                        {/* Product 3: Vega */}
                        <Link
                          to="/products/vega"
                          className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group block"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Vega
                            </h4>
                            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                              AI Interviewer
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Autonomous technical interviewer that adapts in real time, probes for depth, and delivers transcript-backed reports.
                          </p>
                        </Link>

                        {/* Product 4: Amogha AI */}
                        <Link
                          to="/platform"
                          className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group block"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                              Amogha AI
                            </h4>
                            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">
                              Engine Core
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            The unified intelligence layer powering Socratic assessments in Vyoma, live interviews in Vega, and verified scoring in Workmark.
                          </p>
                        </Link>
                      </div>

                      {/* Bottom Architecture / Platform Row */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Sparkles size={18} className="text-blue-600" />
                          <div>
                            <span className="text-xs font-bold text-slate-900">Unified Architecture:</span>
                            <span className="text-xs text-slate-500 ml-1.5">
                              How Vyoma, Vega, and Workmark share real-time candidate proof-of-work.
                            </span>
                          </div>
                        </div>
                        <Link
                          to="/platform"
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0"
                        >
                          Platform Overview <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Clean Editorial Highlight Panel */}
                    <div className="col-span-4 bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-mono">
                          Platform Architecture
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          Built for the Agentic Era
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Evaluate candidates on how they plan, write, and review code in real environments—not memorized algorithmic puzzles.
                        </p>
                        <ul className="space-y-2 pt-1 text-xs text-slate-600">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            Role-specific rubrics for AI & Systems
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                            Transcript-backed evidence reports
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            Direct Greenhouse & Lever integration
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                        <Link
                          to="/pricing"
                          className="text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
                        >
                          View Pricing
                        </Link>
                        <a
                          href="https://calendly.com/sambramsm28/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          Book a Demo <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. SOLUTIONS MEGA-MENU */}
                {activeMenu === "solutions" && (
                  <div className="grid grid-cols-12 gap-8">
                    {/* Left: Strategic Hiring Objectives */}
                    <div className="col-span-8 space-y-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Hiring & Assessment Solutions
                      </span>

                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          to="/corporates#ai-screening"
                          className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                              <Cpu size={16} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              AI-Fluent Developer Hiring
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Evaluate how engineers prompt, critically reason, and build with AI assistants in real repos.
                          </p>
                        </Link>

                        <Link
                          to="/corporates#campus-sourcing"
                          className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
                              <GraduationCap size={16} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Campus Talent Sourcing
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Discover pre-vetted college talent ranked by actual challenge performance across university cohorts.
                          </p>
                        </Link>

                        <Link
                          to="/corporates#screening"
                          className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md">
                              <ShieldCheck size={16} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                              Pre-Employment Screening
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Replace LeetCode trivia with ground-truth proof-of-work histories and real multi-file system tasks.
                          </p>
                        </Link>

                        <Link
                          to="/corporates#vega-interviews"
                          className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="p-1.5 bg-purple-50 text-purple-600 rounded-md">
                              <Workflow size={16} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                              Automated First-Round Loops
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Let Vega AI conduct consistent, deep first-round technical interviews without consuming engineering team hours.
                          </p>
                        </Link>
                      </div>

                      {/* University / Institutional Partner row */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Building2 size={18} className="text-indigo-600" />
                          <div>
                            <span className="text-xs font-bold text-slate-900">For Universities & TPOs:</span>
                            <span className="text-xs text-slate-500 ml-1.5">
                              Empower your student cohorts with verified career scorecards and direct corporate visibility.
                            </span>
                          </div>
                        </div>
                        <Link
                          to="/universities"
                          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
                        >
                          TPO Network <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Featured Proof / Case Study */}
                    <div className="col-span-4 bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-mono">
                          Hiring Velocity Benchmark
                        </span>
                        <div className="text-2xl font-black text-slate-900 font-mono">
                          40% Less Time
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Enterprise engineering teams eliminate candidate resume spam and bypass repetitive phone screens by assessing verified Workmark credentials and Vega interview transcripts.
                        </p>
                      </div>

                      <a
                        href="https://calendly.com/sambramsm28/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-600"
                      >
                        Schedule an Enterprise Consultation <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                )}

                {/* 3. RESOURCES DROPDOWN */}
                {activeMenu === "resources" && (
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8 grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                          <FileText size={15} className="text-blue-600" />
                          AI Developer Skills Report 2026
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Annual data on developer AI fluency, prompt patterns, and code quality in the agentic era.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                          <Workflow size={15} className="text-indigo-600" />
                          ATS & Tool Integrations
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Export candidate scores and transcripts directly into Greenhouse, Lever, and Workday.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                          <Lock size={15} className="text-emerald-600" />
                          Trust & Security Center
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          SOC 2 Type II certified, ISO 27001 accredited, GDPR compliant with blind evaluation modes.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                          <Trophy size={15} className="text-amber-600" />
                          Customer Case Studies
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          See how high-growth startups and enterprises hire pre-vetted engineers with zero LeetCode bias.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-4 bg-slate-50 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                          Need Help?
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-2">
                          Explore Documentation & APIs
                        </h4>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                          Learn how to set up custom rubrics, integrate ATS webhooks, or launch branded university hackathons.
                        </p>
                      </div>
                      <a
                        href="mailto:info@zentrosuite.com"
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 mt-4"
                      >
                        Contact Technical Support <ArrowRight size={13} />
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
            className="lg:hidden w-full overflow-hidden bg-white shadow-xl"
          >
            <div className="container px-5 py-6 space-y-6">
              
              {/* Products Mobile Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === "products" ? null : "products")
                  }
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-900 py-1"
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
                  className="w-full block py-2.5 text-center text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-none"
                >
                  Log In
                </a>
                <a
                  href="https://calendly.com/sambramsm28/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-2.5 text-center text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-none"
                >
                  Request Demo
                </a>
                <a
                  href="https://auth.zentrosuite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-2.5 text-center text-xs font-semibold text-white bg-black hover:bg-neutral-800 rounded-none"
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
