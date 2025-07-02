import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1mFTE_MPDoPUbykQ3UHHJ8VWC85U8dIbL/view?usp=share_link', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 md:space-y-6 order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64ffda] font-mono text-sm md:text-base"
          >
            Hi, my name is
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-300 leading-tight"
          >
            Aditya Ranjan Das
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-400 leading-tight"
          >
            I build things for mobile and web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
          >
            I'm a software developer specializing in building exceptional digital experiences.
            Currently focused on building accessible, human-centered products.
          </motion.p>

          <div className="space-y-4 md:space-y-6 pt-2">
            <div className="flex space-x-4 md:space-x-6">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/Aditya6371"
                className="text-xl md:text-2xl text-gray-300 hover:text-[#64ffda] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://www.linkedin.com/in/aditya-ranjan-das"
                className="text-xl md:text-2xl text-gray-300 hover:text-[#64ffda] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:adityadas9439@gmail.com"
                className="text-xl md:text-2xl text-gray-300 hover:text-[#64ffda] transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -2 }}
              onClick={handleResumeClick}
              className="px-4 md:px-6 py-2 md:py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300 font-mono text-sm md:text-base"
            >
              View Resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            {/* Profile image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88">
              {/* Image frame with gradient border */}
              <div className="relative w-full h-full p-1 bg-gradient-to-br from-[#64ffda] via-[#64ffda]/50 to-transparent rounded-2xl group-hover:from-[#64ffda] group-hover:to-[#64ffda]/70 transition-all duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0a192f]">
                  <img
                    src={profilePic}
                    alt="Aditya Ranjan Das"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-110 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Floating accent border */}
              <div className="absolute inset-0 border-2 border-[#64ffda]/30 rounded-2xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 md:translate-x-6 md:translate-y-6 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 md:group-hover:translate-x-3 md:group-hover:translate-y-3 group-hover:border-[#64ffda]/50 transition-all duration-500"></div>

              {/* Corner accents */}
              <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-t-2 border-[#64ffda] group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-300"></div>
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#64ffda] group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-300"></div>
              <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 border-l-2 border-b-2 border-[#64ffda] group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-300"></div>
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 border-r-2 border-b-2 border-[#64ffda] group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
