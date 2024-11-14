/**
 * HeroText.tsx
 * Will be used to display the hero text on the landing page, like the title, subtitle, date, and apply button
 * @AshokSaravanan222
 * 09-15-2024
 */
import React from 'react';
import ApplyButton from './ApplyButton';

type HeroTextProps = {
    isMobile: boolean;
}

export default function HeroText({ isMobile }: HeroTextProps) {
    return (
        <div className={`container mx-auto text-white`}>
            {/* BOILERMAKE in subtitle font */}
            <h1 className="text-5xl md:text-8xl font-subtitle font-bold">BOILERMAKE</h1>

            {/* XII in title font */}
            <h2 className="text-[100px] md:text-[200px] font-title leading-none font-extrabold">XII</h2>

            {/* Date in paragraph font */}
            <p className="text-xl md:text-3xl font-body font-extrabold leading-none mb-4">1/19 - 1/23</p>
        </div>
    );
}
