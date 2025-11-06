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
        <div ref={sectionRef} className="w-full max-w-4xl mx-auto px-8 flex flex-col items-center">
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
            
            <div className="w-full max-w-4xl border-2 border-white backdrop-blur-sm p-10 md:p-12 lg:p-16 relative" style={{backgroundColor: '#2A2627E6'}}>
                {/* Planet Image */}
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20">
                    <Image
                        src="/images/aboutplanet.png"
                        alt="Planet"
                        width={140}
                        height={140}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
                <div className="pr-12">
                    {/* TypedText uses defaultSpeed from TypingContext - no speed prop override */}
                    <TypedText 
                        className="text-white text-sm md:text-base leading-relaxed text-left"
                        style={{
                            fontFamily: 'var(--font-futura-cyrillic)'
                        }}
                        delay={200}
                        instanceKey="about-section-text"
                        shouldStart={isInView}
                    >
                        BoilerMake is Purdue University's premier hackathon, bringing together over 500 students from numerous universities and majors to compete in 36 hours of hacking for $4000+ in prizes. Designed for hackers of all levels, BoilerMake provides unique and valuable experiences regardless of skill level -- you can participate in fun activities, win cool prizes, get free swag and food, and most importantly, have a whole lot of fun! It's also a great opportunity to network with large companies in industry and develop new skills. BoilerMake XII will take place February 21-23, 2025. BoilerMake is also an MLH partner meaning we adhere to their Code of Conduct.
                    </TypedText>
                    <div className="mt-4">
                        <a 
                            href="https://hackp.ac/coc" 
                            target="_blank" 
                            className="text-yellow-300 hover:text-yellow-200 underline transition-colors duration-200"
                            style={{
                                fontFamily: 'var(--font-futura-cyrillic)'
                            }}
                        >
                            Code of Conduct
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}