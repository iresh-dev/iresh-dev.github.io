import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiLightBulb } from "react-icons/hi";
import avatar from "../../assets/avatar/avatar1.jpg";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get to Know Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Image/avatar column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 flex flex-col items-center md:items-start"
            >
              <div className="w-48 h-48 rounded-full border-4 border-blue-600/20 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative mb-4">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-48 h-48 full rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio column */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi there! I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Iresh
                </span>
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I am an undergraduate student at the University of Colombo,
                Faculty of Technology, Honours in Bachelor of Information
                and Communication Technology (BICT). I love creating innovative
                web solutions and exploring new technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiAcademicCap className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      Education
                    </h4>
                    <p className="text-gray-400 text-sm">
                      BSc in Information and Communication Technology (BICT),
                      University of Colombo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <HiLightBulb className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Passion</h4>
                    <p className="text-gray-400 text-sm">
                      Creating innovative web solutions and exploring emerging
                      technologies
                    </p>
                  </div>
                </div>
              </div>

{/*               <div className="mt-8 cursor-pointer">
                <button
                  type="button"
                  onClick={() => (window.location.href = "#contact")}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg shadow-blue-500/20"
                >
                  Get in Touch
                </button>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>

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
      `}</style>
    </section>
  );
};

export default AboutMe;
