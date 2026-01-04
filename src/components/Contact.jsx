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
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary flex items-center gap-2">
              <span className="text-accent-secondary text-2xl">04.</span>
              {contactInfo.title}
              <span className="animate-pulse text-accent-secondary">_</span>
            </h2>
            <div className="h-px bg-bg-tertiary flex-grow max-w-xs relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-secondary/50 w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Text and Social Icons */}
            <div className="space-y-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                {contactInfo.description[0]}
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                {contactInfo.description[1]}
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href={socialLinks.github}
                  className="p-4 bg-bg-secondary rounded-full text-2xl text-text-secondary hover:text-accent-secondary hover:shadow-lg hover:shadow-accent-secondary/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href={socialLinks.linkedin}
                  className="p-4 bg-bg-secondary rounded-full text-2xl text-text-secondary hover:text-accent-secondary hover:shadow-lg hover:shadow-accent-secondary/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href={socialLinks.email}
                  className="p-4 bg-bg-secondary rounded-full text-2xl text-text-secondary hover:text-accent-secondary hover:shadow-lg hover:shadow-accent-secondary/20 transition-all duration-300"
                  title="Email"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href={`tel:${personalInfo.phone}`}
                  className="p-4 bg-bg-secondary rounded-full text-2xl text-text-secondary hover:text-accent-secondary hover:shadow-lg hover:shadow-accent-secondary/20 transition-all duration-300"
                  title="Phone"
                >
                  <FaPhone />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href={socialLinks.whatsapp}
                  className="p-4 bg-bg-secondary rounded-full text-2xl text-text-secondary hover:text-accent-secondary hover:shadow-lg hover:shadow-accent-secondary/20 transition-all duration-300"
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
              className="space-y-6 bg-bg-secondary p-8 rounded-2xl border border-bg-tertiary shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-secondary/5 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-secondary/5 to-transparent pointer-events-none"></div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2 font-mono">
                  <span className="text-accent-secondary mr-2">01.</span>Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-bg-tertiary rounded-lg focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary text-text-primary transition-all duration-300 font-mono"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2 font-mono">
                  <span className="text-accent-secondary mr-2">02.</span>Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-bg-tertiary rounded-lg focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary text-text-primary transition-all duration-300 font-mono"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2 font-mono">
                  <span className="text-accent-secondary mr-2">03.</span>Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-bg-primary border border-bg-tertiary rounded-lg focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary text-text-primary resize-vertical transition-all duration-300 font-mono"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-transparent border-2 border-accent-secondary text-accent-secondary rounded-lg hover:bg-accent-secondary/10 transition-all duration-300 font-bold text-lg tracking-wide uppercase font-mono group-hover:shadow-[0_0_20px_rgba(100,255,218,0.2)]"
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
