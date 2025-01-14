/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';
import ApplyButton from './ApplyButton';
import Image from 'next/image';
import { IParallax } from '@react-spring/parallax';
import { LAYER_OFFSETS, ScreenSize } from '@/utils/parallaxOffset';

type HeaderProps = {
    screenSize: ScreenSize;
    parallaxRef?: React.RefObject<IParallax>;
};

export default function Header({ screenSize, parallaxRef }: HeaderProps) {
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
        <header className="w-full p-4 fixed top-0 z-50 backdrop-brightness-90">
            <div className="flex justify-between items-center text-white">
                {/* Logo */}
                <a href="/">
                    <Image
                        src={"/images/logo.png"}
                        alt="Boilermake Logo"
                        width={75}
                        height={75}
                        className="object-contain"
                    />
                </a>

                {/* Spacer */}
                <div className="flex-grow"></div>

                <div className="flex items-center">
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
                    <div className="sm:block md:hidden">
                        <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"xsmall"} />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"small"} />
                    </div>
                    <div className="hidden lg:block">
                        <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"medium"} />
                    </div>
                </div>
            </div>
        </header>
    );
}
