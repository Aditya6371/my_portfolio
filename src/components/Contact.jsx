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
    <section id="contact" className="min-h-screen py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-20">
            <span className="text-accent-secondary font-mono text-xl">04</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Get In Touch</h2>
            <div className="h-px bg-gradient-to-r from-bg-tertiary to-transparent flex-grow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Text and Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight">
                  Let's build something<br />together.
                </h3>
                
                <div className="space-y-4 text-base md:text-lg text-text-secondary/90 leading-relaxed">
                  <p>{contactInfo.description[0]}</p>
                  <p>{contactInfo.description[1]}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <div className="text-xs font-mono text-text-secondary/60 uppercase tracking-widest mb-6">
                  Connect
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={socialLinks.github}
                    className="p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl text-xl text-text-secondary hover:text-accent-secondary hover:bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={socialLinks.linkedin}
                    className="p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl text-xl text-text-secondary hover:text-accent-secondary hover:bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={socialLinks.email}
                    className="p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl text-xl text-text-secondary hover:text-accent-secondary hover:bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/50 transition-all duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={`tel:${personalInfo.phone}`}
                    className="p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl text-xl text-text-secondary hover:text-accent-secondary hover:bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/50 transition-all duration-300"
                    aria-label="Phone"
                  >
                    <FaPhone />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href={socialLinks.whatsapp}
                    className="p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl text-xl text-text-secondary hover:text-accent-secondary hover:bg-bg-secondary border border-bg-tertiary hover:border-accent-secondary/50 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary rounded-xl focus:outline-none focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 text-text-primary transition-all duration-300 placeholder:text-text-secondary/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary rounded-xl focus:outline-none focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 text-text-primary transition-all duration-300 placeholder:text-text-secondary/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-5 py-4 bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary rounded-xl focus:outline-none focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 text-text-primary resize-vertical transition-all duration-300 placeholder:text-text-secondary/40"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-5 bg-accent-secondary text-bg-primary rounded-xl font-bold text-base tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.3)]"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
