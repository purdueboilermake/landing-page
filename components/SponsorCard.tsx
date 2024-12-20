/**
 * SponsorCard.tsx
 * This will be used to display each of the sponsors on the landing page, with their logo, and a link to their website. It will be a circular black outline behind each of the sponsor logos. 
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
    }
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
    return (
        <a href={sponsor.url} target="_blank" rel="noreferrer">
            <div className="p-4 inline-block">
                <div className="bg-black rounded-full p-4 flex items-center justify-center">
                    <Image 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </a>
    )
}
