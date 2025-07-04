import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import zerologo from "../assets/zero.svg";
import wediumlogo from "../assets/wedium.png";
import letschatlogo from "../assets/letschat.png";
import greenwavelogo from "../assets/greenwave.png";

function Projects() {
  const majorProjects = [
    {
      title: "GreenWave Terratech",
      description: "A comprehensive society management application developed using Flutter. Features include resident management, maintenance tracking, and community announcements. Implemented complete UI/UX design and seamless API integration.",
      technologies: ["Flutter", "API Integration", "UI/UX Design", "State Management"],
      playStore: "https://play.google.com/store/apps/details?id=com.greenwave",
      appStore: "https://apps.apple.com/in/app/greenwave-terratech/id6479568781",
      category: "Major Project",
      icon: greenwavelogo,
      bgColor: "from-[#1a2f2c] to-[#2a3f3c]"
    },
    {
      title: "Wedium",
      description: "An event professionals booking platform focusing on seamless user experience. Currently in development, with emphasis on intuitive UI design and robust API integration for efficient event planning and booking.",
      technologies: ["Flutter", "API Integration", "UI Design", "Booking System"],
      playStore: "https://play.google.com/store/apps/details?id=com.wedium.customer",
      appStore: "https://apps.apple.com/in/app/wedium/id6444660891",
      category: "Major Project",
      icon: wediumlogo,
      bgColor: "from-[#2d1a2b] to-[#3d2a3b]"
    },
    {
      title: "Zero EV",
      description: "A comprehensive companion app for electric vehicle users, designed to simplify EV ownership and provide access to essential services. Features include charging station finder with real-time availability, smart parking solutions, EV marketplace, and user-friendly experience with secure digital payments.",
      technologies: ["Flutter", "Maps Integration", "Real-time Data", "Digital Payments", "OTP Authentication"],
      playStore: "https://play.google.com/store/apps/details?id=com.zeroapp.ev",
      category: "Major Project",
      icon: zerologo,
      bgColor: "from-[#1a1f38] to-[#2a2f4c]"
    },
    {
      title: "Chat Application",
      description: "A fully functional chat application developed as part of my final semester major project. Built using Flutter for the frontend and Firebase for backend services, enabling real-time messaging and secure user authentication.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Authentication"],
      category: "Major Project",
      icon: letschatlogo,
      bgColor: "from-[#1a1f38] to-[#2a2f4c]"
    },

  ];

  const minorProjects = [
    {
      title: "Multi-Tools Application",
      technologies: ["Flutter"],
      description: "A utility application combining multiple tools for everyday use."
    },
    {
      title: "Virtual Assistance (Jarvis)",
      technologies: ["Python"],
      description: "A voice-controlled virtual assistant inspired by Iron Man's JARVIS."
    },
    {
      title: "Instagram UI Clone",
      technologies: ["Flutter"],
      description: "A pixel-perfect recreation of Instagram's user interface."
    },
    {
      title: "Michi Bot (Robo Car)",
      technologies: ["Arduino"],
      description: "A programmable robotic car built using Arduino."
    }
  ];

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

          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl bg-gradient-to-br from-[#64ffda]/20 to-transparent p-[1px] hover:shadow-[0_0_30px_-5px_rgba(100,255,218,0.3)] transition-all duration-300"
              >
                <div className="relative rounded-xl bg-gradient-to-br from-[#112240] to-[#0a192f] hover:from-[#112240] hover:to-[#1a2f4c] p-3 md:p-4 lg:p-6 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    <div className="space-y-2 md:space-y-3 order-2 lg:order-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                          <img
                            src={project.icon}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[#64ffda] font-mono text-xs md:text-sm tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-tight">{project.title}</h3>

                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 md:gap-1.5 lg:gap-2 pt-1">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm font-mono text-[#64ffda] bg-[#112240]/80 px-2 py-0.5 md:py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 md:gap-3 pt-1">
                        {project.playStore && (
                          <a
                            href={project.playStore}
                            className="text-base md:text-lg lg:text-xl text-gray-300 hover:text-[#64ffda] transition-colors p-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Play Store"
                          >
                            <FaGooglePlay />
                          </a>
                        )}
                        {project.appStore && (
                          <a
                            href={project.appStore}
                            className="text-base md:text-lg lg:text-xl text-gray-300 hover:text-[#64ffda] transition-colors p-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="App Store"
                          >
                            <FaAppStore />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Visual - Better space utilization */}
                    <div className="relative order-1 lg:order-2">
                      <div className="w-full h-full min-h-[200px] md:min-h-[250px] lg:min-h-[280px] mx-auto lg:mx-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#112240]/80 to-[#0a192f]/90 border border-[#64ffda]/20 group-hover:border-[#64ffda]/40 flex items-center justify-center group-hover:scale-[1.02] transition-all duration-300">
                        <div className="relative flex flex-col items-center justify-center p-6 h-full w-full">
                          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={project.icon}
                              alt={project.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#64ffda]/60 to-transparent"></div>
                          {/* Additional decorative elements */}
                          <div className="absolute top-6 right-6 w-3 h-3 bg-[#64ffda]/30 rounded-full group-hover:bg-[#64ffda]/60 transition-colors duration-300"></div>
                          <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#64ffda]/20 rounded-full group-hover:bg-[#64ffda]/50 transition-colors duration-300"></div>
                        </div>
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {minorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-3 md:p-4 lg:p-5 rounded-lg 
                  hover:translate-y-[-2px] md:hover:translate-y-[-3px]
                  hover:shadow-[0_5px_20px_-10px_rgba(100,255,218,0.3)] md:hover:shadow-[0_8px_25px_-12px_rgba(100,255,218,0.3)]
                  transition-all duration-300 min-h-[140px] md:min-h-[150px] lg:min-h-[160px] flex flex-col"
              >
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold leading-tight">{project.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-1.5 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-[#64ffda] bg-[#0a192f] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
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
