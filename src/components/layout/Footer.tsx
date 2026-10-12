import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter, Github, Sparkles, ExternalLink } from "lucide-react";
import { useAppTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDark } = useAppTheme();
  const headerClass = `text-xs font-bold ${isDark ? "text-white" : "text-slate-900"} font-mono uppercase tracking-wider`;
  const linkClass = `${isDark ? "hover:text-white" : "hover:text-slate-900"} font-medium transition-colors`;

  return (
    <footer className={`relative ${isDark ? "bg-[#060911] text-slate-400 border-t border-white/10" : "bg-white text-slate-500 border-t border-slate-200/80"} pt-20 pb-12 font-body overflow-hidden transition-colors duration-300`}>
      {/* Translucent giant logo watermark */}
      <div className={`absolute bottom-[-60px] lg:bottom-[-120px] left-1/2 -translate-x-1/2 pointer-events-none select-none ${isDark ? "opacity-[0.03] brightness-0 invert" : "opacity-[0.02]"} z-0 w-[110%] max-w-[1600px]`}>
        <img
          src={`${import.meta.env.BASE_URL}zentro_black_logo-removebg-preview.png`}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Top Header Fold: Brand + Mission + Compliance Badges */}
        <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b ${isDark ? "border-white/10" : "border-slate-100"}`}>
          <div className="space-y-3 max-w-2xl">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}zentro_black_logo-removebg-preview.png`}
                alt="Zentro Suite"
                className={`h-8 md:h-9 w-auto object-contain ${isDark ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <p className={`text-xs md:text-sm ${isDark ? "text-slate-400" : "text-slate-500"} leading-relaxed`}>
              The ground-truth technical assessment and hiring platform. Evaluate AI-fluent developers on realistic codebases with Workmark proof-of-work, Vyoma agentic assessments, and Vega AI interviews—all powered by Amogha AI.
            </p>
          </div>

          {/* Security Accreditations */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`flex items-center gap-1.5 px-3 py-1.5 ${isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"} rounded-full text-[11px] font-semibold select-none shadow-2xs`}>
              <Shield size={12} className="text-emerald-400" /> SOC 2 Type II
            </span>
            <span className={`flex items-center gap-1.5 px-3 py-1.5 ${isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"} rounded-full text-[11px] font-semibold select-none shadow-2xs`}>
              <Shield size={12} className="text-blue-400" /> ISO 27001
            </span>
            <span className={`flex items-center gap-1.5 px-3 py-1.5 ${isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"} rounded-full text-[11px] font-semibold select-none shadow-2xs`}>
              <Shield size={12} className="text-cyan-400" /> GDPR Compliant
            </span>
          </div>
        </div>

        {/* 5-Column Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Products */}
          <div className="space-y-4">
            <h4 className={headerClass}>
              Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link to="/products/vyoma" className="hover:text-slate-900 font-medium transition-colors">
                  Vyoma (Assessments)
                </Link>
              </li>
              <li>
                <Link to="/products/vega" className="hover:text-slate-900 font-medium transition-colors flex items-center gap-1.5">
                  Vega (AI Interviewer)
                </Link>
              </li>
              <li>
                <Link to="/products/workmark" className="hover:text-slate-900 font-medium transition-colors">
                  Workmark (Proof of Work)
                </Link>
              </li>
              <li>
                <Link to="/products/workmark#challenges" className="hover:text-slate-900 font-medium transition-colors">
                  Contests & Hackathons
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1 text-slate-700 font-bold">
                  <Sparkles size={11} className="text-cyan-500" /> Amogha AI Engine
                </span>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  View Pricing Plans →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className={headerClass}>
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link to="/corporates#ai-screening" className="hover:text-slate-900 font-medium transition-colors">
                  AI-Fluent Developer Hiring
                </Link>
              </li>
              <li>
                <Link to="/corporates#campus-sourcing" className="hover:text-slate-900 font-medium transition-colors">
                  Campus Talent Sourcing
                </Link>
              </li>
              <li>
                <Link to="/corporates#screening" className="hover:text-slate-900 font-medium transition-colors">
                  Pre-Employment Screening
                </Link>
              </li>
              <li>
                <Link to="/corporates#vega-interviews" className="hover:text-slate-900 font-medium transition-colors">
                  AI First-Round Loops
                </Link>
              </li>
              <li>
                <Link to="/universities" className="hover:text-slate-900 font-medium transition-colors">
                  For Universities & TPOs
                </Link>
              </li>
              <li>
                <Link to="/corporates" className="hover:text-slate-900 font-medium transition-colors">
                  Internal Talent Mobility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className={headerClass}>
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 font-medium transition-colors">
                  Developer Skills Report 2026
                </a>
              </li>
              <li>
                <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 font-medium transition-colors">
                  Customer Case Studies
                </a>
              </li>
              <li>
                <Link to="/corporates#integrations" className="hover:text-slate-900 font-medium transition-colors">
                  ATS & Git Integrations
                </Link>
              </li>
              <li>
                <Link to="/trust" className="hover:text-slate-900 font-medium transition-colors">
                  Trust & Security Center
                </Link>
              </li>
              <li>
                <a href="mailto:info@zentrosuite.com" className="hover:text-slate-900 font-medium transition-colors">
                  Developer Documentation & API
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: For Candidates */}
          <div className="space-y-4">
            <h4 className={headerClass}>
              For Candidates
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link to="/products/workmark" className="hover:text-slate-900 font-medium transition-colors">
                  Build Workmark Score
                </Link>
              </li>
              <li>
                <Link to="/products/workmark#challenges" className="hover:text-slate-900 font-medium transition-colors">
                  Active Campus Contests
                </Link>
              </li>
              <li>
                <Link to="/products/workmark#leaderboard" className="hover:text-slate-900 font-medium transition-colors">
                  Student Leaderboards
                </Link>
              </li>
              <li>
                <Link to="/workmark-creator" className="hover:text-slate-900 font-medium transition-colors">
                  Creator Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="https://auth.zentrosuite.com/auth/signin/candidate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                >
                  Candidate Sign In <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div className="space-y-4">
            <h4 className={headerClass}>
              Company & Legal
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-slate-900 font-medium transition-colors">
                  About Zentro Suite
                </Link>
              </li>
              <li>
                <a href="mailto:info@zentrosuite.com" className="hover:text-slate-900 font-medium transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/sambramsm28/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 font-medium transition-colors"
                >
                  Schedule a Demo
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-slate-900 font-medium transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-slate-900 font-medium transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-slate-900 font-medium transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className={`pt-8 border-t ${isDark ? "border-white/10 text-slate-500" : "border-slate-100 text-slate-400"} flex flex-col md:flex-row items-center justify-between gap-4 text-xs`}>
          <div>
            &copy; {new Date().getFullYear()} Zentro Suite Corporation. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${isDark ? "hover:text-slate-200" : "hover:text-slate-700"} transition-colors`}
              aria-label="LinkedIn"
            >
              <Linkedin size={15} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${isDark ? "hover:text-slate-200" : "hover:text-slate-700"} transition-colors`}
              aria-label="X (formerly Twitter)"
            >
              <Twitter size={15} /> <span>X</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${isDark ? "hover:text-slate-200" : "hover:text-slate-700"} transition-colors`}
              aria-label="GitHub"
            >
              <Github size={15} /> <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
