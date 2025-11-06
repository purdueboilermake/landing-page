// Section management utilities for the new layout system

export interface Section {
  id: string;
  component: React.ComponentType;
  backgroundOverride?: any; // Will be typed properly when BackgroundConfig is imported
  minHeight: string;
  padding: string;
}

// CSS Grid layout utilities
export const GRID_LAYOUT_STYLES: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: 'min-content',
  width: '100%',
  position: 'relative',
  zIndex: 1
};

// Section container styles
export const SECTION_CONTAINER_STYLES: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

// Responsive padding utilities
export const RESPONSIVE_PADDING = {
  sm: '1rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
  '2xl': '5rem'
};

// Responsive min-height utilities
export const RESPONSIVE_MIN_HEIGHT = {
  hero: {
    sm: '100vh',
    md: '100vh',
    lg: '100vh',
    xl: '100vh',
    '2xl': '100vh'
  },
  section: {
    sm: '50vh',
    md: '60vh',
    lg: '70vh',
    xl: '80vh',
    '2xl': '90vh'
  }
};

// Generate section styles based on configuration
export const generateSectionStyles = (
  sectionType: 'hero' | 'section',
  customPadding?: string,
  customMinHeight?: string
): React.CSSProperties => {
  return {
    ...SECTION_CONTAINER_STYLES,
    minHeight: customMinHeight || RESPONSIVE_MIN_HEIGHT[sectionType].lg,
    padding: customPadding || RESPONSIVE_PADDING.lg
  };
};