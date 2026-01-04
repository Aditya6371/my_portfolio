import React from "react";
import { motion } from "framer-motion";
import CareerGrowth from './CareerGrowth';
import { aboutContent, skills, education } from '../data/portfolioData';
// import CodeGenerator from './CodeGenerator';

function About() {

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary flex items-center gap-2">
              <span className="text-accent-secondary text-2xl">01.</span>
              About Me
              <span className="animate-pulse text-accent-secondary">_</span>
            </h2>
            <div className="h-px bg-bg-tertiary flex-grow max-w-xs relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-secondary/50 w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-bg-secondary p-8 rounded-2xl border border-bg-tertiary shadow-sm relative overflow-hidden group hover:border-accent-secondary/30 transition-colors duration-300">
                {/* Tech corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {aboutContent.bio[0]}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {aboutContent.bio[1]}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
                  <span className="text-accent-secondary">{'//'}</span>
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/30 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h4 className="font-bold text-accent-secondary text-lg">{edu.school}</h4>
                        <span className="text-xs font-mono text-text-secondary bg-bg-primary px-2 py-1 rounded inline-block mt-2 md:mt-0">{edu.duration}</span>
                      </div>
                      <p className="text-xl text-text-primary font-medium mb-2">{edu.degree}</p>
                      {edu.gpa && <p className="text-sm text-text-secondary mb-4 font-mono">GPA: {edu.gpa}</p>}
                      {edu.highlights && (
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                              <span className="w-1 h-1 bg-accent-secondary rounded-full"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Skills & Tech</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-xl bg-bg-secondary border border-bg-tertiary shadow-sm"
                  >
                    <h4 className="text-accent-secondary font-bold mb-4 uppercase tracking-wider text-xs">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium text-text-primary bg-bg-primary rounded-lg border border-bg-tertiary hover:border-accent-secondary/50 hover:text-accent-secondary transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-24">
          {/* Passing theme props if CareerGrowth needs it, or assuming it inherits global styles */}
          {/* If CareerGrowth was not touched, I should check it. For now leaving as is but contained in mt-24 */}
          <CareerGrowth />
        </div>
      </div>
    </section>
  );
}

export default About;
