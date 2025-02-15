import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Crown, AlignCenterVertical as Certificate } from 'lucide-react';

const achievements = [
    {
        id: 1,
        title: "Software Engineer Intern at Mediology Pvt. Ltd.",
        description: "Currently working as a software engineer intern, gaining hands-on experience in web development.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2940",
        icon: "trophy",
        category: "Internship"
      },
      {
        id: 2,
        title: "Smart India Hackathon Finalist",
        description: "Advanced to the grand finale in the national-level SIH competition with an innovative AI-based solution.",
        image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=2940",
        icon: "award",
        category: "Hackathons"
      },
      {
        id: 3,
        title: "NPTEL Certification in Machine Learning",
        description: "Successfully completed an advanced certification course in machine learning from NPTEL.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2940",
        icon: "medal",
        category: "Certifications"
      },
  {
    id: 4,
    title: "Technical Paper Presentation",
    description: "Published and presented research paper at international conference",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2940",
    icon: "star",
    category: "Academic"
  },
  {
    id: 5,
    title: "Leadership Excellence",
    description: "Led college technical club and organized successful events",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940",
    icon: "crown",
    category: "Leadership"
  },
  {
    id: 6,
    title: "Web Development Certification",
    description: "Completed advanced certification in full-stack development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2940",
    icon: "certificate",
    category: "Certifications"
  }
];

const getIcon = (iconName) => {
  const iconProps = { size: 24, className: "text-cyan-400" };
  const icons = {
    trophy: <Trophy {...iconProps} />,
    award: <Award {...iconProps} />,
    medal: <Medal {...iconProps} />,
    star: <Star {...iconProps} />,
    crown: <Crown {...iconProps} />,
    certificate: <Certificate {...iconProps} />
  };
  return icons[iconName] || null;
};

const Gallery = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements & Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-gray-900/90 p-2 rounded-full backdrop-blur-sm border border-gray-700/50">
                  {getIcon(achievement.icon)}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-3 text-sm text-cyan-400 bg-cyan-400/10 rounded-full">
                  {achievement.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300">
                  {achievement.description}
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
