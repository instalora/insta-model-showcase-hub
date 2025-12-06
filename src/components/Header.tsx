
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isModelsActive = pathname.startsWith('/models') || pathname.startsWith('/model/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${isScrolled ? 'sticky-header' : 'py-6'} w-full py-4 px-4 md:px-8 transition-all duration-300 ${isMobileMenuOpen ? 'bg-white dark:bg-instalora-950 !bg-opacity-100' : ''}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold font-display bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Instalora
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            Discover
          </NavLink>
          <NavLink
            to="/models"
            className={() =>
              `text-sm font-medium transition-colors ${
                isModelsActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            Models
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            For Brands
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`
            }
          >
            About
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background" style={{ top: 0 }}>
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-2 focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Discover
            </NavLink>
            <NavLink
              to="/models"
              className={() =>
                `text-lg font-medium transition-colors ${
                  isModelsActive ? "text-primary" : "hover:text-primary"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Models
            </NavLink>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Brands
            </NavLink>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <div className="flex flex-col space-y-4 mt-8 w-full px-8">
              <Button variant="outline" className="w-full">Log in</Button>
              <Button className="w-full">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
