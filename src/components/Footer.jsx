import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-bg-tertiary/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Name & Title */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-text-secondary/70">
              Flutter Developer · Mobile & Web
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.github}
              className="text-text-secondary hover:text-accent-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.linkedin}
              className="text-text-secondary hover:text-accent-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href={socialLinks.email}
              className="text-text-secondary hover:text-accent-secondary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-text-secondary/50 font-mono">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
