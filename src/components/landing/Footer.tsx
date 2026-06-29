import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Linkedin } from "lucide-react";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-primary/[0.07] pt-20 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}zentro_monogram removebg.png`} alt="Zentro Workmark" className="h-14 -mr-4" />
              <span className="font-display font-bold text-foreground">Zentro<span className="text-primary"> Workmark</span></span>
            </div>
            <p className="font-body text-text-muted text-sm mb-4">The innovation ecosystem for every student.</p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/zentro-suite/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-foreground/[0.06] flex items-center justify-center text-text-muted hover:bg-primary/[0.15] hover:text-primary transition-colors">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">PLATFORM</p>
            {["Home Feed", "Challenges", "Leaderboard", "Project Repository", "My Ideas"].map((l) => (
              <a key={l} href="#" className="block text-text-muted text-sm font-body py-1 hover:text-text-secondary transition-colors">{l}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">COMPANY</p>
            {["About", "Blog", "For Universities", "Privacy Policy", "Terms of Use"].map((l) => (
              <a key={l} href="#" className="block text-text-muted text-sm font-body py-1 hover:text-text-secondary transition-colors">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mb-4">GET IN TOUCH</p>
            <p className="text-text-muted text-sm font-body mb-3">corporate.zentrosuite@gmail.com</p>
            <a href="https://tally.so/r/mZ0jgy" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-body hover:underline">Join the Waitlist →</a>
          </div>
        </div>

        <div className="border-t border-foreground/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-ghost text-[13px] font-body">© 2025 Zentro Workmark. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-foreground/[0.04] hover:bg-primary/[0.1] transition-colors text-text-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              <span className="text-xs font-body">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-text-ghost text-[13px] font-body hover:text-text-muted transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
