/**
 * HeroText.tsx
 * Will be used to display the hero text on the landing page, like the title, subtitle, date, and apply button
 * @AshokSaravanan222
 * 09-15-2024
 */
import React from 'react';
import ApplyButton from './ApplyButton';

type HeroTextProps = {
    showButton?: boolean;
}

export default function HeroText({ showButton = true }: HeroTextProps) {
    return (
        <div className="container mx-auto text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-averia-libre font-bold">BOILERMAKE</h1>
            <h2 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[200px] font-arvo leading-none font-extrabold">XII</h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-3xl font-body font-extrabold leading-none mb-4">1/19 - 1/23</p>
            {showButton && <ApplyButton text="Apply Now!" link='https://boilermake-apply.web.app/login' size="small" className="sm:hidden"  />}
            {showButton && <ApplyButton text="Apply Now!" link='https://boilermake-apply.web.app/login' size="medium" className="hidden sm:block lg:hidden" />}
            {showButton && <ApplyButton text="Apply Now!" link='https://boilermake-apply.web.app/login' size="large" className="hidden lg:block" />}
        </div>
    );
}
