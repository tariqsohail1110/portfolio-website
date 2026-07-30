import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionLabel from "./SectionLabel";

const COMMANDS = ["about", "skills", "experience", "projects", "gallery", "education", "contact"];

export default function TerminalConsole({ ref, scrollTo }) {
  const [terminalInput, setTerminalInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (COMMANDS.includes(cmd)) {
      setHistory((h) => [...h, { cmd, ok: true }]);
      scrollTo(cmd);
    } else if (cmd) {
      setHistory((h) => [...h, { cmd, ok: false }]);
    }
    setTerminalInput("");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-24 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="07" title="contact" />
      <p className="font-body text-sub-custom mt-4 mb-8 max-w-md">
        Open to backend developer and automation engineer roles. The fastest way to reach me is email.
      </p>

      <div className="rounded-lg border border-border-strong bg-panel-custom p-5 transition-all duration-300">
        <div className="text-xs text-faint-custom mb-3 font-semibold">type a section name and hit enter ↓</div>
        <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
          <span className="text-amber-400">$</span>
          <input
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="about | skills | experience | projects | gallery | education | contact"
            className="flex-1 bg-transparent outline-none text-sm text-heading-custom placeholder:text-faintest-custom font-mono"
            aria-label="Terminal navigation input"
          />
          <button
            type="submit"
            className="text-xs px-2 py-1 rounded border border-border-strong text-faint-custom hover:text-amber-400 hover:border-amber-400/50 transition-colors cursor-pointer font-mono"
          >
            run
          </button>
        </form>
        {history.length > 0 && (
          <div className="mt-3 space-y-1 max-h-24 overflow-y-auto">
            {history.slice(-4).map((h, i) => (
              <div key={i} className={`text-xs font-body ${h.ok ? "text-faint-custom" : "text-red-400/80"}`}>
                {h.ok ? `→ navigated to ${h.cmd}` : `command not found: ${h.cmd}`}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-body">
        <a
          href="mailto:tariqsohail1110@gmail.com"
          className="flex items-center gap-2 text-sub-custom hover:text-amber-400 transition-colors"
        >
          <Mail size={15} /> tariqsohail1110@gmail.com
        </a>
        <a
          href="https://github.com/tariqsohail1110"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sub-custom hover:text-amber-400 transition-colors"
        >
          <Github size={15} /> github.com/tariqsohail1110
        </a>
        <a
          href="https://www.linkedin.com/in/tariq-sohail-725b00296"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sub-custom hover:text-amber-400 transition-colors"
        >
          <Linkedin size={15} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
