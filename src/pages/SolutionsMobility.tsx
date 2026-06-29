import { CheckCircle, Briefcase, TrendingUp, Sliders } from "lucide-react";

export default function SolutionsMobility() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-indigo-50/40 to-transparent -z-10 pointer-events-none" />

      {/* Hero */}
      <div className="container max-w-4xl text-center mb-16">
        <span className="font-mono text-xs text-indigo-650 text-indigo-650 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
          Solutions for HR Leaders
        </span>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-slate-900 mt-4 mb-6 leading-tight">
          Unlock the True Skills in Your Workforce
        </h1>
        <p className="text-slate-505 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Don't lose top talent to external hiring. Map your employees' actual project achievements to open roles, identify upskilling needs, and scale internal mobility automatically.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-sm"
          >
            Request Workforce Audit
          </a>
        </div>
      </div>

      {/* Mobility Content */}
      <div className="container max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-6 shadow-xs">
            <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Internal Mobility Suite</h4>
            <ul className="space-y-4 text-xs text-slate-700">
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-indigo-650 text-indigo-650 text-indigo-650 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Capability Graphing:</strong> Automatically indexes employees' completed ticket logs and system contributions to map an active, objective skills directory.
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-indigo-650 text-indigo-650 text-indigo-650 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Task & Project Matching:</strong> Match the best-fit internal engineers to complex tasks or cross-functional team initiatives based on their past verified success.
                </div>
              </li>
              <li className="flex gap-2.5">
                <CheckCircle size={16} className="text-indigo-650 text-indigo-650 text-indigo-650 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Predictive Career Mapping:</strong> Show employees clear, data-backed development pathways, increasing internal retention.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-6">
              Why Internal Mobility Fails Today
            </h3>
            <p className="text-slate-550 text-slate-500 text-sm leading-relaxed mb-4">
              HR teams typically lack deep visibility into their employees' day-to-day technical skills. They rely on annual self-evaluations or manager surveys that fail to capture the actual skills employees build on active codebases.
            </p>
            <p className="text-slate-550 text-slate-500 text-sm leading-relaxed mb-4">
              With Zentro Suite, capabilities are automatically tracked via repository logs and pull requests. When an internal engineering slot opens, our vector match engine suggests qualified internal employees who are already building similar systems.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="border-t border-slate-200 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Briefcase size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">Retain Top Performers</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Retain top talent by proactively matching them with upskilling projects and promotions before they search outside.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
              <TrendingUp size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">Close Skill Gaps</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Identify organization-wide skill deficits early, formulation tailored training curricula for your team.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
              <Sliders size={18} />
            </div>
            <h4 className="text-base font-bold text-slate-900">Optimize Staff Allocation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Equip project-based resource management leaders with verification ledgers, ensuring teams are staffed optimally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
