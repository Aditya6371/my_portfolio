import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { majorProjects, minorProjects } from '../data/portfolioData';

function Projects() {

  return (
    <section id="projects" className="min-h-screen py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Featured Projects</h2>
            <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
          </div>

          <div className="space-y-24">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Project Visual/Icon - Clean Professional Look */}
                <div className="lg:col-span-4 lg:order-1 order-2 flex justify-center lg:justify-start">
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-bg-secondary border border-bg-tertiary shadow-lg flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Tech Grid Overlay on Hover */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTAwLDI1NSwyMTgsMC4xKSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="w-20 h-20 md:w-28 md:h-28 object-contain z-10 relative"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`lg:col-span-8 lg:order-2 order-1 ${index % 2 === 1 ? "lg:text-right" : "lg:text-left"}`}>
                  <span className="text-accent-secondary font-mono text-sm tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-bold text-text-primary mb-6 group-hover:text-accent-secondary transition-colors">{project.title}</h3>

                  <div className={`bg-bg-secondary p-6 md:p-8 rounded-xl border border-bg-tertiary shadow-xl text-text-secondary leading-relaxed mb-6 ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                    {project.description}
                  </div>

                  <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 1 ? "lg:justify-end" : "justify-start"}`}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-text-secondary font-mono text-sm">{tech}</span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : "justify-start"}`}>
                    {project.playStore && (
                      <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-secondary transition-colors">
                        <FaGooglePlay size={24} />
                      </a>
                    )}
                    {project.appStore && (
                      <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-secondary transition-colors">
                        <FaAppStore size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minor Projects Grid */}
          <div className="mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-text-center mb-16 text-center text-text-primary">Other Notable Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minorProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-bg-secondary hover:-translate-y-2 transition-all duration-300 p-8 rounded-xl border border-bg-tertiary hover:border-accent-secondary/50 shadow-lg hover:shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 text-accent-secondary">
                      {/* Folder Icon placeholder or actual icon if available */}
                      {project.icon ? <img src={project.icon} className="w-full h-full object-contain" /> : <div className="w-10 h-10 bg-accent-secondary/20 rounded-lg"></div>}
                    </div>
                    <span className="text-xs font-mono text-accent-secondary/80">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-secondary transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-8 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-text-secondary/80">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
