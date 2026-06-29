import { useState } from "react";
import { Search, SlidersHorizontal, ExternalLink, Award, Code, Check } from "lucide-react";

interface Candidate {
  name: string;
  avatar: string;
  score: number;
  role: string;
  location: string;
  verifiedSkills: string[];
  proofCount: number;
  badge: string;
  lastChallenge: string;
}

const mockCandidates: Candidate[] = [
  {
    name: "Arjun K.",
    avatar: "AK",
    score: 895,
    role: "Software Engineering Graduate",
    location: "San Francisco, CA (Hybrid)",
    verifiedSkills: ["React/TypeScript", "Next.js", "Performance Tuning", "Node.js"],
    proofCount: 8,
    badge: "Top 2% Hackathon Rank",
    lastChallenge: "Novus-Sys Gas Optimization Challenge",
  },
  {
    name: "Sarah Nguyen",
    avatar: "SN",
    score: 942,
    role: "Computer Science Senior",
    location: "Austin, TX (Remote)",
    verifiedSkills: ["TypeScript", "PostgreSQL", "System Architecture", "Go"],
    proofCount: 5,
    badge: "Verified SQL Expert",
    lastChallenge: "Solaris Database Concurrency Challenge",
  },
  {
    name: "Marcus Brody",
    avatar: "MB",
    score: 874,
    role: "Full-Stack Developer",
    location: "New York, NY (On-site)",
    verifiedSkills: ["Docker/Kubernetes", "Rust", "Node.js", "AWS Cloud"],
    proofCount: 6,
    badge: "Cloud Challenge Finalist",
    lastChallenge: "Canyon-Tech Infrastructure Automation",
  }
];

export default function SourcingDashboard() {
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
          c.verifiedSkills.some(s => s.toLowerCase().includes("react") || s.toLowerCase().includes("database") || s.toLowerCase().includes("sql") || s.toLowerCase().includes("typescript"))
        )
      );
    }, 500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm font-body">
      <div className="text-center mb-8">
        <span className="font-sans text-xs text-[#0F294A] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-md font-bold">
          Employer Search Dashboard
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-[#0F294A] mt-3">
          Search Ground-Truth Candidate Profiles
        </h3>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Query candidate profiles directly based on verified university and hackathon challenges.
        </p>
      </div>

      <div className="space-y-6">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-350 rounded-md text-sm text-slate-800 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-md transition-colors shadow-xs"
          >
            {isSearching ? "Searching..." : "Search Directory"}
          </button>
        </form>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Controls */}
          <div className="bg-slate-50 border border-slate-200 rounded-md p-5 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 font-display">
                <SlidersHorizontal size={14} className="text-[#0F294A]" /> Directory Filters
              </span>
            </div>

            {/* Filter 1 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Verification Level</span>
              <div className="space-y-2 text-xs text-slate-655 text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#0F294A] focus:ring-[#0F294A]" />
                  <span>Corporate Sponsor Verified</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#0F294A] focus:ring-[#0F294A]" />
                  <span>Academic Partner Challenge</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" className="rounded border-slate-300 text-[#0F294A] focus:ring-[#0F294A]" />
                  <span>Independent Audit Profile</span>
                </label>
              </div>
            </div>

            {/* Filter 2 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Minimum Workmark Score</span>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>Score Threshold</span>
                  <span>850+</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full">
                  <div className="bg-[#0F294A] h-full w-[85%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-3 space-y-4">
            {isSearching ? (
              <div className="h-64 bg-white border border-slate-200 rounded-md flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#0F294A] border-t-transparent animate-spin mb-4" />
                <p className="text-xs text-slate-500 font-mono">Querying Zentro Workmark databases...</p>
              </div>
            ) : (
              candidates.map((c, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-md p-5 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between shadow-xs transition-all"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm">
                        {c.avatar}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-905 text-slate-900 leading-none">{c.name}</h4>
                        <span className="text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5">{c.role}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{c.location}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-col gap-1.5 max-w-md">
                    <div className="flex flex-wrap gap-1">
                      {c.verifiedSkills.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <Code size={10} className="text-slate-405 text-slate-400" />
                      <span>Last challenge: {c.lastChallenge}</span>
                    </div>
                  </div>

                  {/* Score & Ledger */}
                  <div className="flex flex-row md:flex-col gap-1.5 items-end justify-between w-full md:w-auto border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 block font-semibold leading-none">WORKMARK SCORE</span>
                      <span className="text-base font-extrabold text-[#0F294A] font-mono leading-none mt-1 block">
                        {c.score}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 text-[11px] font-bold text-[#0F294A] hover:text-blue-600 transition-colors">
                      View Project Logs <ExternalLink size={12} />
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
