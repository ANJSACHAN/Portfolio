import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_392acvh",
        "template_wjeen0k",
        form.current,
        "M87t2ulude_dctLCB"
      )
      .then(
        () => {
          setFormSubmitted(true);
        },
        () => {
          setFormError(true);
        }
      );
  };

  useEffect(() => {
    if (formSubmitted && form.current) {
      setTimeout(() => {
        form.current.reset();
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);


  
  return (
    <div className="relative z-10 container mx-auto px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-extrabold text-white tracking-wide mb-12 "
        >
          {"Let's Connect"}
        </motion.h2>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          {formError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-rose-500 mb-6"
            >
              Something went wrong! Please try again later.
            </motion.p>
          )}

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center font-playwrite text-gray-300 text-xl py-16">
                {"Thank you for your message! I'll get back to you shortly!"}
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group border-b border-gray-600 focus-within:border-cyan-400 transition-colors duration-200"
                >
                  <input
                    type="text"
                    autoComplete="off" 
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full bg-transparent text-gray-200 text-2xl font-satisfy p-2 focus:outline-none "
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group border-b border-gray-600 focus-within:border-cyan-400 transition-colors duration-200"
                >
                  <input
                    type="email"
                    autoComplete="off" 
                    name="email"
                    required
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    className="w-full bg-transparent text-gray-200 text-2xl font-satisfy p-2 focus:outline-none "
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group border-b border-gray-600 focus-within:border-cyan-400 transition-colors duration-200"
                >
                  <textarea
                    name="message"
                    autoComplete="off" 
                    required
                    rows="4"
                    placeholder="Your Message"
                    className="w-full bg-transparent text-gray-200 text-2xl font-satisfy p-2 focus:outline-none "
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-xl rounded-lg font-bold text-white font-playwrite mb-2 text-center text-white  transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/ANJSACHAN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/anjalisachan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Contact;
