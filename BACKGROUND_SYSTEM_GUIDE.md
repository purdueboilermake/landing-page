# Background System Guide

A comprehensive guide for using the BackgroundLayer/BackgroundManager components in your components.

## Overview

Our new background system replaces the old parallax system with a cleaner, more maintainable approach using two main components:

- **BackgroundManager** = The main controller that manages multiple background layers
- **BackgroundLayer** = Individual background image layers

## When to Use Each

### Use BackgroundManager for

- **Page-level backgrounds** (like we did in `app/page.tsx`)
- **Full-screen sections** that need multiple layered backgrounds
- **Complex background compositions** with multiple images
- **Vertical stacking** of multiple images on long pages

### Use BackgroundLayer for

- **Individual component backgrounds**
- **Single background images**
- **Simple decorative elements**

## How to Use in Components

### Option 1: Single BackgroundLayer (Recommended for most components)

```tsx
import BackgroundLayer from '@/components/BackgroundLayer';

export default function HeroText() {
  return (
    <div className="relative">
      {/* Background for this component only */}
      <BackgroundLayer
        id="hero-text-bg"
        imageUrl="/images/hero-text-background.jpg"
        zIndex={-1}
        opacity={0.8}
        scaleMode="cover" // Fills entire area, may crop
        backgroundPosition="center"
        fallbackColor="#DDB47D"
        position="absolute" // Use absolute for component-level backgrounds
      />
      
      {/* Your component content */}
      <div className="relative z-10">
        <h1>Your hero text here</h1>
      </div>
    </div>
  );
}
```

### Option 2: Multiple Layers for Complex Components

```tsx
import BackgroundManager from '@/components/BackgroundManager';

export default function FAQSection() {
  const faqBackgrounds = [
    {
      id: 'faq-base',
      imageUrl: '/images/faq-background.jpg',
      zIndex: -10,
      scaleMode: 'cover', // Fill entire area
      fallbackColor: '#7AA689'
    },
    {
      id: 'faq-overlay',
      imageUrl: '/images/faq-pattern.png',
      zIndex: -5,
      opacity: 0.3,
      scaleMode: 'contain', // Show entire pattern, may repeat
      backgroundPosition: 'top right',
      fallbackColor: 'transparent'
    }
  ];

  return (
    <div className="relative">
      <BackgroundManager 
        layers={faqBackgrounds}
        className="absolute inset-0"
      />
      
      <div className="relative z-10">
        {/* Your FAQ content */}
      </div>
    </div>
  );
}
```

### Option 3: Vertical Stacking for Long Pages

Perfect for very long pages where you want different background images for different sections, all on the same z-level:

```tsx
import BackgroundManager from '@/components/BackgroundManager';

export default function LongPage() {
  // Multiple images stacked vertically on same z-level
  const verticalBackgrounds = [
    {
      id: 'hero-bg',
      imageUrl: '/images/hero-background.jpg',
      zIndex: -10,
      position: 'absolute',
      top: 0,
      height: '100vh', // First screen
      scaleMode: 'contain',
      fallbackColor: '#1a1a2e'
    },
    {
      id: 'about-bg',
      imageUrl: '/images/about-background.jpg',
      zIndex: -10, // Same z-level as hero
      position: 'absolute',
      top: '100vh', // Starts where hero ends
      height: '80vh', // About section height
      scaleMode: 'cover',
      fallbackColor: '#16213e'
    },
    {
      id: 'services-bg',
      imageUrl: '/images/services-background.jpg',
      zIndex: -10, // Same z-level
      position: 'absolute',
      top: '180vh', // Starts where about ends
      height: '120vh',
      scaleMode: 'cover',
      fallbackColor: '#0f3460'
    }
  ];

  return (
    <div className="relative">
      <BackgroundManager layers={verticalBackgrounds} />
      
      <div className="relative z-10">
        <section className="min-h-screen">Hero Content</section>
        <section className="min-h-[80vh]">About Content</section>
        <section className="min-h-[120vh]">Services Content</section>
      </div>
    </div>
  );
}
```

## Image Scaling Modes

The background system supports different scaling modes to control how images fit within their containers:

### Available Scale Modes

- **`"cover"`** (default) - Scales image to cover entire container, may crop parts of the image
- **`"contain"`** - Scales image to fit entirely within container, may show empty space
- **`"fill"`** - Stretches image to fill container exactly, may distort the image
- **`"scale-down"`** - Like contain but never scales up beyond original size
- **`"none"`** - Shows image at original size, may overflow or show empty space
- **`"auto"`** - Browser default behavior

### Scale Mode Examples

```tsx
// Cover mode - fills entire area, may crop (default)
<BackgroundLayer scaleMode="cover" />

// Contain mode - shows entire image, may have empty space
<BackgroundLayer scaleMode="contain" />

// Fill mode - stretches to exact size, may distort
<BackgroundLayer scaleMode="fill" />

// Custom positioning with scaling
<BackgroundLayer 
  scaleMode="contain" 
  backgroundPosition="top left" 
/>
```

## Component Props Reference

### BackgroundLayer Props

```tsx
type BackgroundScaleMode = 
  | "cover"      // Default - scales to cover entire container, may crop
  | "contain"    // Scales to fit entirely within container, may show empty space
  | "fill"       // Stretches to fill container exactly, may distort
  | "scale-down" // Like contain but never scales up beyond original size
  | "none"       // Shows image at original size
  | "auto";      // Browser default behavior

interface BackgroundLayerProps {
  id: string;                      // Unique identifier
  imageUrl: string;                // Path to background image
  zIndex: number;                  // Stacking order (use negative for backgrounds)
  opacity?: number;                // 0-1, defaults to 1
  blendMode?: string;              // CSS blend mode, defaults to "normal"
  position?: "fixed" | "absolute"; // Positioning, use "absolute" for components
  scaleMode?: BackgroundScaleMode; // How image scales, defaults to "cover"
  backgroundPosition?: string;     // Image position, defaults to "center"
  // Positioning props for vertical stacking
  top?: string | number;           // Top position (e.g., "100vh", 500)
  left?: string | number;          // Left position
  right?: string | number;         // Right position
  bottom?: string | number;        // Bottom position
  width?: string | number;         // Width override
  height?: string | number;        // Height override (e.g., "80vh", 600)
  fallbackColor?: string;          // Color shown if image fails to load
  onLoadError?: (layerId: string) => void;
  onLoadSuccess?: (layerId: string) => void;
}
```

### BackgroundManager Props

```tsx
interface BackgroundLayerConfig {
  id: string;
  imageUrl: string;
  zIndex: number;
  opacity?: number;
  blendMode?: string;
  position?: "fixed" | "absolute";
  scaleMode?: BackgroundScaleMode;     // How image scales
  backgroundPosition?: string;         // Image position
  // Positioning props for vertical stacking
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  fallbackColor?: string;
}

interface BackgroundManagerProps {
  layers: BackgroundLayerConfig[];     // Array of layer configurations
  globalFallbackColor?: string;        // Default fallback color
  onLayerLoadError?: (layerId: string, error: string) => void;
  onLayerLoadSuccess?: (layerId: string) => void;
  onAllLayersLoaded?: () => void;
  className?: string;
}
```

## Best Practices

### 1. Use `position="absolute"` for component-level backgrounds

```tsx
// ✅ Good - for component backgrounds
<BackgroundLayer position="absolute" />

// ❌ Avoid - fixed is for page-level backgrounds
<BackgroundLayer position="fixed" />
```

### 2. Set negative z-index values for backgrounds

```tsx
// ✅ Good - keeps background behind content
<BackgroundLayer zIndex={-1} />

// ❌ Avoid - positive values can cover content
<BackgroundLayer zIndex={1} />
```

### 3. Always provide fallback colors

```tsx
// ✅ Good - matches your design if image fails
<BackgroundLayer fallbackColor="#7AA689" />

// ❌ Avoid - no fallback can break design
<BackgroundLayer />
```

### 4. Use relative positioning on content containers

```tsx
// ✅ Good - ensures content appears above background
<div className="relative z-10">
  {/* Your content */}
</div>
```

### 5. Choose the right scale mode for your use case

```tsx
// ✅ Good - for hero sections, full coverage needed
<BackgroundLayer scaleMode="cover" />

// ✅ Good - for logos/icons, preserve aspect ratio
<BackgroundLayer scaleMode="contain" />

// ✅ Good - for patterns that should tile
<BackgroundLayer scaleMode="none" />

// ❌ Avoid - fill can distort images
<BackgroundLayer scaleMode="fill" />
```

### 6. For vertical stacking, calculate positions carefully

```tsx
// ✅ Good - precise positioning for seamless stacking
const backgrounds = [
  { top: 0, height: '100vh' },        // 0 - 100vh
  { top: '100vh', height: '80vh' },   // 100vh - 180vh
  { top: '180vh', height: '120vh' },  // 180vh - 300vh
];

// ❌ Avoid - overlapping or gaps between sections
const backgrounds = [
  { top: 0, height: '100vh' },
  { top: '90vh', height: '80vh' }, // Overlaps!
];
```

### 7. Keep it simple

Most components only need one BackgroundLayer. Only use BackgroundManager when you actually need multiple layered backgrounds.

## Standard Patterns

### Basic Component Background

```tsx
import BackgroundLayer from '@/components/BackgroundLayer';

export default function YourComponent() {
  return (
    <div className="relative">
      <BackgroundLayer
        id="your-component-bg"
        imageUrl="/images/your-background.jpg"
        zIndex={-1}
        scaleMode="cover"
        backgroundPosition="center"
        fallbackColor="#YourFallbackColor"
        position="absolute"
      />
      
      <div className="relative z-10">
        {/* Your component content */}
      </div>
    </div>
  );
}
```

### Vertical Stacking Pattern

```tsx
import BackgroundManager from '@/components/BackgroundManager';

export default function LongPageComponent() {
  const verticalBgs = [
    {
      id: 'section-1',
      imageUrl: '/images/bg-1.jpg',
      zIndex: -10,
      position: 'absolute',
      top: 0,
      height: '100vh',
      scaleMode: 'cover',
      fallbackColor: '#color1'
    },
    {
      id: 'section-2', 
      imageUrl: '/images/bg-2.jpg',
      zIndex: -10, // Same z-level
      position: 'absolute',
      top: '100vh', // No gap
      height: '100vh',
      scaleMode: 'cover',
      fallbackColor: '#color2'
    }
  ];

  return (
    <div className="relative">
      <BackgroundManager layers={verticalBgs} />
      <div className="relative z-10">
        {/* Your sections */}
      </div>
    </div>
  );
}
```

## Automatic Features

The background system automatically handles:

- ✅ **Loading states** - Shows fallback color while image loads
- ✅ **Error handling** - Shows fallback color if image fails
- ✅ **Performance** - Preloads images efficiently
- ✅ **Accessibility** - Proper ARIA attributes
- ✅ **Responsive design** - Works across all screen sizes
- ✅ **Vertical stacking** - Perfect positioning for long pages

## Questions?

If you run into issues or need help implementing backgrounds in your components, check the existing implementations in:

- `app/page.tsx` (page-level BackgroundManager example)
- `components/BackgroundManager.tsx` (component source)
- `components/BackgroundLayer.tsx` (component source)
- `examples/vertical-stacking-demo.tsx` (vertical stacking example)
- `examples/long-page-backgrounds.tsx` (practical long page example)

Happy coding! 🚀
