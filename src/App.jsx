import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Education from "./components/Education";
import TerminalConsole from "./components/TerminalConsole";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    // Observe all sections that are registered in sectionRefs
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-custom text-text-custom transition-colors duration-300">
        <Navbar activeSection={activeSection} scrollTo={scrollTo} />
        
        <Hero scrollTo={scrollTo} />

        <main>
          <About ref={(el) => (sectionRefs.current.about = el)} />
          
          <Skills ref={(el) => (sectionRefs.current.skills = el)} />
          
          <Experience ref={(el) => (sectionRefs.current.experience = el)} />
          
          <Projects ref={(el) => (sectionRefs.current.projects = el)} />
          
          <Gallery ref={(el) => (sectionRefs.current.gallery = el)} />
          
          <Education ref={(el) => (sectionRefs.current.education = el)} />
          
          <TerminalConsole ref={(el) => (sectionRefs.current.contact = el)} scrollTo={scrollTo} />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
