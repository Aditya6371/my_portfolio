import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

function Home() {
  const handleResumeClick = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Ambient blur accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-accent-secondary font-mono text-sm tracking-widest uppercase"
          >
            {personalInfo.greeting}
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary leading-[0.95]"
          >
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary max-w-2xl mx-auto lg:mx-0"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-text-secondary/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* Technical Identity Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="pt-4"
          >
            <div className="inline-flex flex-wrap gap-2 text-xs font-mono text-text-secondary/60 justify-center lg:justify-start">
              <span>ANDROID</span>
              <span>·</span>
              <span>iOS</span>
              <span>·</span>
              <span>WEB</span>
              <span className="text-accent-secondary/60">|</span>
              <span>FLUTTER</span>
              <span>·</span>
              <span>DART</span>
              <span>·</span>
              <span>SWIFT</span>
              <span className="text-accent-secondary/60">|</span>
              <span>REST</span>
              <span>·</span>
              <span>WEBSOCKETS</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-accent-secondary text-bg-primary rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] flex items-center justify-center gap-2"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleResumeClick}
              className="group px-8 py-4 bg-transparent border-2 border-accent-secondary/50 text-accent-secondary rounded-lg font-medium hover:border-accent-secondary hover:bg-accent-secondary/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Resume
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center lg:justify-start gap-6 pt-2"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.github}
              className="text-xl text-text-secondary hover:text-accent-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.linkedin}
              className="text-xl text-text-secondary hover:text-accent-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.email}
              className="text-xl text-text-secondary hover:text-accent-secondary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Subtle circular orbit - very thin, slow rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 rounded-full border border-accent-secondary/20"></div>
              {/* Connection points on orbit */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-secondary rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-accent-secondary rounded-full"></div>
            </motion.div>

            {/* Inner subtle glow ring */}
            <div className="absolute inset-4 rounded-full bg-accent-secondary/5 blur-xl group-hover:bg-accent-secondary/10 transition-all duration-700"></div>

            {/* Main profile image container - Larger on desktop */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border border-accent-secondary/30 shadow-[0_0_40px_rgba(100,255,218,0.15)] group-hover:shadow-[0_0_60px_rgba(100,255,218,0.25)] transition-all duration-700 z-10">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
            </div>

            {/* Minimal corner accents */}
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t border-r border-accent-secondary/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b border-l border-accent-secondary/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
