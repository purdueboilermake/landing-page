/**
 * Responsive Heights Demo
 *
 * This demonstrates how to specify different height parameters
 * for mobile vs desktop using React state and window resize detection.
 */

import React, { useState, useEffect } from "react";
import BackgroundManager from "@/components/BackgroundManager";
import BackgroundLayer from "@/components/BackgroundLayer";

export default function ResponsiveHeightsDemo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Method 1: Using React state for responsive heights
  const responsiveBackgrounds = [
    {
      id: "hero-bg",
      imageUrl: "/images/hero-background.jpg",
      zIndex: -10,
      position: "absolute" as const,
      top: 0,
      height: isMobile ? "60vh" : "100vh", // Different heights for mobile/desktop
      scaleMode: "cover" as const,
      fallbackColor: "#1a1a2e",
    },
    {
      id: "about-bg",
      imageUrl: "/images/about-background.jpg",
      zIndex: -10,
      position: "absolute" as const,
      top: isMobile ? "60vh" : "100vh", // Adjust top position accordingly
      height: isMobile ? "50vh" : "80vh", // Different heights
      scaleMode: "cover" as const,
      fallbackColor: "#16213e",
    },
  ];

  return (
    <div className="relative">
      <BackgroundManager layers={responsiveBackgrounds} />

      <div className="relative z-10">
        <section
          className={`${
            isMobile ? "min-h-[60vh]" : "min-h-screen"
          } flex items-center justify-center text-white`}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hero Section</h1>
            <p>Height: {isMobile ? "60vh" : "100vh"}</p>
          </div>
        </section>

        <section
          className={`${
            isMobile ? "min-h-[50vh]" : "min-h-[80vh]"
          } flex items-center justify-center text-white`}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p>Height: {isMobile ? "50vh" : "80vh"}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// Method 2: Using CSS classes with Tailwind responsive utilities
export function TailwindResponsiveHeights() {
  return (
    <div className="relative">
      {/* Single BackgroundLayer with responsive height using CSS */}
      <BackgroundLayer
        id="responsive-bg"
        imageUrl="/images/background.jpg"
        zIndex={-1}
        position="absolute"
        top={0}
        // Use Tailwind responsive classes for height
        height="60vh" // Default mobile height
        scaleMode="cover"
        fallbackColor="#1a1a2e"
        // Add custom CSS class for desktop height
      />

      <div className="relative z-10">
        {/* Content with responsive heights */}
        <section className="h-[60vh] md:h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Responsive Section</h1>
            <p className="mt-2">60vh on mobile, 100vh on desktop</p>
          </div>
        </section>
      </div>

      {/* Custom CSS for responsive background height */}
      <style jsx>{`
        [data-layer-id="responsive-bg"] {
          height: 60vh; /* Mobile */
        }

        @media (min-width: 768px) {
          [data-layer-id="responsive-bg"] {
            height: 100vh; /* Desktop */
          }
        }
      `}</style>
    </div>
  );
}

// Method 3: Using a custom hook for breakpoints
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg" | "xl">("sm");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("sm");
      else if (width < 768) setBreakpoint("md");
      else if (width < 1024) setBreakpoint("lg");
      else setBreakpoint("xl");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

export function AdvancedResponsiveHeights() {
  const breakpoint = useBreakpoint();

  // Define heights for different breakpoints
  const getHeight = (section: "hero" | "about" | "services") => {
    const heights = {
      hero: {
        sm: "50vh",
        md: "70vh",
        lg: "90vh",
        xl: "100vh",
      },
      about: {
        sm: "40vh",
        md: "60vh",
        lg: "70vh",
        xl: "80vh",
      },
      services: {
        sm: "60vh",
        md: "80vh",
        lg: "100vh",
        xl: "120vh",
      },
    };

    return heights[section][breakpoint];
  };

  const getTopPosition = () => {
    // Calculate cumulative heights for positioning
    const heroHeight = getHeight("hero");
    return heroHeight; // About section starts after hero
  };

  const multiBreakpointBackgrounds = [
    {
      id: "hero-bg-advanced",
      imageUrl: "/images/hero.jpg",
      zIndex: -10,
      position: "absolute" as const,
      top: 0,
      height: getHeight("hero"),
      scaleMode: "cover" as const,
      fallbackColor: "#1a1a2e",
    },
    {
      id: "about-bg-advanced",
      imageUrl: "/images/about.jpg",
      zIndex: -10,
      position: "absolute" as const,
      top: getTopPosition(),
      height: getHeight("about"),
      scaleMode: "cover" as const,
      fallbackColor: "#16213e",
    },
  ];

  return (
    <div className="relative">
      <BackgroundManager layers={multiBreakpointBackgrounds} />

      <div className="relative z-10">
        <section
          className="flex items-center justify-center text-white"
          style={{ minHeight: getHeight("hero") }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Advanced Responsive</h1>
            <p>Breakpoint: {breakpoint}</p>
            <p>Height: {getHeight("hero")}</p>
          </div>
        </section>

        <section
          className="flex items-center justify-center text-white"
          style={{ minHeight: getHeight("about") }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p>Height: {getHeight("about")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
