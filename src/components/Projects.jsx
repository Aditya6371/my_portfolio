import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

function Projects() {
  const majorProjects = [
    {
      title: "GreenWave Terratech",
      description: "A comprehensive society management application developed using Flutter. Features include resident management, maintenance tracking, and community announcements. Implemented complete UI/UX design and seamless API integration.",
      technologies: ["Flutter", "API Integration", "UI/UX Design", "State Management"],
      playStore: "https://play.google.com/store/apps/details?id=com.greenwave",
      appStore: "https://apps.apple.com/in/app/greenwave-terratech/id6479568781",
      category: "Major Project",
      icon: "🏢",
      bgColor: "from-[#1a2f2c] to-[#2a3f3c]"
    },
    {
      title: "Wedium",
      description: "An event professionals booking platform focusing on seamless user experience. Currently in development, with emphasis on intuitive UI design and robust API integration for efficient event planning and booking.",
      technologies: ["Flutter", "API Integration", "UI Design", "Booking System"],
      playStore: "https://play.google.com/store/apps/details?id=com.wedium.customer",
      appStore: "https://apps.apple.com/in/app/wedium/id6444660891",
      category: "Major Project",
      icon: "🎪",
      bgColor: "from-[#2d1a2b] to-[#3d2a3b]"
    },
    {
      title: "Chat Application",
      description: "A fully functional chat application developed as part of my final semester major project. Built using Flutter for the frontend and Firebase for backend services, enabling real-time messaging and secure user authentication.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Authentication"],
      category: "Major Project",
      icon: "💬",
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
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Major Projects */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="space-y-12">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl bg-gradient-to-br from-[#64ffda]/20 to-transparent p-[1px] hover:shadow-[0_0_30px_-5px_rgba(100,255,218,0.3)] transition-all duration-300"
              >
                <div className="relative rounded-xl bg-gradient-to-br from-[#112240] to-[#0a192f] hover:from-[#112240] hover:to-[#1a2f4c] p-8 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{project.icon}</span>
                        <span className="text-[#64ffda] font-mono text-sm tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>

                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm font-mono text-[#64ffda] bg-[#112240]/80 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-2">
                        {project.playStore && (
                          <a
                            href={project.playStore}
                            className="text-2xl text-gray-300 hover:text-[#64ffda] transition-colors p-2"
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
                            className="text-2xl text-gray-300 hover:text-[#64ffda] transition-colors p-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="App Store"
                          >
                            <FaAppStore />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="relative">
                      <div className="aspect-square rounded-xl overflow-hidden bg-[#112240]/30 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                        <span className="text-9xl text-gray-300 group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#112240]/10 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minor Projects */}
          <div className="flex items-center gap-4 mb-12 mt-20">
            <h2 className="text-3xl font-bold">Other Noteworthy Projects</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-lg 
                  hover:translate-y-[-5px] 
                  hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]
                  transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-mono text-[#64ffda] bg-[#0a192f] px-2 py-1 rounded"
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
