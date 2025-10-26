/**
 * AboutSection.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @AshokSaravanan222
 * 09-15-2024
 */

import TypedText, { TypedHeading } from './TypedText';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <div className="w-full max-w-4xl mx-auto px-8 flex flex-col items-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 drop-shadow-lg font-arvo mb-12 text-center">
                <TypedHeading 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 drop-shadow-lg font-arvo"
                    delay={0}
                >
                    About
                </TypedHeading>
            </div>
            
            <div className="w-full max-w-4xl border-2 border-white bg-gradient-to-br from-gray-950/90 via-gray-900/90 to-gray-950/90 backdrop-blur-sm p-10 md:p-12 lg:p-16 relative">
                {/* Planet Image */}
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20">
                    <Image
                        src="/images/aboutplanet.png"
                        alt="Planet"
                        width={140}
                        height={140}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
                <div className="pr-32">
                    <TypedText 
                        className="text-white text-sm md:text-base leading-relaxed text-left font-mono"
                        delay={200}
                    >
                        BoilerMake is Purdue University's premier hackathon, bringing together over 500 students from numerous universities and majors to compete in 36 hours of hacking for $4000+ in prizes. Designed for hackers of all levels, BoilerMake provides unique and valuable experiences regardless of skill level -- you can participate in fun activities, win cool prizes, get free swag and food, and most importantly, have a whole lot of fun! It's also a great opportunity to network with large companies in industry and develop new skills. BoilerMake XII will take place February 21-23, 2025. BoilerMake is also an MLH partner meaning we adhere to their Code of Conduct.
                    </TypedText>
                    <div className="mt-4">
                        <a href="https://hackp.ac/coc" target="_blank" className="text-yellow-300 hover:text-yellow-200 underline transition-colors duration-200">
                            Code of Conduct
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}