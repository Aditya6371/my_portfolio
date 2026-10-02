import { useState, useEffect } from "react";
import { Link, Events, scrollSpy, scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { navItems, personalInfo } from "../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Register scroll events
    Events.scrollEvent.register('begin', () => { });
    Events.scrollEvent.register('end', () => { });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Manual scroll detection for all sections
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial update
    scrollSpy.update();
    handleScroll();
    
    // Update scroll spy after a short delay to ensure all sections are mounted
    const timer = setTimeout(() => {
      scrollSpy.update();
      handleScroll();
    }, 100);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const setActiveMenu = (section) => {
    setActiveSection(section);
  }

  const handleResumeClick = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-bg-tertiary/50 shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="container-custom max-w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            spy={true}
            onSetActive={() => setActiveMenu('home')}
            onClick={() => setActiveMenu('home')}
            className="cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-text-primary/60 group-hover:text-text-primary transition-colors duration-300">A</span>
                <span className="text-accent-secondary group-hover:text-accent-secondary transition-colors duration-300">R</span>
                <span className="text-text-primary/60 group-hover:text-text-primary transition-colors duration-300">D</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link
                key={item.href.substring(1)}
                to={item.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                onSetActive={() => setActiveMenu(item.href.substring(1))}
                onClick={() => setActiveMenu(item.href.substring(1))}
                className="cursor-pointer group relative"
              >
                <span className="text-xs font-mono text-accent-secondary/60 mr-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? "text-accent-secondary"
                    : "text-text-secondary hover:text-accent-secondary"
                  }`}>
                  {item.name}
                </span>
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-accent-secondary"></div>
                )}
              </Link>
            ))}

            <button
              onClick={handleResumeClick}
              className="group px-6 py-3 rounded-lg border border-accent-secondary/50 text-accent-secondary font-medium text-sm hover:border-accent-secondary hover:bg-accent-secondary/5 transition-all duration-300 flex items-center gap-2"
            >
              Resume
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
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
          <div className="md:hidden absolute top-20 left-0 w-full bg-bg-primary/95 backdrop-blur-xl border-b border-bg-tertiary/50 shadow-xl">
            <div className="flex flex-col p-6 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href.substring(1)}
                  to={item.href.substring(1)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => setActiveSection(item.href.substring(1))}
                  onClick={() => {
                    setActiveSection(item.href.substring(1));
                    setIsOpen(false);
                  }}
                  className="block text-center"
                >
                  <span className="text-xs font-mono text-accent-secondary/60 mr-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg font-medium ${activeSection === item.href.substring(1)
                      ? "text-accent-secondary"
                      : "text-text-secondary"
                    }`}>
                    {item.name}
                  </span>
                </Link>
              ))}

              <button
                onClick={() => {
                  handleResumeClick();
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-6 py-4 border border-accent-secondary/50 text-accent-secondary rounded-lg font-medium hover:bg-accent-secondary/5 transition-all flex items-center justify-center gap-2"
              >
                Resume
                <span>↗</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
