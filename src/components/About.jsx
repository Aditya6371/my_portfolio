import React from "react";
import { motion } from "framer-motion";
import { aboutContent, skills, education } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="min-h-screen py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-20">
            <span className="text-accent-secondary font-mono text-xl">01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">About</h2>
            <div className="h-px bg-gradient-to-r from-bg-tertiary to-transparent flex-grow"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            {/* Left - Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 leading-tight">
                  Building products,<br />not just interfaces.
                </h3>
                
                <div className="space-y-6 text-lg text-text-secondary/90 leading-relaxed">
                  <p>{aboutContent.bio[0]}</p>
                  <p>{aboutContent.bio[1]}</p>
                </div>
              </div>
            </div>

            {/* Right - Developer Snapshot */}
            <div className="lg:col-span-5">
              <div className="bg-bg-secondary/50 border border-bg-tertiary rounded-2xl p-8 backdrop-blur-sm hover:border-accent-secondary/30 transition-colors duration-500">
                <h4 className="text-xs font-mono text-accent-secondary uppercase tracking-widest mb-8">Developer Snapshot</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">FOCUS</div>
                    <div className="text-base text-text-primary">Cross-platform mobile</div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">PRIMARY</div>
                    <div className="text-base text-text-primary">Flutter / Dart</div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">BACKGROUND</div>
                    <div className="text-base text-text-primary">iOS / Swift</div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">PLATFORMS</div>
                    <div className="text-base text-text-primary">Android / iOS / Web</div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">CURRENT DOMAIN</div>
                    <div className="text-base text-text-primary">Connected mobility</div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-text-secondary/60 mb-2">APIs</div>
                    <div className="text-base text-text-primary">REST / WebSockets</div>
                  </div>
                </div>

                {/* Visual Progression */}
                <div className="mt-10 pt-8 border-t border-bg-tertiary/50">
                  <div className="text-xs font-mono text-text-secondary/60 mb-4">JOURNEY</div>
                  <div className="space-y-3 text-sm text-text-secondary/80">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary/60"></div>
                      <span>iOS / Swift</span>
                    </div>
                    <div className="flex items-center gap-3 pl-3">
                      <div className="w-px h-4 bg-accent-secondary/30"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary/60"></div>
                      <span>Flutter / Cross-platform</span>
                    </div>
                    <div className="flex items-center gap-3 pl-3">
                      <div className="w-px h-4 bg-accent-secondary/30"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary"></div>
                      <span className="text-accent-secondary">Connected Mobility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-text-primary mb-12">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg-secondary/30 border border-bg-tertiary rounded-xl p-6 hover:border-accent-secondary/30 hover:bg-bg-secondary/50 transition-all duration-300"
                >
                  <h4 className="text-xs font-mono text-accent-secondary uppercase tracking-widest mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ y: -2 }}
                        className="px-3 py-1.5 text-sm text-text-primary bg-bg-primary/50 rounded-md border border-bg-tertiary/50 hover:border-accent-secondary/50 hover:text-accent-secondary transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-12">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-bg-secondary/30 border border-bg-tertiary rounded-xl p-6 hover:border-accent-secondary/30 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-text-primary mb-2">{edu.school}</h4>
                      <p className="text-base text-text-secondary mb-1">{edu.degree}</p>
                      {edu.gpa && (
                        <p className="text-sm font-mono text-accent-secondary">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-text-secondary/60 bg-bg-primary/50 px-3 py-2 rounded-lg border border-bg-tertiary/50 self-start">
                      {edu.duration}
                    </span>
                  </div>
                  
                  {edu.highlights && (
                    <div className="pt-4 border-t border-bg-tertiary/30">
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-text-secondary/80">
                            <span className="w-1 h-1 bg-accent-secondary rounded-full"></span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-12 border-t border-bg-tertiary/30"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-lg font-medium text-text-primary mb-3">Beyond code</h4>
              <div className="flex justify-center gap-8 text-sm text-text-secondary/70">
                <span>Robotics Club</span>
                <span>·</span>
                <span>Volleyball Team Captain</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
