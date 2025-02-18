import PropTypes from 'prop-types';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LegalEase Website',
    description: 'Developed a groundbreaking e-marketplace to revolutionize the legal service industry in India by providing a centralized platform for advocates, arbitrators, mediators, notaries, and document writers to extend their services to citizens.',
    technologies: 'MERN Stack',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2942',
    projectUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ui-widgets-kit',
    description: 'Built a customizable React UI component library with Alert, FilterComponent, TextInput, Button, Select, Date Time Picker, and more. Implemented a custom Webpack configuration for optimized bundling and efficient module resolution.',
    technologies: 'TypeScript, React, Tailwind CSS',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2940',
    projectUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ReactSphere',
    description: 'Developed a React-inspired library with a custom reconciliation algorithm for efficient DOM updates. Built with TypeScript for type safety and compiled using Babel for cross-browser support.',
    technologies: 'TypeScript, Babel',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2940',
    projectUrl: '#',
    githubUrl: '#',
  },
];

const ContentSection = ({ title, description, technologies, projectUrl, githubUrl }) => (
  <motion.div
    className="flex-1 space-y-4 px-5 text-left pt-4 md:pt-10" 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-white font-playwrite mb-2 text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-gray-300">{description}</p>
    <p className="text-sm text-gray-400">{technologies}</p>
    <div className="flex gap-4 items-start">
      <motion.a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ExternalLink size={20} />
        <span>Live Demo</span>
      </motion.a>
      <motion.a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex gap-2 text-gray-400 hover:text-gray-300 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Github size={20} />
        <span>Source Code</span>
      </motion.a>
    </div>
  </motion.div>
);


ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

const LaptopSection = ({ imageUrl, title }) => (
  <motion.div
    className="flex-1 w-full max-w-[400px] mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div className="relative mx-auto w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-cyan-400/40 blur-3xl rounded-2xl transform scale-105 -z-10" />
      <div className="relative rounded-xl bg-gray-900 p-3 shadow-xl border border-gray-700/50 backdrop-blur-xl overflow-hidden">
        <div className="absolute left-3 top-3 flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 shadow-md"></div>
        </div>
        <motion.div className="overflow-hidden rounded-lg border border-gray-700/50" whileHover={{ scale: 1.02 }}>
          <div className="relative group">
            <img src={imageUrl} alt={title} className="w-full h-[250px] object-cover transition-all duration-300 group-hover:brightness-110 rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-70" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[50%] h-4 bg-gray-800 rounded-b-xl shadow-md"></div>
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[40%] h-2 bg-gray-700 rounded-b-lg shadow-inner"></div>
    </motion.div>
  </motion.div>
);

LaptopSection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Projects = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
        <motion.h2 className="text-5xl font-extrabold text-white tracking-wide">My Projects</motion.h2>
      </motion.div>
      <div className="flex flex-col gap-12 md:gap-16">
        {projects.map((project, index) => (
          <div key={project.title} className={`flex flex-col items-center gap-6 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <LaptopSection {...project} />
            <ContentSection {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;