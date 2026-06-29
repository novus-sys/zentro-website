const universities = [
  "IIT Bombay", "VIT Vellore", "SRM Chennai", "BITS Pilani", "Manipal",
  "Christ University", "Amrita", "IIM Ahmedabad", "NIT Trichy",
  "IIT Bombay", "VIT Vellore", "SRM Chennai", "BITS Pilani", "Manipal",
  "Christ University", "Amrita", "IIM Ahmedabad", "NIT Trichy",
];

export default function SocialProof() {
  return (
    <section className="relative py-14 border-y border-primary/[0.07] bg-surface-1">
      <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <span className="eyebrow text-text-muted whitespace-nowrap">STUDENTS FROM</span>
        <div className="relative overflow-hidden flex-1 w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-surface-1 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-surface-1 to-transparent" />
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {universities.map((uni, i) => (
              <span key={i} className="text-text-secondary text-[15px] font-body font-medium">
                {uni}{i < universities.length - 1 && <span className="text-text-ghost ml-8">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
