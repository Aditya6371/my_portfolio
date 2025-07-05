import React from "react";
import { motion } from "framer-motion";
import { experiences } from '../data/portfolioData';

function Experience() {

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#64ffda] pl-4 md:pl-6 hover:bg-[#112240]/30 rounded-r-lg p-3 md:p-4 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-300 break-words">{exp.company}</h3>
                    <h4 className="text-lg md:text-xl text-[#64ffda]">{exp.position}</h4>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-400 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#64ffda] mt-1.5 flex-shrink-0">▹</span>
                      <span className="text-sm md:text-base text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
