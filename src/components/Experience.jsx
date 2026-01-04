import React from "react";
import { motion } from "framer-motion";
import { experiences } from '../data/portfolioData';

function Experience() {

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Experience</h2>
            <div className="h-px bg-bg-tertiary flex-grow max-w-xs"></div>
          </div>

          <div className="relative border-l-2 border-bg-tertiary ml-3 md:ml-6 space-y-12 pb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                <div className="bg-bg-secondary p-6 md:p-8 rounded-xl border border-bg-tertiary hover:border-accent-secondary/30 transition-all duration-300 shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-bg-tertiary/50 flex items-center justify-center p-2">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors">{exp.company}</h3>
                        <h4 className="text-lg text-accent-secondary font-medium">{exp.position}</h4>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-text-secondary bg-bg-primary/50 px-3 py-1 rounded-full border border-bg-tertiary">{exp.duration}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-accent-secondary mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
