'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProblemStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.problem-card');
      if (!cards) return;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15,
          }
        );
      });

      const heading = sectionRef.current?.querySelector('.section-heading');
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
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

  return (
    <section ref={sectionRef} className="relative w-full bg-gradient-to-b from-black via-[#0a0014] to-black py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center section-heading">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
            The Challenge
          </span>
          <h2 className="mt-6 text-4xl font-extralight tracking-tight text-white md:text-5xl lg:text-6xl">
            The Data <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Paradox</span>
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/60">
            Modern Organizations are drowning in data but starving for insights. Traditional analytics tools can't keep pace with the speed and complexity of today's Organisational landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Data Overload</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Companies collect terabytes of data daily across multiple platforms, creating information silos that prevent holistic organizational understanding and strategic decision-making.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Missed opportunities, delayed insights</p>
              </div>
            </div>
          </div>

          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Manual Analysis Bottlenecks</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Traditional analytics require data scientists to manually query, process, and interpret data. This creates weeks-long delays between questions and answers in fast-moving markets.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Slow response to market changes</p>
              </div>
            </div>
          </div>

          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Prohibitive Costs</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Enterprise analytics platforms demand massive upfront investments in infrastructure, licensing, and specialized talent that only Fortune 500 companies can afford.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Limited access for growing organizations</p>
              </div>
            </div>
          </div>

          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Fragmented Tools</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Organizations juggle dozens of disconnected analytics tools, each with its own interface, data format, and learning curve, creating inefficiency and inconsistency.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Reduced productivity, data silos</p>
              </div>
            </div>
          </div>

          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Reactive Decision Making</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Current tools only show what already happened. They lack predictive capabilities to forecast trends, identify risks, or surface opportunities before competitors do.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Always playing catch-up</p>
              </div>
            </div>
          </div>

          <div className="problem-card group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-tight text-white">Complexity Barrier</h3>
              <p className="text-sm font-light leading-relaxed text-white/60">
                Existing solutions require technical expertise to operate effectively. Organizational users depend on IT teams for simple queries, creating bottlenecks and frustration.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs font-light text-purple-300/70">Impact: Limited adoption, dependency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-8 py-4 backdrop-blur-sm">
            <svg className="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-light text-white/80">
              These challenges cost organizations billions in lost opportunities annually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
