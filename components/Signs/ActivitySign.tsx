/**
* ActivitySign.tsx
* Component used to show an activity, with time and description
*/
import { useState, useEffect } from "react";

type ActivitySignProps = {
    title: string;
    startDate: string;
    size: 'small' | 'medium' | 'large' | 'xlarge';
    location?: string;
    isExpanded?: boolean;
    description?: string;
}

// change this to implement Tristan's typewriter later
function useTypewriter(text: string, delay: number, startTyping: boolean) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!startTyping) {
            setCurrentText('');
            setCurrentIndex(0);
            return;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [text, delay, currentIndex, startTyping]);

    return currentText;
}

const widthMap = {
    'small': 'w-[70%] sm:w-[65%] md:w-[450px]',
    'medium': 'w-[75%] sm:w-[70%] md:w-[500px]',
    'large': 'w-[80%] sm:w-[75%] md:w-[550px]',
    'xlarge': 'w-[85%] sm:w-[80%] md:w-[600px]'
}

const verticalPadding = {
    'small': 'py-2 md:py-3',
    'medium': 'py-3 md:py-4',
    'large': 'py-3 sm:py-4 md:py-6 lg:py-10',
    'xlarge': 'py-4 md:py-6'
}

const timeClass = 'text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-widest font-bold';
const titleClass = 'text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold';
const contentClass = 'text-xs sm:text-sm md:text-sm lg:text-base';
const titleMargin = 'mt-5';

export default function ActivitySign({ title, startDate, size, location, isExpanded, description }: ActivitySignProps) {
    const date = new Date(startDate);
    const time = date.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        if (!isExpanded) {
            setShowDescription(false);
            return;
        }
    }, [isExpanded]);

    const typedLocation = useTypewriter(location || '', 30, isExpanded || false);
    const typedDescription = useTypewriter(description || '', 30, showDescription);

    useEffect(() => {
        if (location && typedLocation.length === location.length) {
            const timeout = setTimeout(() => setShowDescription(true), 300);
            return () => clearTimeout(timeout);
        }
    }, [typedLocation, location]);

    return (
        <div className={`${widthMap[size]} ${verticalPadding[size]} border-[4px] bg-[#2A2627E6] border-white flex flex-col items-center hover:-translate-y-1 ${size === 'medium' ? 'px-8 sm:px-11 md:px-14 lg:px-15' : 'px-4 sm:px-6 md:px-8 lg:px-10'}`}>
            <div className={`text-white ${timeClass} font-normal`} style={{
                fontFamily: 'var(--font-geist-vf)'
            }}>
                <span>{time}</span>
            </div>
            <p className={`text-[#FFE42D] ${titleClass} font-semibold leading-none ${titleMargin} text-center`} style={{
                fontFamily: 'var(--font-disket-mono)',
            }}>
                {title.split(' ').length === 2 ? (
                    <>
                        {title.split(' ')[0]}<br />
                        {title.split(' ')[1]}
                    </>
                ) : title}
            </p>

            {/* Inline expanded content (no overlay, no fixed/focus) */}
            {isExpanded && (
                <div className={`text-white ${contentClass} font-body mt-2 sm:mt-3 md:mt-4 text-center transition-all duration-300 ease-in-out max-w-full px-2`} style={{
                    fontFamily: 'var(--font-geist-vf)'
                }}>
                    <div className="pb-3 min-h-[1.5em]">{typedLocation}</div>
                    {showDescription && (
                        <div className="pt-3 min-h-[3em]">{typedDescription}</div>
                    )}
                </div>
            )}
        </div>
    );
}
