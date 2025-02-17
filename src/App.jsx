import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import CircularGallery from "./Components/CircularGallery";
import InfiniteScrollComponent from "./Components/InfiniteScrollComponent";
import Projects from "./Components/Projects";
import LandingPage from "./Components/LandingPage";

import SplashCursor from "./Components/SplashCursor";

import Navbar from "./Components/Navbar";

function App() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight);
    };

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <SplashCursor />
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * pageHeight; // Uses full page height
          const midX = Math.random() * 100;
          const midY = Math.random() * pageHeight;
          const endX = Math.random() * 100;
          const endY = Math.random() * pageHeight;

          return (
            <motion.div
              key={i}
              initial={{ x: `${startX}vw`, y: `${startY}px` }}
              animate={{
                x: [`${midX}vw`, `${endX}vw`, `${startX}vw`],
                y: [`${midY}px`, `${endY}px`, `${startY}px`],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-32 h-32 bg-cyan-500 opacity-30 rounded-full blur-2xl"
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 animate-gradient-x" />

      <section  className="min-h-screen">
      <LandingPage />
     
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
        <InfiniteScrollComponent
          a="Hackathons"
          b="Coding"
          c="Contests"
          d="Projects"
          e="Development"
          f="Lectures"
          g="Nptel"
          h="Interviews"
          i="Tests"
          j="Skills"
        />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
        <InfiniteScrollComponent
          a="Hackathons"
          b="Coding"
          c="Contests"
          d="Projects"
          e="Development"
          f="Lectures"
          g="Nptel"
          h="Interviews"
          i="Tests"
          j="Skills"
        />
      </section>

      <section id="gallery" className="min-h-screen">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements & Activities
        </h2>
      <div style={{ height: '600px', position: 'relative' }}>
   
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
        <InfiniteScrollComponent
          a="Hackathons"
          b="Coding"
          c="Contests"
          d="Projects"
          e="Development"
          f="Lectures"
          g="Nptel"
          h="Interviews"
          i="Tests"
          j="Skills"
        />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;
