/**
 * EventPopup.tsx
 * This will be used to display the event details in a popup
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';

type EventPopupProps = {
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
}

export default function EventPopup({ title, startDate, endDate, location, description }: EventPopupProps) {
    // Format the date: "Day of the week, start time - end time"
    const eventDate = new Date(startDate);
    const dayOfWeek = eventDate.toLocaleDateString(undefined, { weekday: 'long' });
    const startTime = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endTime = new Date(endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="bg-[#E4F0F3] p-2 sm:p-3 md:p-6 rounded-lg shadow-lg w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] space-y-2 text-left cursor-default whitespace-normal break-words z-50">
            {/* Title Section */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-title text-[#357049] font-extrabold">{title}</h3>

            {/* Location and Date Section */}
            <div className="text-xs md:text-sm font-subtitle text-[#357049] space-y-1">
                <p className="whitespace-normal text-black">{`${dayOfWeek}, ${startTime}${startDate !== endDate ? ' - ' + endTime : ''}`}</p>
                <p className="whitespace-normal">{location}</p>
            </div>

            {/* Description Section */}
            <p className="text-[10px] md:text-base font-body text-black whitespace-normal text-black">{description}</p>
        </div>
    );
}
