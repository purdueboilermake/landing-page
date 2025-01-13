/**
 * ActivityPreview.tsx
 * This component is used to display a preview of an event,
 * @AshokSaravanan222
 * 12-24-2024
 */

import { useState } from "react";
import EventPopup from "./EventPopup";
import Image from "next/image";
import ActivitySign from "../Signs/ActivitySign";

type ActivityPreviewProps = {
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    isActive: boolean;
    onEventClick: () => void;
    size: 'small' | 'medium' | 'large' | 'xlarge';
    popup: 'left' | 'right'
  };


const ActivityPreview: React.FC<ActivityPreviewProps> = ({
    title,
    startDate,
    endDate,
    location,
    description,
    isActive,
    onEventClick,
    size,
    popup
  }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
  
    const handleCircleClick = () => {
        onEventClick();
    };
  
    // Extract event time from date string
    const startTime = new Date(startDate).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  
    // Show popup only when this event is active
    const showPopup = isActive;
  
    // Determine popup position based on size
    const popupPosition = popup === 'right'
      ? 'left-full -ml-8' // Position to the right
      : size === 'xlarge'
      ? '-left-full ml-16 sm:ml-32 md:ml-44 lg:ml-56' // Position to the left
      : size === 'medium'
      ? '-left-full -ml-5 sm:-ml-0 md:-ml-0 lg:-ml-0' // Position to the left
      : size === 'large' ?
      '-left-full -ml-16 sm:-ml-24 md:-ml-28 lg:ml-36'
      : '-left-full -ml-32 sm:-ml-40 md:-ml-32 lg:-ml-20'; // Position to the left
  
    // Handlers for hover events
    const handleMouseEnter = () => {
      if (!isActive) setIsPopupVisible(true);
    };
  
    const handleMouseLeave = () => {
      if (!isActive) setIsPopupVisible(false);
    };
  
    return (
      <div className="relative cursor-pointer" onClick={handleCircleClick}>
        <div
          className={`flex flex-col items-center gap-4`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ActivitySign title={title} time={startTime} size={size} />

          {/* Popup */}
          {(showPopup && isPopupVisible) && (
            <div className={`absolute top-1/2 -translate-y-1/2 ${popupPosition} z-50`}>
              <EventPopup
                title={title}
                startDate={startDate}
                endDate={endDate}
                location={location}
                description={description}
              />
            </div>
          )}
        </div>
      </div>
    );
};

export default ActivityPreview;