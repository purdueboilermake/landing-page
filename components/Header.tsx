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

            {/* <a id="mlh-trust-badge" className="block max-w-[100px] min-w-[60px] fixed left-[75px] md:left-[100px] top-0 w-[10%] z-[10000]" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season" style={{ width: '100%' }} /></a> */}

            {/* Background with blur */}
            <div className={`absolute inset-0 transition-colors ${
                isMenuOpen
                ? 'bg-black/50 backdrop-blur-sm'
                : 'bg-gradient-to-b from-black/50 to-transparent'
            }`} />

            {/* Content */}
            <div className="relative px-6">
                <div className="flex justify-between items-center text-white">
                    {/* HERE: Logo positioned on left - removed excessive padding */}
                    <a href="/" className='hover:scale-105 transition' style={{ paddingTop: '5.9vh' }}> 
                        <Image
                            src={"/images/logo_BMXIII.png"}
                            alt="Boilermake Logo"
                            width={75}
                            height={75}
                            className="w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20 object-contain"
                        />
                    </a>

                    {/* Spacer */}

                    {/* Desktop Navigation */}

<div className="hidden md:flex flex-1" style={{ paddingLeft: '77.5px', paddingRight: '77.5px' , paddingTop: '6.7vh'}}>
    {/* 60px */}
    <nav className="flex items-center justify-between w-full">
        <button
            onClick={() => handleNavigation('stat3')}
            className="hover:text-yellow-300 transition-colors duration-200"
            style={{
                fontFamily: 'var(--font-futura-cyrillic)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 3.5vw, 28px)',
                lineHeight: '100%',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                textShadow: '0px 0px 15px #FFDE00',
            }}
        >
            About
        </button>
        <button
            onClick={() => handleNavigation('schedule-section')}
            className="hover:text-yellow-300 transition-colors duration-200"
            style={{
                fontFamily: 'var(--font-futura-cyrillic)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 3.5vw, 28px)',
                lineHeight: '100%',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                textShadow: '0px 0px 15px #FFDE00',
            }}
        >
            Schedule
        </button>
        <button
            onClick={() => handleNavigation('faq-sign')}
            className="hover:text-yellow-300 transition-colors duration-200"
            style={{
                fontFamily: 'var(--font-futura-cyrillic)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 3.5vw, 28px)',
                lineHeight: '100%',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                textShadow: '0px 0px 15px #FFDE00',
            }}
        >
            FAQs
        </button>
        <button
            onClick={() => handleNavigation('sponsors-sign')}
            className="hover:text-yellow-300 transition-colors duration-200"
            style={{
                fontFamily: 'var(--font-futura-cyrillic)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 3.5vw, 28px)',
                lineHeight: '100%',
                letterSpacing: '0.1em',
                color: '#FFFFFF',
                textShadow: '0px 0px 15px #FFDE00',
            }}
        >
            Sponsors
        </button>
    </nav>
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
