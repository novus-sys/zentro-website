import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="relative bg-white text-slate-505 text-slate-500 border-t border-slate-150 pt-24 pb-16 font-body overflow-hidden min-h-[650px] flex flex-col justify-between">
      {/* Translucent giant logo watermark spanning the full width */}
      <div className="absolute bottom-[-60px] lg:bottom-[-140px] left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.025] z-0 w-[110%] max-w-[1600px]">
        <img
          src={`${import.meta.env.BASE_URL}zentro black logo.png`}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="container relative z-10 flex-1 flex flex-col justify-between h-full space-y-16">
        {/* Top Fold: Brand details and Sitemap columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo, Description and Security Badges */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}zentro black logo.png`}
                alt="Zentro Suite Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Zentro is the Talent Intelligence Platform powered by verified proof of work. Source candidate profiles from university challenge networks and pre-screen technical talent.
            </p>
            
            {/* Security Badges */}
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-[10px] font-semibold select-none shadow-2xs">
                <Shield size={10} className="text-slate-400" /> SOC 2
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-[10px] font-semibold select-none shadow-2xs">
                <Shield size={10} className="text-slate-400" /> ISO 27001
              </span>
            </div>
          </div>

          {/* Spacer for column alignment */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-505">
              <li>
                <button onClick={() => handleNavClick("sourcing-pipeline")} className="hover:text-slate-900 transition-colors text-left font-medium">
                  Hire by Role
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("integrations")} className="hover:text-slate-900 transition-colors text-left font-medium">
                  Integrations
                </button>
              </li>
              <li><a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-medium">Case Studies</a></li>
              <li><a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-medium">Blogs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick("overview")} className="hover:text-slate-900 transition-colors text-left font-medium">
                  About
                </button>
              </li>
              <li><a href="mailto:info@zentrosuite.com" className="hover:text-slate-900 transition-colors font-medium">Contact</a></li>
              <li><a href="https://calendly.com/sambramsm28/30min" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-medium">Schedule a Demo</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><Link to="/privacy" className="hover:text-slate-900 transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900 transition-colors font-medium">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-slate-900 transition-colors font-medium">Refund Policy</Link></li>
              <li><Link to="/trust" className="hover:text-slate-900 transition-colors font-medium">Trust Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Fold: Copyright & Social Links */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="text-xs text-slate-400 space-y-1">
            <p>&copy; {new Date().getFullYear()} Zentro Suite Corporation. All rights reserved.</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 items-center text-xs text-slate-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
              <Twitter size={14} /> <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
