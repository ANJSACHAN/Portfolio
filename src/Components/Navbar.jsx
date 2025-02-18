import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const sections = [
  { id: "skills", label: "Skills", icon: "S" },
  { id: "projects", label: "Projects", icon: "P" },
  { id: "gallery", label: "Achievements", icon: "A" },
  { id: "contact", label: "Contact", icon: "C" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
  
      if (scrollPosition < 100) {
        // Reset to home when at the top
        setActiveSection("home");
        return;
      }
  
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            return; // Stop checking further sections
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Vertical Navbar */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed top-1/2 left-4 md:left-8 z-50 flex flex-col space-y-6 
    hidden md:block" // Add 'hidden' for mobile and 'md:block' for tablet/desktop
        style={{ top: "35%", transform: "translateY(-50%)" }} // Vertically centered
      >
        {sections.map(({ id, label, icon }) => (
          <div key={id} className="relative group">
            <motion.button
              onClick={() => scrollToSection(id)}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
          ${
            activeSection === id
              ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-lg ring-1 ring-cyan-400 ring-offset-2 ring-offset-gray-900" // Gradient on active
              : "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
          }`} // Default grey
            >
              <span className="text-lg font-bold">{icon}</span>
            </motion.button>

            {/* Tooltip Animation */}
            <AnimatePresence>
              {hoveredSection === id && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg
              shadow-lg backdrop-blur-sm border border-gray-700"
                >
                  <div className="relative">
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-800" />
                    {label}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-500 
              shadow-lg shadow-cyan-500/20 text-white backdrop-blur-sm 
              hover:bg-cyan-600 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
