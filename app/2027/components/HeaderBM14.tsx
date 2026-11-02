/**
 * HeaderBM14.tsx — BoilerMake XIV navigation.
 * BM14 TEMPORARILY HIDDEN: Schedule and Judges navigation on desktop and mobile.
 * Restore their buttons and page sections together when content is ready.
 */

import React, { useState, useEffect } from "react";
import Image from "next/image";

// BM14: ApplyButton was unused in the original header; no import required.
type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const basePath = currentPath === "/2027" ? "/2027" : "/";
  const HEADER_OFFSET = 70;

  const handleNavigation = (sectionId: string) => {
    if (currentPath === basePath) {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;
      // BM14: Removed obsolete hardcoded -200px Schedule scroll offset.
      const targetY = sectionId === "sponsors"
        ? absoluteTop + rect.height / 2 - window.innerHeight / 2
        : absoluteTop - HEADER_OFFSET;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      window.location.href = `${basePath}#${sectionId}`;
    }
  };

  const desktopNavStyle: React.CSSProperties = {
    fontFamily: "var(--font-code-pro)", fontWeight: 500,
    fontSize: "clamp(15px, 1.3vw, 20px)", lineHeight: "100%",
    letterSpacing: "0.1em", color: "#FFFFFF",
  };
  const mobileNavStyle: React.CSSProperties = {
    fontFamily: "var(--font-code-pro)", fontWeight: 500,
    letterSpacing: "0.05em",
  };

  const mobileNavigate = (section: string) => {
    handleNavigation(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-[200ms] ${isMenuOpen ? 'bg-black/95 md:bg-transparent' : ''}`}
      style={!isMenuOpen ? { background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)' } : undefined}
    >
      <div className="relative flex items-center h-16 px-8">
        {/* Logo positioned in top-left corner */}
        <a href={basePath} className="absolute left-6 top-4 hover:scale-105 transition">
          <Image src="/imagesbm14/logo_bm14_hammers_only.svg" alt="Boilermake Logo"
            width={64} height={56} priority className="w-10 sm:w-12 md:w-14 h-auto" />
        </a>

        <div className="flex w-full justify-end items-center text-white">
          {/* Desktop navigation — hidden Schedule/Judges buttons leave NO empty flex items. */}
          <nav className="hidden md:flex items-center justify-end pt-6"
            style={{ gap: 'clamp(1rem, 1.5vw, 2rem)' }}>
            <button onClick={() => handleNavigation("about")}
              className="transition-all duration-300 whitespace-nowrap" style={desktopNavStyle}>About</button>

            {/* BM14 TEMPORARILY HIDDEN — desktop Schedule link; restore with Schedule section.
            <button onClick={() => handleNavigation("schedule")}
              className="transition-all duration-300 whitespace-nowrap" style={desktopNavStyle}>Schedule</button>
            */}

            {/* BM14 TEMPORARILY HIDDEN — desktop Judges link; restore with Judges section.
            <button onClick={() => handleNavigation("judges")}
              className="transition-all duration-300 whitespace-nowrap" style={desktopNavStyle}>Judges</button>
            */}

            <button onClick={() => handleNavigation("faq")}
              className="transition-all duration-300 whitespace-nowrap" style={desktopNavStyle}>FAQs</button>
            <button onClick={() => handleNavigation("sponsors")}
              className="transition-all duration-300 whitespace-nowrap" style={desktopNavStyle}>Sponsors</button>
          </nav>

          {/* Mobile menu toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 absolute top-0 right-0 z-[60] flex-shrink-0"
            aria-label="Toggle menu" aria-expanded={isMenuOpen}
            style={{ minWidth: '44px', minHeight: '44px', padding: '0.75rem 1rem' }}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — flex gap collapses automatically when links are removed. */}
      <div className={`md:hidden absolute top-0 left-0 right-0 z-[55] transition-all duration-[200ms] ease-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="bg-gradient-to-b from-black/95 via-black/90 to-black/80 backdrop-blur-lg shadow-2xl pt-8 pb-8">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <button onClick={() => mobileNavigate("about")}
              className="transition-all duration-300 text-white text-lg" style={mobileNavStyle}>About</button>

            {/* BM14 TEMPORARILY HIDDEN — mobile Schedule link; restore with Schedule section.
            <button onClick={() => mobileNavigate("schedule")}
              className="transition-all duration-300 text-white text-lg" style={mobileNavStyle}>Schedule</button>
            */}

            {/* BM14 TEMPORARILY HIDDEN — mobile Judges link; restore with Judges section.
            <button onClick={() => mobileNavigate("judges")}
              className="transition-all duration-300 text-white text-lg" style={mobileNavStyle}>Judges</button>
            */}

            <button onClick={() => mobileNavigate("faq")}
              className="transition-all duration-300 text-white text-lg" style={mobileNavStyle}>FAQs</button>
            <button onClick={() => mobileNavigate("sponsors")}
              className="transition-all duration-300 text-white text-lg" style={mobileNavStyle}>Sponsors</button>
            {/* Apply Now is intentionally still disabled, as in the original header. */}
          </nav>
        </div>
      </div>
    </header>
  );
}
