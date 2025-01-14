/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from 'react';
import ApplyButton from './ApplyButton';
import Image from 'next/image';
import { IParallax } from '@react-spring/parallax';
import { LAYER_OFFSETS, ScreenSize } from '@/utils/parallaxOffset';

type HeaderProps = {
    screenSize: ScreenSize;
    parallaxRef?: React.RefObject<IParallax>;
};

export default function Header({ screenSize, parallaxRef }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (section: string) => {
        const offset = LAYER_OFFSETS[section][screenSize]
        // Check if we're on the main page
        if (window.location.pathname === '/') {
            // If we are, just scroll
            if (parallaxRef?.current) {
                parallaxRef.current.scrollTo(offset);
            }
        } else {
            // If we're not, navigate to main page with hash parameter
            window.location.href = `/?scroll=${offset}`;
        }
    };

    return (
        <header className="w-full fixed top-0 z-50">
            {/* Background with blur */}
            <div className={`absolute inset-0 transition-colors ${isMenuOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/10'}`} />

            {/* Content */}
            <div className="relative p-4">
                <div className="flex justify-between items-center text-white">
                    {/* Logo */}
                    <a href="/" className='hover:scale-105 transition'>
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
                                        onClick={() => handleNavigation('stat3')}
                                        className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                                    >
                                        About
                                    </button>
                                </li>
                                <li>
                                    <a
                                        href="/about-us"
                                        className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] truncate"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation('schedule-section')}
                                        className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                                    >
                                        Schedule
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation('faq-sign')}
                                        className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                                    >
                                        FAQ
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation('sponsors-sign')}
                                        className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                                    >
                                        Sponsors
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className="hidden md:block lg:hidden">
                            <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"small"} />
                        </div>
                        <div className="hidden lg:block">
                            <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"medium"} />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-black/50 backdrop-blur-sm">
                        <nav className="flex flex-col items-center py-4 space-y-4">
                            <button
                                onClick={() => {
                                    handleNavigation('stat3');
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
                                About Us
                            </a>
                            <button
                                onClick={() => {
                                    handleNavigation('schedule-section');
                                    setIsMenuOpen(false);
                                }}
                                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
                            >
                                Schedule
                            </button>
                            <button
                                onClick={() => {
                                    handleNavigation('faq-sign');
                                    setIsMenuOpen(false);
                                }}
                                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => {
                                    handleNavigation('sponsors-sign');
                                    setIsMenuOpen(false);
                                }}
                                className="hover:text-amber-600 transition-all duration-300 font-subtitle text-white text-lg"
                            >
                                Sponsors
                            </button>
                            <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"small"} />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
