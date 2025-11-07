import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Removed all unused local asset imports

const skillsData = [
  // 🌐 --- Web Development Skills (Frontend + Backend + Frameworks)
 
  
  // 🧠 --- Programming Languages ---
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "#A8B9CC",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    color: "#7F52FF",
  },

  // 🐍 --- Python Ecosystem (Frameworks, Libraries, AI/ML) ---

  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    color: "#000000",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#013243",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#150458",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "#FF6F00",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    color: "#5C3EE8",
  },

  // ⚙️ --- Automation & AI ---
  {
    name: "N8N",
    icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/n8n-color.png",
    color: "#EA4B71",
  },
  {
    name: "AI Tools",
    icon: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
    color: "#10A37F",
  },
   {
    name: "MERN Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#00D8FF",
  },
];


const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies I've mastered during my development journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 25px ${skill.color}40`,
                  transition: { duration: 0.3 },
                }}
                className="relative w-20 h-20 mb-4 rounded-2xl bg-gray-800 p-4 flex items-center justify-center shadow-lg border border-gray-700 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                  }}
                  whileHover={{ opacity: 0.2 }}
                />
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: {
                      duration: 3,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                    style={skill.style}
                  />
                </motion.div>
              </motion.div>
              <motion.span
                className="text-gray-300 text-sm font-medium text-center"
                whileHover={{
                  color: skill.color,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
