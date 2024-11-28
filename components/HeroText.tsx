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
    showButton?: boolean;
}

export default function HeroText({ isMobile, showButton = true }: HeroTextProps) {
    return (
        <div className={`container mx-auto text-white`}>
            <h1 className={`text-5xl md:text-8xl font-averia-libre font-bold ${isMobile ? 'text-2xl' : ''}`}>BOILERMAKE</h1>
            <h2 className={`text-[100px] md:text-[200px] font-arvo leading-none font-extrabold ${isMobile ? 'text-5xl' : ''}`}>XII</h2>
            <p className={`text-xl md:text-3xl font-body font-extrabold leading-none mb-4 ${isMobile ? 'text-sm' : ''}`}>1/19 - 1/23</p>
            {showButton && <ApplyButton size={isMobile ? 'medium' : 'large'} />}
        </div>
    );
}
