// Define screen breakpoint types
export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Define page counts for different screen sizes
export const PAGES_BY_SCREEN: Record<ScreenSize, number> = {
  'sm': 4,  // mobile (will be same as 'md')
  'md': 4.5,     // tablet (will be same as 'sm')
  'lg': 6.5,   // desktop (will be same as 'xl')
  'xl': 7,   // large desktop (will be same as 'lg')
  '2xl': 7   // extra large desktop (will be same as 'lg')
};

// Define offsets for each parallax layer by screen size
export const LAYER_OFFSETS: Record<string, Record<ScreenSize, number>> = {
  'cliff': {
    'sm': 0,
    'md': 0,
    'lg': 0.1,
    'xl': 0.05,
    '2xl': 0
  },
  'about-background': {
    'sm': 0.55,
    'md': 0.55,
    'lg': 0.5,
    'xl': 0.5,
    '2xl': 0.5
  },
  'hero': {
    'sm': 0,
    'md': 0,
    'lg': 0,
    'xl': 0,
    '2xl': 0
  },
  'hero-text': {
    'sm': 0.05,
    'md': 0.1,
    'lg': 0,
    'xl': 0,
    '2xl': 0
  },
  'apply': {
    'sm': 0.3,
    'md': 0.1,
    'lg': 0.2,
    'xl': 0,
    '2xl': 0
  },
  'sun': {
    'sm': 1.0,
    'md': 1.0,
    'lg': 1.0,
    'xl': 1.1,
    '2xl': 1.15
  },
  'cloud2': {
    'sm': 0.6,
    'md': 0.65,
    'lg': 0.5,
    'xl': 0.7,
    '2xl': 0.75
  },
  'cloud4': {
    'sm': 0.6,
    'md': 0.65,
    'lg': 0.5,
    'xl': 0.7,
    '2xl': 0.75
  },
  'cloud5': {
    'sm': 0.6,
    'md': 0.65,
    'lg': 0.5,
    'xl': 0.7,
    '2xl': 0.75
  },
  'cloud3': {
    'sm': 0.6,
    'md': 0.65,
    'lg': 0.5,
    'xl': 0.7,
    '2xl': 0.75
  },
  'cloud1': {
    'sm': 0.6,
    'md': 0.65,
    'lg': 0.5,
    'xl': 0.7,
    '2xl': 0.75
  },
  'mini-cloud-left': {
    'sm': 1.0,
    'md': 1.1,
    'lg': 1.05,
    'xl': 1.25,
    '2xl': 1.3
  },
  'mini-cloud-right': {
    'sm': 0.9,
    'md': 1.0,
    'lg': 1.05,
    'xl': 1.25,
    '2xl': 1.3
  },
  'stat1': {
    'sm': 0.58,
    'md': 0.58,
    'lg': 0.85,
    'xl': 0.95,
    '2xl': 1.0
  },
  'stat2': {
    'sm': 0.7,
    'md': 0.7,
    'lg': 0.85,
    'xl': 0.95,
    '2xl': 1.0
  },
  'stat3': {
    'sm': 0.7,
    'md': 0.7,
    'lg': 0.85,
    'xl': 0.95,
    '2xl': 1.0
  },
  'faq-background': {
    'sm': 2.1,
    'md': 2.4,
    'lg': 3.45,
    'xl': 3.75,
    '2xl': 3.75
  },
  'faq-sign': {
    'sm': 2.1,
    'md': 2.33,
    'lg': 3.4,
    'xl': 3.8,
    '2xl': 3.8
  },
  'faq-accordion': {
    'sm': 2.23,
    'md': 2.4,
    'lg': 3.45,
    'xl': 3.75,
    '2xl': 3.75
  },
  'schedule-background': {
    'sm': 1.5,
    'md': 1.5,
    'lg': 2.0,
    'xl': 2.0,
    '2xl': 2.0
  },
  'windyroad': {
    'sm': 1.50,
    'md': 1.55,
    'lg': 2.3,
    'xl': 2.3,
    '2xl': 2.3
  },
  'road': {
    'sm': 1.55,
    'md': 1.55,
    'lg': 2.3,
    'xl': 2.3,
    '2xl': 2.3
  },
  'about-text': {
    'sm': 1.05,
    'md': 1.1,
    'lg': 1.5,
    'xl': 1.6,
    '2xl': 1.6
  },
  'event1': {
    'sm': 1.33,
    'md': 1.33,
    'lg': 2.2,
    'xl': 2.2,
    '2xl': 2.2
  },
  'event2': {
    'sm': 1.47,
    'md': 1.47,
    'lg': 2.6,
    'xl': 2.6,
    '2xl': 2.6
  },
  'event3': {
    'sm': 1.73,
    'md': 1.73,
    'lg': 3.00,
    'xl': 3.00,
    '2xl': 3.00
  },
  'event4': {
    'sm': 1.87,
    'md': 1.87,
    'lg': 3.30,
    'xl': 3.30,
    '2xl': 3.30
  },
  'event5': {
    'sm': 1.98,
    'md': 1.98,
    'lg': 3.6,
    'xl': 3.6,
    '2xl': 3.6
  },
  'sponsors-background': {
    'sm': 2.75,
    'md': 3.01,
    'lg': 4.35,
    'xl': 4.75,
    '2xl': 4.75
  },
  'sponsors-sign': {
    'sm': 2.75,
    'md': 3.1,
    'lg': 4.35,
    'xl': 4.75,
    '2xl': 4.75
  },
  'sponsors-content': {
    'sm': 2.7,
    'md': 3.1,
    'lg': 4.35,
    'xl': 4.75,
    '2xl': 4.75
  },
  'footer': {
    'sm': 3.5,
    'md': 4.0,
    'lg': 5.5,
    'xl': 6.0,
    '2xl': 6.0
  },
  'schedule-section': {
    'sm': 1.4,
    'md': 1.4,
    'lg': 2.03,
    'xl': 2.0,
    '2xl': 2.0
  }
};
