export default function Terms() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />
      <div className="container max-w-4xl px-6 mx-auto">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#0F294A] mb-3">Terms of Service</h1>
          <p className="text-xs font-mono text-slate-400">Last Updated: June 2026</p>
        </div>
        
        <div className="text-sm text-slate-600 leading-relaxed space-y-8">
          <p>
            Welcome to Zentro Workmark. By accessing our talent directory, participating in campus challenges, or utilizing the TPO placement interface, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before accessing Zentro Suite services.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">1. Scope of Agreement</h2>
            <p>
              These Terms govern candidate profile creation, GitHub synchronization, coding assessments, corporate challenge sponsorship, and matching workflows for Universities, Candidates, and recruiters.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">2. User Accounts & Verification</h2>
            <p>
              Candidates must provide accurate profile credentials, including their enrolled university, batch year, and branch. By connecting third-party platforms (like GitHub), candidates grant Zentro permission to audit code repositories, read public commit logs, and compile index ratings. Zentro reserves the right to disable profiles that provide falsified academic or professional data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">3. Academic Integrity & Anti-Plagiarism</h2>
            <p>
              Zentro places absolute value on capability verification. By submitting solutions to campus contests, hackathons, or assessments, candidates warrant that the code is their own. 
            </p>
            <p className="font-semibold text-red-600 bg-red-50/50 border border-red-200 p-3 rounded-lg text-xs">
              Anti-Plagiarism Guardrails: Zentro implements automated structural analysis to detect duplicate submissions, copy-pasted blocks, and AI-generation anomalies. Any candidate flag for plagiarism or assessment fraud will result in profile audit flags, score invalidations, and possible exclusion from recruiter search indexing.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">4. Sourcing & Recruiter Clearances</h2>
            <p>
              Recruiters are granted access to candidate search outputs based on paid tier limits. Sharing unlocked profiles outside of the organization's ATS workspace is prohibited. Recruitment users agree to respect candidate contact preferences and keep candidate data secure in compliance with local privacy laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">5. Limitation of Liability</h2>
            <p>
              Zentro provides a capability indexing directory based on objective indicators. We do not guarantee hiring outcomes, candidate performance, or the accuracy of unverified PDF resume uploads. Zentro is not liable for direct, indirect, or consequential damages arising from recruitment matching processes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">6. Termination & Governing Law</h2>
            <p>
              Zentro reserves the right to suspend or terminate service access at any time for violation of these Terms. These Terms are governed by and construed in accordance with corporate laws, without regard to conflict of law principles. Contact us at <a href="mailto:terms@zentrosuite.com" className="text-indigo-600 hover:underline">terms@zentrosuite.com</a> for inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
