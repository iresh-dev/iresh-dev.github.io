import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Eye,
  Code,
  Globe,
  Zap,
  Brain,
  Smartphone,
  Rocket,
} from "lucide-react";

import {
  // fullStackProjects,
  // frontEndProjects,
  // wordpressProjects,
  automationProjects,
  machineLearningProjects,
  mobileProjects,
} from "../portfolioData";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("n8n");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = {
    // all: {
    //   label: "All Projects",
    //   icon: <Rocket size={20} />,
    //   gradient: "from-blue-600 to-cyan-500",
    // },
    // web: {
    //   label: "Web Applications",
    //   icon: <Globe size={20} />,
    //   gradient: "from-blue-600 to-blue-800",
    // },
   
    ml: {
      label: "Machine Learning",
      icon: <Brain size={20} />,
      gradient: "from-emerald-600 to-teal-600",
    }, n8n: {
      label: "n8n Automation",
      icon: <Zap size={20} />,
      gradient: "from-purple-600 to-pink-600",
    },
    mobile: {
      label: "Mobile Apps",
      icon: <Smartphone size={20} />,
      gradient: "from-orange-600 to-red-600",
    },
  };

  const getProjectsByCategory = () => {
    switch (activeCategory) {
      // case "all":
      //   return [
      //     ...fullStackProjects,
      //     ...frontEndProjects,
      //     ...wordpressProjects,
      //     ...automationProjects,
      //     ...machineLearningProjects,
      //     ...mobileProjects,
      //   ];
      // case "web":
      //   return [
      //     ...fullStackProjects,
      //     ...frontEndProjects,
      //     ...wordpressProjects,
      //   ];
      case "n8n":
        return automationProjects;
      case "ml":
        return machineLearningProjects;
      case "mobile":
        return mobileProjects;
      default:
        return [];
    }
  };

  const projects = getProjectsByCategory();
  const pageSize = 4;
  const pageCount = Math.ceil(projects.length / pageSize);
  const currentProjects = projects.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  useEffect(() => setCurrentPage(0), [activeCategory]);

  const paginate = (direction) => {
    setCurrentPage((prev) => {
      if (direction === 1) return prev === pageCount - 1 ? 0 : prev + 1;
      return prev === 0 ? pageCount - 1 : prev - 1;
    });
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", duration: 0.5 },
    },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative min-h-screen overflow-hidden"
    >
      {/* Background elements - Same as AboutMe */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Navigation Bar - Styled like image top nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16 pb-8"
        >
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 transition-all duration-300 ${
                activeCategory === key
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span
                className={`transition-all ${
                  activeCategory === key ? "opacity-100" : "opacity-60"
                }`}
              >
                {category.icon}
              </span>
              <span className="font-medium text-base md:text-lg">
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Header with Navigation - DYNAMIC TITLE */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            {categories[activeCategory].label}
          </motion.h2>

          {/* Navigation Arrows - Styled like image */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-lg border border-gray-700"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-lg border border-gray-700"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  hoveredCard === index
                    ? "bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700"
                    : "bg-gray-800"
                } shadow-2xl transition-all duration-500 group`}
              >
                {/* Project Image/Icon - BIGGER AND CLEARER */}
                <div className="relative h-56 flex items-center justify-center p-8 bg-gradient-to-b from-transparent to-black/20">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={project.texture}
                      alt={project.title}
                      className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300 filter brightness-110"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                      hoveredCard === index ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-6 flex-1 line-clamp-3 transition-colors duration-300 ${
                      hoveredCard === index ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {project.desc}
                  </p>

                  {/* Button Group - View Details + Live Demo */}
                  <div className="flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(project)}
                      className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-between transition-all duration-300 ${
                        hoveredCard === index
                          ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
                          : "bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600"
                      }`}
                    >
                      <span>View Details</span>
                      <ChevronRight size={18} />
                    </motion.button>

                    {/* Live Demo Button - Show only if live exists */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                          hoveredCard === index
                            ? "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                            : "bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-500"
                        }`}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Technology Badge (top right corner) */}
                {project.tags && project.tags[0] && (
                  <div className="absolute top-4 right-4">
                    <div
                      className={`p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                        hoveredCard === index
                          ? "bg-white/20 border border-white/30"
                          : "bg-blue-900/30 border border-gray-700"
                      }`}
                    >
                      <img
                        src={project.tags[0].path}
                        alt={project.tags[0].name}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Page Indicator Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-blue-500 w-8"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal - Keep existing modal functionality */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-700"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-sm shadow-lg hover:scale-110"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
                {/* Full Image Section - No Distortions */}
                <div className="relative w-full bg-gray-900">
                  <img
                    src={selectedProject.texture2 || selectedProject.texture}
                    alt={selectedProject.title}
                    className="w-full h-auto object-contain max-h-[60vh]"
                  />
                </div>

                {/* Project Details Section */}
                <div className="p-8 md:p-10 bg-gradient-to-b from-gray-800 to-gray-900">
                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {selectedProject.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  {selectedProject.subdesc && (
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {selectedProject.subdesc}
                    </p>
                  )}

                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-5 text-xl flex items-center gap-2">
                      <Code size={22} className="text-blue-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <div
                          key={tag.id}
                          className="flex items-center bg-gray-700/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-gray-600 hover:border-blue-500/50 hover:bg-gray-700 transition-all hover:scale-105"
                        >
                          <img
                            src={tag.path}
                            alt={tag.name}
                            className="w-6 h-6 mr-3"
                          />
                          <span className="text-gray-200 font-medium text-base">
                            {tag.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.href && (
                      <a
                        href={selectedProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-semibold flex items-center gap-3 shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105 text-base"
                      >
                        <Github size={20} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl text-white font-semibold flex items-center gap-3 transition-all border border-gray-600 hover:border-blue-500/50 hover:scale-105 text-base"
                      >
                        <ExternalLink size={20} />
                        <span>Live Preview</span>
                      </a>
                    )}
                    {selectedProject.linkedin && (
                      <a
                        href={selectedProject.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold flex items-center gap-3 transition-all hover:scale-105 text-base"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                          alt="LinkedIn"
                          className="w-5 h-5"
                        />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Style for the grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(
              to right,
              rgba(66, 153, 225, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(66, 153, 225, 0.05) 1px,
              transparent 1px
            );
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
