/**
* ActivitySign.tsx
* Component used to show an activity, with time and description
*/
import { useState, useEffect } from "react";
import TypedText from "../TypedText";

type ActivitySignProps = {
    title: string;
    startDate: string;
    endDate?: string;
    size: 'small' | 'medium' | 'large' | 'xlarge';
    location?: string;
    isExpanded?: boolean;
    description?: string;
    activityId?: number; // unique identifier for tracking first open
}

const widthMap = {
    'small': 'w-[70%] sm:w-[65%] md:w-[450px]',
    'medium': 'w-[75%] sm:w-[70%] md:w-[500px]',
    'large': 'w-[35vw] sm:w-[36vw] md:w-[36vw] min-[1021px]:w-[38vw]',
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

export default function ActivitySign({ title, startDate, size, location, isExpanded, description, activityId }: ActivitySignProps) {
    const date = new Date(startDate);
    const startTime = date.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    const startingDay = date.toLocaleDateString([], { weekday: 'short' });
    const endingDay = date.toLocaleDateString([], { weekday: 'short' });
    const endingTime = date.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    const [showDescription, setShowDescription] = useState(false);
    const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

    useEffect(() => {
        if (!isExpanded) {
            setShowDescription(false);
            return;
        }

        // If already opened before, show description immediately
        if (hasOpenedBefore && location) {
            setShowDescription(true);
            return;
        }

        // First time opening: mark as opened and wait for location to finish typing
        if (isExpanded && location && !hasOpenedBefore) {
            setHasOpenedBefore(true);
            const timeout = setTimeout(() => setShowDescription(true), 500);
            return () => clearTimeout(timeout);
        }
    }, [isExpanded, location, hasOpenedBefore]);

    return (
        <div className={`${widthMap[size]} ${verticalPadding[size]} border-[4px] bg-[#2A2627E6] border-white flex flex-col items-center hover:-translate-y-1 ${size === 'medium' ? 'px-8 sm:px-11 md:px-14 lg:px-15' : 'px-4 sm:px-6 md:px-8 lg:px-10'}`}>
            <div className={`text-white ${timeClass} font-normal`} style={{
                fontFamily: 'var(--font-futura-cyrillic)'
            }}>
                <span>{startingDay} {startTime} - {endingDay} {endingTime}</span>
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
                    fontFamily: 'var(--font-futura-cyrillic)'
                }}>
                    {location && (
                        <div className="pb-3 min-h-[1.5em]">
                            <TypedText
                                instanceKey={`activity-location-${activityId}`}
                                shouldStart={isExpanded}
                                delay={0}
                                style={{
                                    fontFamily: 'var(--font-futura-cyrillic)'
                                }}
                            >
                                {location}
                            </TypedText>
                        </div>
                    )}
                    {showDescription && description && (
                        <div className="pt-3 min-h-[3em]">
                            <TypedText
                                instanceKey={`activity-description-${activityId}`}
                                shouldStart={showDescription}
                                delay={0}
                                style={{
                                    fontFamily: 'var(--font-futura-cyrillic)'
                                }}
                            >
                                {description}
                            </TypedText>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
