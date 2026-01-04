import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { majorProjects, minorProjects } from '../data/portfolioData';

function Projects() {

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Major Projects */}
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#64ffda]/40 via-[#64ffda]/20 to-[#64ffda]/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                {/* Main card */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#112240]/95 to-[#0a192f]/95 backdrop-blur-sm border border-[#64ffda]/20 group-hover:border-[#64ffda]/40 overflow-hidden transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_20px_60px_-15px_rgba(100,255,218,0.3)]">

                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-6 md:p-8 lg:p-10">
                    <div className="grid lg:grid-cols-[auto_1fr] gap-6 md:gap-8 lg:gap-10">

                      {/* Icon Section - Left Side */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                          {/* Glowing background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>

                          {/* Icon container */}
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#112240] to-[#0a192f] border-2 border-[#64ffda]/30 group-hover:border-[#64ffda]/60 flex items-center justify-center overflow-hidden transition-all duration-500"
                          >
                            {/* Pulsing effect - Removed */}

                            <img
                              src={project.icon}
                              alt={project.title}
                              className="relative z-10 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain filter drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content Section - Right Side */}
                      <div className="space-y-4 md:space-y-5">

                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/30">
                          <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
                          <span className="text-[#64ffda] font-mono text-xs md:text-sm tracking-wider uppercase">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-[#ccd6f6] to-[#8892b0] bg-clip-text text-transparent leading-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-[#8892b0] leading-relaxed max-w-3xl">
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2 md:gap-2.5 pt-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono text-[#64ffda] bg-[#0a192f]/80 border border-[#64ffda]/20 hover:border-[#64ffda]/50 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Store Links */}
                        <div className="flex gap-3 md:gap-4 pt-2">
                          {project.playStore && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.playStore}
                              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0a192f]/80 border border-[#64ffda]/20 hover:border-[#64ffda]/50 text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Play Store"
                            >
                              <FaGooglePlay className="text-xl md:text-2xl" />
                            </motion.a>
                          )}
                          {project.appStore && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.appStore}
                              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0a192f]/80 border border-[#64ffda]/20 hover:border-[#64ffda]/50 text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="App Store"
                            >
                              <FaAppStore className="text-xl md:text-2xl" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minor Projects */}
          <div className="flex items-center gap-4 mb-8 md:mb-12 mt-12 md:mt-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Other Noteworthy Projects</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {minorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#64ffda]/30 to-[#64ffda]/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

                {/* Card */}
                <div className="relative h-full rounded-xl bg-gradient-to-br from-[#112240]/90 to-[#0a192f]/90 backdrop-blur-sm border border-[#64ffda]/20 group-hover:border-[#64ffda]/40 p-4 md:p-5 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_10px_40px_-10px_rgba(100,255,218,0.2)] flex flex-col">

                  {/* Background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with icon and category */}
                    <div className="flex justify-between items-start mb-3">
                      {project.icon && (
                        <div className="relative flex-shrink-0">
                          {/* Icon glow - more subtle */}
                          <div className="absolute inset-0 bg-[#64ffda]/15 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>

                          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#112240] to-[#0a192f] border border-[#64ffda]/30 group-hover:border-[#64ffda]/50 flex items-center justify-center overflow-hidden transition-all duration-300">
                            <img
                              src={project.icon}
                              alt={project.title}
                              className="w-5 h-5 md:w-6 md:h-6 object-contain filter drop-shadow-[0_0_5px_rgba(100,255,218,0.3)]"
                            />
                          </div>
                        </div>
                      )}

                      <span className="text-[10px] md:text-xs text-[#64ffda] font-mono px-2 py-0.5 md:py-1 rounded-md bg-[#64ffda]/10 border border-[#64ffda]/20 ml-2">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#64ffda] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-[#8892b0] leading-relaxed mb-3 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] md:text-xs font-mono text-[#64ffda] bg-[#0a192f]/60 border border-[#64ffda]/20 px-2 py-0.5 md:py-1 rounded-md transition-all duration-200 hover:border-[#64ffda]/40 hover:bg-[#0a192f]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}

export default Projects;
