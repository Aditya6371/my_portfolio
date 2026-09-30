import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { majorProjects, minorProjects } from '../data/portfolioData';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-20">
            <span className="text-accent-secondary font-mono text-xl">02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Selected Work</h2>
            <div className="h-px bg-gradient-to-r from-bg-tertiary to-transparent flex-grow"></div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-32">
            {majorProjects.map((project, index) => {
              const isUltraviolette = project.title.includes("Ultraviolette");
              const isNewKommerce = project.title.includes("NewKommerce");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`relative ${isUltraviolette ? 'mb-40' : ''}`}
                >
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Project Visual */}
                    <motion.div
                      className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative group">
                        {/* Main Icon Container */}
                        <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${project.bgColor} p-12 flex items-center justify-center overflow-hidden border border-bg-tertiary/50 hover:border-accent-secondary/50 transition-all duration-500`}>
                          {/* Subtle technical grid */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.08) 1px, transparent 0)`,
                              backgroundSize: '40px 40px'
                            }}></div>
                          </div>

                          {/* Project Icon */}
                          <img
                            src={project.icon}
                            alt={project.title}
                            className="w-40 h-40 md:w-48 md:h-48 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                          />

                          {/* Connection nodes for connected/EV projects */}
                          {(isUltraviolette || project.title.includes("Zero")) && (
                            <>
                              <div className="absolute top-8 right-8 w-2 h-2 bg-accent-secondary rounded-full animate-pulse"></div>
                              <div className="absolute bottom-8 left-8 w-2 h-2 bg-accent-secondary rounded-full animate-pulse delay-75"></div>
                              <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent-secondary/60 rounded-full animate-pulse delay-150"></div>
                            </>
                          )}

                          {/* Corner accents */}
                          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-accent-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>

                    {/* Project Content */}
                    <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-accent-secondary/60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-mono text-text-secondary/60 uppercase tracking-widest">
                          {project.category}
                        </span>
                        {project.year && (
                          <>
                            <span className="text-text-secondary/30">•</span>
                            <span className="text-xs font-mono text-text-secondary/60">{project.year}</span>
                          </>
                        )}
                        {project.status && (
                          <>
                            <span className="text-text-secondary/30">•</span>
                            <span className="text-xs font-mono text-accent-secondary/80">{project.status}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <div className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/50 rounded-xl p-6 md:p-8">
                        <p className="text-base md:text-lg text-text-secondary/90 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm font-mono text-text-secondary/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-6 pt-4">
                        {project.playStore && (
                          <motion.a
                            whileHover={{ y: -3 }}
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary hover:text-accent-secondary transition-colors"
                            aria-label="Google Play Store"
                          >
                            <FaGooglePlay size={24} />
                          </motion.a>
                        )}
                        {project.appStore && (
                          <motion.a
                            whileHover={{ y: -3 }}
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary hover:text-accent-secondary transition-colors"
                            aria-label="Apple App Store"
                          >
                            <FaAppStore size={24} />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            whileHover={{ y: -3 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary hover:text-accent-secondary transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub size={24} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual separator */}
                  {index < majorProjects.length - 1 && (
                    <div className="absolute -bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bg-tertiary/30 to-transparent"></div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Minor Projects */}
          <div className="mt-40">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-16 text-center">
              Other Notable Work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minorProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group bg-bg-secondary/30 backdrop-blur-sm border border-bg-tertiary rounded-xl p-8 hover:border-accent-secondary/50 hover:bg-bg-secondary/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-bg-tertiary/50 flex items-center justify-center p-2">
                      {project.icon ? (
                        <img src={project.icon} className="w-full h-full object-contain" alt="" />
                      ) : (
                        <div className="w-full h-full bg-accent-secondary/20 rounded"></div>
                      )}
                    </div>
                    <span className="text-xs font-mono text-text-secondary/60">{project.year}</span>
                  </div>

                  <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-sm text-text-secondary/80 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-text-secondary/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent-secondary hover:gap-3 transition-all"
                    >
                      View on GitHub
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
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
