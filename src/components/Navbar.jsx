import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => { });
    Events.scrollEvent.register('end', () => { });
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const menuItems = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Projects", to: "projects" },
    { title: "Experience", to: "experience" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-5xl font-bold underline">
            <span className="text-gray-500">A</span>
            <span className="text-[#64ffda]">R</span>
            <span className="text-gray-500">D</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                isDynamic={true}
                onSetActive={() => setActiveSection(item.to)}
                onSetInactive={() => { }}
                className={`cursor-pointer transition-colors duration-300`}
                activeClass="!text-[#64ffda]"
                ignoreCancelEvents={true}
              >
                <span className={`${activeSection === item.to
                    ? "text-[#64ffda]"
                    : "text-gray-400/50 hover:text-gray-400"
                  }`}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-[#64ffda]"
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
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                isDynamic={true}
                onSetActive={() => setActiveSection(item.to)}
                onSetInactive={() => { }}
                className={`block py-2 transition-colors duration-300`}
                activeClass="!text-[#64ffda]"
                ignoreCancelEvents={true}
                onClick={() => setIsOpen(false)}
              >
                <span className={`${activeSection === item.to
                    ? "text-[#64ffda]"
                    : "text-gray-400/50 hover:text-gray-400"
                  }`}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
