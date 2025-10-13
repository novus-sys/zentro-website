'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FAQItem {
  question: string;
  answer: string;
  category: 'product' | 'pricing' | 'security' | 'support';
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const faqItems = sectionRef.current?.querySelectorAll('.faq-item');
      if (!faqItems) return;

      faqItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.08,
          }
        );
      });

      const heading = sectionRef.current?.querySelector('.faq-heading');
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const faqs: FAQItem[] = [
    {
      question: 'What is Zentro Suite and how does it work?',
      answer: 'Zentro Suite is an AI-powered business analytics platform that transforms raw data into actionable insights. Our platform uses advanced machine learning algorithms to analyze your data in real-time, identify patterns, predict trends, and provide recommendations. Simply connect your data sources, and our AI engine automatically processes and visualizes your business metrics.',
      category: 'product',
    },
    {
      question: 'When will Zentro Suite be available?',
      answer: 'We are currently in private beta and working closely with early access partners to refine the platform. Public launch is planned for Q2 2025. Join our waitlist to get early access and exclusive founding member benefits, including lifetime discounts and priority support.',
      category: 'product',
    },
    {
      question: 'What data sources can I connect?',
      answer: 'Zentro Suite integrates with 100+ data sources including CRM systems (Salesforce, HubSpot), databases (PostgreSQL, MySQL, MongoDB), cloud storage (AWS S3, Google Cloud), analytics platforms (Google Analytics, Mixpanel), and business tools (Stripe, Shopify, QuickBooks). We also provide REST and GraphQL APIs for custom integrations.',
      category: 'product',
    },
    {
      question: 'How is my data secured?',
      answer: 'Security is our top priority. We use bank-level AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified, GDPR compliant, and HIPAA ready. We implement role-based access control, multi-factor authentication, and regular security audits. Your data is stored in isolated environments and never shared with third parties.',
      category: 'security',
    },
    {
      question: 'Do I need technical expertise to use Zentro Suite?',
      answer: 'No technical expertise required. Zentro Suite is designed for business users with an intuitive, no-code interface. Ask questions in plain English and get instant answers. Our AI handles all the complex queries, data transformations, and analysis behind the scenes. However, we also provide advanced features and APIs for technical users who want deeper customization.',
      category: 'product',
    },
    // {
    //   question: 'What pricing plans will be available?',
    //   answer: 'We will offer flexible pricing tiers to suit businesses of all sizes: Starter (for small teams), Professional (for growing businesses), and Enterprise (for large organizations). Early access members who join the waitlist will receive exclusive lifetime discounts of up to 50% off regular pricing. Detailed pricing will be announced closer to launch.',
    //   category: 'pricing',
    // },
    // {
    //   question: 'Can I try Zentro Suite before committing?',
    //   answer: 'Yes! All waitlist members will receive free access to our private beta program. This includes full platform access with no credit card required. You will have the opportunity to test all features, provide feedback, and help shape the product before the official launch.',
    //   category: 'pricing',
    // },
    {
      question: 'How does Zentro Suite compare to traditional BI tools?',
      answer: 'Unlike traditional BI tools that require manual report building and SQL knowledge, Zentro Suite uses AI to automatically generate insights. We offer real-time analysis (not batch processing), natural language queries (not complex dashboards), predictive analytics (not just historical data), and automated anomaly detection. Setup takes minutes, not months.',
      category: 'product',
    },
    // {
    //   question: 'What kind of support do you provide?',
    //   answer: 'Early access members receive priority support including dedicated onboarding, live chat assistance, video tutorials, comprehensive documentation, and direct access to our product team. Post-launch, support tiers will include email support (all plans), live chat (Professional+), and dedicated account managers (Enterprise).',
    //   category: 'support',
    // },
    {
      question: 'Is my data used to train your AI models?',
      answer: 'Absolutely not. Your data remains completely private and is never used to train our AI models or shared with other customers. We use pre-trained models and fine-tune them on anonymized, aggregated datasets only with explicit permission. You maintain full ownership and control of your data at all times.',
      category: 'security',
    },
    {
      question: 'Can I export my data and reports?',
      answer: 'Yes, you have complete data portability. Export your raw data, processed insights, and visualizations in multiple formats including CSV, Excel, PDF, JSON, and via API. Schedule automated report delivery via email or integrate with tools like Slack and Microsoft Teams. No vendor lock-in.',
      category: 'product',
    },
    // {
    //   question: 'What happens if I need to cancel?',
    //   answer: 'You can cancel anytime with no penalties or long-term contracts. Your data will remain accessible for 90 days after cancellation, giving you ample time to export everything. We also provide migration assistance to help you transition to another platform if needed.',
    //   category: 'pricing',
    // },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-black via-[#0a0014] to-black py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-16 text-center faq-heading">
          <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-blue-400/90 backdrop-blur-sm">
            Frequently Asked Questions
          </span>
          <h2 className="mt-6 text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything You <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Need to Know</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/60">
            Have questions? We have answers. Can't find what you're looking for? Contact our team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-light uppercase tracking-wider px-2 py-1 rounded-full ${
                      faq.category === 'product' ? 'bg-purple-500/10 text-purple-400/80' :
                      faq.category === 'pricing' ? 'bg-green-500/10 text-green-400/80' :
                      faq.category === 'security' ? 'bg-blue-500/10 text-blue-400/80' :
                      'bg-orange-500/10 text-orange-400/80'
                    }`}>
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-light tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-blue-500/20 border-blue-500/30 rotate-180' : 'bg-white/5'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index ? 'text-blue-400' : 'text-white/40'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-base font-light leading-relaxed text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 px-8 py-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-white mb-2">Still have questions?</h3>
              <p className="text-sm font-light text-white/60 mb-4">
                Our team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:support@zentrosuite.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-light text-white transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="text-2xl font-light text-white mb-2">99.9%</div>
            <div className="text-sm font-light text-white/50">Uptime SLA</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="text-2xl font-light text-white mb-2">24/7</div>
            <div className="text-sm font-light text-white/50">Support Available</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="text-2xl font-light text-white mb-2">SOC 2</div>
            <div className="text-sm font-light text-white/50">Certified Security</div>
          </div>
        </div>
      </div>
    </section>
  );
}
