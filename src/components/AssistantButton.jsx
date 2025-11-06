import { useState, useEffect, useRef } from "react";
import {
  Clipboard,
  Star,
  XIcon,
  BotIcon,
  HomeIcon,
  UserIcon,
  CodeIcon,
  FolderIcon,
  MailIcon,
  ChevronRightIcon,
  CheckIcon,
  HelpCircleIcon,
  TerminalIcon,
  BriefcaseIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AssistantButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [showHint, setShowHint] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([]);
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const terminalInputRef = useRef(null);
  const [animation, setAnimation] = useState(false);

  const commands = [
    {
      label: "Open Full Portfolio",
      command: "all",
      action: () => openSection("all"),
      icon: <HomeIcon className="w-4 h-4 mr-2" />,
    },
    {
      label: "Open Hero Section",
      command: "hero",
      action: () => openSection("hero"),
      icon: <Star className="w-4 h-4 mr-2" />,
    },
    {
      label: "Open About Me Section",
      command: "aboutme",
      action: () => openSection("aboutme"),
      icon: <UserIcon className="w-4 h-4 mr-2" />,
    },
    {
      label: "Open Skills Section",
      command: "skills",
      action: () => openSection("skills"),
      icon: <CodeIcon className="w-4 h-4 mr-2" />,
    },
    {
      label: "Open Projects Section",
      command: "projects",
      action: () => openSection("projects"),
      icon: <FolderIcon className="w-4 h-4 mr-2" />,
    },
    {
      label: "Open Contact Section",
      command: "contact",
      action: () => openSection("contact"),
      icon: <MailIcon className="w-4 h-4 mr-2" />,
    },
  ];

  const helpCommands = [
    { command: "help", description: "Show available commands" },
    { command: "clear", description: "Clear terminal history" },
    { command: "all", description: "Navigate to full portfolio" },
    { command: "hero", description: "Navigate to hero section" },
    { command: "aboutme", description: "Navigate to about me section" },
    { command: "skills", description: "Navigate to skills section" },
    { command: "projects", description: "Navigate to projects section" },
    { command: "contact", description: "Navigate to contact section" },
    { command: "terminal", description: "Toggle terminal interface" },
  ];

  const openSection = (section) => {
    navigate(`/${section}`);
    setIsOpen(false);
    setShowHint(false); // Hide hint after navigation
    addToTerminal(`Navigating to /${section}...`);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);

    // Reset copied status after 2 seconds
    setTimeout(() => {
      setCopiedCommand(null);
    }, 2000);
  };

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const toggleAssistant = () => {
    setAnimation(true);
    setIsOpen(!isOpen);
    setShowHint(false); // Hide hint when button is clicked
    setTimeout(() => setAnimation(false), 300);
  };

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal);
    if (!showTerminal) {
      setTimeout(() => {
        terminalInputRef.current?.focus();
      }, 100);
    }
  };

  const addToTerminal = (message) => {
    setTerminalHistory((prev) => [...prev, message]);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();

    // Add command to history
    addToTerminal(`> ${cmd}`);

    // Process command
    if (cmd === "help") {
      addToTerminal("Available commands:");
      helpCommands.forEach((c) => {
        addToTerminal(`  ${c.command.padEnd(10)} - ${c.description}`);
      });
    } else if (cmd === "clear") {
      setTerminalHistory([]);
    } else if (cmd === "terminal") {
      addToTerminal("Toggling terminal interface...");
      setTimeout(() => toggleTerminal(), 500);
    } else {
      const foundCommand = commands.find((c) => c.command === cmd);
      if (foundCommand) {
        addToTerminal(`Executing: ${cmd}`);
        foundCommand.action();
      } else {
        addToTerminal(
          `Command not found: ${cmd}. Type 'help' for available commands.`
        );
      }
    }

    // Clear input
    setTerminalInput("");
  };

  // Auto-hide hint after 10 seconds
  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showHint]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-4 z-50">
      {/* Floating hint */}
      {showHint && (
        <div className="absolute bottom-16 right-2 animate-bounce-subtle">
          <div className="relative">
            {/* Speech bubble */}
            <div className="bg-gradient-to-r from-[#007acc] to-[#0069b3] text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center">
                <HelpCircleIcon className="w-4 h-4 mr-2" />
                <span className="font-medium">Portfolio Guide</span>
              </div>
              <div className="text-xs mt-1 max-w-48">
                Click here to navigate through the portfolio
              </div>
            </div>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#0069b3]"></div>
          </div>
        </div>
      )}

      {/* Terminal Interface */}
      {showTerminal && (
        <div className="absolute bottom-16 right-0 w-80 h-64 bg-[#1e1e1e] rounded-lg shadow-xl overflow-hidden border border-[#3e3e42] animate-fadeIn">
          <div className="flex justify-between items-center bg-[#323233] px-3 py-2">
            <div className="flex items-center">
              <TerminalIcon className="w-4 h-4 mr-2 text-[#007acc]" />
              <span className="text-xs font-semibold text-white">
                Portfolio Terminal
              </span>
            </div>
            <button
              onClick={toggleTerminal}
              className="p-1 rounded-full hover:bg-[#3e3e42] transition-colors duration-200"
            >
              <XIcon className="w-3 h-3 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="p-3 h-48 overflow-y-auto text-gray-300 font-mono text-xs">
            {terminalHistory.length === 0 ? (
              <div className="text-gray-500">
                Type 'help' to see available commands
              </div>
            ) : (
              terminalHistory.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap mb-1">
                  {line}
                </div>
              ))
            )}

            <form
              onSubmit={handleTerminalSubmit}
              className="flex items-center mt-2"
            >
              <span className="text-green-500 mr-1">{">"}</span>
              <input
                ref={terminalInputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}

      {/* Animated assistant button */}
      <button
        ref={buttonRef}
        className={`bg-gradient-to-r from-[#007acc] to-[#0058b7] p-4 rounded-full text-white shadow-lg hover:from-[#0058b7] hover:to-[#003f82] transition-all duration-300 ${
          animation ? "scale-110" : "scale-100"
        } ${
          showHint ? "ring-4 ring-blue-300 ring-opacity-50 animate-pulse" : ""
        }`}
        onClick={toggleAssistant}
      >
        <BotIcon className="w-6 h-6" />
      </button>

      {/* Command list popup with animation */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute bottom-1 right-0 bg-gradient-to-b from-[#2d2d30] to-[#252526] text-white rounded-lg shadow-xl p-5 w-80 border border-[#3e3e42] animate-fadeIn"
          style={{
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div className="flex justify-between items-center mb-4 border-b border-[#3e3e42] pb-2">
            <div className="flex items-center">
              <BotIcon className="w-5 h-5 mr-2 text-[#007acc]" />
              <span className="text-sm font-semibold">Portfolio Guide</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-[#3e3e42] transition-colors duration-200"
            >
              <XIcon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Instruction message with improved styling */}
          <div className="mb-4 bg-[#1e1e1e] p-3 rounded border-l-2 border-[#007acc]">
            <p className="text-xs text-gray-300 mb-2 font-medium">
              To navigate to a section:
            </p>
            <ul className="text-xs text-gray-300 space-y-1 pl-4">
              <li className="flex items-start">
                <ChevronRightIcon className="w-3 h-3 mr-1 mt-0.5 text-[#007acc]" />
                <span>Click the "Navigate" button next to each section</span>
              </li>
              <li className="flex items-start">
                <ChevronRightIcon className="w-3 h-3 mr-1 mt-0.5 text-[#007acc]" />
                <span>
                  Copy the command using the clipboard icon and paste it in the
                  terminal
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-2">
            <span className="text-xs font-medium text-gray-400">
              AVAILABLE SECTIONS:
            </span>
          </div>

          <ul className="space-y-1">
            {commands.map(({ label, command, action, icon }, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 hover:bg-[#37373D] rounded transition-colors duration-150"
              >
                <div className="flex items-center">
                  {icon}
                  <span className="text-sm">{label}</span>
                </div>
                <div className="flex items-center">
                  {/* Copy button with feedback */}
                  <button
                    className={`text-gray-400 hover:text-white mr-2 p-1 rounded-full ${
                      copiedCommand === command
                        ? "bg-green-600"
                        : "hover:bg-[#3e3e42]"
                    } transition-colors duration-200`}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(command);
                    }}
                    title="Copy command"
                  >
                    {copiedCommand === command ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      <Clipboard className="w-4 h-4" />
                    )}
                  </button>

                  {/* Navigate button */}
                  <button
                    className="bg-[#007acc] hover:bg-[#0069b3] text-white text-xs py-1 px-2 rounded transition-colors duration-200 flex items-center"
                    onClick={action}
                  >
                    <span>Navigate</span>
                    <ChevronRightIcon className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Add a footer */}
          <div className="mt-4 pt-2 border-t border-[#3e3e42] text-center text-xs text-gray-400">
            Type{" "}
            <span className="bg-[#1e1e1e] px-1 py-0.5 rounded text-gray-300 font-mono">
              help
            </span>{" "}
            in terminal for more commands
          </div>
        </div>
      )}

      {/* Add CSS animation for subtle bounce */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AssistantButton;
