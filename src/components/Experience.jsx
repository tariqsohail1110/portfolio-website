import React from "react";
import { ChevronRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Experience({ ref }) {
  return (
    <section
      id="experience"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="03" title="experience" />
      <div className="mt-6 border-l border-border-strong pl-6 relative">
        <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-bold text-lg text-heading-custom">Backend Developer Intern</h3>
          <span className="text-xs text-faint-custom font-body">Aug 2025 – Mar 2026</span>
        </div>
        <p className="text-amber-500 font-semibold text-sm mb-3">Digital Auxilius (DAX)</p>
        <ul className="space-y-2 font-body text-sub-custom text-sm md:text-base">
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-1 text-faintest-custom shrink-0" />
            <span>Refactored the "Calendax" backend application using MVC architecture, improving code maintainability and readability by approximately 30%.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-1 text-faintest-custom shrink-0" />
            <span>Designed and implemented an automated AI-driven calling workflow using n8n and ElevenLabs as part of automation engineering efforts, reducing human dependency and increasing lead acquisition.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight size={16} className="mt-1 text-faintest-custom shrink-0" />
            <span>Collaborated on backend system design and REST API development to support scalable business workflows.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
