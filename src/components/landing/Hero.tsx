import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-36 pb-16 overflow-hidden bg-background">
      <motion.div
        className="container relative z-10 flex flex-col items-center text-center max-w-[860px]"
        variants={stagger}
        initial="hidden"
        animate="show">



        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-serif-display font-normal text-[44px] leading-[1.12] tracking-tight md:text-7xl lg:text-[76px] lg:leading-[84px] mb-6 text-[#111111]">
          Your <span className="text-[#5048E4] italic font-normal">Workmark</span> Speaks
          <br />
          Louder Than Your Resume
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="text-slate-500 text-base md:text-lg max-w-[620px] leading-relaxed mb-8">
          Zentro Workmark is the innovation ecosystem for students — connecting
          you to real challenges, expert feedback, and a verified proof-of-work
          that recruiters and industry leaders actually value.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <a
            href="https://tally.so/r/mZ0jgy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-650 hover:from-indigo-700 hover:to-violet-750 text-white font-sans font-bold text-sm rounded-full shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer border-none"
          >
            Join the Waitlist <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-text-muted mb-12">
          Free for students · No credit card · Join 2,000+ students across 12 universities
        </motion.p>

        {/* Platform mockup */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-[1100px]">

          <div className="relative rounded-xl border border-black/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.1)]">
            {/* Browser chrome */}
            <div className="bg-secondary/80 px-4 py-2.5 flex items-center gap-2 border-b border-primary/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted/30" />
                <div className="w-3 h-3 rounded-full bg-muted/30" />
                <div className="w-3 h-3 rounded-full bg-muted/30" />
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono text-center max-w-xs mx-auto">
                  workmark.zentrosuite.com
                </div>
              </div>
            </div>
            <img src={`${import.meta.env.BASE_URL}mockup.png`} alt="Zentro Workmark Platform Dashboard" className="w-full" loading="lazy" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}