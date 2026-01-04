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
    <nav className="fixed w-full z-50 bg-bg-primary/90 backdrop-blur-md border-b border-bg-tertiary">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer group">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
              <span className="text-text-primary group-hover:text-accent-secondary transition-colors duration-300">A</span>
              <span className="text-accent-secondary drop-shadow-sm group-hover:text-accent-primary transition-colors duration-300">R</span>
              <span className="text-text-primary group-hover:text-accent-secondary transition-colors duration-300">D</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href.substring(1)}
                to={item.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveMenu(item.href.substring(1))}
                className="cursor-pointer text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                activeClass="!text-accent-secondary font-bold"
              >
                <span className={`${activeSection === item.href.substring(1)
                  ? "text-accent-secondary"
                  : "text-text-secondary hover:text-accent-secondary"
                  }`}>
                  {item.name}
                </span>
              </Link>
            ))}

            <button
              onClick={handleResumeClick}
              className="px-5 py-2.5 rounded-md border border-accent-secondary text-accent-secondary font-medium text-sm hover:bg-accent-secondary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary hover:text-accent-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-bg-primary/95 backdrop-blur-xl border-b border-bg-tertiary shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href.substring(1)}
                  to={item.href.substring(1)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveSection(item.href.substring(1))}
                  className="block py-2 text-lg font-medium text-center"
                  activeClass="!text-accent-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`${activeSection === item.href.substring(1)
                    ? "text-accent-secondary"
                    : "text-text-secondary hover:text-text-primary"
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
                className="w-full mt-4 px-6 py-3 border border-accent-secondary text-accent-secondary rounded-lg font-medium hover:bg-accent-secondary/10 transition-colors"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
