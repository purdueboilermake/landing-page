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
        logoScale?: number;
        logoOffsetY?: number;
    };
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Wide bars, matching the light sponsor cards on the main page.
const cardSizeStyles: Record<string, { width: string; height: string; padding: string }> = {
    'xl': { width: 'clamp(280px, 48vw, 520px)', height: 'clamp(108px, 12vw, 140px)', padding: '16px 28px' },
    'lg': { width: 'clamp(260px, 40vw, 460px)', height: 'clamp(104px, 11vw, 132px)', padding: '16px 28px' },
    'md': { width: 'clamp(200px, 28vw, 320px)', height: 'clamp(88px, 10vw, 112px)', padding: '12px 20px' },
    'sm': { width: 'clamp(168px, 24vw, 280px)', height: 'clamp(80px, 9vw, 104px)', padding: '12px 18px' },
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
    const logoScale = sponsor.logoScale ?? 1;
    const logoOffsetY = sponsor.logoOffsetY ?? 0;

    return (
        <a
            href={sponsor.url || undefined}
            target={sponsor.url ? "_blank" : undefined}
            rel={sponsor.url ? "noreferrer" : undefined}
            ref={cardRef}
            className={`transition-all duration-200 ease-out hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: sizeStyle.width,
                height: sizeStyle.height,
                padding: sizeStyle.padding,
                backgroundColor: '#DEDEDE',
                border: '3px solid #21152F',
                borderRadius: '16px',
                boxShadow: '5px 5px 0 #21152F',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <Image
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-contain"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'contain', transform: `translateY(${logoOffsetY}px) scale(${logoScale})` }}
            />
        </a>
    )
}
