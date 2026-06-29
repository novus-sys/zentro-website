import { Link } from "react-router-dom";
import { ArrowRight, Shield, Database, Sparkles, Users } from "lucide-react";

export default function Corporates() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-[#FAFBFD] font-body">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5048E4] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center max-w-[800px] px-6">
        {/* Coming Soon Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#5048E4] bg-[#5048E4]/10 uppercase mb-6 font-mono">
          <Sparkles size={11} /> Coming Soon
        </span>

        {/* Headline */}
        <h1 className="font-serif-display font-normal text-4xl md:text-6xl tracking-tight text-slate-900 mb-6 leading-tight">
          Zentro for <span className="text-[#5048E4] italic font-normal">Corporates</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-base md:text-lg max-w-[620px] leading-relaxed mb-10">
          Source and pre-screen top engineering talent based on verified coding outcomes. 
          Sync candidate profiles directly into Greenhouse, Lever, or your custom ATS pipeline.
        </p>

        {/* Value Prop Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mb-12 text-left">
          <div className="bg-white border border-slate-200/80 p-5 rounded-lg shadow-3xs">
            <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center mb-3">
              <Users size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider font-display">Vetted Directory</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Browse candidate profiles backed by real-world hackathon codes and verification keys.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 p-5 rounded-lg shadow-3xs">
            <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center mb-3">
              <Database size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider font-display">ATS Integration</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Unlock resumes and push vetting records directly to Greenhouse with a single click.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 p-5 rounded-lg shadow-3xs">
            <div className="w-8 h-8 rounded bg-indigo-50 text-[#5048E4] flex items-center justify-center mb-3">
              <Shield size={16} />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wider font-display">Zero Plagiarism</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Candidate coding submissions are structurally checked to eliminate AI-generated fraud.
            </p>
          </div>
        </div>

        {/* Waitlist / Contact early access */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-[#5048E4] hover:bg-[#4038c4] text-white font-sans font-bold text-xs rounded-full shadow-md shadow-indigo-600/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border-none"
          >
            Request Recruiter Access <ArrowRight size={14} />
          </a>
          <Link
            to="/"
            className="px-7 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-sans font-bold text-xs rounded-full transition-all flex items-center justify-center"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
