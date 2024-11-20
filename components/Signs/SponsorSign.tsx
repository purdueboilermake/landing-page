/**
 * SponsorSign.tsx
 * The sponsor sign which will just be the background image with 'Sponsors' text
 * @AshokSaravanan222
 * 09-15-2024
 */

import Image from 'next/image'

export default function SponsorSign() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={"/images/sign_3.png"}
                alt="Sponsors Sign"
                width={200}
                height={200}
                className="absolute inset-0 w-full h-full object-contain"
            />
        </div>
    )
}