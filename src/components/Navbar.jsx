import React from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const COMMANDS = ["about", "skills", "experience", "projects", "gallery", "education", "contact"];

function NavDot({ active }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full mr-2 transition-colors ${
        active ? "bg-amber-400" : "bg-slate-500"
      }`}
    />
  );
}

export default function Navbar({ activeSection, scrollTo }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-nav-bg border-b border-border-custom transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-custom">
          <Terminal size={14} className="text-amber-400" />
          <span>tariq@portfolio</span>
          <span className="text-faintest-custom">:~$</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="hidden md:flex gap-1">
            {COMMANDS.map((c) => (
              <button
                key={c}
                onClick={() => scrollTo(c)}
                className={`px-3 py-1.5 text-xs tracking-wide rounded transition-colors ${
                  activeSection === c
                    ? "text-amber-400 bg-amber-400/10 font-bold"
                    : "text-muted-custom hover:text-amber-400 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <NavDot active={activeSection === c} />
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md border border-border-strong text-muted-custom hover:text-amber-400 hover:border-amber-400/50 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
