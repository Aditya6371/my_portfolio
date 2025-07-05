import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { contactInfo, personalInfo, socialLinks } from '../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{contactInfo.title}</h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Text and Social Icons */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {contactInfo.description[0]}
              </p>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {contactInfo.description[1]}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  href={socialLinks.github}
                  className="text-2xl md:text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={socialLinks.linkedin}
                  className="text-2xl md:text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={socialLinks.email}
                  className="text-2xl md:text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  title="Email"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={`tel:${personalInfo.phone}`}
                  className="text-2xl md:text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  title="Phone"
                >
                  <FaPhone />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={socialLinks.whatsapp}
                  className="text-2xl md:text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 bg-[#112240]/30 p-4 md:p-6 lg:p-8 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] text-gray-300 text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] text-gray-300 text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] text-gray-300 resize-vertical text-sm md:text-base"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300 font-medium text-sm md:text-base"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
