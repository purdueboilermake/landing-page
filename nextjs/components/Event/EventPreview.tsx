/**
 * EventPreview.tsx
 * Displays an event preview with a green circle and optional curved text and time.
 * On hover or click, it displays the event details in a popup.
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from 'react';
import EventPopup from './EventPopup';

// Sub-component for rendering curved text using SVG
type CurvedTextProps = {
  text: string;
  position: 'top' | 'bottom';
  className?: string;
};

const CurvedText: React.FC<CurvedTextProps> = ({ text, position, className = '' }) => {
  const isTop = position === 'top';
  const pathId = isTop ? 'circlePathTop' : 'circlePathBottom';
  const d = isTop
    ? 'M 120, 120 m -50, 0 a 70,50 0 1,1 100,0 a 70,50 0 1,1 -100,0'
    : 'M 120, 110 m -50, 0 a 70,50 0 1,0 100,0 a 70,50 0 1,0 -100,0';

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className={className}>
      <defs>
        <path id={pathId} d={d} />
      </defs>
      <text className="text-[10px] md:text-[18px]" fontWeight="bold" fill="black">
        <textPath href={`#${pathId}`} startOffset="25%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

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
  return <p className={`text-xs md:text-md lg:text-lg ${className}`}>{time}</p>;
};

type EventPreviewProps = {
  isMobile: boolean;
  title: string;
  cardType: 1 | 2 | 3; // 1 = curved top text above, circle middle, then date below, 2 = date above, circle middle, then curved bottom text below, 3 = circle middle, curved text below, then date to the right
  popupType: 1 | 2; // 1 = left popup, 2 = right popup
  date: string;
  location: string;
  description: string;
};

const EventPreview: React.FC<EventPreviewProps> = ({
  isMobile,
  title,
  date,
  location,
  description,
  cardType,
  popupType,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Extract event time from date string
  const eventTime = new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Handle circle click to toggle popup
  const handleCircleClick = () => {
    setIsClicked(!isClicked);
  };

  // Determine if popup should be shown
  const showPopup = isPopupVisible || isClicked;

  // Layout configurations based on cardType
  const isCardType3 = cardType === 3;
  const containerClasses = isCardType3
    ? 'flex flex-row items-center space-x-4 cursor-pointer'
    : 'flex flex-col items-center space-y-1 md:space-y-2 cursor-pointer';

  // Handlers for hover events
  const handleMouseEnter = () => {
    if (!isClicked) setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) setIsPopupVisible(false);
  };

  // Compute classNames and styles for popup positioning
  let popupPositionClass = '';
  let popupStyle: React.CSSProperties = {};

  if (popupType === 1) {
    popupPositionClass = 'right-0';
  } else {
    popupPositionClass = cardType === 2 ? 'left-[130%]' : 'left-[90%]';
  }

  if (isMobile && cardType === 3 && popupType === 1) {
    popupStyle = {
      top: '20%',
      transform: 'translateY(-80%) translateX(40%)',
    };
  } else {
    popupStyle = {
      top: '50%',
      transform: 'translateY(-50%)',
    };
  }

  // Compute classNames for curved text positioning
  const curvedTextTopClassName = 'absolute top-[-45px] right-[-55px] md:right-[-15px]';
  const curvedTextBottomClassName = 'absolute bottom-[-15px] md:bottom-[-25px]';

  let curvedTextBottomPositionClass = '';
  if (isMobile) {
    curvedTextBottomPositionClass = cardType === 3 ? 'left-[-97px]' : 'left-[-97px]';
  } else {
    curvedTextBottomPositionClass = cardType === 3 ? 'right-[75px]' : 'right-[-15px]';
  }
  const curvedTextBottomFullClassName = `${curvedTextBottomClassName} ${curvedTextBottomPositionClass}`;

  return (
    <div
      className={`relative ${containerClasses}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* For cardType 2, display time above */}
      {cardType === 2 && <EventTime time={eventTime} />}

      <div className="relative">
        {/* Curved text above for cardType 1 */}
        {cardType === 1 && (
          <CurvedText text={title} position="top" className={curvedTextTopClassName} />
        )}

        {/* Green Circle */}
        <div className="flex items-center">
          <GreenCircle onClick={handleCircleClick} />
          {/* For cardType 3, display time to the right */}
          {cardType === 3 && <EventTime time={eventTime} className="ml-2 md:ml-4" />}
        </div>

        {/* Curved text below for cardType !== 1 */}
        {cardType !== 1 && (
          <CurvedText text={title} position="bottom" className={curvedTextBottomFullClassName} />
        )}
      </div>

      {/* For cardType 1, display time below */}
      {cardType === 1 && <EventTime time={eventTime} />}

      {/* Event Popup */}
      {showPopup && (
        <div
          className={`absolute ${popupPositionClass} rounded-lg w-[280px] md:w-[350px] lg:w-[600px]`}
          style={popupStyle}
        >
          <EventPopup
            title={title}
            date={date}
            location={location}
            description={description}
          />
        </div>
      )}
    </div>
  );
};

export default EventPreview;
