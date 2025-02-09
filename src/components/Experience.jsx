import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Concept Infoway Pvt Ltd",
      position: "Junior iOS Developer",
      duration: "June 2024 - Present",
      description: [
        "Contributed to the development of various iOS applications, enhancing user experience and functionality",
        "Developed Helping Hand - a donation management app for NGOs using Swift",
        "Worked on To Heart - a social media app for posting photos and videos",
        "Assisted in developing Health Care - a hospital management app"
      ]
    },
    {
      company: "Concept Infoway Pvt Ltd",
      position: "Intern iOS Developer",
      duration: "January 2024 - June 2024",
      description: [
        "Gained practical experience in iOS development using Swift and Xcode",
        "Worked closely with senior developers on various projects",
        "Learned and implemented best practices in iOS development"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#64ffda] pl-6"
              >
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <h4 className="text-xl text-[#64ffda] mt-2">{exp.position}</h4>
                <p className="text-gray-400 mt-1 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#64ffda] mt-1.5">▹</span>
                      <span>{item}</span>
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
