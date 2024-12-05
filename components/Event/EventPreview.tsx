/**
 * EventPreview.tsx
 * Displays an event preview with a green circle and optional text and time.
 * On hover or click, it displays the event details in a popup.
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from 'react';
import EventPopup from './EventPopup';

// Sub-component for rendering the green circle
type GreenCircleProps = {
  onClick?: () => void;
};

const GreenCircle: React.FC<GreenCircleProps> = ({ onClick }) => {
  return (
    <div
      className="w-12 md:w-24 lg:w-32 h-12 md:h-24 lg:h-32 bg-green-500 rounded-full flex items-center justify-center"
      onClick={onClick}
    />
  );
};

// Sub-component for rendering the event time
type EventTimeProps = {
  time: string;
  className?: string;
};

const EventTime: React.FC<EventTimeProps> = ({ time, className = '' }) => {
  return <p className={`text-xs md:text-md lg:text-lg ${className} text-black`}>{time}</p>;
};

type EventPreviewProps = {
  title: string;
  cardType: 1 | 2 | 3; // 1 = text above, circle middle, then date below, 2 = date above, circle middle, then text below, 3 = circle middle, text below, then date to the right
  popupType: 1 | 2; // 1 = left popup, 2 = right popup
  date: string;
  location: string;
  description: string;
  isActive: boolean;
  onEventClick: () => void;
};

const EventPreview: React.FC<EventPreviewProps> = ({
  title,
  date,
  location,
  description,
  cardType,
  popupType,
  isActive,
  onEventClick,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleCircleClick = () => {
    onEventClick();
  };

  // Extract event time from date string
  const eventTime = new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Show popup only when this event is active
  const showPopup = isActive;

  // Handlers for hover events
  const handleMouseEnter = () => {
    if (!isActive) setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isActive) setIsPopupVisible(false);
  };

  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center gap-4 cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top section */}
        <div className="flex flex-col items-center gap-1">
          {/* Time above for cardType 2 */}
          {cardType === 2 && <EventTime time={eventTime} />}

          {/* Text above for cardType 1 */}
          {cardType === 1 && (
            <span className="text-xs md:text-base font-bold text-black">{title}</span>
          )}

          {/* Circle and optional side time */}
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-1">
              <GreenCircle onClick={handleCircleClick} />
              {cardType === 3 && <span className="text-xs md:text-base font-bold text-black">{title}</span>}
            </div>
            {cardType === 3 && <div className="pb-4"><EventTime time={eventTime} /></div>}
          </div>

          {/* Text below for cardType 2 & 3 */}
          {cardType !== 1 && cardType !== 3 && (
            <span className="text-xs md:text-base font-bold text-black">{title}</span>
          )}

          {/* Time below for cardType 1 */}
          {cardType === 1 && <EventTime time={eventTime} />}
        </div>

        {/* Popup */}
        {(showPopup && isPopupVisible) && (
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className={`${
              popupType === 1 
                ? 'right-[calc(100%-0rem)] md:right-[calc(100%-5rem)] -translate-y-1/2' 
                : `left-[calc(100%+5rem)] md:left-[calc(100%+7rem)] -translate-y-1/2`
            } absolute w-[280px] md:w-[350px] lg:w-[600px]`}>
              <EventPopup
                title={title}
                date={date}
                location={location}
                description={description}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPreview;
