import { Shield, Lock, FileCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function Trust() {
  const securityPillars = [
    {
      icon: <Lock className="text-indigo-650 text-indigo-605 text-indigo-600" size={20} />,
      title: "Data Encryption & Transport",
      desc: "All candidate profiles and repository metadata are encrypted at rest using AES-256 algorithms and in transit using secure TLS 1.3 encryption protocols."
    },
    {
      icon: <Shield className="text-indigo-650 text-indigo-605 text-indigo-600" size={20} />,
      title: "GDPR & CCPA Compliance",
      desc: "We enforce strict privacy controls. Candidates own their data and can revoke repository authorization, purge verification scorecards, or request account deletions instantly."
    },
    {
      icon: <FileCheck className="text-indigo-650 text-indigo-655 text-indigo-600" size={20} />,
      title: "SOC 2 Type II Certification",
      desc: "Zentro is SOC 2 Type II audited, verifying our system availability, code confidentiality, and information security controls match rigorous enterprise standards."
    },
    {
      icon: <CheckCircle2 className="text-indigo-650 text-indigo-655 text-indigo-600" size={20} />,
      title: "Automated Plagiarism Audits",
      desc: "We run checks verifying solution code uniqueness, code compilation safety, and dependency hygiene to block plagiarism while protecting intellectual property."
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />
      
      <div className="container max-w-5xl px-6 mx-auto">
        <div className="border-b border-slate-200 pb-8 mb-12 text-center md:text-left">
          <span className="inline-block font-mono text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md font-bold uppercase tracking-wider mb-3">
            Trust Center
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#0F294A] mb-3">Zentro Security & Compliance</h1>
          <p className="text-slate-505 text-slate-500 text-sm max-w-xl">
            We are dedicated to safeguarding information security, data privacy, and assessment validity for candidates, universities, and enterprise companies.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityPillars.map((pillar, idx) => (
            <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-md hover:scale-[1.01] transition-all">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-505 text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Vulnerability Report callout */}
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F294A] uppercase font-display">
              <AlertCircle size={14} className="text-indigo-600" /> Security Vulnerability Reporting
            </span>
            <p className="text-xs text-slate-505 text-slate-500 leading-relaxed">
              If you believe you have discovered a security vulnerability or bug in the Zentro platform, please contact our security team. We review vulnerability disclosures promptly and coordinate fixes in a secure manner.
            </p>
          </div>
          <a
            href="mailto:security@zentrosuite.com"
            className="px-6 py-3.5 bg-[#0F294A] hover:bg-[#071629] text-white text-xs font-bold rounded-full transition-all shrink-0 text-center shadow-xs border-none"
          >
            Email Security Team
          </a>
        </div>

      </div>
    </div>
  );
}
