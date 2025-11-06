import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiCode } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/all#home" },
    { name: "About Me", link: "/all#about" },
    { name: "Skills", link: "/all#skills" },
    { name: "Projects", link: "/all#projects" },
    { name: "Contact Me", link: "/all#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    const sectionId = link.split("#")[1]; // Extract the section ID
    if (sectionId) {
      const element = document.getElementById(sectionId); // Use getElementById
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <motion.a
            href="/all#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("/all#home");
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white">
              <HiCode className="text-xl" />
            </div>
            <span className="text-xl font-bold text-white">Iresh</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleNavLinkClick(item.link);
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <motion.a
            href="/all#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium text-sm transition-transform duration-300 hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("/all#contact");
            }}
          >
            Let's Connect
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(item.link);
                    }}
                    className="text-gray-300 hover:text-blue-400 py-2 transition-colors duration-300 border-b border-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/all#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("/all#contact");
                  }}
                  className="inline-block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-medium mt-2"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
