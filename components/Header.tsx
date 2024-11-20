/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from 'react';
import ApplyButton from './ApplyButton';
import Image from 'next/image';

type HeaderProps = {
    isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="w-full p-4 fixed top-0 z-50">
            <div className="flex justify-between items-center text-white">
                {/* Logo */}
                <a href="/2025">
                    {isMobile ? (
                        <Image src={"/images/logo.png"} alt="Boilermake Logo" width={50} height={50} style={{ minWidth: "50px",minHeight: "50px", "objectPosition": "contain" }} />
                    ) : (
                        <Image src={"/images/logo.png"} alt="Boilermake Logo" width={100} height={100} style={{ minWidth: "50px",minHeight: "50px", "objectPosition": "contain" }} />
                    )}
                </a>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {isMobile ? (
                    <a href="/teams">
                        <Image src={"/images/camera.png"} alt="Teams" width={50} height={50} style={{ "objectPosition": "contain" }} />
                    </a>
                ) : (
                    <>
                    <nav className="md:flex space-x-4 md:space-x-12 px-4 md:px-12">
                        <ul className="flex space-x-8 md:space-x-12">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/teams"
                                    className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    Teams
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sponsors"
                                    className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xs md:text-xl font-bold"
                                >
                                    Sponsors
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Apply Button */}
                        <ApplyButton size={"medium"} />
                    </>
                )}

                {/* 
                {isMobile ? (
                    <button
                        onClick={toggleDropdown}
                        className="text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                ) : (
                    <>
                        <nav className="hidden md:flex space-x-12 px-12">
                            <ul className="flex space-x-12">
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#teams"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        Teams
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#schedule"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        Schedule
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#faq"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#sponsors"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        Sponsors
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <ApplyButton size="medium" />
                    </>
                )}

                {isDropdownOpen && (
                    <div
                        id="dropdown"
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 right-4"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a
                                    href="#about"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#teams"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Teams
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sponsors"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sponsors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://boilermake.org/"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Apply
                                </a>
                            </li>
                        </ul>
                    </div>
                )} */}
            </div>
        </header>
    );
}
