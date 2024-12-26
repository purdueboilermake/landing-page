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

type HeaderProps = {
    showNav?: boolean;
    parallaxRef?: React.RefObject<IParallax>;
};

export default function Header({ showNav = true, parallaxRef }: HeaderProps) {
    const scrollTo = (offset: number) => {
        if (parallaxRef?.current) {
            parallaxRef.current.scrollTo(offset);
        }
    };

    return (
        <header className="w-full p-4 fixed top-0 z-50">
            <div className="flex justify-between items-center text-white">
                {/* Logo */}
                <a href="/2025">
                    <Image
                        src={"/images/logo.png"}
                        alt="Boilermake Logo"
                        width={100}
                        height={100}
                        className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
                    />
                </a>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Mobile Camera Icon / Desktop Nav */}
                <div className={`${showNav ? "md:hidden" : ""}`}>
                    <a href="/about-us">
                        <Image
                            src={"/images/camera.png"}
                            alt="About Us"
                            width={100}
                            height={100}
                            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
                        />
                    </a>
                </div>

                <div className={`${showNav ? "hidden md:flex" : "hidden"}`}>
                    <nav className="flex space-x-4 md:space-x-12 px-4 md:px-12">
                        <ul className="flex space-x-8 md:space-x-12">
                            <li>
                                <button
                                    onClick={() => scrollTo(1.6)}
                                    className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <a
                                    href="/about-us"
                                    className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo(2.0)}
                                    className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    Schedule
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo(4.0)}
                                    className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo(5.0)}
                                    className="hover:text-amber-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    Sponsors
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <ApplyButton text='Apply Now!' link='https://boilermake-apply.web.app' size={"medium"} />
                </div>
            </div>
        </header>
    );
}
