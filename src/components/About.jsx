import React from "react";
import SectionLabel from "./SectionLabel";

export default function About({ ref }) {
  return (
    <section
      id="about"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="01" title="about" />
      <p className="font-body text-sub-custom text-base md:text-lg leading-relaxed mt-6">
        I'm a backend and full stack developer based in Karachi, worked at {" "}
        <span className="text-amber-500 font-semibold">Digital Auxilius (DAX)</span> as an Intern, where I refactor backend
        systems and build automation workflows. My focus is REST APIs, MVC architecture, and
        using tools like n8n to take manual, repetitive processes off people's plates. I also
        work across the stack when a project calls for it — from PostgreSQL-backed APIs to
        React frontends to the occasional computer-vision experiment.
      </p>
      <p className="mt-4 font-body text-muted-custom text-sm md:text-base">
        Currently completing a BS in Software Engineering at Sir Syed University of Engineering
        &amp; Technology, expected 2027.
      </p>
    </section>
  );
}
