import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

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
    window.location.href = `mailto:adityadas9439@gmail.com?subject=${subject}&body=${body}`;
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
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text and Social Icons */}
            <div className="space-y-8">
              <p className="text-lg text-gray-400">
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <p className="text-lg text-gray-400">
                As a passionate developer with experience in mobile and web development,
                I'm particularly interested in roles that involve Flutter, iOS development,
                or full-stack opportunities. I bring strong problem-solving skills and
                a commitment to creating efficient, user-friendly applications.
              </p>

              <p className="text-lg text-gray-400">
                Feel free to reach out if you're looking for a dedicated developer who can
                bring both technical expertise and creative solutions to your team. I'm always
                excited to discuss new projects, technologies, or potential collaborations.
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/Aditya6371"
                  className="text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://www.linkedin.com/in/aditya-ranjan-das"
                  className="text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="mailto:adityadas9439@gmail.com"
                  className="text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="tel:+918260625276"
                  className="text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                >
                  <FaPhone />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://wa.me/918260625276"
                  className="text-3xl text-gray-300 hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>

            {/* Right Column - Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
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
                  className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] text-gray-300"
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
                  className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] text-gray-300"
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
                  className="w-full px-4 py-2 bg-[#112240] border border-gray-600 rounded-lg focus:outline-none focus:border-[#64ffda] text-gray-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
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
