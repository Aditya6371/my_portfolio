import { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Home", to: "home" },
        { title: "About", to: "about" },
        { title: "Projects", to: "projects" },
        { title: "Experience", to: "experience" },
        { title: "Contact", to: "contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-sm bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold">Aditya Ranjan Das</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-500 cursor-pointer transition-colors"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="block py-2 hover:text-blue-500 cursor-pointer transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar; 