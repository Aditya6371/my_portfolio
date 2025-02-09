import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="text-[#64ffda] font-mono">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Aditya Ranjan Das
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-400">
            I build things for mobile and web.
          </h2>
          <p className="text-lg text-gray-400 max-w-lg">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-6 pt-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/Aditya6371"
              className="text-2xl hover:text-[#64ffda] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/in/aditya-ranjan-das"
              className="text-2xl hover:text-[#64ffda] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:adityadas9439@gmail.com"
              className="text-2xl hover:text-[#64ffda] transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="w-150 h-150 rounded-md overflow-hidden">
              <img
                src={profilePic}
                alt="Aditya Ranjan Das"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-md translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
