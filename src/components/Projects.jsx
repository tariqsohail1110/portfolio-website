import React from "react";
import { Server, Layers, Cpu, Hand, ExternalLink } from "lucide-react";
import SectionLabel from "./SectionLabel";

export const PROJECTS = [
  {
    tag: "BACKEND",
    icon: Server,
    title: "Expense Tracker Backend",
    stack: ["Node.js", "PostgreSQL", "MVC"],
    desc: "Secure REST API for an expense management system with real-time transaction tracking, automated budget adjustments, and role-based access control built inside an MVC framework.",
    link: "https://github.com/tariqsohail1110/expense-tracker"
  },
  {
    tag: "BACKEND",
    icon: Layers,
    title: "Calendax Monorepo Backend",
    stack: ["Node.js", "MVC", "Monorepo"],
    desc: "Architected the transition of the Calendax backend into a monorepo structure using MVC design patterns — cut code redundancy and set up the system for long-term scalability.",
    link: "https://github.com/FaaizHussain26/calendax-backend-monorepo"
  },
  {
    tag: "FRONTEND",
    icon: Cpu,
    title: "Expense Manager — Frontend",
    stack: ["React.js", "Tailwind CSS"],
    desc: "Clean, responsive frontend for an expense management system, featuring real-time data analytics, budget management, expense tracking, and user management.",
    link: "https://github.com/tariqsohail1110/expense-tracker-frontend"
  },
  {
    tag: "MACHINE LEARNING",
    icon: Hand,
    title: "Hand Gesture Based Calculator",
    stack: ["Python", "Computer Vision"],
    desc: "A calculator that reads hand gestures through a live camera feed and translates them into mathematical operations in real time — no keyboard, no mouse, just gestures.",
    link: "https://github.com/tariqsohail1110/hand-gesture-based-calculator"
  },
];

export default function Projects({ ref }) {
  return (
    <section
      id="projects"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="04" title="projects" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {PROJECTS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group rounded-lg border border-border-custom bg-card-custom p-5 hover:border-amber-400/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-widest text-amber-500 font-body font-semibold">
                    {p.tag}
                  </span>
                  <Icon size={16} className="text-faintest-custom group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-2 text-heading-custom">{p.title}</h3>
                <p className="font-body text-sm text-muted-custom mb-4 leading-relaxed">{p.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-body px-2 py-0.5 rounded bg-chip-custom text-muted-custom">
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-500 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    View Repository <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
