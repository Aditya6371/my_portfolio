import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${darkMode
          ? "bg-[#0a192f] text-gray-300" // Dark navy background with light text
          : "bg-[#f8f8f8] text-gray-800" // Light off-white background with dark text
        } min-h-screen transition-colors duration-300`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mx-auto px-4">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
