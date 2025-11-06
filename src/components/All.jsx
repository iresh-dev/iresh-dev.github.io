import React, { useEffect } from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import Contact from "./sections/Contact";
import FooterSection from "./sections/FooterSection";
import { useLocation } from 'react-router-dom';

function All() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      if (hash === '#/all') {
        return;
      }
      if (hash.startsWith('#/all#')) {
        const sectionId = hash.substring(7);
        if (sectionId) {
          const element = document.querySelector(`#${sectionId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  }, []);

  return (
    <div>
      
     
          <NavBar />
          <HeroSection />
          <AboutMeSection />
          <SkillsSection />
          <ProjectsSection />
          <Contact />
          <FooterSection />
  
    </div>
  );
}

export default All;
