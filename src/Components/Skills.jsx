import { Layout, Server, Database, Code, Terminal, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    description: "Building modern, responsive, and performant user interfaces",
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["Node.js", "Express.js"],
    description: "Developing scalable backend services and REST APIs",
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["MongoDB", "MySQL", "Elasticsearch", "Redis"],
    description:
      "Managing and optimizing database storage for web applications",
  },

  {
    category: "Programming",
    icon: <Code className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["Java", "JavaScript", "C", "TypeScript"],
    description:
      "Strong problem-solving skills with multiple programming languages",
  },
  {
    category: "Tools & Workflow",
    icon: <Terminal className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["Git", "VS Code", "Postman", "Linux"],
    description: "Working efficiently with development tools and workflows",
  },
  {
    category: "Competitive Programming",
    icon: <Brain className="w-8 h-8 mb-4 text-cyan-400" />,
    items: ["LeetCode (300+ problems solved)", "Problem-Solving"],
    description: "Enhancing algorithmic thinking and coding efficiency",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Skills() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-6 font-pacifico text-white"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto font-satisfy"
        >
          A comprehensive overview of my technical expertise
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <motion.div
              className="flex flex-col items-center mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <div className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-satisfy mb-2 text-center text-white group-hover:text-cyan-400 transition-colors">
                {skill.category}
              </h3>
            </motion.div>

            <p className="text-gray-300 text-lg text-center mb-6 font-satisfy">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {skill.items.map((item, itemIndex) => (
                <motion.span
                  key={itemIndex}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-lg font-satisfy bg-gray-800/50 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
