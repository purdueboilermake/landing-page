/**
 * FAQSign.tsx
 * The FAQ sign which will just be the background image with 'FAQ' text
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';
import Image from 'next/image';

export default function FAQSign() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={"/images/sign_post.png"}
                alt="FAQ pole"
                className="absolute inset-0 w-full h-full object-contain pt-24 max-h-full"
                width={0}
                height={0}
                sizes="100vw"
            />
        </div>
    )
}