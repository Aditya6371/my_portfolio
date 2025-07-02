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
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-md overflow-hidden">
              <img
                src={profilePic}
                alt="Aditya Ranjan Das"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transform transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-md translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 md:group-hover:translate-x-4 md:group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
