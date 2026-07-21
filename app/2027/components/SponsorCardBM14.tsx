/**
 * SponsorCard.tsx
 * This will be used to display each of the sponsors on the landing page, with their logo and a link to their website.
 * @AshokSaravanan222
 * 09-15-2024
 */

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react"

type SponsorCardProps = {
    sponsor: {
        name: string; // for alt text
        logo: string;
        url: string;
    };
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Card container dimensions (width x height) per tier
const cardSizeStyles: Record<string, { width: string; height: string; padding: string }> = {
    'xl': { width: 'clamp(300px, 52vw, 420px)', height: 'clamp(140px, 20vw, 180px)', padding: '24px' },
    'lg': { width: 'clamp(260px, 38vw, 340px)', height: 'clamp(120px, 16vw, 150px)', padding: '20px' },
    'md': { width: 'clamp(240px, 38vw, 320px)', height: 'clamp(110px, 15vw, 140px)', padding: '16px' },
    'sm': { width: 'clamp(200px, 30vw, 260px)', height: 'clamp(100px, 13vw, 120px)', padding: '12px' },
};

export default function SponsorCard({ sponsor, size = 'md' }: SponsorCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const sizeStyle = cardSizeStyles[size] || cardSizeStyles['md'];

    return (
        <a
            href={sponsor.url}
            target="_blank"
            rel="noreferrer"
            ref={cardRef}
            className={`transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: sizeStyle.width,
                height: sizeStyle.height,
                padding: sizeStyle.padding,
                backgroundColor: 'rgba(0, 0, 0, 0. 0.2)',
                border: '2px solid rgba(255, 255, 255, 1)',
                borderRadius: '16px',
                boxSizing: 'border-box',
            }}
        >
            <Image
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-contain"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
            />
        </a>
    )
}
