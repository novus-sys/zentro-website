import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = ["Features", "How It Works", "For Universities"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/[0.08]"
          : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}zentro_monogram removebg.png`} alt="Zentro Workmark" className="w-14 h-14 -mr-4" />
          <span className="font-display font-bold text-foreground text-lg">
            Zentro<span className="text-primary"> Workmark</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-text-secondary text-[15px] font-body hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
          <Link
            to="/"
            className="text-primary text-[15px] font-body font-semibold hover:text-white transition-colors"
          >
            For Employers &rarr;
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-body font-semibold text-primary-foreground bg-primary rounded-lg hover:shadow-[0_0_24px_hsl(211_100%_61%/0.45)] hover:scale-[1.02] transition-all">
            Join
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/[0.08] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-text-secondary text-lg font-body hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="w-full py-3 text-sm font-body font-semibold text-primary-foreground bg-primary rounded-lg text-center">
              Join
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
