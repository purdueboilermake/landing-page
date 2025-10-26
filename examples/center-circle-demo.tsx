/**
 * Center Circle Demo
 *
 * This demonstrates the upper center circle implementation
 * used in app/page.tsx - positioned in center of first 100vh
 * with 10% cut off at the top.
 */

import React from "react";
import BackgroundManager from "@/components/BackgroundManager";
import { BackgroundScaleMode } from "@/components/BackgroundLayer";

export default function CenterCircleDemo() {
  const backgroundLayers = [
    {
      id: "demo-background",
      imageUrl: "/images/demo-bg.jpg",
      zIndex: -100,
      opacity: 1,
      scaleMode: "cover" as BackgroundScaleMode,
      fallbackColor: "#2A2627",
    },
    {
      id: "upper-center-circle",
      imageUrl: "/images/Upper_center_circle.png",
      position: "absolute" as const,
      zIndex: 10, // Above background
      opacity: 1,
      top: "-10vh", // 10% above viewport (cut off top)
      left: "50%", // Center horizontally
      width: "80vh", // Responsive to viewport height
      height: "80vh", // Square aspect ratio
      scaleMode: "contain" as BackgroundScaleMode, // Preserve aspect ratio
      backgroundPosition: "center",
      fallbackColor: "transparent",
    },
  ];

  return (
    <div className="relative">
      <BackgroundManager
        layers={backgroundLayers}
        globalFallbackColor="#2A2627"
      />

      {/* Add the CSS for centering */}
      <style jsx global>{`
        [data-layer-id="upper-center-circle"] {
          transform: translateX(-50%); /* Center horizontally */
        }
      `}</style>

      <div className="relative z-20 text-white">
        {/* Demo content */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-50 p-8 rounded">
            <h1 className="text-4xl font-bold mb-4">
              Upper Center Circle Demo
            </h1>
            <p className="text-lg mb-2">
              Circle is positioned in center of first 100vh
            </p>
            <p className="text-sm mb-4">10% of circle is cut off at the top</p>
            <div className="text-xs opacity-75 space-y-1">
              <p>• Position: top: -10vh, left: 50%</p>
              <p>• Size: 80vh x 80vh</p>
              <p>• Scale: contain (preserves aspect ratio)</p>
              <p>• Transform: translateX(-50%) for centering</p>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-50 p-8 rounded">
            <h2 className="text-3xl font-bold mb-4">Second Section</h2>
            <p>The circle should only appear in the first 100vh above</p>
          </div>
        </section>
      </div>
    </div>
  );
}
