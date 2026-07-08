import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, Search, Sparkles, Cpu, GitBranch, ShieldCheck, 
  Layers, Send, Terminal, ExternalLink, Database, Users, BarChart2, 
  Trophy, EyeOff, FileCheck, Star 
} from "lucide-react";

interface Candidate {
  name: string;
  avatar: string;
  branch: string;
  batch: string;
  score: number;
  commits: number;
  repos: number;
  skills: string[];
  readiness: string;
  verificationLog: string;
}

export default function Corporates() {
  const [searchQuery, setSearchQuery] = useState("React");
  const [activeLeaderboardRow, setActiveLeaderboardRow] = useState<number>(0);
  const [activeProductTab, setActiveProductTab] = useState<string>("screening");
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const candidates: Candidate[] = [
    {
      name: "Arjun Kumar S",
      avatar: "AK",
      branch: "Computer Science",
      batch: "Class of 2026",
      score: 891,
      commits: 420,
      repos: 4,
      skills: ["React", "Node.js", "Express", "PostgreSQL"],
      readiness: "98% Ready",
      verificationLog: "Completed Solaris Concurrency Challenge (94/100). Verified 4 backend repositories with clean histories and structure testing."
    },
    {
      name: "Sarah Nguyen",
      avatar: "SN",
      branch: "Information Science",
      batch: "Class of 2026",
      score: 872,
      commits: 345,
      repos: 3,
      skills: ["React", "TypeScript", "TailwindCSS", "Next.js"],
      readiness: "95% Ready",
      verificationLog: "Sync completed with 3 GitHub repositories. High commits density in TypeScript projects, graded by senior mentor audits."
    },
    {
      name: "Marcus Brody",
      avatar: "MB",
      branch: "Electronics & Communication",
      batch: "Class of 2026",
      score: 815,
      commits: 198,
      repos: 2,
      skills: ["Python", "Docker", "PostgreSQL", "React"],
      readiness: "89% Ready",
      verificationLog: "Ranked #8 in Campus Wide Algo-Challenge. Solved solaris query execution optimization puzzle with optimal runtime."
    },
    {
      name: "Priya Rao",
      avatar: "PR",
      branch: "Computer Science",
      batch: "Class of 2026",
      score: 854,
      commits: 310,
      repos: 3,
      skills: ["Node.js", "MongoDB", "Express", "Redis"],
      readiness: "92% Ready",
      verificationLog: "Built and verified distributed caching microservice. Complete unit-test coverage and zero plagiarism warning flagged."
    }
  ];

  // Set default selected candidate
  useEffect(() => {
    setSelectedCandidate(candidates[0]);
  }, []);

  const filteredCandidates = candidates.filter(cand => 
    searchQuery === "" || 
    cand.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    cand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const products = [
    {
      id: "screening",
      title: "AI Screening Sprints",
      subtitle: "Screen your external applicant pool instantly",
      icon: <Cpu className="text-[#5048E4]" size={20} />,
      desc: "Already drowning in hundreds of applications from job boards? Upload your candidate files directly. Zentro runs them through structured coding challenges and returns a ranked, capability-proven shortlist in 24-48 hours.",
      features: [
        "Upload pipelines from LinkedIn, Naukri, or direct links",
        "Automated plagiarism and AI-generated code detection",
        "Instant code compiler and structured syntax diagnostics",
        "Ranked shortlist delivered directly to your dashboard"
      ]
    },
    {
      id: "sprints",
      title: "Sourced Hiring Sprints",
      subtitle: "Targeted problem statement distributions",
      icon: <Layers className="text-[#5048E4]" size={20} />,
      desc: "Post a real-world coding problem statement or engineering challenge. Students across Zentro's engineering campus network submit projects over 3-7 days. Review evaluated work samples and hire from the top performers.",
      features: [
        "Sourced from verified student networks across partner campuses",
        "Full Git histories and commit timelines verified",
        "Code graded automatically using custom test suites",
        "Unlock full candidate contact information in one click"
      ]
    },
    {
      id: "contests",
      title: "Campus Sponsoring Contests",
      subtitle: "Timed capability challenges on campus",
      icon: <Trophy className="text-[#5048E4]" size={20} />,
      desc: "Sponsor a 2-3 hour timed coding or domain-specific contest open to all campus partners. Watch a real-time leaderboard update with student code execution results. Hire the top 1-3% of students in a single afternoon.",
      features: [
        "Co-branded landing pages and campus promotions",
        "Live leaderboards with automated scorecards",
        "Direct engagement and branding on campuses",
        "Ranked output based on execution runtime and accuracy"
      ]
    },
    {
      id: "hiring-days",
      title: "Freshers Hiring Days",
      subtitle: "Ranked evaluation job fairs with teeth",
      icon: <Users className="text-[#5048E4]" size={20} />,
      desc: "Partner with selected colleges for a structured, single-day recruiting sprint. Candidates complete technical and aptitude challenges on Zentro, and you interview verified top-performers in person or online on the same day.",
      features: [
        "Collaborative multi-college consolidated talent pools",
        "On-site and remote execution pipelines supported",
        "Saves weeks of resume filtering and initial phone calls",
        "Structured feedback loop from test to offer sheet"
      ]
    },
    {
      id: "audits",
      title: "Skill Gap Benchmarking",
      subtitle: "Understand incoming or current fresher cohorts",
      icon: <BarChart2 className="text-[#5048E4]" size={20} />,
      desc: "Benchmark your incoming campus hires or current team members using custom technical challenges. Receive comprehensive reports highlighting team strengths, technical skill gaps, and custom training recommendations.",
      features: [
        "Measure execution capability across 10+ core technologies",
        "Discover logic-flow blocks and architectural skill gaps",
        "Compare team averages against city-wide benchmarks",
        "Personalized upskilling recommendations generated per engineer"
      ]
    }
  ];

  const activeProduct = products.find(p => p.id === activeProductTab) || products[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoFormSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-20 overflow-hidden font-body">
      {/* Light subtle background grid */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-24 border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Title */}
              <h1 className="font-serif-display font-normal text-4xl leading-[1.12] tracking-tight md:text-5xl lg:text-6xl text-[#111111]">
                Sourcing Vetted
                <br />
                <span className="text-[#5048E4] italic font-normal">Tech Talent.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-505 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                Access verified student profiles across partner engineering colleges. Find candidates ranked by demonstrated capability, verified GitHub repository commits, and timed coding outcomes—not written resumes.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#book-demo"
                  className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs rounded-full shadow-md hover:scale-[1.02] transition-all flex items-center gap-2 border-none"
                >
                  Book Sourcing Demo <ArrowRight size={14} />
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("sourcing-products");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-full font-sans font-bold text-xs text-slate-700 transition-colors shadow-xs cursor-pointer"
                >
                  Explore Sourcing Products
                </button>
              </div>

              {/* Trust features list */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 max-w-md">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">Zero Resume Spams</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">Plagiarism Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">Greenhouse & Lever Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-xs text-slate-600 font-semibold">Blind Sourcing Mode</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Showcase */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#5048E4]/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Recruiter Sourcing Sandbox</span>
              </div>

              <p className="text-xs text-slate-505 text-slate-500 mb-4 leading-relaxed">
                Filter our candidate pool by verified GitHub activity and programming syntax checks.
              </p>

              {/* Dynamic search query buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Python"].map((query) => (
                  <button
                    key={query}
                    onClick={() => setSearchQuery(query)}
                    className={`text-[10px] px-3 py-1 rounded-full border transition-all cursor-pointer font-bold ${
                      searchQuery === query
                        ? "bg-[#5048E4] border-[#5048E4] text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {query}
                  </button>
                ))}
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[10px] px-3 py-1 rounded-full border border-dashed border-slate-200 text-slate-400 hover:bg-slate-50 cursor-pointer"
                >
                  Clear filter
                </button>
              </div>

              {/* Leaderboard layout split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Left Side: Candidates list */}
                <div className="md:col-span-7 space-y-2 max-h-[260px] overflow-y-auto pr-1">
                  {filteredCandidates.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-400 bg-white border border-slate-100 rounded-lg">
                      No candidates found matching "{searchQuery}"
                    </div>
                  ) : (
                    filteredCandidates.map((cand, idx) => (
                      <div
                        key={cand.name}
                        onClick={() => {
                          setSelectedCandidate(cand);
                          setActiveLeaderboardRow(idx);
                        }}
                        className={`p-3 border rounded-xl shadow-3xs transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          selectedCandidate?.name === cand.name
                            ? "bg-white border-[#5048E4] scale-[1.01] shadow-xs"
                            : "bg-white border-slate-150 hover:border-indigo-200"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                            {cand.avatar}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800">{cand.name}</h4>
                            <p className="text-[8px] text-slate-400 font-mono">{cand.branch}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold font-mono text-[#5048E4] bg-[#5048E4]/5 px-1.5 py-0.5 rounded border border-[#5048E4]/10">
                            {cand.score}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Right Side: Profile Details */}
                <div className="md:col-span-5">
                  <AnimatePresence mode="wait">
                    {selectedCandidate && (
                      <motion.div
                        key={selectedCandidate.name}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="bg-white border border-slate-200 rounded-xl p-4 space-y-3 h-full flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] px-1.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold rounded border border-emerald-150 flex items-center gap-0.5">
                              <ShieldCheck size={8} /> Verified
                            </span>
                            <span className="text-[9px] font-semibold text-slate-450 text-slate-400 font-mono">{selectedCandidate.readiness}</span>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold text-slate-800">{selectedCandidate.name}</h4>
                            <p className="text-[9px] text-slate-400 font-mono mt-0.5">{selectedCandidate.batch}</p>
                          </div>

                          <div className="border-t border-slate-100 pt-2 space-y-1">
                            <div className="flex justify-between text-[9px] text-slate-505 text-slate-500">
                              <span>Git Commits</span>
                              <strong className="text-slate-700 font-mono">{selectedCandidate.commits}</strong>
                            </div>
                            <div className="flex justify-between text-[9px] text-slate-550 text-slate-500">
                              <span>Verified Repos</span>
                              <strong className="text-slate-700 font-mono">{selectedCandidate.repos}</strong>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-2">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wide font-mono block mb-1">Audit Log Summary</span>
                            <p className="text-[8.5px] text-slate-505 text-slate-500 leading-normal italic bg-slate-50 p-1.5 rounded border border-slate-100">
                              "{selectedCandidate.verificationLog}"
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {selectedCandidate.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="text-[8px] px-1.5 py-0.5 bg-slate-50 border border-slate-100 text-slate-500 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom marquee content */}
          <div className="container max-w-4xl mx-auto text-center z-10 mt-16 md:mt-24">
            <p className="text-xs font-bold text-slate-400 font-sans uppercase tracking-wider mb-5">
              For Fortune 500 Aspirations
            </p>
            <div className="relative w-full overflow-hidden py-3">
              {/* Fade gradient overlays on left and right */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="flex w-max gap-16 animate-marquee whitespace-nowrap opacity-40 hover:opacity-75 transition-opacity duration-300">
                {Array(2).fill(0).map((_, groupIndex) => (
                  <div key={groupIndex} className="flex justify-around gap-16 items-center shrink-0 min-w-full">
                    <span className="font-display font-black text-slate-400 text-lg tracking-tight select-none">MICROSOFT</span>
                    <span className="font-display font-bold text-slate-400 text-lg tracking-tight select-none">SALESFORCE</span>
                    <span className="font-display font-extrabold text-slate-400 text-lg tracking-tight select-none">AMAZON</span>
                    <span className="font-display font-semibold text-slate-400 text-lg tracking-tight select-none">ACCENTURE</span>
                    <span className="font-display font-black text-slate-400 text-lg tracking-tight select-none">J.P. MORGAN</span>
                    <span className="font-display font-bold text-slate-400 text-lg tracking-tight select-none">GOLDMAN SACHS</span>
                    <span className="font-display font-extrabold text-slate-400 text-lg tracking-tight select-none">INTEL</span>
                    <span className="font-display font-semibold text-slate-400 text-lg tracking-tight select-none">ORACLE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Sourcing Products Section */}
      <section id="sourcing-products" className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs text-[#5048E4] bg-[#5048E4]/5 px-3 py-1 rounded-md font-bold uppercase tracking-wider border border-[#5048E4]/10">
              Product Suite
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#0F294A] mt-4 mb-4">
              Five Sourcing Strategies. One Platform.
            </h2>
            <p className="text-slate-505 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We manufacture the capability signal in real-time. Choose the product that best fits your immediate hiring timeframe and candidate volume.
            </p>
          </div>

          {/* Product Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveProductTab(p.id)}
                className={`px-4 py-2.5 rounded-full font-sans font-bold text-xs border transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeProductTab === p.id
                    ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-50"
                }`}
              >
                {p.icon}
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          {/* Product Detailed Content Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-3xs max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                {/* Product Text details */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#5048E4]">
                      {activeProduct.icon}
                      <span>{activeProduct.subtitle}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                      {activeProduct.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {activeProduct.desc}
                    </p>
                  </div>
                </div>

                {/* Product Feature Checklist */}
                <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {activeProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} />
                          </div>
                          <span className="text-xs text-slate-600 leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a
                      href="#book-demo"
                      className="w-full py-2.5 bg-[#5048E4] hover:bg-[#4038c4] text-white text-center font-sans font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-[#5048E4]/10"
                    >
                      Inquire About {activeProduct.title} <ArrowRight size={12} />
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Proof of Work Sourcing Moat Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Mockup for ATS & Blind Mode */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-3xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <EyeOff size={16} className="text-[#5048E4]" />
                    <span className="text-xs font-bold text-slate-800">Blind Sourcing Mode Active</span>
                  </div>
                  <span className="text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded-full font-bold">Standard Security</span>
                </div>

                {/* Candidate record with masked credentials */}
                <div className="bg-white border border-slate-150 rounded-xl p-4 space-y-3 shadow-2xs relative">
                  <div className="absolute top-4 right-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded px-1.5 py-0.5 text-[8px] font-bold">
                    Pii Masked
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-400 font-bold flex items-center justify-center text-xs border border-dashed border-slate-200">
                      **
                    </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400">Candidate #0492B</h4>
                        <p className="text-[9px] text-slate-400 font-mono">CSE Department · Partner Engineering College</p>
                      </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-2.5 text-center">
                    <div>
                      <span className="text-[8px] text-slate-405 text-slate-400 block font-mono">Workmark Score</span>
                      <strong className="text-xs font-bold text-[#5048E4]">872</strong>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-405 text-slate-400 block font-mono">Verified Commits</span>
                      <strong className="text-xs font-bold text-slate-700">340+</strong>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-405 text-slate-400 block font-mono">Challenge Rank</span>
                      <strong className="text-xs font-bold text-slate-700">Top 5%</strong>
                    </div>
                  </div>

                  <p className="text-[9px] text-slate-500 italic">
                    "Names, genders, and specific university identifications are hidden. Recruiter filters and shortlisting actions are based purely on objective proof of capability."
                  </p>
                </div>

                {/* ATS Integration simulation icons */}
                <div className="pt-2">
                  <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest block mb-2 text-center">Export Directly to Your ATS</span>
                  <div className="flex items-center justify-center gap-6 opacity-60">
                    <span className="text-[10px] font-bold text-slate-500 font-display">GREENHOUSE</span>
                    <span className="text-[10px] font-bold text-slate-500 font-display">LEVER</span>
                    <span className="text-[10px] font-bold text-slate-500 font-display">WORKDAY</span>
                    <span className="text-[10px] font-bold text-slate-500 font-display">SMARTRECRUITERS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="font-mono text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                Capabilities Moat
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F294A] leading-tight">
                Verified Capabilities Outperform Resumes
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center shrink-0 mt-1">
                    <Database size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Dynamic Signal Manufacturing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Instead of waiting months for student profiles to slowly accumulate data, our 24-48 hour sprints and contests manufacture high-fidelity capability signals instantly when you need to make placements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center shrink-0 mt-1">
                    <EyeOff size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Blind Review Sourcing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Eliminate systemic recruitment bias. Standardize candidate screens purely on GitHub compile logs, verification keys, and algorithmic scoring.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center shrink-0 mt-1">
                    <FileCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">One-Click ATS Sync</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Plug vetted candidates directly into Greenhouse or Lever. Eliminate duplicate profile entries and ensure compliance across recruitment pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Book Demo / Contact Form Section */}
      <section id="book-demo" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-md max-w-3xl mx-auto space-y-8 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-[#5048E4]"></div>

            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900">
                Partner with Zentro Workmark
              </h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Connect with our team to configure custom screening challenges, sponsor campus contests, or run an assessment on your fresher candidates.
              </p>
            </div>

            {demoFormSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-150 rounded-xl p-8 text-center max-w-md mx-auto space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-base font-bold text-slate-800">Request Submitted</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thanks for reaching out! A Zentro platform engineer will contact you shortly to configure your recruiter dashboard access.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Recruiter Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-[#5048E4] focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Corporate Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-[#5048E4] focus:outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Company Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-[#5048E4] focus:outline-none transition-colors"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Sourcing Interest</label>
                  <select
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-[#5048E4] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="screening">AI Screening Sprints</option>
                    <option value="sprints">Sourced Hiring Sprints</option>
                    <option value="contests">Campus Sponsoring Contests</option>
                    <option value="all">Full Enterprise Platform</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Additional Details</label>
                  <textarea
                    rows={3}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-[#5048E4] focus:outline-none transition-colors resize-none"
                    placeholder="Let us know what roles or technologies you are hiring for..."
                  />
                </div>

                <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-[10px] text-slate-400 text-left leading-normal max-w-[280px]">
                    By submitting, you agree to our corporate data policies. Or skip the form and book immediately:
                  </p>
                  
                  <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
                    <a
                      href="https://calendly.com/sambramsm28/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-colors text-center inline-block"
                    >
                      Book on Calendly
                    </a>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#5048E4] hover:bg-[#4038c4] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm border-none cursor-pointer"
                    >
                      Send Request <Send size={12} />
                    </button>
                  </div>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
