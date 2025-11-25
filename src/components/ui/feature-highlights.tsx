'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FeatureHighlights() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const features = sectionRef.current?.querySelectorAll('.feature-item');
      if (!features) return;

      features.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15,
          }
        );
      });

      const heading = sectionRef.current?.querySelector('.features-heading');
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-black via-[#0a0014] to-black py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center features-heading">
          <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-purple-400/90 backdrop-blur-sm">
            Core Capabilities
          </span>
          <h2 className="mt-6 text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-6xl">
            Powerful Features <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Built for Scale</span>
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/60">
            Every feature designed to transform how you interact with your organizational data
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="feature-item group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Interactive Dashboards</h3>
              <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                Customizable, real-time dashboards that adapt to your workflow. Configure widgets to visualize exactly what matters to your organization.
              </p>

              <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
                
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="text-xs text-white/50 mb-1">Revenue</div>
                    <div className="text-lg font-light text-green-400">$124.5K</div>
                    <div className="text-xs text-green-400/70">+12.5%</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="text-xs text-white/50 mb-1">Users</div>
                    <div className="text-lg font-light text-blue-400">8,429</div>
                    <div className="text-xs text-blue-400/70">+8.2%</div>
                  </div>
                  <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-white/50">Performance</div>
                      <div className="text-xs text-purple-400">94%</div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '94%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-purple-400" />
                  Real-time data updates
                </li>
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-purple-400" />
                  Customizable layouts
                </li>
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-purple-400" />
                  Mobile responsive design
                </li>
              </ul>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Advanced Analytics Engine</h3>
              <p className="mb-6 text-base font-light leading-relaxed text-white/70">
                Process millions of data points in seconds. Our AI-powered engine identifies patterns, correlations, and insights that traditional tools miss.
              </p>

              <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
                
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">Processing Speed</span>
                    <span className="text-xs text-pink-400">2.3M records/sec</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse" style={{ width: '87%' }} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center p-2 rounded-lg border border-white/5 bg-white/5">
                      <div className="text-sm font-light text-white">156</div>
                      <div className="text-xs text-white/40">Insights</div>
                    </div>
                    <div className="text-center p-2 rounded-lg border border-white/5 bg-white/5">
                      <div className="text-sm font-light text-white">23</div>
                      <div className="text-xs text-white/40">Anomalies</div>
                    </div>
                    <div className="text-center p-2 rounded-lg border border-white/5 bg-white/5">
                      <div className="text-sm font-light text-white">8</div>
                      <div className="text-xs text-white/40">Alerts</div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-pink-400" />
                  Multi-dimensional analysis
                </li>
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-pink-400" />
                  Pattern recognition AI
                </li>
                <li className="flex items-center gap-2 text-sm font-light text-white/60">
                  <div className="h-1 w-1 rounded-full bg-pink-400" />
                  Automated reporting
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">Enterprise Security</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Bank-level encryption, role-based access control, and compliance with SOC 2, GDPR, and HIPAA standards.
              </p>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">Lightning Fast Queries</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Sub-second response times on datasets with billions of rows. Optimized query engine powered by advanced caching.
              </p>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">API-First Architecture</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Comprehensive REST and GraphQL APIs. Integrate seamlessly with your existing tools and workflows.
              </p>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">Smart Visualizations</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                AI suggests the best chart types for your data. Create stunning, interactive visualizations in seconds.
              </p>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">Collaborative Workspace</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Share insights, create team dashboards, and collaborate in real-time with comments and annotations.
              </p>
            </div>
          </div>

          <div className="feature-item group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-6 w-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-light tracking-tight text-white">Automated Data Pipelines</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Set up automated ETL workflows. Schedule data syncs and transformations without writing code.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-light text-white/50">
            All features available in beta. Early access members get lifetime discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
