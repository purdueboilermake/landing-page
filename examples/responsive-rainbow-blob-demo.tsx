/**
 * Responsive Rainbow Blob Demo
 *
 * This demonstrates the responsive height implementation
 * used in app/page.tsx for the rainbow-blob background.
 */

import React, { useState, useEffect } from "react";
import BackgroundManager from "@/components/BackgroundManager";
import { BackgroundScaleMode } from "@/components/BackgroundLayer";

export default function ResponsiveRainbowBlobDemo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Same configuration as app/page.tsx
  const backgroundLayers = [
    {
      id: "solid-bg-color",
      imageUrl: "/this/is/a/fake/image.png",
      zIndex: -100,
      opacity: 1,
      fallbackColor: "#2A2627",
    },
    {
      id: "rainbow-blob",
      imageUrl: "images/homepage_gradient_upper.png",
      position: "absolute" as const,
      zIndex: 0,
      opacity: 1,
      top: 0,
      blendMode: "normal",
      scaleMode: "cover" as BackgroundScaleMode,
      height: isMobile ? "200vh" : "400vh", // 200vh mobile, 400vh desktop
      fallbackColor: "#2A2627",
    },
    {
      id: "tertiary-background",
      imageUrl: "/fake/image/fs.png",
      zIndex: -80,
      opacity: 0.6,
      fallbackColor: "#2A2627",
    },
  ];

  return (
    <div className="relative">
      <BackgroundManager
        layers={backgroundLayers}
        globalFallbackColor="#2A2627"
      />

      <div className="relative z-10 text-white">
        {/* Demo content */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-50 p-8 rounded">
            <h1 className="text-4xl font-bold mb-4">Responsive Rainbow Blob</h1>
            <p className="text-lg mb-2">
              Current mode: {isMobile ? "Mobile" : "Desktop"}
            </p>
            <p className="text-sm">
              Rainbow blob height: {isMobile ? "200vh" : "400vh"}
            </p>
            <p className="text-xs mt-4 opacity-75">
              Resize your window to see the height change
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-50 p-8 rounded">
            <h2 className="text-3xl font-bold mb-4">Second Section</h2>
            <p>
              The rainbow blob background extends {isMobile ? "200vh" : "400vh"}{" "}
              from the top
            </p>
          </div>
        </section>

        {!isMobile && (
          <>
            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center bg-black bg-opacity-50 p-8 rounded">
                <h2 className="text-3xl font-bold mb-4">Third Section</h2>
                <p>This section only shows on desktop (400vh height)</p>
              </div>
            </section>

            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center bg-black bg-opacity-50 p-8 rounded">
                <h2 className="text-3xl font-bold mb-4">Fourth Section</h2>
                <p>Rainbow blob ends here on desktop</p>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
