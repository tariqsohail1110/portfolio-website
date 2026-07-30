import React, { useState } from "react";
import { Maximize2, X } from "lucide-react";
import SectionLabel from "./SectionLabel";

const SCREENSHOTS = [
  {
    title: "Dashboard Overview",
    image: "/images/dashboard.png",
    desc: "Visual analytics including category-based spending distributions, key financial metrics, and progress bars tracking total budget usage.",
  },
  {
    title: "Expense Log & Search",
    image: "/images/expenses.png",
    desc: "An interactive, paginated table of transactions with search filtering, sorting, entry creation/deletion, and Excel report downloading.",
  },
  {
    title: "Budget Management",
    image: "/images/budget.png",
    desc: "Dedicated view for configuring the monthly budget, displaying remaining days, and monitoring relative expenses by category.",
  },
  {
    title: "Admin & System Overview",
    image: "/images/admin.png",
    desc: "An administrative panel showing total user counts, active sessions, platform-wide transaction volume, and user account status tables.",
  },
];

export default function Gallery({ ref }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="gallery"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="05" title="gallery" />
      <p className="font-body text-sm text-muted-custom mt-2 mb-6 max-w-md">
        Visual snapshots of the Expense Tracker Frontend — real app screenshots displaying key interfaces and dashboards.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {SCREENSHOTS.map((s) => (
          <div
            key={s.title}
            className="group rounded-lg border border-border-custom overflow-hidden bg-card-custom transition-all duration-300 shadow-sm hover:shadow-md hover:border-amber-400/30 flex flex-col justify-between"
          >
            <div>
              {/* Browser bar Mockup */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-border-custom bg-black/5 dark:bg-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-faint-custom font-body truncate max-w-[150px]">
                  expense-tracker-frontend.app
                </span>
                <span className="w-4" /> {/* Spacer */}
              </div>
              
              {/* Screenshot container */}
              <div 
                className="relative overflow-hidden cursor-zoom-in aspect-video bg-black/10 dark:bg-black/40"
                onClick={() => setActiveImage(s)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-6 h-6 animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border-custom">
              <h3 className="font-bold text-sm text-heading-custom mb-1">{s.title}</h3>
              <p className="font-body text-xs text-muted-custom leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-card-custom rounded-lg overflow-hidden border border-border-strong shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border-custom bg-black/10 dark:bg-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-sub-custom font-body truncate">
                  {activeImage.title}
                </span>
              </div>
              <button 
                onClick={() => setActiveImage(null)}
                className="text-muted-custom hover:text-amber-400 transition-colors p-1 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Image */}
            <div className="max-h-[75vh] overflow-auto bg-black/20">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-auto object-contain block mx-auto"
              />
            </div>
            
            {/* Modal footer description */}
            <div className="p-4 bg-black/5 dark:bg-white/5 border-t border-border-custom">
              <p className="text-sm text-sub-custom font-body leading-relaxed">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
