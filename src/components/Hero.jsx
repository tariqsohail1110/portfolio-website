import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

function useTypewriter(lines, speed = 28, startDelay = 200) {
  const [rendered, setRendered] = useState([]);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      await new Promise((r) => setTimeout(r, startDelay));
      for (let li = 0; li < lines.length; li++) {
        const full = lines[li];
        const currentLineIndex = li;
        for (let ci = 0; ci <= full.length; ci++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, speed));
          setRendered((prev) => {
            const next = [...prev];
            next[currentLineIndex] = full.slice(0, ci);
            return next;
          });
        }
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);
  return rendered;
}

export default function Hero({ scrollTo }) {
  const bootLines = useTypewriter([
    "$ who am I?",
    "muhammad_tariq_sohail — backend developer / automation engineer",
    "$ status --current",
    "building reliable APIs, automating the boring parts.",
  ]);

  return (
    <section className="relative pt-32 pb-24 px-6 scanline overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-border-strong bg-panel-custom shadow-2xl shadow-black/20 transition-all duration-300">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-custom bg-black/5 dark:bg-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-faint-custom">bash — tariq-sohail</span>
          </div>
          <div className="p-6 md:p-8 min-h-[180px] text-sm md:text-base leading-relaxed text-sub-custom">
            {bootLines.map((line, i) => (
              <div key={i} className={i % 2 === 0 ? "text-amber-500 font-semibold" : "text-sub-custom mb-3"}>
                {i % 2 === 0 ? line : <span className="pl-4 border-l border-border-strong">{line}</span>}
              </div>
            ))}
            <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse align-middle" />
          </div>
        </div>

        <h1 className="mt-10 text-4xl md:text-6xl font-extrabold tracking-tight text-heading-custom">
          Muhammad Tariq <span className="text-amber-400">Sohail</span>
        </h1>
        <p className="mt-3 text-muted-custom text-base md:text-lg font-body max-w-xl">
          Backend developer who automates the parts of the job people would rather not do —
          APIs, workflows, and everything in between.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-[#0F1419] rounded-md text-sm font-semibold font-body hover:bg-amber-300 transition-colors cursor-pointer"
          >
            <Mail size={15} /> Get in touch
          </button>
          <a
            href="https://github.com/tariqsohail1110"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border-strong rounded-md text-sm font-body text-sub-custom hover:border-amber-400/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tariq-sohail-725b00296"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border-strong rounded-md text-sm font-body text-sub-custom hover:border-amber-400/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href="/Resume.pdf"
            download="Muhammad_Tariq_Sohail_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 border border-border-strong rounded-md text-sm font-body text-sub-custom hover:border-amber-400/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <FileText size={15} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
