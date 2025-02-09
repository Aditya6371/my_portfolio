import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const majorProjects = [
    {
      title: "Chat Application",
      description: "A fully functional chat application developed as part of my final semester major project. Built using Flutter for the frontend and Firebase for backend services, enabling real-time messaging and secure user authentication.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Authentication"],
      github: "#",
      category: "Major Project",
      icon: "📱"
    },
    {
      title: "GreenWave Terratech",
      description: "A comprehensive society management application developed using Flutter. Features include resident management, maintenance tracking, and community announcements. Implemented complete UI/UX design and seamless API integration.",
      technologies: ["Flutter", "API Integration", "UI/UX Design", "State Management"],
      github: "#",
      category: "Major Project",
      icon: "🏡"
    },
    {
      title: "Wedium",
      description: "An event professionals booking platform focusing on seamless user experience. Currently in development, with emphasis on intuitive UI design and robust API integration for efficient event planning and booking.",
      technologies: ["Flutter", "API Integration", "UI Design", "Booking System"],
      github: "#",
      category: "Major Project",
      icon: "🎉"
    }
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
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="space-y-24 mb-20">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <span className="text-[#64ffda] font-mono text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="bg-[#112240] p-6 rounded-lg">
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm font-mono text-[#64ffda]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-2xl hover:text-[#64ffda] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="relative group order-first md:order-last">
                  <div className="relative overflow-hidden rounded-lg bg-[#112240] aspect-video flex items-center justify-center">
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minor Projects */}
          <div className="flex items-center gap-4 mb-12">
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
                className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-mono text-[#64ffda]"
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
