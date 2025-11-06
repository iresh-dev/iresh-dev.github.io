import React from "react";

import PortfolioLayout3 from "./components/PortfolioLayout copy 2";

import { HashRouter, Routes, Route } from "react-router-dom";
import AboutMeSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";

import All from "./components/All";
import Contact from "./components/sections/Contact";

function App() {
  return (
    // <div>
    //   {/* <PortfolioLayout1 /> */}
    //   {/* <PortfolioLayout2 /> */}
    //   <PortfolioLayout3 />
    //   {/* <ResizableSidebar /> */}
    // </div>
    <HashRouter>
      <Routes>
          <Route path="/" element={<PortfolioLayout3 />} />
         <Route path="aboutme" element={<AboutMeSection />} />
         <Route path="hero" element={<HeroSection />} />
         <Route path="skills" element={<SkillsSection />} />
         <Route path="projects" element={<ProjectsSection />} />
         <Route path="contact" element={<Contact />} />
        <Route path="all" element={<All />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
