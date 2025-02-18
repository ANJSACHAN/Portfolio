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
import Mediology from "./assets/mediology.png";
import SIH from "./assets/grp_sih.png";
import ML from "./assets/ml.png";
import SIH_Certificate from "./assets/sih.png"
import BlockChain from "./assets/blockchain.png"
import Coding from "./assets/coding.png"
function App() {

  const items = [
  
    { image: Mediology, text: 'SDE Intern at Mediology' },
    { image: SIH_Certificate, text: 'SIH Certificate' },
    { image: BlockChain, text: 'Participated in Blockchain Event' },
    { image: Coding, text: 'Participated in coding Events' },
    { image: ML, text: 'Machine Learning Certificate' },
    { image: SIH, text: 'Smart India Hackathon' },
  ]
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

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-blue-900/20 to-purple-900/15 animate-gradient-x" />
      <section id="landingpage" className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <LandingPage />
          </div>
        </div>
        <div>
          <InfiniteScrollComponent
            a="React"
            b="Java"
            c="Typescript"
            d="Javascript"
            e="Development"
            f="Coding"
            g="Nptel"
            h="SDE Intern"
            i="MERN"
            j="Linux"
          />
        </div>
      </section>

      <section id="skills" className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="relative z-10  mx-auto px-4 text-center">
            <Skills />
          </div>
        </div>
        <div>
          <InfiniteScrollComponent
             a="React"
             b="Java"
             c="Typescript"
             d="Javascript"
             e="Development"
             f="Coding"
             g="Nptel"
             h="SDE Intern"
             i="MERN"
             j="Linux"
          />
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="relative z-10  mx-auto px-4 text-center">
            <Projects />
          </div>
        </div>
        <div>
          <InfiniteScrollComponent
            a="React"
            b="Java"
            c="Typescript"
            d="Javascript"
            e="Development"
            f="Coding"
            g="Nptel"
            h="SDE Intern"
            i="MERN"
            j="Linux"
          />
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex flex-col py-16">
        <h2 className="text-5xl font-extrabold text-white tracking-wide text-center  ">
          Achievements & Activities 
        </h2>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery items={items}  bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <InfiniteScrollComponent
           a="React"
           b="Java"
           c="Typescript"
           d="Javascript"
           e="Development"
           f="Coding"
           g="Nptel"
           h="SDE Intern"
           i="MERN"
           j="Linux"
        />
      </section>

      <section id="contact" className="min-h-screen flex flex-col">
        <div className="items-center justify-center">
          <div className="">
            <Contact />
          </div>
        </div>
        <div className="pt-10">
          <InfiniteScrollComponent
            a="React"
            b="Java"
            c="Typescript"
            d="Javascript"
            e="Development"
            f="Coding"
            g="Nptel"
            h="SDE Intern"
            i="MERN"
            j="Linux"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
