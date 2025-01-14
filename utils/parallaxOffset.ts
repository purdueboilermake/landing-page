// Define screen breakpoint types
export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Define page counts for different screen sizes
// export const PAGES_BY_SCREEN: Record<ScreenSize, number> = {
//   'sm': 4.25,  // mobile (will be same as 'md')
//   'md': 4.5,     // tablet (will be same as 'sm')
//   'lg': 6.0,   // desktop (will be same as 'xl')
//   'xl': 7,   // large desktop (will be same as 'lg')
//   '2xl': 7   // extra large desktop (will be same as 'lg')
// };

// COPIED FOR the "coming soon" TEXT
export const PAGES_BY_SCREEN: Record<ScreenSize, number> = {
  'sm': 3.7,  // mobile (will be same as 'md')
  'md': 4.1,     // tablet (will be same as 'sm')
  'lg': 5.0,   // desktop (will be same as 'xl')
  'xl': 6,   // large desktop (will be same as 'lg')
  '2xl': 6   // extra large desktop (will be same as 'lg')
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
    'sm': 0.1,
    'md': 0.1,
    'lg': 0.1,
    'xl': 0.1,
    '2xl': 0.1
  },
  'apply': {
    'sm': 0.4,
    'md': 0.1,
    'lg': 0.25,
    'xl': 0.1,
    '2xl': 0.1
  },
  'sun': {
    'sm': 0.75,
    'md': 0.8,
    'lg': 0.8,
    'xl': 0.9,
    '2xl': 0.95
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
    'sm': 0.8,
    'md': 0.9,
    'lg': 0.9,
    'xl': 0.9,
    '2xl': 1.0
  },
  'mini-cloud-right': {
    'sm': 0.85,
    'md': 0.97,
    'lg': 0.97,
    'xl': 1.05,
    '2xl': 1.1
  },
  'stat1': {
    'sm': 0.99,
    'md': 1.0,
    'lg': 1.25,
    'xl': 1.5,
    '2xl': 1.55
  },
  'stat2': {
    'sm': 0.99,
    'md': 0.95,
    'lg': 1.15,
    'xl': 1.35,
    '2xl': 1.4
  },
  'stat3': {
    'sm': 0.99,
    'md': 0.97,
    'lg': 1.1,
    'xl': 1.25,
    '2xl': 1.3
  },
  'faq-background': {
    'sm': 2.1,
    'md': 2.4,
    'lg': 3.25,
    'xl': 3.75,
    '2xl': 3.75
  },
  'faq-sign': {
    'sm': 2.1,
    'md': 2.33,
    'lg': 3.2,
    'xl': 3.8,
    '2xl': 3.8
  },
  'faq-accordion': {
    'sm': 2.23,
    'md': 2.4,
    'lg': 3.25,
    'xl': 3.75,
    '2xl': 3.75
  },
  'schedule-background': {
    'sm': 1.5,
    'md': 1.5,
    'lg': 1.82,
    'xl': 2.0,
    '2xl': 2.0
  },
  'schedule-section': {
    'sm': 1.4,
    'md': 1.4,
    'lg': 1.85,
    'xl': 2.0,
    '2xl': 2.0
  },
  'windyroad': {
    'sm': 1.5,
    'md': 1.55,
    'lg': 2.12,
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
    'md': 1.05,
    'lg': 1.45,
    'xl': 1.6,
    '2xl': 1.65
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
    'sm': 2.85,
    'md': 3.01,
    'lg': 4.0,
    'xl': 4.75,
    '2xl': 4.75
  },
  'sponsors-sign': {
    'sm': 2.85,
    'md': 3.1,
    'lg': 4.0,
    'xl': 4.75,
    '2xl': 4.75
  },
  'sponsors-content': {
    'sm': 2.8,
    'md': 3.1,
    'lg': 4.0,
    'xl': 4.75,
    '2xl': 4.75
  },
  // 'footer': {
  //   'sm': 3.75,
  //   'md': 4.0,
  //   'lg': 5.0,
  //   'xl': 6.0,
  //   '2xl': 6.0
  // },
  'footer': {
    'sm': 3.2,
    'md': 3.4,
    'lg': 4.4,
    'xl': 5.0,
    '2xl': 5.0
  },
};
