import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const InfiniteScrollComponent = ({ a, b, c, d, e, f, g, h, i, j }) => {
  const [duplicateCount, setDuplicateCount] = useState(2);
  const items = [a, b, c, d, e, f, g, h, i, j];

  // Calculate the total width of one set of items
  useEffect(() => {
    const calculateDuplicates = () => {
      const screenWidth = window.innerWidth;
      const itemWidth = 200; // Approximate width of each item including margins
      const itemsNeededForScreen = Math.ceil(screenWidth / itemWidth);
      // We want at least 2 sets of items to ensure smooth scrolling
      const minimumDuplicates = Math.max(2, Math.ceil(itemsNeededForScreen / items.length));
      setDuplicateCount(minimumDuplicates);
    };

    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, [items.length]);

  return (
    <div className="relative font-satisfy overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 py-5">
        <div className="text-center">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex items-center justify-center shrink-0"
            >
              {/* First set of items */}
              {[...Array(duplicateCount)].map((_, dupeIndex) => (
                <div key={dupeIndex} className="flex items-center justify-center shrink-0">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${dupeIndex}-${index}`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5 
                      }}
                      className="mx-8 text-white font-satisfy tracking-wide text-2xl 
                        bg-gray-900/50 backdrop-blur-sm
                        inline-block px-4 py-2 rounded-xl
                        border border-cyan-500/20
                        shadow-lg shadow-cyan-500/10
                        hover:border-cyan-500/40 
                        hover:bg-cyan-500/10
                        transition-all duration-300
                        whitespace-nowrap"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex items-center justify-center shrink-0"
            >
              {[...Array(duplicateCount)].map((_, dupeIndex) => (
                <div key={dupeIndex} className="flex items-center justify-center shrink-0">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${dupeIndex}-${index}`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5 
                      }}
                      className="mx-8 text-white font-satisfy tracking-wide text-2xl 
                        bg-gray-900/50 backdrop-blur-sm
                        inline-block px-4 py-2 rounded-xl
                        border border-cyan-500/20
                        shadow-lg shadow-cyan-500/10
                        hover:border-cyan-500/40 
                        hover:bg-cyan-500/10
                        transition-all duration-300
                        whitespace-nowrap"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollComponent;