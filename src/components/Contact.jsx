import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-400">
              I'm currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col items-center space-y-6">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FaPhone className="text-[#64ffda]" />
                <a href="tel:+918260625276" className="hover:text-[#64ffda] transition-colors">
                  +91 8260625276
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FaEnvelope className="text-[#64ffda]" />
                <a href="mailto:adityadas9439@gmail.com" className="hover:text-[#64ffda] transition-colors">
                  adityadas9439@gmail.com
                </a>
              </motion.div>

              <div className="flex space-x-8 pt-6">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/Aditya6371"
                  className="text-3xl hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://www.linkedin.com/in/aditya-ranjan-das"
                  className="text-3xl hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
