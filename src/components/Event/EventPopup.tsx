/**
 * EventPopup.tsx
 * This will be used to display the event details in a popup
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';

type EventPopupProps = {
    title: string;
    date: string;
    location: string;
    description: string;
}

export default function EventPopup({ title, date, location, description }: EventPopupProps) {
    // Format the date: "Day of the week, start time - end time"
    const eventDate = new Date(date);
    const dayOfWeek = eventDate.toLocaleDateString(undefined, { weekday: 'long' });
    const startTime = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endTime = new Date(eventDate.getTime() + 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="bg-[#E4F0F3] p-3 md:p-6 rounded-lg shadow-lg w-[200px] md:w-[300px] lg:w-[400px] space-y-2 text-left cursor-default">
            {/* Title Section */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-title text-[#357049] font-extrabold">Event Title</h3>

            {/* Location and Date Section */}
            <div className="text-xs md:text-sm font-subtitle text-[#357049] space-y-1">
                <p>{`${dayOfWeek}, ${startTime} - ${endTime}`}</p>
                <p>{location}</p>
            </div>

            {/* Description Section */}
            <p className="text-[10px] md:text-base font-body text-black">{description}</p>
        </div>
    );
}
