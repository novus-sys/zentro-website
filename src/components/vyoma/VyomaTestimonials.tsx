export default function VyomaTestimonials() {
  const testimonials = [
    {
      quote:
        "“We cut our engineering interview loop by 65%. Instead of 3 rounds of whiteboarding, we give candidates a Vyoma repo. The telemetry immediately differentiates engineers who understand systems from those who memorize LeetCode.”",
      author: "Siddharth Mehta",
      role: "VP of Engineering",
      company: "HyperScale Cloud Systems"
    },
    {
      quote:
        "“Banning AI was a fool's errand. Vyoma lets candidates use Cursor-style AI agents, but tracks whether they actually audit what the model produces. We hired 4 senior distributed systems engineers in record time.”",
      author: "Elena Rostova",
      role: "Head of Talent Acquisition",
      company: "Fintech Core Infrastructure"
    },
    {
      quote:
        "“The candidate report with prompt histories and diff scrutiny is a game changer. Our hiring managers don't have to spend hours debating impressions — every claim links directly to line diffs and terminal passes.”",
      author: "Marcus Vance",
      role: "Principal Architect",
      company: "DataMesh Networks"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0A0A0B] text-[#F5F5F2] font-jakarta border-b border-[#1C1C1E]">
      <div className="container max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D5BFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#60A5FA]">
              CUSTOMER PROOF
            </span>
          </div>

          <h2 className="font-jakarta text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
            Trusted by teams building production software
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto px-1 sm:px-0">
            See how modern engineering organizations evaluate talent in the age of AI.
          </p>
        </div>

        {/* 3-Column Testimonial Cards (Vorflux-style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#2A2A2D] bg-[#121214] p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:bg-[#161619] transition-all hover:-translate-y-1 duration-200"
            >
              <p className="font-jakarta text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-6 sm:mb-8 font-normal italic">
                {item.quote}
              </p>

              <div className="pt-6 border-t border-[#1C1C1E] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3D5BFF] to-[#60A5FA] flex items-center justify-center font-bold text-white text-xs">
                  {item.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-white/40">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
