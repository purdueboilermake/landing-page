/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * Updated for new CSS Grid layout system (no parallax)
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from "react";
import ApplyButton from "./ApplyButton";
import Image from "next/image";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // Section scroll positions (in vh units converted to pixels)
    const sectionPositions: { [key: string]: number } = {
      about: 250, // About section is at 270vh
      schedule: 400, // Schedule section is at 400vh
      faq: 840, // FAQ section is at 840vh
      "sponsors-sign": 0, // Placeholder for sponsors (not implemented)
    };

    // Check if we're on the 2025 page
    if (window.location.pathname === "/2025") {
      // Calculate the scroll position in pixels
      const vh = window.innerHeight;
      const targetScrollVh = sectionPositions[sectionId] || 0;
      const targetScrollPx = targetScrollVh * vh / 100;

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: targetScrollPx,
        behavior: "smooth",
      });
    } else {
      // If we're not on the 2025 page, navigate there with hash
      window.location.href = `/2025#${sectionId}`;
    }
  };

 return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-[200ms] ${isMenuOpen ? 'bg-black/95' : ''}`}
      style={!isMenuOpen ? {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)'
      } : undefined}
    >
      <div className="relative px-8 lg:px-12 xl:px-16 py-4">
        {/* Logo positioned in top-left corner */}
        <a href="/" className="absolute top-0 left-0 hover:scale-105 transition z-10 p-2 md:p-3 lg:p-4">
          {/* accordingly modify href here */}
          <Image
            src={"/images/bmxiii-logo.png"}
            alt="Boilermake Logo"
            width={75}
            height={75}
            className="w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20 object-contain"
          />
        </a>
        
        <div className="flex justify-between items-center text-white max-w-screen-2xl mx-auto">

          {/* Desktop Navigation - centered and spanning */}
          <nav className="hidden md:flex flex-1 items-center justify-between ml-8 lg:ml-12 xl:ml-16 pt-6" style={{ gap: 'clamp(1rem, 1.5vw, 2rem)' }}>
            <button
              onClick={() => handleNavigation("about")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-futura-cyrillic)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
              }}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("schedule")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-futura-cyrillic)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
              }}
            >
              Schedule
            </button>
            <button
              onClick={() => handleNavigation("faq")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-futura-cyrillic)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
              }}
            >
              FAQs
            </button>
            <button
              onClick={() => handleNavigation("sponsors-sign")}
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-futura-cyrillic)",
                fontWeight: 500,
                fontSize: "clamp(18px, 3.5vw, 28px)",
                lineHeight: "100%",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
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
          className={`md:hidden absolute top-full left-0 right-0 z-[55] transition-all duration-[200ms] ease-out ${
            isMenuOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
          style={{ marginTop: "-1px" }}
        >
          <div className="bg-gradient-to-b from-black/95 via-black/90 to-black/80 backdrop-blur-lg shadow-2xl">
            <nav className="flex flex-col items-center py-6 space-y-4">
              <button
                onClick={() => {
                  handleNavigation("about");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-futura-cyrillic)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
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
                  fontFamily: "var(--font-futura-cyrillic)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
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
                  fontFamily: "var(--font-futura-cyrillic)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
                }}
              >
                FAQs
              </button>
              
              <button
                onClick={() => {
                  handleNavigation("sponsors-sign");
                  setIsMenuOpen(false);
                }}
                className="transition-all duration-300 text-white text-lg"
                style={{
                  fontFamily: "var(--font-futura-cyrillic)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
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
                  fontFamily: "var(--font-futura-cyrillic)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textShadow: "0px 0px 10px rgba(255, 222, 0, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 15px #FFDE00, 0px 0px 25px #FFDE00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "0px 0px 10px rgba(255, 222, 0, 0.5)";
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