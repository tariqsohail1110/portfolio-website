import React, { useState } from "react";
import { Folder, FolderOpen, Maximize2, X, ArrowLeft, ExternalLink } from "lucide-react";
import SectionLabel from "./SectionLabel";

const PROJECTS_GALLERY = [
  {
    id: "vault-finance",
    title: "Vault Finance",
    folderName: "vault-finance",
    techStack: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "PostgreSQL"],
    desc: "A daily life personal expense tracking application to track your expenses in accordance with your budget",
    coverImage: "/images/dashboard.png",
    liveLink: "https://my-vault-finance-app.vercel.app/",
    images: [
      {
        title: "Signup Page",
        image: "/images/signup.png",
        desc: "The user can register themselves through the signup page",
      },
      {
        title: "Login Page",
        image: "/images/login.png",
        desc: "The users can login to their personal password protected account through the login page",
      },
      {
        title: "Verify Otp Page",
        image: "/images/otp.png",
        desc: "The users while logging for the first time should verify their email via otp to login to their accounts",
      },
      {
        title: "Forget Password Page",
        image: "/images/forget-pass.png",
        desc: "If a user forgets his/her password, he/she can request an otp thorugh their registered email",
      },
      {
        title: "Reset Password Page",
        image: "/images/reset-pass.png",
        desc: "After successfully verifying their email, the user can change their password",
      },
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
        title: "Personal Account Settings",
        image: "/images/account-settings.png",
        desc: "Dedicated page for managing you own personal details like, password, email, first name and last name, and account deletion",
      },
    ],
  },

];

export default function Gallery({ ref }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="gallery"
      ref={ref}
      className="max-w-3xl mx-auto px-6 py-20 border-t border-border-custom transition-colors duration-300"
    >
      <SectionLabel index="05" title="gallery" />
      <p className="font-body text-sm text-muted-custom mt-2 mb-6 max-w-md">
        Visual archives of my projects. Click a project directory to explore its interfaces, features, and dashboards.
      </p>

      {/* Folders Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS_GALLERY.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative cursor-pointer flex flex-col pt-3"
          >
            {/* Folder Top Tab */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card-custom border-t border-x border-border-custom rounded-t-md text-[11px] font-mono text-muted-custom group-hover:text-amber-500 group-hover:border-amber-400/50 transition-colors w-fit -mb-[1px] relative z-10">
              <Folder size={12} className="text-amber-500 group-hover:hidden" />
              <FolderOpen size={12} className="text-amber-500 hidden group-hover:block" />
              <span>{project.folderName}/</span>
            </div>

            {/* Folder Body */}
            <div className="relative aspect-video w-full rounded-b-md rounded-tr-md border border-border-custom bg-card-custom overflow-hidden group-hover:border-amber-400/50 transition-all duration-300 shadow-sm group-hover:shadow-md flex flex-col justify-between">
              {/* Cover Image Background */}
              <div className="absolute inset-0 z-0 bg-black/10 dark:bg-black/40 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter saturate-75 brightness-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
              </div>

              {/* Card Content Top: Badges */}
              <div className="relative z-10 flex justify-between items-start p-3 w-full">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] font-mono bg-amber-500/90 hover:bg-amber-400 text-black font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <div />
                )}
                <span className="text-[10px] font-mono bg-black/60 text-white/90 border border-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.images.length} Images
                </span>
              </div>

              {/* Card Content Bottom: Project Info */}
              <div className="relative z-10 p-4 text-white">
                <h3 className="font-bold text-sm text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-[11px] text-white/70 line-clamp-1 leading-relaxed mb-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/95 border border-white/5 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Explorer Window Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 transition-opacity duration-300"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-card-custom border border-border-strong rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* OS Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-custom bg-black/5 dark:bg-white/5">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors flex items-center justify-center cursor-pointer"
                  title="Close"
                />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-3 text-xs text-sub-custom font-mono truncate select-none">
                  📂 Projects / {activeProject.folderName} /
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="text-muted-custom hover:text-amber-400 transition-colors p-1 cursor-pointer"
                aria-label="Close project explorer"
              >
                <X size={16} />
              </button>
            </div>

            {/* OS Browser Toolbar */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-border-custom bg-black/2 dark:bg-white/2 text-xs font-mono select-none">
              {/* Back Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="flex items-center gap-1 text-muted-custom hover:text-amber-500 transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>

              <span className="text-border-custom">|</span>

              {/* Address Bar */}
              <div className="flex-1 bg-black/10 dark:bg-black/30 rounded px-3 py-1 border border-border-custom/50 text-faint-custom truncate">
                d:\Personal\Portfolio\gallery\{activeProject.folderName}
              </div>

              {activeProject.liveLink && (
                <>
                  <span className="text-border-custom">|</span>
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-amber-500 hover:text-amber-400 font-mono text-xs transition-colors cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    <span className="hidden sm:inline">live-demo://vault-finance</span>
                    <span className="sm:hidden">Live Demo</span>
                  </a>
                </>
              )}

              <span className="text-border-custom">|</span>

              {/* Item Count */}
              <div className="text-faint-custom hidden sm:block">
                {activeProject.images.length} items
              </div>
            </div>

            {/* Grid of screenshots */}
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-90px)] grid grid-cols-2 gap-4 bg-bg-custom/50">
              {activeProject.images.map((img) => (
                <div
                  key={img.title}
                  className="group rounded-lg border border-border-custom overflow-hidden bg-card-custom transition-all duration-300 shadow-xs hover:shadow-md hover:border-amber-400/30 flex flex-col justify-between"
                >
                  <div>
                    {/* Mockup browser bar */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-border-custom bg-black/5 dark:bg-white/5">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[9px] text-faint-custom font-body truncate max-w-[150px]">
                        {img.title.toLowerCase().replace(/\s+/g, "-")}.png
                      </span>
                      <span className="w-3" />
                    </div>

                    {/* Screenshot Container */}
                    <div
                      className="relative overflow-hidden cursor-zoom-in h-[30vh] bg-black/10 dark:bg-black/40"
                      onClick={() => setActiveImage(img)}
                    >
                      <img
                        src={img.image}
                        alt={img.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 className="text-white w-5 h-5 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 border-t border-border-custom">
                    <h4 className="font-bold text-xs text-heading-custom mb-1">{img.title}</h4>
                    <p className="font-body text-[11px] text-muted-custom leading-relaxed">
                      {img.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-70 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 cursor-zoom-out"
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

