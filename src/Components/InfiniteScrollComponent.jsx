import{ useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InfiniteScrollComponent = ({ a, b, c, d, e, f, g, h, i, j }) => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="relative font-satisfy">
      <main className="relative overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6 py-5">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                {[a, b, c, d, e, f, g, h, i, j].map((item, index) => (
                  <li key={index}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        y: -5 
                      }}
                      className="text-white font-satisfy tracking-wide text-2xl 
                        bg-gray-900/50 backdrop-blur-sm
                        inline-block px-4 py-2 rounded-xl
                        border border-cyan-500/20
                        shadow-lg shadow-cyan-500/10
                        hover:border-cyan-500/40 
                        hover:bg-cyan-500/10
                        transition-all duration-300"
                    >
                      {item}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};



export default InfiniteScrollComponent;