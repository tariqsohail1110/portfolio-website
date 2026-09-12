import React from "react";
import SectionLabel from "./SectionLabel";

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "Java", "Node.js", "NestJS", "TypeScript", "HTML/CSS"] },
  { group: "Backend & APIs", items: ["RESTful API design", "MVC architecture", "Monorepo architecture", "RBAC"] },
  { group: "Automation", items: ["n8n workflow automation", "AI-driven process automation", "ElevenLabs integration"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { group: "Databases & Tools", items: ["PostgreSQL", "Git", "Code Refactoring", "System Scalability", "CI/CD"] },
  { group: "Data Science & ML", items: ["NumPy", "Pandas"] },
  { group: "Spoken Languages", items: ["Urdu (Native)", "English (Fluent)"] }
];

export default function Skills({ ref }) {
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="02" title="skills" />
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        {SKILLS.map((s) => (
          <div key={s.group} className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-faint-custom mb-1 font-semibold">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-body px-2.5 py-1 rounded border border-border-strong bg-card-custom text-sub-custom hover:border-amber-400/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
