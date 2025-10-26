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
    // Check if we're on the main page
    if (window.location.pathname === "/") {
      // If we are, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If we're not, navigate to main page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <a
        id="mlh-trust-badge"
        className="block max-w-[100px] min-w-[60px] fixed left-[75px] md:left-[100px] top-0 w-[10%] z-[10000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      {/* Background with blur */}
      <div
        className={`absolute inset-0 transition-colors ${
          isMenuOpen
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative px-4 py-1">
        <div className="flex justify-between items-center text-white">
          {/* Logo */}
          <a href="/" className="hover:scale-105 transition">
            <Image
              src={"/images/logo.png"}
              alt="Boilermake Logo"
              width={75}
              height={75}
              className="w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20 object-contain"
            />
          </a>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-12 px-4 md:px-12">
              <ul className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
                <li>
                  <button
                    onClick={() => handleNavigation("about")}
                    className="hover:text-orange-300 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="hover:text-orange-300 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] truncate"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("schedule")}
                    className="hover:text-orange-300 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                  >
                    Schedule
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("faq")}
                    className="hover:text-orange-300 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("sponsors")}
                    className="hover:text-orange-300 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                  >
                    Sponsors
                  </button>
                </li>
              </ul>
            </nav>
            <div className="hidden md:block lg:hidden">
              <ApplyButton
                text="Apply Now!"
                link="https://boilermake-apply.web.app"
                size={"small"}
              />
            </div>
            <div className="hidden lg:block">
              <ApplyButton
                text="Apply Now!"
                link="https://boilermake-apply.web.app"
                size={"medium"}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="bg-black/50 backdrop-blur-sm">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <button
                onClick={() => {
                  handleNavigation("about");
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
              >
                About
              </button>
              <a
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
              >
                Team
              </a>
              <button
                onClick={() => {
                  handleNavigation("schedule");
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
              >
                Schedule
              </button>
              <button
                onClick={() => {
                  handleNavigation("faq");
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  handleNavigation("sponsors");
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
              >
                Sponsors
              </button>
              <ApplyButton
                text="Apply Now!"
                link="https://boilermake-apply.web.app"
                size={"small"}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
