import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import React from "react";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="bg-[#0a192f] text-gray-300 min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
