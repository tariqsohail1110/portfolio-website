import React from "react";
import SectionLabel from "./SectionLabel";

export default function Education({ ref }) {
  return (
    <section
      id="education"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="06" title="education" />
      <div className="mt-6">
        <h3 className="font-bold text-lg text-heading-custom">BS in Software Engineering</h3>
        <p className="text-amber-500 font-semibold text-sm mb-1">
          Sir Syed University of Engineering &amp; Technology
        </p>
        <p className="font-body text-muted-custom text-sm">
          CGPA: 3.76 · Expected Graduation 2027
        </p>
      </div>
    </section>
  );
}
