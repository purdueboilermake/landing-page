/**
 * SponsorCard.tsx
 * This will be used to display each of the sponsors on the landing page, with their logo and a link to their website.
 * @AshokSaravanan222
 * 09-15-2024
 */

import Image, { StaticImageData } from "next/image";
import React from "react"

type SponsorCardProps = {
    sponsor: {
        name: string; // for alt text
        logo: string;
        url: string;
    };
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
    'sm': 'w-[125px] sm:w-[150px] md:w-[175px] lg:w-[225px]',
    'md': 'w-[150px] sm:w-[200px] md:w-[225px] lg:w-[275px]',
    'lg': 'w-[200px] sm:w-[275px] md:w-[325px] lg:w-[375px]',
    'xl': 'w-[300px] sm:w-[375px] md:w-[450px] lg:w-[550px]'
};

export default function SponsorCard({ sponsor, size = 'md' }: SponsorCardProps) {
    return (
        <a href={sponsor.url} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
            <Image 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className={`${sizeClasses[size]} object-contain`}
                width={0}
                height={0}
                sizes="100vw"
            />
        </a>
    )
}
