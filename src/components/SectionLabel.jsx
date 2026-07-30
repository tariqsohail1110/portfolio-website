import React from "react";

export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 text-faint-custom">
      <span className="text-xs font-body">{index}</span>
      <span className="h-px flex-1 bg-border-custom max-w-[40px]" />
      <h2 className="text-2xl md:text-3xl font-extrabold text-heading-custom uppercase tracking-tight">{title}</h2>
    </div>
  );
}
