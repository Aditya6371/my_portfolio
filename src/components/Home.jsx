import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

function Home() {
  const handleResumeClick = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent-secondary font-mono text-base tracking-wide"
          >
            {personalInfo.greeting}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-secondary flex items-center gap-2"
          >
            <span className="text-accent-secondary">&gt;</span>
            {personalInfo.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <div className="space-y-6 pt-4">
            <div className="flex justify-center lg:justify-start space-x-6">
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.github}
                className="text-2xl text-text-secondary hover:text-accent-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.linkedin}
                className="text-2xl text-text-secondary hover:text-accent-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href={socialLinks.email}
                className="text-2xl text-text-secondary hover:text-accent-secondary transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeClick}
              className="px-8 py-3 bg-transparent border-2 border-accent-secondary text-accent-secondary rounded-md hover:bg-accent-secondary/10 transition-all duration-300 font-mono text-sm md:text-base font-semibold"
            >
              View Resume
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Techy Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-accent-secondary/30 group-hover:border-accent-secondary/60 transition-all duration-500 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-accent-primary/20 group-hover:border-accent-primary/50 transition-all duration-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Main profile container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent-primary/50 shadow-[0_0_30px_rgba(100,255,218,0.3)] group-hover:shadow-[0_0_50px_rgba(100,255,218,0.5)] transition-all duration-500 relative z-10">
              <div className="absolute inset-0 bg-accent-primary/10 mix-blend-overlay z-20 pointer-events-none"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent w-full h-2 animate-[scan_2s_linear_infinite] opacity-50 z-30"></div>
            </div>

            {/* Tech decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-secondary/60 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-secondary/60 rounded-bl-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
