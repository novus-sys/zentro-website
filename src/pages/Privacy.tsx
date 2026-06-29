export default function Privacy() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />
      <div className="container max-w-4xl px-6 mx-auto">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#0F294A] mb-3">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-400">Last Updated: June 2026</p>
        </div>
        
        <div className="text-sm text-slate-600 leading-relaxed space-y-8">
          <p>
            At Zentro Suite Corporation (&quot;Zentro&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting the privacy and security of our candidates, recruiters, and university partners. This Privacy Policy describes how we collect, use, disclose, and safeguard personal information when utilizing the Zentro Workmark candidate directory and associated talent platforms.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">1. Information We Collect</h2>
            <p>
              We collect information to verify capabilities and match candidate skills with recruiter requirements:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Candidate Profile Data:</strong> Full name, university affiliation, email address, graduation batch year, and graduation branch (CSE, ISE, ECE).</li>
              <li><strong>Verified Code Repositories:</strong> We pull coding contributions, structure logs, lints, and repository timestamps from connected Github, GitLab, or Bitbucket accounts.</li>
              <li><strong>Assessment Outcomes:</strong> Scores, challenge ranks, and grader scorecards from university-sponsored hackathons or assessments.</li>
              <li><strong>Enterprise Usage:</strong> Recruiter search queries, search filter preferences, candidate unlock records, and shortlist histories.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">2. How We Use Your Information</h2>
            <p>
              We process personal information for standard operational and matching purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To compile the objective Zentro Unified Score utilizing commit trails, challenge reviews, and compile verifications.</li>
              <li>To provide recruiters with verified candidate listings matching technical attributes like &quot;Verified Node.js&quot; and production experience.</li>
              <li>To sync candidate records and shortlist scorecards directly into recruiters' Applicant Tracking Systems (ATS).</li>
              <li>To identify and prevent plagiarism, code structure duplications, or automated AI cheating anomalies.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">3. Data Sharing & Third-Party Disclosure</h2>
            <p>
              Candidate profiles are shared strictly with authorized recruiters and corporate sponsors who purchase recruiter dashboard access. We support <strong>Blind Review Mode</strong>, which allows candidates to hide names, genders, and universities during initial screening steps. We do not sell personal data to advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">4. GDPR & CCPA Rights</h2>
            <p>
              Depending on location, users have legal rights regarding their personal data, including the right to access, correct, port, or request deletion of their records. Candidates can unlink their GitHub profiles, reset challenge histories, or delete accounts at any time by contacting us at <a href="mailto:privacy@zentrosuite.com" className="text-indigo-600 hover:underline">privacy@zentrosuite.com</a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">5. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When updates occur, we will post the revised date at the top of the page. We encourage you to review this policy periodically to stay informed about how we safeguard your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
