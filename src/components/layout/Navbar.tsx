import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Award, ChevronDown, Shield, Users, Landmark, Code, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type OptionType = "students" | "universities" | "corporates";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<OptionType>("students");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on page change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Handle smooth scroll to section
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Height of navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}zentro black logo.png`}
            alt="Zentro Suite Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Products Dropdown Trigger */}
          <div
            className="relative py-6"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${
                dropdownOpen ? "text-[#0F294A] font-semibold" : "text-slate-600 hover:text-[#0F294A]"
              }`}
            >
              Products <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <button
            onClick={() => handleNavClick("overview")}
            className="text-sm font-medium text-slate-600 hover:text-[#0F294A] transition-colors"
          >
            Overview
          </button>

          <button
            onClick={() => handleNavClick("how-it-works")}
            className="text-sm font-medium text-slate-600 hover:text-[#0F294A] transition-colors"
          >
            How it Works
          </button>

          <button
            onClick={() => handleNavClick("sourcing-pipeline")}
            className="text-sm font-medium text-slate-600 hover:text-[#0F294A] transition-colors"
          >
            Sourcing Pipeline
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://calendly.com/sambramsm28/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-xs transition-colors"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-700 hover:text-[#0F294A] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-width Viewport Dropdown Panel */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 hidden lg:block overflow-hidden"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Split layout inside the container to align with content */}
            <div className="container mx-auto grid grid-cols-12 w-full min-h-[380px]">
              
              {/* Left Column - Directory Sitemap (bg-slate-50/50) */}
              <div className="col-span-4 bg-slate-50/60 border-r border-slate-200 p-8 flex flex-col justify-start">
                <span className="text-[10px] font-bold text-slate-400 font-sans uppercase tracking-wider mb-6">
                  Zentro Workmark
                </span>
                
                <div className="flex flex-col gap-3">
                  <button
                    onMouseEnter={() => setActiveOption("students")}
                    onClick={() => {
                      navigate("/student");
                    }}
                    className={`flex items-center gap-3.5 p-3 text-left text-xs font-bold font-sans transition-all rounded-md ${
                      activeOption === "students"
                        ? "bg-white text-blue-600 shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    }`}
                  >
                    <Users size={15} className={activeOption === "students" ? "text-blue-600" : "text-slate-400"} />
                    <span>For Students</span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveOption("universities")}
                    onClick={() => {
                      navigate("/universities");
                    }}
                    className={`flex items-center gap-3.5 p-3 text-left text-xs font-bold font-sans transition-all rounded-md ${
                      activeOption === "universities"
                        ? "bg-white text-blue-600 shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    }`}
                  >
                    <Landmark size={15} className={activeOption === "universities" ? "text-blue-600" : "text-slate-400"} />
                    <span>For Universities</span>
                  </button>

                  <button
                    onMouseEnter={() => setActiveOption("corporates")}
                    onClick={() => navigate("/corporates")}
                    className={`flex items-center gap-3.5 p-3 text-left text-xs font-bold font-sans transition-all rounded-md ${
                      activeOption === "corporates"
                        ? "bg-white text-blue-600 shadow-xs border border-slate-200"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    }`}
                  >
                    <Code size={15} className={activeOption === "corporates" ? "text-blue-600" : "text-slate-400"} />
                    <span>For Corporates</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Dynamic details preview */}
              <div className="col-span-8 bg-white p-10 flex justify-between gap-10">
                <div className="flex-1 flex flex-col justify-between max-w-[380px] py-2">
                  <div className="space-y-4">
                    {activeOption === "students" && (
                      <>
                        <h3 className="font-display font-bold text-xl text-[#0F294A] leading-tight">
                          Build your verified skill profile
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          Solve real-world corporate challenges, showcase your actual coding outcomes, and connect directly with enterprise employers.
                        </p>
                      </>
                    )}
                    {activeOption === "universities" && (
                      <>
                        <h3 className="font-display font-bold text-xl text-[#0F294A] leading-tight">
                          Bridge the gap to corporate hiring
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          Empower your student cohorts with sponsored hackathons and verified programming portfolios tracked by academic scorecards.
                        </p>
                      </>
                    )}
                    {activeOption === "corporates" && (
                      <>
                        <h3 className="font-display font-bold text-xl text-[#0F294A] leading-tight">
                          Hire based on verified proof of work
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          Access a ground-truth directory of pre-screened creators. Sync candidate records directly into your ATS pipeline.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="mt-8">
                    {activeOption === "students" ? (
                      <Link
                        to="/student"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-none transition-all shadow-xs"
                      >
                        Go to Candidate Platform <ArrowRight size={14} />
                      </Link>
                    ) : activeOption === "universities" ? (
                      <Link
                        to="/universities"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-none transition-all shadow-xs"
                      >
                        Go to University Platform <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Link
                        to="/corporates"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-none transition-all shadow-xs"
                      >
                        Request Recruiter Access <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right side Visual Graphic representation */}
                <div className="w-[240px] bg-slate-50 border border-slate-200 p-6 rounded flex flex-col justify-center items-center text-center shadow-3xs select-none">
                  {activeOption === "students" && (
                    <div className="space-y-4 w-full">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-sm font-bold font-mono border border-blue-200">
                        942
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-none">Arjun K.</div>
                        <div className="text-[10px] text-slate-400 mt-1.5 leading-none">Software Engineering</div>
                      </div>
                      <div className="flex justify-center gap-1.5 flex-wrap">
                        <span className="text-[9px] px-2 py-0.5 bg-white border border-slate-205 border-slate-200 text-slate-655 text-slate-600 rounded">React</span>
                        <span className="text-[9px] px-2 py-0.5 bg-white border border-slate-205 border-slate-200 text-slate-655 text-slate-600 rounded">Go</span>
                      </div>
                    </div>
                  )}
                  {activeOption === "universities" && (
                    <div className="space-y-4 w-full">
                      <div className="w-10 h-10 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-150">
                        <Landmark size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-none">Sponsored Hackathon</div>
                        <div className="text-[10px] text-slate-400 mt-1.5">Novus-Sys Challenge</div>
                      </div>
                      <div className="text-[9px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 py-0.5 px-2.5 rounded-full w-fit mx-auto">
                        Vetted Grades
                      </div>
                    </div>
                  )}
                  {activeOption === "corporates" && (
                    <div className="space-y-4 w-full">
                      <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-150">
                        <Shield size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-none">Greenhouse ATS Sync</div>
                        <div className="text-[10px] text-slate-400 mt-1.5">Status: Connected</div>
                      </div>
                      <div className="text-[9px] text-[#0F294A] font-mono leading-none">
                        12 Unlocked Profiles
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="container py-6 flex flex-col gap-5 text-left">
              {/* Mobile Products List */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Zentro Workmark</span>
                <Link to="/student" className="pl-4 text-sm font-semibold text-slate-800 hover:text-blue-600">
                  For Students
                </Link>
                <Link to="/universities" className="pl-4 text-sm font-semibold text-left text-slate-800 hover:text-blue-600">
                  For Universities
                </Link>
                <button onClick={() => handleNavClick("sourcing-pipeline")} className="pl-4 text-sm font-semibold text-left text-slate-800 hover:text-blue-600">
                  For Corporates
                </button>
              </div>

              <button
                onClick={() => handleNavClick("overview")}
                className="text-left text-base font-semibold text-slate-800"
              >
                Overview
              </button>

              <button
                onClick={() => handleNavClick("how-it-works")}
                className="text-left text-base font-semibold text-slate-800"
              >
                How it Works
              </button>

              <button
                onClick={() => handleNavClick("sourcing-pipeline")}
                className="text-left text-base font-semibold text-slate-800"
              >
                Sourcing Pipeline
              </button>

              <div className="flex flex-col gap-3 mt-4 border-t border-slate-100 pt-4">
                <a
                  href="https://calendly.com/sambramsm28/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full text-center"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
