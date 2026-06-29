import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Trophy, User, ShieldAlert, Star, Search, FileCheck, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

interface Node {
  id: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  group: "student" | "tpo-verification" | "tpo-portal" | "career";
}

export default function WorkflowArchitecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    // Student Source
    { id: "A", label: "GitHub Commits & Projects", subtext: "Source code activity & history", icon: <GitBranch size={16} />, group: "student" },
    { id: "B", label: "Coding Contests & Assessments", subtext: "Live assessments & hackathon ranks", icon: <Trophy size={16} />, group: "student" },
    { id: "C", label: "Student Dev Profile", subtext: "Consolidated capability map", icon: <User size={16} />, group: "student" },
    
    // TPO Skill Verification Engine
    { id: "E", label: "Anti-Plagiarism Verification", subtext: "Code syntax & duplication audits", icon: <ShieldAlert size={16} />, group: "tpo-verification" },
    { id: "D", label: "Project Repository Verification", subtext: "Automated lints & compiler checks", icon: <ShieldCheck size={16} />, group: "tpo-verification" },
    { id: "F", label: "Assessment Verifications", subtext: "Validation against challenge scorecards", icon: <Cpu size={16} />, group: "tpo-verification" },
    
    // TPO Portal
    { id: "G", label: "Zentro Unified Score", subtext: "Objective skill ratings index", icon: <Star size={16} />, group: "tpo-portal" },
    { id: "I", label: "Company CRM & Job Openings", subtext: "Active job listings & drive dates", icon: <CheckCircle2 size={16} />, group: "tpo-portal" },
    { id: "H", label: "AI Talent Search Engine", subtext: "Match recruiters to verified candidates", icon: <Search size={16} />, group: "tpo-portal" },
    
    // Career Outcomes
    { id: "J", label: "Recruiter Shortlist", subtext: "Direct pipeline ATS integration", icon: <FileCheck size={16} />, group: "career" },
    { id: "K", label: "Verified Placement & Offers", subtext: "Contract signing & onboarding metrics", icon: <CheckCircle2 size={16} />, group: "career" },
  ];

  // Helper to check if connection line should be active
  const isConnectionActive = (fromNode: string, toNode: string) => {
    if (!hoveredNode) return false;
    
    // Define active connections to highlight
    const paths: Record<string, string[]> = {
      A: ["A", "C"],
      B: ["B", "C"],
      C: ["C", "D"],
      E: ["E", "D"],
      D: ["D", "F"],
      F: ["F", "G"],
      G: ["G", "H"],
      I: ["I", "H"],
      H: ["H", "J"],
      J: ["J", "K"]
    };

    // If a node is hovered, highlight its immediate outputs or inputs
    if (hoveredNode === fromNode && paths[fromNode]?.includes(toNode)) return true;
    if (hoveredNode === toNode && paths[fromNode]?.includes(toNode)) return true;
    
    return false;
  };

  return (
    <section className="py-20 border-t border-slate-200 bg-white font-body overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs text-indigo-655 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
            Architecture
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-4">
            Placement Data & Workflow Architecture
          </h2>
          <p className="text-slate-505 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Hover over any node below to trace the dynamic flow of verified capabilities from code commits to recruiter shortlists and placements.
          </p>
        </div>

        {/* Visual Workflow Diagram */}
        <div className="relative border border-slate-250 bg-slate-50/50 rounded-2xl p-8 shadow-2xs max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            
            {/* 1. Student Source Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-2 mb-4">
                1. Student Source Data
              </h4>
              
              {/* Git Commits */}
              <div
                onMouseEnter={() => setHoveredNode("A")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "A" ? "border-indigo-500 scale-[1.02] shadow-md shadow-indigo-150" : "border-slate-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <GitBranch size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">GitHub Commits & Projects</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Source code contributions</p>
                  </div>
                </div>
              </div>

              {/* Coding Contests */}
              <div
                onMouseEnter={() => setHoveredNode("B")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "B" ? "border-indigo-500 scale-[1.02] shadow-md shadow-indigo-150" : "border-slate-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Trophy size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Assessments & Contests</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Coding challenge performance</p>
                  </div>
                </div>
              </div>

              {/* Dev Profile */}
              <div
                onMouseEnter={() => setHoveredNode("C")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "C" ? "border-indigo-500 scale-[1.02] shadow-md shadow-indigo-150" : "border-slate-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <User size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Student Dev Profile</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Consolidated credentials sitemap</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Verification Engine Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest border-b border-emerald-100 pb-2 mb-4">
                2. Verification Engine
              </h4>

              {/* Plagiarism Checks */}
              <div
                onMouseEnter={() => setHoveredNode("E")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "E" ? "border-emerald-500 scale-[1.02] shadow-md shadow-emerald-150" : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldAlert size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Anti-Plagiarism Audits</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Authenticity & syntax checks</p>
                  </div>
                </div>
              </div>

              {/* Repo Verification */}
              <div
                onMouseEnter={() => setHoveredNode("D")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "D" ? "border-emerald-500 scale-[1.02] shadow-md shadow-emerald-150" : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Repository Verification</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Automated lints & compile checks</p>
                  </div>
                </div>
              </div>

              {/* Assessment Outcomes */}
              <div
                onMouseEnter={() => setHoveredNode("F")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "F" ? "border-emerald-500 scale-[1.02] shadow-md shadow-emerald-150" : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Assessment Audits</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Validations on score milestones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. TPO Portal Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-teal-600 uppercase tracking-widest border-b border-teal-100 pb-2 mb-4">
                3. TPO & Career Portal
              </h4>

              {/* Score index */}
              <div
                onMouseEnter={() => setHoveredNode("G")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "G" ? "border-teal-500 scale-[1.02] shadow-md shadow-teal-150" : "border-slate-200 hover:border-teal-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Star size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Zentro Unified Score</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Objective capability index</p>
                  </div>
                </div>
              </div>

              {/* Company CRM */}
              <div
                onMouseEnter={() => setHoveredNode("I")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "I" ? "border-teal-500 scale-[1.02] shadow-md shadow-teal-150" : "border-slate-200 hover:border-teal-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Company CRM & Openings</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Track opportunities & dates</p>
                  </div>
                </div>
              </div>

              {/* Talent Search */}
              <div
                onMouseEnter={() => setHoveredNode("H")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "H" ? "border-teal-500 scale-[1.02] shadow-md shadow-teal-150" : "border-slate-200 hover:border-teal-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Search size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">AI Talent Search Engine</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Matches filters based on proof-of-work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Career Outcomes Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-mono font-bold text-amber-600 uppercase tracking-widest border-b border-amber-100 pb-2 mb-4">
                4. Career Outcomes
              </h4>

              {/* Recruiter Shortlist */}
              <div
                onMouseEnter={() => setHoveredNode("J")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "J" ? "border-amber-500 scale-[1.02] shadow-md shadow-amber-150" : "border-slate-200 hover:border-amber-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <FileCheck size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Recruiter Shortlist</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Direct ATS loops sync</p>
                  </div>
                </div>
              </div>

              {/* Placements & Offers */}
              <div
                onMouseEnter={() => setHoveredNode("K")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer bg-white ${
                  hoveredNode === "K" ? "border-amber-500 scale-[1.02] shadow-md shadow-amber-150" : "border-slate-200 hover:border-amber-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Verified Placement & Offers</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">Verified final offers & contracts</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Background SVG connecting arrows (Visible on large screens) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 2 L 10 5 L 0 8 z" fill="#cbd5e1" />
              </marker>
              <marker id="arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 2 L 10 5 L 0 8 z" fill="#6366f1" />
              </marker>
            </defs>

            {/* A -> C Connection */}
            <path
              d="M 230 96 C 250 96, 230 252, 252 252"
              fill="none"
              stroke={isConnectionActive("A", "C") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("A", "C") ? "2" : "1"}
              strokeDasharray={isConnectionActive("A", "C") ? "4,4" : "none"}
              markerEnd={isConnectionActive("A", "C") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* B -> C Connection */}
            <path
              d="M 230 178 C 250 178, 230 252, 252 252"
              fill="none"
              stroke={isConnectionActive("B", "C") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("B", "C") ? "2" : "1"}
              strokeDasharray={isConnectionActive("B", "C") ? "4,4" : "none"}
              markerEnd={isConnectionActive("B", "C") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* C -> D Connection */}
            <path
              d="M 252 252 L 275 252 C 300 252, 450 178, 478 178"
              fill="none"
              stroke={isConnectionActive("C", "D") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("C", "D") ? "2" : "1"}
              strokeDasharray={isConnectionActive("C", "D") ? "4,4" : "none"}
              markerEnd={isConnectionActive("C", "D") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* E -> D Connection */}
            <path
              d="M 456 96 C 470 96, 465 178, 478 178"
              fill="none"
              stroke={isConnectionActive("E", "D") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("E", "D") ? "2" : "1"}
              strokeDasharray={isConnectionActive("E", "D") ? "4,4" : "none"}
              markerEnd={isConnectionActive("E", "D") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* D -> F Connection */}
            <path
              d="M 478 178 C 490 178, 465 252, 478 252"
              fill="none"
              stroke={isConnectionActive("D", "F") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("D", "F") ? "2" : "1"}
              strokeDasharray={isConnectionActive("D", "F") ? "4,4" : "none"}
              markerEnd={isConnectionActive("D", "F") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* F -> G Connection */}
            <path
              d="M 478 252 C 550 252, 650 96, 700 96"
              fill="none"
              stroke={isConnectionActive("F", "G") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("F", "G") ? "2" : "1"}
              strokeDasharray={isConnectionActive("F", "G") ? "4,4" : "none"}
              markerEnd={isConnectionActive("F", "G") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* G -> H Connection */}
            <path
              d="M 700 96 C 720 96, 705 252, 725 252"
              fill="none"
              stroke={isConnectionActive("G", "H") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("G", "H") ? "2" : "1"}
              strokeDasharray={isConnectionActive("G", "H") ? "4,4" : "none"}
              markerEnd={isConnectionActive("G", "H") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* I -> H Connection */}
            <path
              d="M 700 178 C 720 178, 705 252, 725 252"
              fill="none"
              stroke={isConnectionActive("I", "H") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("I", "H") ? "2" : "1"}
              strokeDasharray={isConnectionActive("I", "H") ? "4,4" : "none"}
              markerEnd={isConnectionActive("I", "H") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* H -> J Connection */}
            <path
              d="M 725 252 C 780 252, 880 96, 920 96"
              fill="none"
              stroke={isConnectionActive("H", "J") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("H", "J") ? "2" : "1"}
              strokeDasharray={isConnectionActive("H", "J") ? "4,4" : "none"}
              markerEnd={isConnectionActive("H", "J") ? "url(#arrow-active)" : "url(#arrow)"}
            />

            {/* J -> K Connection */}
            <path
              d="M 920 96 C 940 96, 925 178, 940 178"
              fill="none"
              stroke={isConnectionActive("J", "K") ? "#6366f1" : "#cbd5e1"}
              strokeWidth={isConnectionActive("J", "K") ? "2" : "1"}
              strokeDasharray={isConnectionActive("J", "K") ? "4,4" : "none"}
              markerEnd={isConnectionActive("J", "K") ? "url(#arrow-active)" : "url(#arrow)"}
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
