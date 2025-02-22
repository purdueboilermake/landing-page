/**
 * ApplyButton.tsx
 * Will be used to display the apply button, with a prop for size (small, medium, large)
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';

type ApplyButtonProps = {
    text: string;
    link: string;
    size: 'small' | 'medium' | 'large' | 'xsmall';
    className?: string;
}

export default function ApplyButton({text, link, size, className }: ApplyButtonProps) {
    // Define classes for each size
    const sizeClasses = {
        small: 'py-2 px-2 text-xs rounded-full', // Larger border-radius for small
        medium: 'py-3 px-4 text-base rounded-full', // Larger border-radius for medium
        large: 'py-4 px-6 text-3xl rounded-2xl', // Moderate border-radius for large
        xsmall: 'py-1 px-1 text-[10px] rounded-full', // Smallest border-radius for xsmall
    };

    return (
        <a href={link} target='_blank' rel='noreferrer'>
            {/* text-[#DDB47D] was original color*/}
            <button
                className={`bg-white shadow-md text-[#C6A270] font-body font-extrabold hover:shadow-xl transition-shadow duration-300 ${sizeClasses[size]} ${className} mr-4`}
            >
                {text}
            </button>
        </a>
    );
}
