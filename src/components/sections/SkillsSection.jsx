import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
                Technical Arsenal
              </h2>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Cutting-edge technologies powering modern solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid - Hexagonal Layout */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}
                className="relative group cursor-pointer"
              >
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                  }}
                />

                {/* Main Card */}
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 p-6 flex items-center justify-center overflow-hidden group-hover:border-gray-600 transition-all duration-300">
                  {/* Animated Border Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                    }}
                    initial={false}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 object-contain drop-shadow-lg"
                      style={skill.style}
                    />
                  </motion.div>

                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      y: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Label */}
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span
                    className="text-sm font-medium tracking-wide transition-colors duration-300"
                    style={{
                      color: "rgb(209, 213, 219)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <motion.div
                    className="h-0.5 w-0 group-hover:w-full mx-auto mt-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
