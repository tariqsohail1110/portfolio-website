import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, X, Download, Eye } from "lucide-react";

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

  const [showResume, setShowResume] = useState(false);

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
          <button
            onClick={() => setShowResume(true)}
            className="flex items-center gap-2 px-4 py-2 border border-border-strong rounded-md text-sm font-body text-sub-custom hover:border-amber-400/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <FileText size={15} /> Resume
          </button>
        </div>
      </div>

      {/* Resume Document Viewer Modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-60 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 transition-opacity duration-300"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-card-custom border border-border-strong rounded-lg shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* OS Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-custom bg-black/5 dark:bg-white/5">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowResume(false)}
                  className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors flex items-center justify-center cursor-pointer"
                  title="Close"
                />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-3 text-xs text-sub-custom font-mono truncate select-none">
                  📄 document-viewer://resume.pdf
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowResume(false)}
                className="text-muted-custom hover:text-amber-400 transition-colors p-1 cursor-pointer"
                aria-label="Close document viewer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Action Toolbar */}
            <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-border-custom bg-black/2 dark:bg-white/2 text-[11px] font-mono select-none">
              <div className="flex items-center gap-1.5 text-faint-custom min-w-0 flex-1">
                <FileText size={14} className="text-amber-500 shrink-0" />
                <span className="truncate">Muhammad_Tariq_Sohail_Resume.pdf</span>
              </div>

              <a
                href="/Resume.pdf"
                download="Muhammad_Tariq_Sohail_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded transition-colors cursor-pointer shadow-sm shrink-0 whitespace-nowrap"
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Content Viewer (PDF Embed / Iframe) */}
            <div className="flex-1 bg-black/5 dark:bg-black/20 overflow-hidden relative">
              <iframe
                src="/Resume.pdf#toolbar=0"
                title="Muhammad Tariq Sohail Resume"
                className="w-full h-full border-none hidden md:block"
              />
              {/* Mobile Fallback */}
              <div className="md:hidden flex flex-col items-center justify-center text-center p-6 h-full space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-2 border border-amber-500/20">
                  <FileText size={32} />
                </div>
                <h4 className="font-bold text-sm text-heading-custom">Resume PDF Document</h4>
                <p className="font-body text-xs text-muted-custom max-w-xs leading-relaxed">
                  Mobile browsers do not support in-browser PDF previews. Please click the button below to view or download the PDF document.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[200px]">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded text-xs transition-colors cursor-pointer w-full text-center"
                  >
                    <Eye size={14} />
                    <span>Open Viewer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
