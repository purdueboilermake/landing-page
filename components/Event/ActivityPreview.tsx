/**
* ActivityPreview.tsx
* This component is used to display a preview of an event,
*/

import { useState } from "react";
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
  popup: 'left' | 'right';
  align?: 'left' | 'right' | 'center';
  activityId?: number;
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
  popup,
  align = 'center',
  activityId
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Keep the original size even when expanded
  const currentSize = size;

  // Determine popup position based on size

  // Handlers for hover events
  const handleMouseEnter = () => {
    if (!isActive) setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isActive) setIsPopupVisible(false);
  };

  const handleCircleClick = () => {
    setIsExpanded(!isExpanded);
    onEventClick();
  };

  return (
    <div
      className={`relative cursor-pointer ${align === 'left' ? 'ml-0 mr-auto' : align === 'right' ? 'ml-auto mr-0' : 'mx-auto'
        }`}
      onClick={handleCircleClick}
    >
      <div
        className={`flex flex-col items-center gap-4 transition-all duration-300 ease-in-out`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ActivitySign
          title={title}
          startDate={startDate}
          endDate={endDate}
          size={currentSize}
          location={location}
          isExpanded={isExpanded}
          description={description}
          activityId={activityId}
        />
      </div>
    </div>
  );
};

export default ActivityPreview;
