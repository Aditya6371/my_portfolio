import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (

        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
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
