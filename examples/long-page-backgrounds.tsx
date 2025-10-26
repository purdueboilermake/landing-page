/**
 * Long Page Backgrounds - Practical Example
 *
 * This shows exactly how to handle multiple images on the same z-level
 * for a very long page, ordered from top to bottom along the y-axis.
 *
 * Key points:
 * - All backgrounds use the same zIndex (-10)
 * - Each background is positioned using the `top` prop
 * - Heights are calculated to avoid gaps or overlaps
 * - Use `position="absolute"` for proper stacking
 */

import React from "react";
import BackgroundManager from "@/components/BackgroundManager";

export default function LongPageBackgrounds() {
  // Calculate section heights
  const heroHeight = "100vh";
  const aboutHeight = "80vh";
  const servicesHeight = "120vh";
  const portfolioHeight = "100vh";
  const contactHeight = "60vh";

  // Multiple images on same z-level, stacked vertically
  const pageBackgrounds = [
    {
      id: "hero-section-bg",
      imageUrl: "/images/hero-mountain.jpg",
      zIndex: -10, // Same z-level for all
      position: "absolute" as const,
      top: 0, // Start at top
      height: heroHeight,
      scaleMode: "cover" as const,
      fallbackColor: "#1a365d",
    },
    {
      id: "about-section-bg",
      imageUrl: "/images/about-forest.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "100vh", // Start where hero ends
      height: aboutHeight,
      scaleMode: "cover" as const,
      fallbackColor: "#2d5a27",
    },
    {
      id: "services-section-bg",
      imageUrl: "/images/services-city.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "180vh", // 100vh + 80vh = 180vh
      height: servicesHeight,
      scaleMode: "cover" as const,
      fallbackColor: "#4a5568",
    },
    {
      id: "portfolio-section-bg",
      imageUrl: "/images/portfolio-ocean.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "300vh", // 180vh + 120vh = 300vh
      height: portfolioHeight,
      scaleMode: "cover" as const,
      fallbackColor: "#2c5282",
    },
    {
      id: "contact-section-bg",
      imageUrl: "/images/contact-sunset.jpg",
      zIndex: -10, // Same z-level
      position: "absolute" as const,
      top: "400vh", // 300vh + 100vh = 400vh
      height: contactHeight,
      scaleMode: "cover" as const,
      fallbackColor: "#c53030",
    },
  ];

  return (
    <div className="relative">
      {/* All backgrounds managed together */}
      <BackgroundManager
        layers={pageBackgrounds}
        globalFallbackColor="#1a202c"
      />

      {/* Page content - positioned above all backgrounds */}
      <div className="relative z-10">
        {/* Hero Section - matches first background */}
        <section className="min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome</h1>
            <p className="text-xl">Mountain background (0 - 100vh)</p>
          </div>
        </section>

        {/* About Section - matches second background */}
        <section className="min-h-[80vh] flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-8">
            <h2 className="text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg">Forest background (100vh - 180vh)</p>
            <p className="mt-4">
              This section has a different background image that starts exactly
              where the hero section ends.
            </p>
          </div>
        </section>

        {/* Services Section - matches third background */}
        <section className="min-h-[120vh] flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-8">
            <h2 className="text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-lg">City background (180vh - 300vh)</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-black bg-opacity-50 p-6 rounded">
                Service 1
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded">
                Service 2
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded">
                Service 3
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - matches fourth background */}
        <section className="min-h-screen flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-8">
            <h2 className="text-5xl font-bold mb-6">Portfolio</h2>
            <p className="text-lg">Ocean background (300vh - 400vh)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-black bg-opacity-50 aspect-square rounded flex items-center justify-center"
                >
                  Project {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - matches fifth background */}
        <section className="min-h-[60vh] flex items-center justify-center text-white">
          <div className="text-center max-w-2xl px-8">
            <h2 className="text-5xl font-bold mb-6">Contact</h2>
            <p className="text-lg">Sunset background (400vh - 460vh)</p>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg mt-8">
              <p>Get in touch with us!</p>
              <button className="bg-white text-black px-6 py-2 rounded mt-4">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper function to calculate positions automatically
export function calculateVerticalPositions(sectionHeights: string[]) {
  const positions = ["0"];
  let currentPosition = 0;

  for (let i = 0; i < sectionHeights.length - 1; i++) {
    const height = sectionHeights[i];
    if (height.endsWith("vh")) {
      currentPosition += parseInt(height);
      positions.push(`${currentPosition}vh`);
    }
  }

  return positions;
}

// Example usage of the helper:
// const heights = ['100vh', '80vh', '120vh', '100vh', '60vh'];
// const positions = calculateVerticalPositions(heights);
// Result: ['0', '100vh', '180vh', '300vh', '400vh']
