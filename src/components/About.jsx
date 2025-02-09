import React from "react";
import { motion } from "framer-motion";

function About() {
  const skills = {
    "Programming Languages": ["Swift", "Python", "Java", "Dart"],
    "Frameworks & Tools": ["Flutter", "Xcode", "Arduino IDE", "RESTful APIs", "GetX"],
    "Technologies": ["iOS Development", "Bluetooth Communication", "API Integration"],
    "Soft Skills": ["Team Collaboration", "Problem-Solving", "Adaptability"]
  };

  const education = [
    {
      school: "Gandhi Engineering College",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2020 - 2024",
      gpa: "8.29",
      highlights: [
        "Member of the Robotics Club",
        "Captain of the Volleyball Team"
      ]
    },
    {
      school: "Eastern Academy of Higher Secondary School",
      degree: "+2 Science",
      duration: "2018 - 2020"
    },
    {
      school: "Venkateswar English Medium School",
      degree: "Matriculation",
      duration: "2017 - 2018"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-px bg-[#64ffda] flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="text-gray-400 mb-4">
                  I'm a Junior iOS Developer with hands-on experience in Swift, Python, Java, and Flutter,
                  currently engaged in mobile application development at Concept Infoway Pvt Ltd.
                  I'm passionate about creating scalable, user-friendly applications, with a strong foundation
                  in both professional and personal project development.
                </p>
                <p className="text-gray-400">
                  I'm constantly seeking opportunities to further leverage my skills in innovative and
                  challenging environments, with a particular focus on mobile development and emerging technologies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-1"
                    >
                      <h4 className="font-medium text-[#64ffda]">{edu.school}</h4>
                      <p className="text-lg">{edu.degree}</p>
                      <p className="text-gray-400">{edu.duration}</p>
                      {edu.gpa && <p className="text-gray-400">GPA: {edu.gpa}</p>}
                      {edu.highlights && (
                        <ul className="list-disc list-inside text-gray-400 pl-4">
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

            <div>
              <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-[#64ffda] font-medium mb-2">{category}</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {items.map((skill, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-[#64ffda]">▹</span>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
