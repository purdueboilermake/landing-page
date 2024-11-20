/**
 * SponsorCard.tsx
 * This will be used to display each of the sponsors on the landing page, with their logo, and a link to their website. It will be a circular black outline behind each of the sponsor logos. 
 * @AshokSaravanan222
 * 09-15-2024
 */

import Image, { StaticImageData } from "next/image";
import React from "react"

type SponsorCardProps = {
    isMobile: boolean;
    sponsor: {
        name: string; // for alt text
        logo: string;
        url: string;
    }
}

export default function SponsorCard({ sponsor, isMobile }: SponsorCardProps) {
    return (
        <a href={sponsor.url} target="_blank" rel="noreferrer">
            <div className={`w-150 h-150 bg-black rounded-full flex items-center justify-center`}>
                <Image src={sponsor.logo} alt={sponsor.name} height={100} width={100} />
            </div>
        </a>
    )
}
