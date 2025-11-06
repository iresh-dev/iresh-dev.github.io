import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Copy,
  Mail,
  Check,
  ExternalLink,
} from "lucide-react";

function Footer() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "ireshnimantha608@gmail.com";

  const socialLinks = [
    { name: "github", icon: Github, url: "https://github.com/Iresh-Nimantha" },
    {
      name: "linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ireshnimantha",
    },
    {
      name: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ireshnimantha/",
    },
    {
      name: "email",
      icon: Mail,
      url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new",
    },
  ];

  const handleIconEnter = (index) => {
    setActiveIcon(index);
  };

  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-6 border-t border-gray-700 bg-gray-900 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          {/* Left - Privacy Policy */}
          <div className="group">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>Privacy Policy</span>
              <ExternalLink
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          {/* Center - Social Links + Email Copy */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  onMouseEnter={() => handleIconEnter(index)}
                  onMouseLeave={handleIconLeave}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${
                      activeIcon === index ? "bg-gray-700" : "hover:bg-gray-800"
                    }`}
                  >
                    <link.icon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {activeIcon === index && (
                    <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md">
                      {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                    </div>
                  )}
                </a>
              ))}
            </div>
            {/* Email Section with Copy Icon */}
            <div className="text-sm md:text-base lg:text-lg font-semibold text-gray-300 flex flex-wrap items-center justify-center gap-2">
              <span>Reach me at</span>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Email
              </a>
              <button
                onClick={copyEmail}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </div>
          {/* Right - Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 Iresh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
