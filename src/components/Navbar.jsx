import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { navItems, personalInfo } from "../data/portfolioData";

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

  const setActiveMenu = (section) => {
    setActiveSection(section);
  }

  const handleResumeClick = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          {<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold underline">
            <span className="text-gray-500">A</span>
            <span className="text-[#64ffda] drop-shadow-[0_0_8px_rgba(100,255,218,0.8)]">R</span>
            <span className="text-gray-500">D</span>
          </h1>}
          {/* // <div className="flex items-center">
            //   <img */}
          {/* //     src={logo}
            //     alt="ARD Logo"
            //     className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            //   />
            // </div>} */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href.substring(1)}
                to={item.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                isDynamic={true}
                onClick={() => setActiveMenu(item.href.substring(1))}
                className={`cursor-pointer transition-colors duration-300 text-sm lg:text-base`}
                activeClass="!text-[#64ffda]"
                ignoreCancelEvents={true}
              >
                <span className={`${activeSection === item.href.substring(1)
                  ? "text-[#64ffda]"
                  : "text-gray-400/50 hover:text-gray-400"
                  }`}>
                  {item.name}
                </span>
              </Link>
            ))}

            <button
              onClick={handleResumeClick}
              className="px-3 lg:px-4 py-1.5 lg:py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300 text-sm lg:text-base"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-[#64ffda] text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gray-900/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.href.substring(1)}
                to={item.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                isDynamic={true}
                onSetActive={() => setActiveSection(item.href.substring(1))}
                onSetInactive={() => { }}
                className={`block py-3 px-2 transition-colors duration-300 text-base`}
                activeClass="!text-[#64ffda]"
                ignoreCancelEvents={true}
                onClick={() => setIsOpen(false)}
              >
                <span className={`${activeSection === item.href.substring(1)
                  ? "text-[#64ffda]"
                  : "text-gray-400/50 hover:text-gray-400"
                  }`}>
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Resume button in mobile menu */}
            <button
              onClick={() => {
                handleResumeClick();
                setIsOpen(false);
              }}
              className="w-full mt-3 px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300 text-base"
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
