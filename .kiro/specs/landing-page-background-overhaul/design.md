# Design Document

## Overview

The landing page background overhaul will completely rebuild the background system from scratch, removing the existing parallax implementation and replacing it with a modern layered background approach. The new system will use standard CSS layering techniques with new UI components, providing better performance, maintainability, and easier asset management.

## Architecture

### Current System Analysis
The existing background system consists of:
- @react-spring/parallax dependency with complex ParallaxLayer components
- Multiple background images with different parallax speeds
- Complex offset calculations and screen size dependencies
- Heavy performance overhead from parallax calculations
- Difficult-to-maintain component structure

### New Architecture
The new system will:
- Remove all parallax dependencies and components
- Use standard CSS layering with z-index and positioning
- Implement a layered background system using CSS background-image properties
- Create new, simplified UI components for content sections
- Use CSS Grid and Flexbox for responsive layouts
- Support multiple background layers that can be independently managed

## Components and Interfaces

### New Component Structure

1. **Main Layout Component**
   - Replace Parallax component with standard div container
   - Use CSS Grid for section layout
   - Implement scroll-based section navigation

2. **Background Layer System**
   - **Primary Background Layer**: Base layer with main background image
   - **Secondary Background Layer**: Overlay layer for additional imagery
   - **Tertiary Background Layer**: Top layer for decorative elements
   - Each layer uses CSS `background-image` with proper `z-index` stacking

3. **New UI Components**
   - **HeroSection**: Redesigned hero area without parallax
   - **AboutSection**: New layout with layered background support
   - **ScheduleSection**: Rebuilt schedule display
   - **FAQSection**: New FAQ component design
   - **SponsorSection**: Updated sponsor display
   - **FooterSection**: Simplified footer without animated background

### CSS Layer Strategy
```css
.background-layer-1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -3;
}

.background-layer-2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.background-layer-3 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
```

## Data Models

### Background Layer Configuration
```typescript
interface BackgroundLayer {
  id: string;
  imageUrl: string;
  zIndex: number;
  opacity?: number;
  blendMode?: string;
  position?: 'fixed' | 'absolute';
}

interface BackgroundConfig {
  layers: BackgroundLayer[];
  fallbackColor: string;
}
```

### Section Configuration
```typescript
interface Section {
  id: string;
  component: React.ComponentType;
  backgroundOverride?: BackgroundConfig;
  minHeight: string;
  padding: string;
}
```

### Color System
```css
:root {
  --bg-primary: #C5E1E6;
  --bg-secondary: #C0E2F9;
  --bg-accent: #7AA689;
  --bg-neutral: #DDB47D;
  --text-primary: #000000;
  --text-secondary: #ffffff;
}
```

## Error Handling

### Fallback Strategy
- If background images fail to load, display fallback solid colors
- Implement progressive image loading for background layers
- Ensure text remains readable with sufficient contrast ratios
- Graceful degradation for older browsers that don't support CSS Grid

### Performance Considerations
- Remove @react-spring/parallax dependency to reduce bundle size
- Use CSS `will-change` property for optimized rendering
- Implement lazy loading for background images
- Use CSS `transform3d` for hardware acceleration where needed
- Optimize images for different screen densities

## Testing Strategy

### Visual Testing
1. **Cross-browser compatibility**
   - Test layered backgrounds in Chrome, Firefox, Safari, Edge
   - Verify CSS Grid and Flexbox support
   - Test background-image rendering consistency

2. **Responsive testing**
   - Test on mobile (sm), tablet (md), desktop (lg, xl, 2xl) breakpoints
   - Verify background layer scaling and positioning
   - Test new UI component responsiveness

3. **Performance testing**
   - Measure page load time improvements after removing parallax
   - Test scroll performance with new layout system
   - Monitor memory usage reduction
   - Test background image loading performance

### Functional Testing
1. **Content readability**
   - Verify text contrast against layered backgrounds
   - Test button and interactive element visibility
   - Ensure accessibility compliance

2. **Layout integrity**
   - Test new component positioning and spacing
   - Verify section transitions work smoothly
   - Test content overflow handling

3. **Background layer functionality**
   - Test individual layer visibility and opacity
   - Verify layer stacking order
   - Test background image fallbacks

### Integration Testing
1. **Component interaction**
   - Test new FAQ component functionality
   - Verify event/activity interactions
   - Ensure sponsor card hover effects work
   - Test header navigation with new layout

2. **Background asset management**
   - Test adding/removing background layers
   - Verify asset replacement workflow
   - Test different image formats and sizes

### Migration Testing
1. **Content preservation**
   - Verify all existing content is properly migrated
   - Test that no functionality is lost in the transition
   - Ensure all links and interactions still work

## Implementation Phases

### Phase 1: Remove Parallax System
- Remove @react-spring/parallax dependency
- Replace Parallax and ParallaxLayer components with standard divs
- Implement basic CSS Grid layout structure
- Create placeholder background layers

### Phase 2: Implement Layered Background System
- Create background layer management system
- Implement CSS-based layered backgrounds
- Add placeholder images for initial testing
- Test background layer stacking and positioning

### Phase 3: Rebuild UI Components
- Create new HeroSection component
- Rebuild AboutSection with new layout
- Recreate ScheduleSection without parallax
- Update FAQSection and SponsorSection components
- Implement new FooterSection

### Phase 4: Content Migration and Styling
- Migrate all existing content to new components
- Implement responsive design for all screen sizes
- Add animations and transitions using CSS
- Test cross-browser compatibility

### Phase 5: Asset Integration and Optimization
- Implement background asset management system
- Optimize image loading and performance
- Add fallback systems for failed image loads
- Final testing and performance optimization