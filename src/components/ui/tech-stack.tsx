'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function TechStack() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!marqueeRef.current) return;

      const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
      if (!marqueeContent) return;

      gsap.to(marqueeContent, {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    },
    { scope: marqueeRef }
  );

  const technologies = [
    { name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg', width: 120 },
    { name: 'LangChain', logo: 'https://python.langchain.com/img/brand/wordmark.png', width: 140 },
    { name: 'Supabase', logo: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', width: 50 },
    { name: 'Next.js', logo: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg', width: 50 },
    { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg', width: 100 },
    { name: 'Pinecone', logo: 'https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/313909/pinecone_logo_black.png', width: 130 },
    { name: 'Vercel', logo: 'https://www.svgrepo.com/show/327408/logo-vercel.svg', width: 50 },
    { name: 'TailwindCSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', width: 50 },
  ];

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#0a0014] to-black py-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
            Technology Stack
          </span>
          <h2 className="mt-6 text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-5xl">
            Built with Cutting-Edge <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Stack</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base font-light leading-relaxed text-white/60">
            Powered by industry-leading technologies and frameworks
          </p>
        </div>

        <div ref={marqueeRef} className="relative overflow-hidden py-8">
          <div className="marquee-content flex gap-16 items-center" style={{ width: 'fit-content' }}>
            {duplicatedTech.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center group"
                style={{ minWidth: `${tech.width}px` }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    maxWidth: `${tech.width}px`,
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-light text-white/50">
            Enterprise-grade infrastructure ensuring 99.9% uptime and scalability
          </p>
        </div>
      </div>
    </section>
  );
}
