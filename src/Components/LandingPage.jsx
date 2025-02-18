import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, CodeSquare } from "lucide-react";

const roles = [
  {
    title: "MERN Stack Developer",
    desc: "Passionate about building scalable web applications using the MERN stack. Crafting efficient solutions that drive innovation."
  },
  {
    title: "Open Source Contributor",
    desc: "Contributing to the developer community through open source projects. Building tools that make the web better for everyone."
  },
  {
    title: "Tech Enthusiast",
    desc: "Always exploring new technologies and staying current with the latest trends in web development and software architecture."
  },
  {
    title: "SIH Finalist",
    desc: "Recognized for innovative problem-solving in Smart India Hackathon. Creating impactful solutions for real-world challenges."
  }
];

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let tempText = "";

    const interval = setInterval(() => {
      if (index < text.length) {
        tempText += text[index];
        setDisplayText(tempText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayText}
      <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-blink" />
    </span>
  );
};

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [index]);

  const currentRole = roles[index]; // Guaranteed to be valid now

  return (
 
  
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Anjali Sachan
        </motion.div>

        <div className="h-24 flex items-center justify-center mt-6">
          <motion.h2
            key={`role-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-200 tracking-wide"
          >
            {isTyping ? <TypewriterText text={currentRole.title} /> : currentRole.title}
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 mt-6 max-w-2xl mx-auto text-center text-xl leading-relaxed"
          >
            {currentRole.desc}
          </motion.p>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg 
                   rounded-full shadow-xl hover:shadow-cyan-400/30 transition-all"
        >
          Explore My Work
        </motion.button>

        <div className="flex gap-8 mt-8 justify-center">
          {[
            { icon: Github, href: "https://github.com/ANJSACHAN" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/anjalisachan/" },
            { icon: CodeSquare, href: "https://leetcode.com/u/Anjali_Sachan_/" },
          ].map((social, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.1 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" size={32} />
            </motion.a>
          ))}
        </div>
      </div>
     
  
 
    
 
  );
};

export default LandingPage;
