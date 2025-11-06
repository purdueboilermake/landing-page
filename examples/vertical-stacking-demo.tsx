/**
 * Vertical Stacking Demo Component
 *
 * This demonstrates how to stack multiple background images
 * vertically on the same z-level for very long pages.
 *
 * Perfect for creating seamless background transitions
 * or different background sections as users scroll.
 */

import React from "react";
import BackgroundManager from "@/components/BackgroundManager";
import BackgroundLayer from "@/components/BackgroundLayer";

export default function VerticalStackingDemo() {
  // Example: Multiple background images stacked vertically
  // All on the same z-level (-10) but positioned at different heights
  const verticalBackgrounds = [
    {
      id: "hero-bg",
      imageUrl: "/images/hero-background.jpg",
      zIndex: -10,
      position: "absolute" as const,
      top: 0,
      height: "100vh", // First screen height
      scaleMode: "cover" as const,
      fallbackColor: "#1a1a2e",
    },
    {
      id: "about-bg",
      imageUrl: "/images/about-background.jpg",
      zIndex: -10, // Same z-level as hero
      position: "absolute" as const,
      top: "100vh", // Starts where hero ends
      height: "80vh", // About section height
      scaleMode: "cover" as const,
      fallbackColor: "#16213e",
    },
    {
      id: "services-bg",
      imageUrl: "/images/services-background.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "180vh", // Starts where about ends (100vh + 80vh)
      height: "120vh", // Services section height
      scaleMode: "cover" as const,
      fallbackColor: "#0f3460",
    },
    {
      id: "contact-bg",
      imageUrl: "/images/contact-background.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "300vh", // Starts where services ends (180vh + 120vh)
      height: "60vh", // Contact section height
      scaleMode: "cover" as const,
      fallbackColor: "#533483",
    },
  ];

  return (
    <div className="relative">
      {/* Background Manager handles all vertical backgrounds */}
      <BackgroundManager
        layers={verticalBackgrounds}
        globalFallbackColor="#1a1a2e"
      />

      {/* Page content - positioned above backgrounds */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Hero Section</h1>
            <p className="text-xl">Background Image 1 (0 - 100vh)</p>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-[80vh] flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">About Section</h2>
            <p className="text-xl">Background Image 2 (100vh - 180vh)</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="min-h-[120vh] flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Services Section</h2>
            <p className="text-xl">Background Image 3 (180vh - 300vh)</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-[60vh] flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Contact Section</h2>
            <p className="text-xl">Background Image 4 (300vh - 360vh)</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// Alternative approach: Using individual BackgroundLayers
export function IndividualLayersExample() {
  return (
    <div className="relative">
      {/* Individual background layers - same z-level, different positions */}
      <BackgroundLayer
        id="section-1-bg"
        imageUrl="/images/section-1.jpg"
        zIndex={-10}
        position="absolute"
        top={0}
        height="100vh"
        scaleMode="cover"
        fallbackColor="#1a1a2e"
      />

      <BackgroundLayer
        id="section-2-bg"
        imageUrl="/images/section-2.jpg"
        zIndex={-10} // Same z-level
        position="absolute"
        top="100vh" // Positioned below first image
        height="100vh"
        scaleMode="cover"
        fallbackColor="#16213e"
      />

      <BackgroundLayer
        id="section-3-bg"
        imageUrl="/images/section-3.jpg"
        zIndex={-10} // Same z-level
        position="absolute"
        top="200vh" // Positioned below second image
        height="100vh"
        scaleMode="cover"
        fallbackColor="#0f3460"
      />

      {/* Your page content here */}
      <div className="relative z-10">{/* Content sections */}</div>
    </div>
  );
}
