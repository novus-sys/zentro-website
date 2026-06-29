import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  recommended: boolean;
  link: string;
}

const tiers: Tier[] = [
  {
    name: "Growth",
    price: "$149",
    period: "per month",
    desc: "Perfect for growing teams looking to source and verify early-career talent.",
    features: [
      "10 Candidate Workmark unlocks/mo",
      "Standard skill & language search",
      "Basic ATS export (CSV/Excel)",
      "University challenge network access",
      "Standard email support"
    ],
    cta: "Start Growth Trial",
    recommended: false,
    link: "https://calendly.com/sambramsm28/30min"
  },
  {
    name: "Scale",
    price: "$499",
    period: "per month",
    desc: "For scaling engineering organizations hiring multiple creators and matching skills.",
    features: [
      "50 Candidate Workmark unlocks/mo",
      "Advanced verification level filters",
      "Full verified code report downloads",
      "Direct Greenhouse & Lever integration",
      "Custom sourcing alerts & tags",
      "Priority email & Slack support"
    ],
    cta: "Start Scale Trial",
    recommended: true,
    link: "https://calendly.com/sambramsm28/30min"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "billed annually",
    desc: "For organizations requiring custom challenge sponsorship pipelines and volume sourcing.",
    features: [
      "Unlimited Candidate searches & unlocks",
      "Sponsor custom hackathons & challenges",
      "Dedicated talent pipeline generation",
      "Anonymized blind recruiting mode",
      "Dedicated account manager",
      "SOC2 Type II compliance reports"
    ],
    cta: "Contact Enterprise Sales",
    recommended: false,
    link: "https://calendly.com/sambramsm28/30min"
  }
];

export default function Pricing() {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28 pb-20 font-body">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10 pointer-events-none" />

      {/* Header */}
      <div className="container max-w-4xl text-center mb-16">
        <span className="font-mono text-xs text-[#0F294A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
          Platform Cost
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-[#0F294A] mt-4 mb-6 leading-tight">
          Flexible Plans for High-Performance Teams
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Select a database sourcing tier tailored to your engineering recruitment pipeline.
        </p>
      </div>

      {/* Pricing Tiers Grid */}
      <div className="container max-w-5xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-md flex flex-col justify-between transition-all duration-300 bg-white ${
                tier.recommended
                  ? "border-2 border-blue-600 shadow-md relative scale-105"
                  : "border border-slate-200"
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-650 bg-blue-650 bg-blue-600 text-white text-[10px] font-sans font-bold uppercase rounded tracking-wider">
                  RECOMMENDED
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-550 text-slate-500 mb-6 min-h-[40px] leading-relaxed">{tier.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-6 border-b border-slate-100 pb-6">
                  <span className="text-3xl font-extrabold font-mono text-slate-905 text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-400 font-mono">{tier.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-655 text-slate-600 leading-normal">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 text-center text-xs font-bold font-display rounded-none transition-all ${
                  tier.recommended
                    ? "bg-[#0F294A] hover:bg-[#071629] text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container max-w-3xl">
        <h3 className="font-display font-bold text-2xl text-center text-slate-900 mb-10">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-md">
            <h4 className="text-sm font-bold text-slate-900 mb-2">How are candidate scores and projects verified?</h4>
            <p className="text-xs text-slate-505 text-slate-500 leading-relaxed">
              Every candidate builds their profile by completing challenges sponsored by universities and enterprise companies. We record compilation reports, Git commit timelines, and grading scorecards submitted by corporate evaluators, compiling them into a verified proof-of-work history.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-md">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Can we launch custom-branded challenges?</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Yes. Under the Enterprise plan, we help you launch custom coding contests and hackathons targeted at specific university cohorts. This allows you to generate a custom talent pipeline tested on your exact tech stack.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-md">
            <h4 className="text-sm font-bold text-slate-900 mb-2">How does the ATS synchronization work?</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Once you unlock a candidate's profile, you can push their full verified record, project links, and challenge scorecard directly to your Greenhouse or Lever pipeline with a single click, eliminating manual candidate entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
