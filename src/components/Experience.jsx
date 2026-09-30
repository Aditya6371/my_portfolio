import React from "react";
import { motion } from "framer-motion";
import { experiences } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-20">
            <span className="text-accent-secondary font-mono text-xl">03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Experience</h2>
            <div className="h-px bg-gradient-to-r from-bg-tertiary to-transparent flex-grow"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-secondary/50 via-bg-tertiary/50 to-transparent"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-6 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-secondary border-4 border-bg-primary shadow-[0_0_12px_rgba(100,255,218,0.5)]">
                    {index === 0 && (
                      <div className="absolute inset-0 rounded-full bg-accent-secondary animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="group bg-bg-secondary/30 backdrop-blur-sm border border-bg-tertiary rounded-xl p-8 hover:border-accent-secondary/50 hover:bg-bg-secondary/50 transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex items-start gap-6">
                        {/* Company Logo */}
                        <div className="w-16 h-16 rounded-xl bg-bg-tertiary/30 border border-bg-tertiary flex items-center justify-center p-3 flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Company & Position */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors mb-2">
                            {exp.company}
                          </h3>
                          <h4 className="text-lg font-medium text-accent-secondary mb-2">
                            {exp.position}
                          </h4>
                          <div className="flex items-center gap-2">
                            {index === 0 && (
                              <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-mono rounded border border-accent-secondary/30">
                                CURRENT
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="text-sm font-mono text-text-secondary/60 bg-bg-primary/50 px-4 py-2 rounded-lg border border-bg-tertiary/50 self-start whitespace-nowrap">
                        {exp.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 pl-0 lg:pl-22">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 text-text-secondary/90 leading-relaxed">
                          <span className="text-accent-secondary mt-1.5 text-sm flex-shrink-0">▹</span>
                          <span className="text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Journey Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-32 pt-16 border-t border-bg-tertiary/30"
          >
            <h3 className="text-xl font-bold text-text-primary mb-12 text-center">Engineering Journey</h3>
            
            {/* Horizontal timeline on desktop, vertical on mobile */}
            <div className="max-w-5xl mx-auto">
              <div className="hidden md:flex items-center justify-between gap-4">
                {[
                  { year: '2020', label: 'Computer Science' },
                  { year: '2021', label: 'Mobile Development' },
                  { year: '2024', label: 'iOS / Swift' },
                  { year: '2025', label: 'Flutter / Cross-platform' },
                  { year: '2026', label: 'Connected Mobility' }
                ].map((milestone, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-3 flex-1">
                      <div className={`w-2 h-2 rounded-full ${i === arr.length - 1 ? 'bg-accent-secondary' : 'bg-text-secondary/40'}`}></div>
                      <div className="text-xs font-mono text-accent-secondary/60">{milestone.year}</div>
                      <div className="text-sm text-text-secondary text-center">{milestone.label}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 h-px bg-gradient-to-r from-text-secondary/20 to-text-secondary/20"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile version - vertical */}
              <div className="md:hidden space-y-6">
                {[
                  { year: '2020', label: 'Computer Science' },
                  { year: '2021', label: 'Mobile Development' },
                  { year: '2024', label: 'iOS / Swift' },
                  { year: '2025', label: 'Flutter / Cross-platform' },
                  { year: '2026', label: 'Connected Mobility' }
                ].map((milestone, i, arr) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${i === arr.length - 1 ? 'bg-accent-secondary' : 'bg-text-secondary/40'} flex-shrink-0`}></div>
                      {i < arr.length - 1 && <div className="w-px h-12 bg-text-secondary/20"></div>}
                    </div>
                    <div className="flex-1 pt-0">
                      <div className="text-xs font-mono text-accent-secondary/60 mb-1">{milestone.year}</div>
                      <div className="text-sm text-text-secondary">{milestone.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
