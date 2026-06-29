export default function Refund() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />
      <div className="container max-w-4xl px-6 mx-auto">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#0F294A] mb-3">Refund Policy</h1>
          <p className="text-xs font-mono text-slate-400">Last Updated: June 2026</p>
        </div>
        
        <div className="text-sm text-slate-600 leading-relaxed space-y-8">
          <p>
            This Refund Policy details billing terms, cancellation, and refund conditions for corporate sourcing licenses and recruiting credits. Please review these rules before subscribing to Zentro plans.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">1. Free Tier Accounts</h2>
            <p>
              Zentro is 100% free for candidates and students building profiles, syncing GitHub repositories, and participating in campus coding contests. No credit cards or payment credentials are required to build a verified Workmark.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">2. Recruiter Sourcing Subscriptions</h2>
            <p>
              Corporate recruiting access is billed on monthly or annual subscription terms.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Recurring Subscriptions:</strong> All payments are charged on the subscription start date and auto-renew at the end of each billing cycle unless cancelled.</li>
              <li><strong>Cancellation:</strong> Subscription cancellations take effect at the end of the current billing cycle. Access remains active until the final day of the cycle.</li>
              <li><strong>No-Refund Default:</strong> Except as required by law, all subscription fees and credit purchase charges are non-refundable. We do not provide refunds or credits for partial months or unused unlock credits.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">3. Invoicing & Billing Errors</h2>
            <p>
              If you believe there is a billing discrepancy, error, or unauthorized charge on your account, please contact our billing support team within 30 days of the transaction. We will review billing logs and resolve proven system errors by issuing credit offsets or refunds where appropriate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[#0F294A]">4. Billing Inquiries & Support</h2>
            <p>
              For any questions regarding billing cancellation steps, credit balances, or invoice details, please contact us at <a href="mailto:billing@zentrosuite.com" className="text-indigo-600 hover:underline">billing@zentrosuite.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
