import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import TypewriterComponent from "typewriter-effect";
import { Github, Linkedin, Twitter } from "lucide-react";
import { HiCode, HiServer, HiChip, HiLightningBolt } from "react-icons/hi";
import { motion } from "framer-motion";

import HackerRoom from "../../assets/modles/HackerRoom";
import HeroCamera from "../../assets/modles/HeroCamera.jsx";
import CanvasLoader from "../CanvasLoarder";

function HeroSection() {
  // Responsive breakpoints
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techIcons = [
    { Icon: HiCode, label: "Development" },
    { Icon: HiServer, label: "Infrastructure" },
    { Icon: HiChip, label: "Hardware" },
    { Icon: HiLightningBolt, label: "Optimization" },
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col relative bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      id="home"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="code-particles"></div>
      </div>

      {/* Main content */}
      {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-sm font-mono text-white">
            Full-Stack Developer | Undergraduate ICT Student
          </div>

          <h1 className="sm:text-4xl text-3xl font-bold text-white text-center font-generalsans mb-2">
            Hi, I'm Iresh Nimantha
            <span className="waving-hand animate-wave">👋</span>
          </h1>

          <div
            className={`font-medium text-white text-center  ${
              isSmall ? "text-xl" : isMobile ? "text-2xl" : "text-3xl"
            } mb-20`}
          >
            <span>I'm a </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-96">
              <TypewriterComponent
                options={{
                  strings: ["developer", "digital architect", "tech innovator"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: "|",
                }}
              />
            </span>
          </div>
        </motion.div>
      </div> */}

      {/* 3D Scene */}
      <div
        className="w-full h-full absolute inset-0"
        style={{ opacity: Math.max(0.7, 1 - scrollY / 500) }}
      >
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={[-1, -9, -2]}
                rotation={[-2.9, Math.PI, 0]}
                scale={-0.1}
              />
            </HeroCamera>

            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={10} />
            <pointLight position={[-10, -10, -10]} color="blue" intensity={5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll indicator */}
      <div
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 z-10 px-4 sm:px-6 lg:px-8"
        style={{ pointerEvents: "none" }} // ✅ add this
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-sm font-mono text-white">
            Full-Stack Developer | Undergraduate ICT Student
          </div>

          <h1 className="sm:text-4xl text-3xl font-bold text-white text-center font-generalsans mb-2">
            Hi, I'm Iresh Nimantha
            <span className="waving-hand animate-wave">👋</span>
          </h1>

          <div
            className={`font-medium text-white text-center  ${
              isSmall ? "text-xl" : isMobile ? "text-2xl" : "text-3xl"
            } mb-20`}
          >
            <span>I'm a </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-96">
              <TypewriterComponent
                options={{
                  strings: ["developer", "digital architect", "tech innovator"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: "|",
                }}
              />
            </span>
          </div>
        </motion.div>
      </div>

      {/* Add some CSS for animations */}
      <style jsx>{`
        .waving-hand {
          display: inline-block;
          animation: wave 2.5s infinite;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .code-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .code-particles::before {
          content: "01010101010101010101010101010110101010";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0.05;
          background-image: repeating-linear-gradient(
              0deg,
              #4299e1,
              #4299e1 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(
              90deg,
              #4299e1,
              #4299e1 1px,
              transparent 1px,
              transparent 30px
            );
          transform: rotate(45deg);
        }

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
      `}</style>
    </section>
  );
}

export default HeroSection;
