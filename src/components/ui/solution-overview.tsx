'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SolutionOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const features = sectionRef.current?.querySelectorAll('.feature-card');
      if (!features) return;

      features.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.12,
          }
        );
      });

      const heading = sectionRef.current?.querySelector('.solution-heading');
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const demoImage = sectionRef.current?.querySelector('.demo-image');
      if (demoImage) {
        gsap.fromTo(
          demoImage,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: demoImage,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-black via-[#14001a] to-black py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center solution-heading">
          <span className="inline-block rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-green-400/90 backdrop-blur-sm">
            Our Solution
          </span>
          <h2 className="mt-6 text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-6xl">
            Intelligence That <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Transforms</span>
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/60">
            Zentro Suite leverages cutting-edge AI to turn your data into a competitive advantage. We've reimagined analytics from the ground up for the AI era.
          </p>
        </div>

        <div className="mb-20 demo-image">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-2 backdrop-blur-sm">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-purple-900/40 via-black to-green-900/40 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
                
                <div className="relative z-10 text-center p-12">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-light uppercase tracking-wider text-green-400/80">Live Dashboard Preview</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-light text-white mb-1">98.7%</div>
                      <div className="text-xs text-white/50">Accuracy</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-light text-white mb-1">&lt;100ms</div>
                      <div className="text-xs text-white/50">Response Time</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-light text-white mb-1">24/7</div>
                      <div className="text-xs text-white/50">Monitoring</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-purple-400 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm font-light text-white/70">AI Processing Real-time Data</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-light text-white/40">Interactive dashboard mockup - Full version coming soon</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="feature-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm">
                <svg className="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-light tracking-tight text-white">Real-time AI Analysis</h3>
              <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                Our neural networks process data streams in real-time, identifying patterns, anomalies, and opportunities the moment they emerge. No more waiting for batch reports or manual queries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Instant insights from streaming data sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Automated anomaly detection and alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Sub-second query response times</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm">
                <svg className="h-8 w-8 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-light tracking-tight text-white">Predictive Intelligence</h3>
              <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                Advanced machine learning models forecast future trends, customer behavior, and market shifts. Stay ahead of the curve with AI that sees around corners.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Revenue and demand forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Churn prediction and prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light text-white/60">Risk assessment and mitigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="feature-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-3xl font-light tracking-tight text-white">Unified Data Platform</h3>
                <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                  Connect all your data sources into a single, coherent view. Our platform integrates seamlessly with your existing tools, databases, and APIs, eliminating data silos and providing a complete picture of your business.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-sm font-light text-white/80">CRM</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-sm font-light text-white/80">ERP</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-sm font-light text-white/80">Marketing</div>
                  </div>
                  <div className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-sm font-light text-white/80">Finance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-3xl font-light tracking-tight text-white">Natural Language Queries</h3>
                <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                  Ask questions in plain English and get instant answers. No SQL knowledge required. Our AI understands context, intent, and business terminology, making analytics accessible to everyone in your organization.
                </p>
                <div className="rounded-xl border border-white/10 bg-black/20 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <span className="text-xs font-light text-white">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-light text-white/90">"What were our top performing products last quarter?"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                      <span className="text-xs font-light text-white">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-light text-green-300/90">Analyzing Q4 sales data across all channels...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-light tracking-tight text-white mb-8">Key Differentiators</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-3xl font-light text-green-400 mb-2">10x</div>
              <div className="text-sm font-light text-white/60">Faster Insights</div>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-3xl font-light text-green-400 mb-2">70%</div>
              <div className="text-sm font-light text-white/60">Cost Reduction</div>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-3xl font-light text-green-400 mb-2">Zero</div>
              <div className="text-sm font-light text-white/60">Code Required</div>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-3xl font-light text-green-400 mb-2">24/7</div>
              <div className="text-sm font-light text-white/60">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
