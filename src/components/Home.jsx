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
            {/* Animated background circles */}
            <div className="absolute inset-0 -m-4 md:-m-8">
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-2xl group-hover:from-[#64ffda]/20 group-hover:to-[#64ffda]/10 transition-all duration-700"></div>
              <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full bg-gradient-to-l from-blue-500/10 to-purple-500/5 blur-xl group-hover:from-blue-500/15 group-hover:to-purple-500/10 transition-all duration-700 delay-100"></div>
            </div>

            {/* Main profile container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88">
              {/* Hexagonal mask effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#64ffda]/20 via-transparent to-blue-500/20 p-0.5 group-hover:from-[#64ffda]/30 group-hover:to-blue-500/30 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a192f] relative">
                  <img
                    src={profilePic}
                    alt="Aditya Ranjan Das"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/20 via-transparent to-transparent group-hover:from-transparent transition-all duration-500"></div>
                </div>
              </div>

              {/* Rotating orbital rings */}
              <div className="absolute inset-0 rounded-full border border-[#64ffda]/30 group-hover:border-[#64ffda]/50 transition-all duration-500 pulse-ring"></div>
              <div className="absolute inset-[-8px] rounded-full border border-[#64ffda]/20 group-hover:border-[#64ffda]/40 transition-all duration-500 orbital-ring"></div>
              <div className="absolute inset-[-16px] rounded-full border border-[#64ffda]/10 group-hover:border-[#64ffda]/30 transition-all duration-500 orbital-ring-reverse"></div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#64ffda] rounded-full float-particle opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full float-particle opacity-50 group-hover:opacity-80 transition-opacity duration-300" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-12 left-4 w-1 h-1 bg-purple-400 rounded-full float-particle opacity-40 group-hover:opacity-70 transition-opacity duration-300" style={{ animationDelay: '4s' }}></div>
              <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-[#64ffda] rounded-full float-particle opacity-50 group-hover:opacity-90 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>

              {/* Scanning line effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64ffda] to-transparent animate-ping"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* Holographic corner indicators */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" style={{ transitionDelay: '0.1s' }}></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" style={{ transitionDelay: '0.2s' }}></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" style={{ transitionDelay: '0.3s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
