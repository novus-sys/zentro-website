import { useState } from "react";
import { Search, SlidersHorizontal, ExternalLink, Cpu } from "lucide-react";

interface Candidate {
  name: string;
  avatar: string;
  matchScore: number;
  role: string;
  location: string;
  verifiedSkills: string[];
  proofCount: number;
  badge: string;
}

const mockCandidates: Candidate[] = [
  {
    name: "Arjun K.",
    avatar: "AK",
    matchScore: 98,
    role: "Senior Software Engineer (Frontend-Heavy)",
    location: "San Francisco, CA (Hybrid)",
    verifiedSkills: ["React/TypeScript", "Next.js", "Performance Tuning", "Node.js"],
    proofCount: 8,
    badge: "Top 2% Challenge Rank",
  },
  {
    name: "Sarah Nguyen",
    avatar: "SN",
    matchScore: 94,
    role: "Full-Stack Engineer",
    location: "Austin, TX (Remote)",
    verifiedSkills: ["React/TypeScript", "PostgreSQL", "System Architecture", "Rust"],
    proofCount: 5,
    badge: "Verified SQL Expert",
  },
  {
    name: "Marcus Brody",
    avatar: "MB",
    matchScore: 89,
    role: "Infrastructure & Platform Dev",
    location: "New York, NY (On-site)",
    verifiedSkills: ["Docker/Kubernetes", "Rust", "Node.js", "AWS Cloud"],
    proofCount: 6,
    badge: "Cloud Challenge Finalist",
  }
];

export default function MatchDemo() {
  const [searchTerm, setSearchTerm] = useState("React & TypeScript developers with verified database scaling project");
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setCandidates(
        mockCandidates.filter(c =>
          c.verifiedSkills.some(s => s.toLowerCase().includes("react") || s.toLowerCase().includes("database") || s.toLowerCase().includes("sql"))
        )
      );
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm font-body">
      <div className="text-center mb-8">
        <span className="font-mono text-xs text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full font-bold">
          AI Sourcing & Mobility
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mt-3">
          Match Based on Hard Proof, Not Keyword Matching
        </h3>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Zentro Match aligns internal employees and external candidates to open roles based on verified project data and scorecards.
        </p>
      </div>

      <div className="space-y-6">
        {/* Search Bar Row */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors shadow-xs"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
          >
            {isSearching ? "Matching..." : "Search Match"}
          </button>
        </form>

        {/* Candidate Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Pane */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 font-display">
                <SlidersHorizontal size={14} className="text-blue-600" /> Matching Controls
              </span>
            </div>

            {/* Filter 1 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">SKILL VERIFICATION LEVEL</span>
              <div className="space-y-2 text-xs text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" defaultChecked className="rounded border-slate-350 bg-white text-blue-600 focus:ring-blue-400 accent-blue-650" />
                  <span>Expert Validation Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" defaultChecked className="rounded border-slate-350 bg-white text-blue-600 focus:ring-blue-400 accent-blue-650" />
                  <span>Real-World Challenge Proof</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" className="rounded border-slate-350 bg-white text-blue-600 focus:ring-blue-400 accent-blue-650" />
                  <span>Self-Reported Resumes</span>
                </label>
              </div>
            </div>

            {/* Filter 2 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">MATCH ACCURACY WEIGHT</span>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>Sourcing (External)</span>
                  <span>70%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="bg-blue-600 h-full w-[70%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>Mobility (Internal)</span>
                  <span>30%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="bg-indigo-650 bg-indigo-600 h-full w-[30%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Results Pane */}
          <div className="lg:col-span-3 space-y-4">
            {isSearching ? (
              <div className="h-64 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mb-4" />
                <p className="text-xs text-slate-500 font-mono">Running skills vector alignment models...</p>
              </div>
            ) : (
              candidates.map((c, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex gap-4 items-center">
                    {/* Avatar with match badge */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm">
                        {c.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white font-mono">
                        {c.matchScore}%
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900 leading-none">{c.name}</h4>
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-250 px-1.5 py-0.5 rounded">
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5">{c.role}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{c.location}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-1.5 max-w-sm">
                    {c.verifiedSkills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-50 border border-slate-200 text-slate-655 text-slate-600 px-2.5 py-1 rounded-full flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {s}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex flex-row md:flex-col gap-1 items-end justify-between w-full md:w-auto border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                    <span className="text-[10px] font-mono text-slate-400">
                      {c.proofCount} VERIFIED PROOFS
                    </span>
                    <button className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                      View Ledger <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
