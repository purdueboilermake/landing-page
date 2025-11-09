/**
 * AboutSection.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState, useEffect, useRef } from 'react';
import TypedText, { TypedHeading } from './TypedText';
import Image from 'next/image';

export default function AboutSection() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isInView]);

    return (
        <div ref={sectionRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 md:pr-24 flex flex-col items-center" style={{ minWidth: '350px' }}>
            <div className="mb-12 text-center">
                <div
                    style={{
                        fontFamily: 'var(--font-disket-mono)',
                        fontWeight: 400,
                        fontSize: 'clamp(32px, 8vw, 60px)',
                        lineHeight: '100%',
                        letterSpacing: '0.1em',
                        color: '#FFE958',
                        textShadow: '0px 0px 15px #FFDE00',
                    }}
                >
                    About<span style={{ animation: 'blink 1s infinite' }}>_</span>
                </div>
            </div>
            
            <div className="w-full max-w-4xl relative">
                {/* Planet Image - outside the bordered/overflow container */}
                <div className="hidden md:block absolute right-[-100px] top-[60%] transform -translate-y-1/2 z-20 pointer-events-none">
                    <Image
                        src="/images/aboutplanet.png"
                        alt="Planet"
                        width={140}
                        height={140}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
                
                <div className="border-2 border-white backdrop-blur-sm p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 overflow-y-auto" style={{backgroundColor: '#2A2627E6', maxHeight: '70vh', minHeight: '200px', overflowX: 'auto'}}>
                    <div className="pr-0 md:pr-12" style={{ minWidth: '300px', paddingLeft: '0', paddingRight: '0' }}>
                        {/* TypedText uses defaultSpeed from TypingContext - no speed prop override */}
                        <TypedText 
                            className="text-white text-sm md:text-base leading-relaxed text-left break-words overflow-wrap-anywhere"
                            style={{
                                fontFamily: 'var(--font-futura-cyrillic)',
                                wordBreak: 'break-word',
                                overflowWrap: 'anywhere'
                            }}
                            delay={200}
                            instanceKey="about-section-text"
                            shouldStart={isInView}
                        >
                            BoilerMake is Purdue University's premier hackathon, bringing together over 500 students from numerous universities and majors to compete in 36 hours of hacking for $4000+ in prizes. Designed for hackers of all levels, BoilerMake provides unique and valuable experiences regardless of skill level -- you can participate in fun activities, win cool prizes, get free swag and food, and most importantly, have a whole lot of fun! It's also a great opportunity to network with large companies in industry and develop new skills. BoilerMake XIII will take place January 23-25, 2026. BoilerMake is also an MLH partner meaning we adhere to their Code of Conduct.
                        </TypedText>
                        <div className="mt-4">
                            <a 
                                href="https://hackp.ac/coc" 
                                target="_blank" 
                                className="text-yellow-300 hover:text-yellow-200 underline transition-colors duration-200 break-words"
                                style={{
                                    fontFamily: 'var(--font-futura-cyrillic)',
                                    wordBreak: 'break-word'
                                }}
                            >
                                Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}