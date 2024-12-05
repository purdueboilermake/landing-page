/**
 * ApplyButton.tsx
 * Will be used to display the apply button, with a prop for size (small, medium, large)
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';

type ApplyButtonProps = {
    size: 'small' | 'medium' | 'large';
    className?: string;
}

export default function ApplyButton({ size, className }: ApplyButtonProps) {
    // Define classes for each size
    const sizeClasses = {
        small: 'py-2 px-2 text-sm rounded-full', // Larger border-radius for small
        medium: 'py-3 px-4 text-md rounded-full', // Larger border-radius for medium
        large: 'py-4 px-6 text-3xl rounded-2xl', // Moderate border-radius for large
    };

    return (
        <a href='https://boilermake-apply.web.app/login' target='_blank' rel='noreferrer'>
            <button
                className={`bg-white shadow-md text-[#DDB47D] font-body font-extrabold hover:shadow-lg transition-shadow duration-300 ${sizeClasses[size]} ${className}`}
            >
                Apply Now!
            </button>
        </a>
    );
}
