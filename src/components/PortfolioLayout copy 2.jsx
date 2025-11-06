import React, { useState, useEffect } from "react";
import Split from "react-split";
import { useNavigate } from "react-router-dom";
import {
  FolderIcon,
  Files,
  SearchIcon,
  Blocks,
  CircleUserRound,
  FolderOpenIcon,
  HomeIcon,
  UserIcon,
  BugPlay,
  SettingsIcon,
  MailIcon,
  ProjectorIcon,
  XIcon,
  TerminalIcon,
  Clock3Icon,
  ListIcon,
  HistoryIcon,
  MoreHorizontal,
  ChevronDown,
  Menu as MenuIcon,
} from "lucide-react";
import ReactLogo from "../assets/react.svg";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Register languages with SyntaxHighlighter
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);

// Import components (normal imports for rendering)
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
//import ContactSection from "./sections/Contact";
import NavBarSection from "./sections/NavBar";
import FooterSection from "./sections/FooterSection";

import AssistantButton from "./AssistantButton";
// Component map for easy reference
const componentMap = {
  HeroSection: HeroSection,
  AboutMeSection: AboutMeSection,
  SkillsSection: SkillsSection,
  ProjectsSection: ProjectsSection,
};

// Import raw sources
import HeroSectionSource from "./sections/HeroSection.jsx?raw";
import AboutMeSectionSource from "./sections/AboutSection.jsx?raw";
import SkillsSectionSource from "./sections/SkillsSection.jsx?raw";
import ProjectsSectionSource from "./sections/ProjectsSection.jsx?raw";
//import ContactSectionSource from "./sections/Contact.jsx?raw";
import NavBarSectionSource from "./sections/NavBar.jsx?raw";
import FooterSectionSource from "./sections/FooterSection.jsx?raw";

// Map of component sources
const componentSources = {
  "HeroSection.jsx": HeroSectionSource,
  "AboutMeSection.jsx": AboutMeSectionSource,
  "SkillsSection.jsx": SkillsSectionSource,
  "ProjectsSection.jsx": ProjectsSectionSource,
   //"Contact.jsx": ContactSectionSource,
  "NavBarSection.jsx": NavBarSectionSource,
  "FooterSection.jsx": FooterSectionSource,
};

// Navigation Links Configuration with Icons
const Icon = () => (
  <img src={ReactLogo} alt="React Logo" className="w-4 h-4 mr-2" />
);
const navigationLinks = [
  {
    name: "NavBarSection",
    path: "navbar",
    icon: Icon,
    description: "Navigation bar component",
    filename: "NavBarSection.jsx",
  },
  {
    name: "HeroSection",
    path: "hero-section",
    icon: Icon,
    description: "Main landing page component",
    filename: "HeroSection.jsx",
  },
  {
    name: "AboutMeSection",
    path: "about-me",
    icon: Icon,
    description: "Personal introduction component",
    filename: "AboutMeSection.jsx",
  },
  {
    name: "SkillsSection",
    path: "skills",
    icon: Icon,
    description: "Skills and expertise showcase",
    filename: "SkillsSection.jsx",
  },
  {
    name: "ProjectsSection",
    path: "projects",
    icon: Icon,
    description: "Portfolio of projects",
    filename: "ProjectsSection.jsx",
  },
  //  {
  //   name: "ContactSection",
  //   path: "contact",
  //   icon: Icon,
  //   description: "Contact form and information",
  //   filename: "Contact.jsx",
  // },
    {
    name: "FooterSection",
    path: "footer",
    icon: Icon,
    description: "Footer section of the site",
    filename: "FooterSection.jsx",
  },
];

// Ellipsis Menu Dropdown component
const EllipsisMenu = ({ onToggleTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);

  // List of main menu items
  const menuItems = [
    // { name: "File", action: null },
    // { name: "Edit", action: null },
    // { name: "Selection", action: null },
    // { name: "View", action: null },
    // { name: "Go", action: null },
    // { name: "Run", action: null },
    {
      name: "Terminal",
      action: onToggleTerminal,
    },
    // { name: "Window", action: null },
    // { name: "Help", action: null },
  ];
  //const [lastSplitSizes, setLastSplitSizes] = useState([20, 80]); // Default sizes for left and right panes

  // Handle split resize event
  const handleSplitDragEnd = (sizes) => {
    setLastSplitSizes(sizes); // Update state with new sizes
  };
  return (
    <div className="relative">
      <button
        className="flex items-center px-2 py-1 text-[#cccccc] hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed top-auto left-auto  bg-[#252526] shadow-lg border border-[#3c3c3c] rounded min-w-40 z-[100]">
          <div className="py-1 custom-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className="relative w-full text-left px-4 py-2 text-[#cccccc] hover:bg-[#37373D] text-sm"
                onClick={() => {
                  if (item.action) item.action();
                  setIsOpen(false);
                }}
              >
                <span className="pr-4">{item.name}</span>
                {item.icon && <item.icon className="w-4 h-4 ml-2" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mac-style Traffic Lights
const TrafficLights = () => (
  <div className="flex space-x-2 ml-2">
    <div className="w-2 h-2 rounded-full bg-red-500"></div>
    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
    <div className="w-2 h-2 rounded-full bg-green-500"></div>
  </div>
);

// VS Code-like Tab Component
const Tab = ({ file, isActive, onClick, onClose }) => (
  <div
    className={`flex items-center px-3 py-1 border-r border-[#2b2b2b] cursor-pointer ${
      isActive
        ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
        : "bg-[#252526] text-gray-400 hover:text-white"
    }`}
    onClick={onClick}
  >
    <img src={ReactLogo} alt="ReactLogo" className="w-4 h-4 mr-2" />
    <span className="mr-2 truncate max-w-32">{file}</span>
    <button
      className="ml-2 text-gray-500 hover:text-white focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        onClose(file);
      }}
    >
      <XIcon className="w-3 h-3" />
    </button>
  </div>
);

// Sidebar Icons Component
const SidebarIcons = ({ activeIcon, onIconClick }) => {
  const topSidebarIcons = [
    { icon: Files, name: "explorer", title: "Explorer" },
    { icon: SearchIcon, name: "code", title: "Search" },
    { icon: BugPlay, name: "debug", title: "Debug" },
    { icon: Blocks, name: "extensions", title: "Extensions" },
  ];

  const bottomSidebarIcons = [
    { icon: CircleUserRound, name: "accounts", title: "Accounts" },
    { icon: SettingsIcon, name: "manage", title: "Settings" },
  ];

  return (
    <div className="bg-[#191919] flex flex-col items-center h-full w-full border-r border-[#2b2b2b] custom-scrollbar">
      <div className="flex-1 w-full flex flex-col items-center space-y-6 custom-scrollbar">
        {topSidebarIcons.map((item) => (
          <div
            key={item.name}
            className="relative group w-full flex justify-center"
          >
            <button
              className={`
          p-2 rounded w-full flex justify-center
          ${
            activeIcon === item.name
              ? "bg-[#1e1e1e] text-[#cccccc] border-l-2 border-l-[#007acc]"
              : "text-gray-500 hover:text-[#cccccc]"
          }
        `}
              onClick={() => onIconClick(item.name)}
            >
              <item.icon className="w-6 h-6" />
            </button>
            <div className="absolute left-16 top-2 bg-[#252526] px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center pb-6 space-y-6 custom-scrollbar">
        {bottomSidebarIcons.map((item) => (
          <div
            key={item.name}
            className="relative group w-full flex justify-center"
          >
            <button
              className={`
                p-2 rounded w-full flex justify-center
                ${
                  activeIcon === item.name
                    ? "bg-[#1e1e1e] text-[#cccccc] border-l-2 border-l-[#007acc]"
                    : "text-gray-500 hover:text-[#cccccc]"
                }
              `}
              onClick={() => onIconClick(item.name)}
            >
              <item.icon className="w-6 h-6" />
            </button>
            <div className="absolute left-16 top-2 bg-[#252526] px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioLayout = () => {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({
    components: true,
    src: true,
  });
  const [activeIcon, setActiveIcon] = useState("explorer");
  const [activeTab, setActiveTab] = useState("terminal");
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [lastSplitSizes, setLastSplitSizes] = useState([4, 19, 77]);
  const [mobileSplitSizes, setMobileSplitSizes] = useState([70, 30]); // State for mobile split sizes
  //terminal
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const navigate = useNavigate();
  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const newOutput = [...output];
      const commandLower = command.toLowerCase();

      // Mapping commands to sections
     
const commandMap = {
  hero: "/hero",
  aboutme: "/about-me",
  skills: "/skills",
  projects: "/projects",
  contact: "/contact",
  all: "/all", // Adjust if you have a specific path for "all"
  help: "Displays the list of available commands.",
};
      // Show the user's command in the terminal-like output
      newOutput.push(
        `<span class="text-green-500">➜</span> <span class="text-blue-400">~/portfolio</span> ${command}`
      );

      // Handle the 'help' command
      if (commandLower === "help") {
        const helpMessage = `
      
          <span class="text-green-500">➜</span> <span class="text-blue-400">~/portfolio</span><br/>
            <span>Command list</span><br/>
          <span class="text-yellow-400">hero</span>: Navigate to the hero section.<br/>
          <span class="text-yellow-400">aboutme</span>: Navigate to the about me section.<br/>
          <span class="text-yellow-400">skills</span>: Navigate to the skills section.<br/>
          <span class="text-yellow-400">projects</span>: Navigate to the projects section.<br/>
          <span class="text-yellow-400">contact</span>: Navigate to the contact section.<br/>
          <span class="text-yellow-400">all</span>: View all sections.<br/>
        `;
        newOutput.push(helpMessage);
      } else if (commandMap[commandLower]) {
        // Navigate to the respective section for valid commands
        navigate(commandMap[commandLower]);
        newOutput.push(
          `<span class="text-green-500">➜</span> <span class="text-blue-400">~/portfolio</span> Navigating to ${commandLower} section...`
        );
      } else {
        newOutput.push(
          `<span class="text-green-500">➜</span> <span class="text-blue-400">~/portfolio</span> Command not found: ${command}`
        );
      }

      // Update the terminal output with the new command and response
      setOutput(newOutput);
      setCommand(""); // Clear the input after processing the command
    }
  };

  // Check if mobile view on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-close sidebar on mobile
      if (mobile && sidebarOpen) {
        setSidebarOpen(false);
      } else if (!mobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle terminal visibility
  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  // Toggle folder expansion
  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  // Handle file selection
  const handleFileSelect = (file) => {
    // If file is not already in open files, add it
    if (!openFiles.includes(file.filename)) {
      setOpenFiles((prev) => [...prev, file.filename]);
    }
    setActiveFile(file.filename);

    // Auto-close sidebar on mobile after file selection
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Handle file close
  const handleFileClose = (filename) => {
    setOpenFiles((prev) => prev.filter((f) => f !== filename));
    // If we're closing the active file, set the active file to the last remaining open file
    if (activeFile === filename) {
      const remainingFiles = openFiles.filter((f) => f !== filename);
      setActiveFile(
        remainingFiles.length > 0
          ? remainingFiles[remainingFiles.length - 1]
          : null
      );
    }
  };

  // Handle icon click
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  // Find the component name for the current active file
  const getActiveComponentName = () => {
    if (!activeFile) return null;
    const link = navigationLinks.find((link) => link.filename === activeFile);
    return link ? link.name : null;
  };

  // Get the active component for preview
  const getActiveComponent = () => {
    const componentName = getActiveComponentName();
    return componentName ? componentMap[componentName] : null;
  };

  // Detect the language based on file extension
  const detectLanguage = (filename) => {
    if (filename.endsWith(".jsx")) return "jsx";
    if (filename.endsWith(".js")) return "javascript";
    if (filename.endsWith(".ts")) return "typescript";
    if (filename.endsWith(".tsx")) return "tsx";
    if (filename.endsWith(".css")) return "css";
    if (filename.endsWith(".html")) return "html";
    return "javascript"; // Default to JavaScript
  };

  // Handle split resize for desktop
  const handleSplitDragEnd = (sizes) => {
    setLastSplitSizes(sizes);
  };

  // Handle split resize for mobile
  const handleMobileSplitDragEnd = (sizes) => {
    setMobileSplitSizes(sizes);
  };

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] overflow-hidden custom-scrollbar">
      <div className="h-full w-full border border-[#2b2b2b] flex flex-col">
        {/* Combined top menu bar with traffic lights and tabs */}
        <div className="w-full h-8 flex items-center text-[#cccccc] text-xs md:hidden ">
          <div className="flex items-center w-[22%] justify-between">
            <div className="flex items-center">
              <button
                className="p-1 text-[#cccccc] hover:text-white md:hidden"
                onClick={toggleSidebar}
              >
                <MenuIcon className="w-5 h-5" />
              </button>

              <TrafficLights />
              <div className="mx-4 uppercase text-xs font-semibold text-[#cccccc] hidden md:block">
                Explorer
              </div>
            </div>

            <EllipsisMenu onToggleTerminal={toggleTerminal} />
          </div>

          {/* Integrated tab bar */}
          <div className="flex-1 flex overflow-x-auto custom-scrollbar border-l border-[#2b2b2b] ml-2 h-full">
            {openFiles.length > 0 ? (
              <>
                {openFiles.map((file) => (
                  <Tab
                    key={file}
                    file={file}
                    isActive={activeFile === file}
                    onClick={() => setActiveFile(file)}
                    onClose={handleFileClose}
                  />
                ))}
              </>
            ) : (
              <div className="p-1 pl-6 text-gray-500 text-xs flex items-center">
                No files open
              </div>
            )}
          </div>
        </div>

        {/* Mobile sidebar overlay when open */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content area with conditional rendering for mobile */}
        <div className="flex-1 flex overflow-hidden">
          {/* Conditional rendering for mobile sidebar */}
          {isMobile ? (
            <>
              {/* Mobile sidebar - slides in from left */}
              <div
                className={`fixed left-0 top-8 h-full z-30 transition-transform duration-300 ease-in-out transform ${
                  sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ width: "80%", maxWidth: "300px" }}
              >
                <div className="flex h-full">
                  {/* Activity Bar */}
                  <div className="w-12 h-full bg-[#191919] custom-scrollbar">
                    <SidebarIcons
                      activeIcon={activeIcon}
                      onIconClick={handleIconClick}
                    />
                  </div>

                  {/* Side Bar (File navigator) */}
                  <div className="w-64 bg-[#252526] h-full flex flex-col border-r border-[#2b2b2b] custom-scrollbar">
                    {/* Scrollable area for file structure */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                      {/* OPEN EDITORS section */}
                      <div className="px-3 mb-2">
                        <div className="flex items-center py-1 cursor-pointer group">
                          <span className="text-[#cccccc] group-hover:text-white text-xs uppercase">
                            › Open Editors
                          </span>
                        </div>
                      </div>

                      {/* PROJECT folder structure */}
                      <div className="px-3 ">
                        <div className="flex items-center py-1 cursor-pointer group uppercase text-xs">
                          <span className="text-[#cccccc] group-hover:text-white">
                            › Portfolio
                          </span>
                        </div>
                      </div>

                      {/* SRC folder */}
                      <div className="px-3">
                        <div
                          className="flex items-center py-1 cursor-pointer group"
                          onClick={() => toggleFolder("src")}
                        >
                          <div className="mr-1">
                            {expandedFolders.src ? (
                              <FolderOpenIcon className="w-4 h-4 text-blue-400" />
                            ) : (
                              <FolderIcon className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <span className="text-[#cccccc] group-hover:text-white">
                            src
                          </span>
                        </div>

                        {/* SRC folder content */}
                        <div
                          className={`ml-4 ${
                            expandedFolders.src ? "block" : "hidden"
                          } bg-[#252526] custom-scrollbar`}
                        >
                          <div
                            className="flex items-center py-1 cursor-pointer group"
                            onClick={() => toggleFolder("components")}
                          >
                            <div className="mr-1">
                              {expandedFolders.components ? (
                                <FolderOpenIcon className="w-4 h-4 text-blue-400" />
                              ) : (
                                <FolderIcon className="w-4 h-4 text-blue-400" />
                              )}
                            </div>
                            <span className="text-[#cccccc] group-hover:text-white">
                              components
                            </span>
                          </div>

                          {/* Components folder content */}
                          <div
                            className={`ml-4  ${
                              expandedFolders.components ? "block" : "hidden"
                            } bg-[#252526] custom-scrollbar`}
                          >
                            {navigationLinks.map((link) => (
                              <div
                                key={link.path}
                                className={`
                                  flex items-center py-1 px-2 cursor-pointer text-sm
                                  ${
                                    activeFile === link.filename
                                      ? "bg-[#37373D]"
                                      : "hover:bg-[#2A2D2E]"
                                  }
                                  rounded my-1
                                `}
                                onClick={() => handleFileSelect(link)}
                              >
                                <link.icon className="w-4 h-4 mr-2 text-[#e06c75]" />
                                <span className="text-[#cccccc]">
                                  {link.filename}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom sidebar sections */}
                    <div className="mt-auto bg-[#252526] border-t border-[#2b2b2b] custom-scrollbar">
                      <div className="px-3 py-2 text-xs uppercase text-[#cccccc] flex items-center">
                        <ListIcon className="w-4 h-4 mr-2" /> Outline
                      </div>
                      <div className="px-3 py-2 text-xs uppercase text-[#cccccc] flex items-center">
                        <Clock3Icon className="w-4 h-4 mr-2" /> Timeline
                      </div>
                      <div className="px-3 py-2 text-xs uppercase text-[#cccccc] flex items-center">
                        <HistoryIcon className="w-4 h-4 mr-2" /> Local History
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area for mobile -  Make this resizable */}
              <div className="flex-1 flex flex-col overflow-hidden h-full custom-scrollbar">
                {/* Wrap the editor and terminal with Split component */}
                <Split
                  className="flex-1 flex flex-col overflow-hidden custom-scrollbar"
                  direction="vertical"
                  sizes={isTerminalOpen ? mobileSplitSizes : [100, 0]} // Use mobileSplitSizes here
                  minSize={[50, 0]} // Adjust minSize for mobile
                  expandToMin={true}
                  gutterSize={4}
                  gutterStyle={() => ({
                    backgroundColor: "#2D2D2D",
                    cursor: "row-resize",
                    height: "4px",
                    display: isTerminalOpen ? "block" : "none", // Hide gutter when terminal is closed
                  })}
                  onDragEnd={handleMobileSplitDragEnd} // Use handleMobileSplitDragEnd for mobile
                >
                  {/* Editor content */}
                  <div className="flex-1 overflow-auto bg-[#1e1e1e] custom-scrollbar">
                    {activeFile ? (
                      <div className="h-full custom-scrollbar">
                        <div className="relative h-full custom-scrollbar">
                          <SyntaxHighlighter
                            language={detectLanguage(activeFile)}
                            style={vs2015}
                            customStyle={{
                              margin: 0,
                              padding: "1rem",
                              height: "100%",
                              backgroundColor: "#1E1E1E",
                              overflow: "auto",
                              fontSize: "14px",
                              lineHeight: "1.5",
                            }}
                            showLineNumbers={true}
                            lineNumberStyle={{
                              textAlign: "right",
                              color: "#858585",
                              paddingRight: "1rem",
                              marginRight: "1rem",
                              borderRight: "1px solid #404040",
                              minWidth: "2.5rem",
                            }}
                            wrapLines={true}
                            wrapLongLines={false}
                            className="custom-scrollbar"
                          >
                            {componentSources[activeFile] ||
                              `// Source code not available for ${activeFile}`}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 custom-scrollbar">
                        <div className="text-center custom-scrollbar">
                          <Files className="mx-auto w-12 h-12 mb-4 opacity-30" />
                          <p className="text-sm">
                            Select a file to view its contents
                          </p>
                          {isMobile && !sidebarOpen && (
                            <button
                              className="mt-4 px-3 py-1 bg-[#007acc] text-white rounded text-xs"
                              onClick={toggleSidebar}
                            >
                              Open Files Panel
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Terminal panel for mobile */}

                  {isTerminalOpen && (
                    <div className="bg-[#1e1e1e] overflow-hidden flex flex-col h-full border-t border-[#2b2b2b] rounded-lg">
                      <div className="flex bg-[#252526] border-b border-[#2b2b2b] text-xs items-center justify-between">
                        <div className="flex space-x-1 px-2 py-1">
                          <button
                            className={`px-2 py-1 ${
                              activeTab === "terminal"
                                ? "text-white border-b border-[#007acc]"
                                : "text-gray-400"
                            }`}
                            onClick={() => setActiveTab("terminal")}
                          >
                            TERMINAL
                          </button>
                        </div>
                        <button
                          className="mr-2 text-gray-400 hover:text-white"
                          onClick={() => setIsTerminalOpen(false)}
                        >
                          <XIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-2 text-[#cccccc] font-mono text-sm bg-[#1e1e1e] flex-1 overflow-auto">
                        {output.map((line, index) => (
                          <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                        <div className="flex items-center">
                          <span className="text-green-500">➜</span>
                          <span className="text-blue-400 ml-1">
                            {" "}
                            ~/portfolio
                          </span>
                          <input
                            type="text"
                            className="bg-transparent outline-none border-none text-white ml-2 w-full"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={handleCommand}
                            autoFocus
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Split>
              </div>
            </>
          ) : (
            <>
              {/*  Desktop Split View  */}
              <Split
                gutterSize={5}
                direction="horizontal"
                className="flex overflow-hidden flex-1 custom-scrollbar"
                sizes={sidebarOpen ? lastSplitSizes : [20, 80]} // Adjust based on preference
                minSize={[1500, 300]}
              >
                {/* Activity Bar (Left sidebar with icons) */}
                <div className="h-full bg-[#191919] w-[50px] flex flex-col items-center py-2 mt-">
                  <SidebarIcons
                    activeIcon={activeIcon}
                    onIconClick={handleIconClick}
                  />
                </div>
                {/* Side Bar (File navigator) */}

                <div className="bg-[#252526] h-full flex flex-col border-r border-[#2b2b2b] custom-scrollbar">
                  {/* Scrollable area for file structure */}

                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Full-width top row */}
                    <div className="w-full bg-[#252526] border-b border-[#2b2b2b] px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center">
                        {/* Hamburger menu for mobile */}
                        <button
                          className="p-1 text-[#cccccc] hover:text-white md:hidden"
                          onClick={toggleSidebar}
                        >
                          <MenuIcon className="w-5 h-5" />
                        </button>

                        <TrafficLights />
                        <div className="mx-4 uppercase text-xs font-semibold text-[#cccccc] hidden md:block">
                          Explorer
                        </div>
                      </div>

                      <EllipsisMenu onToggleTerminal={toggleTerminal} />
                    </div>

                    <div className="px-3 mb-2">
                      <div className="flex items-center py-1 cursor-pointer group">
                        <span className="text-[#cccccc] group-hover:text-white text-xs uppercase">
                          › Open Editors
                        </span>
                      </div>
                    </div>

                    {/* Project folder */}
                    <div className="px-3">
                      <div className="flex items-center py-1 cursor-pointer group uppercase text-xs">
                        <span className="text-[#cccccc] group-hover:text-white">
                          › Portfolio
                        </span>
                      </div>
                    </div>

                    {/* SRC Folder */}
                    <div className="px-3">
                      <div
                        className="flex items-center py-1 cursor-pointer group"
                        onClick={() => toggleFolder("src")}
                      >
                        <div className="mr-1">
                          {expandedFolders.src ? (
                            <FolderOpenIcon className="w-4 h-4 text-blue-400" />
                          ) : (
                            <FolderIcon className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <span className="text-[#cccccc] group-hover:text-white">
                          src
                        </span>
                      </div>

                      {/* SRC Folder Content */}
                      <div
                        className={`ml-4 ${
                          expandedFolders.src ? "block" : "hidden"
                        } bg-[#252526]`}
                      >
                        {/* Components folder */}
                        <div
                          className="flex items-center py-1 cursor-pointer group"
                          onClick={() => toggleFolder("components")}
                        >
                          <div className="mr-1">
                            {expandedFolders.components ? (
                              <FolderOpenIcon className="w-4 h-4 text-blue-400" />
                            ) : (
                              <FolderIcon className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <span className="text-[#cccccc] group-hover:text-white">
                            components
                          </span>
                        </div>

                        {/* Components folder content */}
                        <div
                          className={`ml-4 ${
                            expandedFolders.components ? "block" : "hidden"
                          } bg-[#252526] custom-scrollbar`}
                        >
                          {navigationLinks.map((link) => (
                            <div
                              key={link.path}
                              className={`flex items-center py-1 px-2 cursor-pointer text-sm ${
                                activeFile === link.filename
                                  ? "bg-[#37373D]"
                                  : "hover:bg-[#2A2D2E]"
                              } rounded my-1`}
                              onClick={() => handleFileSelect(link)}
                            >
                              <link.icon className="w-4 h-4 mr-2 text-[#e06c75]" />
                              <span className="text-[#cccccc]">
                                {link.filename}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Editor and Terminal */}

                <div className="flex flex-col overflow-hidden h-full custom-scrollbar">
                  <Split
                    className="flex-1 flex flex-col overflow-hidden custom-scrollbar"
                    direction="vertical"
                    sizes={isTerminalOpen ? [70, 30] : [100, 0]}
                    minSize={[100, 0]}
                    expandToMin={true}
                    gutterSize={4}
                  >
                    {/* Editor Content */}

                    <div className="overflow-auto h-full bg-[#1e1e1e] custom-scrollbar">
                      <div className=" flex-1 flex overflow-x-auto custom-scrollbar  border-[#2b2b2b]">
                        {openFiles.length > 0 ? (
                          <>
                            {openFiles.map((file) => (
                              <Tab
                                key={file}
                                file={file}
                                isActive={activeFile === file}
                                onClick={() => setActiveFile(file)}
                                onClose={handleFileClose}
                              />
                            ))}
                          </>
                        ) : (
                          <div className="p-1 pl-6 text-gray-500 text-xs flex items-center">
                            No files open
                          </div>
                        )}
                      </div>{" "}
                      {activeFile ? (
                        <SyntaxHighlighter
                          language={detectLanguage(activeFile)}
                          style={vs2015}
                          customStyle={{
                            margin: 0,
                            padding: "1rem",
                            height: "100%",
                            backgroundColor: "#1E1E1E",
                            overflow: "auto",
                            fontSize: "14px",
                            lineHeight: "1.5",
                          }}
                          showLineNumbers={true}
                          lineNumberStyle={{
                            textAlign: "right",
                            color: "#858585",
                            paddingRight: "1rem",
                            marginRight: "1rem",
                            borderRight: "1px solid #404040",
                            minWidth: "2.5rem",
                          }}
                          wrapLines={true}
                        >
                          {componentSources[activeFile] ||
                            `// Source code not available for ${activeFile}`}
                        </SyntaxHighlighter>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <div className="text-center">
                            <Files className="mx-auto w-12 h-12 mb-4 opacity-30" />
                            <p>Select a file to view its contents</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Terminal Panel */}
                    {isTerminalOpen && (
                      <div className="bg-[#1e1e1e] overflow-hidden flex flex-col h-full border-t border-[#2b2b2b] rounded-lg">
                        <div className="flex bg-[#252526] border-b border-[#2b2b2b] text-xs items-center justify-between">
                          <div className="flex space-x-1 px-2 py-1">
                            <button
                              className={`px-2 py-1 ${
                                activeTab === "terminal"
                                  ? "text-white border-b border-[#007acc]"
                                  : "text-gray-400"
                              }`}
                              onClick={() => setActiveTab("terminal")}
                            >
                              TERMINAL
                            </button>
                          </div>
                          <button
                            className="mr-2 text-gray-400 hover:text-white"
                            onClick={() => setIsTerminalOpen(false)}
                          >
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="p-2 text-[#cccccc] font-mono text-sm bg-[#1e1e1e] flex-1 overflow-auto">
                          {output.map((line, index) => (
                            <div
                              key={index}
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                          <div className="flex items-center">
                            <span className="text-green-500">➜</span>
                            <span className="text-blue-400 ml-1">
                              {" "}
                              ~/portfolio
                            </span>
                            <input
                              type="text"
                              className="bg-transparent outline-none border-none text-white ml-2 w-full"
                              value={command}
                              onChange={(e) => setCommand(e.target.value)}
                              onKeyDown={handleCommand}
                              autoFocus
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Split>
                </div>
              </Split>
            </>
          )}
        </div>

        {/* Status bar */}
        <div className="bg-[#007acc] h-6 flex items-center justify-between text-white text-xs px-2 custom-scrollbar">
          <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar">
            <span className="pl-2">main*</span>
            <span className="px-2 flex items-center">
              <CircleUserRound className="w-3 h-3 mr-1" /> master
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 overflow-x-auto custom-scrollbar">
            <span>Ln 3, Col 1</span>
            <span>Spaces: 2</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #1e1e1e;
        }

        /* Add responsive transitions */
        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        /* Fix height in mobile view */
        @media (max-width: 768px) {
          .gutter {
            display: none !important;
          }
        }
      `}</style>
      <AssistantButton />
    </div>
  );
};

export default PortfolioLayout;
