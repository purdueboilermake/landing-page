/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * Updated for new CSS Grid layout system (no parallax)
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState, useEffect } from "react";
import ApplyButton from "./ApplyButtonBM14";
import Image from "next/image";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when screen widens to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const basePath = currentPath === "/2027" ? "/2027" : "/";
  // changed to 2027 here

  const handleNavigation = (sectionId: string) => {
    if (currentPath === basePath) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Use window.scrollTo instead of element.scrollIntoView: <main> is
        // position:relative + overflow:hidden (a real scroll container), so
        // scrollIntoView also nudges main.scrollTop, leaving a permanent
        // internal offset that exposes blank space below the footer.
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const targetY =
          sectionId === "about" || sectionId === "sponsors"
            ? absoluteTop + rect.height / 2 - window.innerHeight / 2
            : absoluteTop;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    } else {
      window.location.href = `${basePath}#${sectionId}`;
    }
  };

 return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-[200ms] ${isMenuOpen ? 'bg-black/95 md:bg-transparent' : ''}`}
      style={!isMenuOpen ? {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)'
      } : undefined}
    >
      <div className="relative flex items-center h-16 px-8">
        {/* Logo positioned in top-left corner */}
        <a
  href={basePath}
  className="absolute left-6 top-1/2 -translate-y-1/2 hover:scale-105 transition">
          {/* accordingly modify href here */}
          <Image
            src={"/images/logo_BMXIII.png"}
            alt="Boilermake Logo"
            width={42}
height={42}
className="w-10 h-10"
          />
        </a>
        
        {/* was: flex justify-between items-center text-white max-w-screen-2xl mx-auto */}
        <div className="flex w-full justify-end items-center text-white">

    {/* Desktop Navigation - right aligned */}
    {/* was: hidden md:flex flex-1 items-center justify-between ml-20 lg:ml-24 xl:ml-28 pt-6 */}
            <nav
              className="hidden md:flex items-center justify-end pt-6"
              style={{ gap: 'clamp(1rem, 1.5vw, 2rem)' }}
            >
            <button
              onClick={() => handleNavigation("about")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-code-pro)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                
              }}
              
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("schedule")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-code-pro)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                
              }}
              
            >
              Schedule
            </button>
            <button
              onClick={() => handleNavigation("faq")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-code-pro)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF"
              }}
              
            >
              FAQs
            </button>
            <button
              onClick={() => handleNavigation("sponsors")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-code-pro)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                
              }}
              
            >
              Sponsors
            </button>
          </nav>

          {/* Mobile Menu Button - top right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 absolute top-0 right-0 z-[60] flex-shrink-0"
            aria-label="Toggle menu"
            style={{ minWidth: '44px', minHeight: '44px', padding: '0.75rem 1rem' }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-0 left-0 right-0 z-[55] transition-all duration-[200ms] ease-out ${
            isMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ 
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <div className="bg-gradient-to-b from-black/95 via-black/90 to-black/80 backdrop-blur-lg shadow-2xl pt-8 pb-8">
            <nav className="flex flex-col items-center py-6 space-y-4">
              <button
                onClick={() => {
                  handleNavigation("about");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  
                }}
                
              >
                About
              </button>
              
              <button
                onClick={() => {
                  handleNavigation("schedule");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  
                }}
                
              >
                Schedule
              </button>
              
              <button
                onClick={() => {
                  handleNavigation("faq");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  
                }}
                
              >
                FAQs
              </button>
              
              <button
                onClick={() => {
                  handleNavigation("sponsors");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  
                }}
                
              >
                Sponsors
              </button>
              
              <a
                href="https://boilermake-apply.web.app"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-code-pro)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  
                }}
                
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now!
              </a>
           </nav>
          </div>
        </div>
    </header>
  );
}
