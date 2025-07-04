import React from "react";
import { motion } from "framer-motion";
import CareerGrowth from './CareerGrowth';
import { aboutContent, skills, education } from '../data/portfolioData';
// import CodeGenerator from './CodeGenerator';

function About() {

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div>
                <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">
                  {aboutContent.bio[0]}
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {aboutContent.bio[1]}
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold">Education</h3>
                <div className="space-y-4 md:space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-1 md:space-y-2 p-3 md:p-4 rounded-lg bg-[#112240]/30 hover:bg-[#112240]/50 transition-colors duration-300"
                    >
                      <h4 className="font-medium text-[#64ffda] text-sm md:text-base">{edu.school}</h4>
                      <p className="text-base md:text-lg text-gray-300">{edu.degree}</p>
                      <p className="text-sm md:text-base text-gray-400">{edu.duration}</p>
                      {edu.gpa && <p className="text-sm md:text-base text-gray-400">GPA: {edu.gpa}</p>}
                      {edu.highlights && (
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-400 pl-2 md:pl-4 space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Skills & Technologies</h3>
              <div className="space-y-4 md:space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 md:p-4 rounded-lg bg-[#112240]/30 hover:bg-[#112240]/50 transition-colors duration-300"
                  >
                    <h4 className="text-[#64ffda] font-medium mb-2 md:mb-3 text-sm md:text-base">{category}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                      {items.map((skill, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-[#64ffda] text-xs md:text-sm">▹</span>
                          <span className="text-gray-300 text-xs md:text-sm">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-8 md:mt-12">
          <CareerGrowth />
        </div>
      </div>
    </section>
  );
}

export default About;
