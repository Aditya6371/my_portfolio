import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Aditya Ranjan Das</h2>
          <h3 className="text-2xl text-blue-500 mb-4">
            Junior iOS & Flutter Developer
          </h3>
          <p className="mb-6">
            Skilled in Swift, Flutter, Python, and Java. Building innovative
            mobile solutions with clean, efficient code.
          </p>
          <a
            href="/resume.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Aditya Ranjan Das"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
