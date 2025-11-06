/**
 * Scaling Modes Demo Component
 *
 * This component demonstrates all the different scaling modes
 * available in the BackgroundLayer component.
 *
 * Use this as a reference for choosing the right scaling mode
 * for your specific use case.
 */

import React from "react";
import BackgroundLayer, {
  BackgroundScaleMode,
} from "@/components/BackgroundLayer";

const scaleModes: { mode: BackgroundScaleMode; description: string }[] = [
  { mode: "cover", description: "Scales to cover entire container, may crop" },
  {
    mode: "contain",
    description: "Fits entirely within container, may show empty space",
  },
  { mode: "fill", description: "Stretches to fill exactly, may distort" },
  { mode: "scale-down", description: "Like contain but never scales up" },
  { mode: "none", description: "Shows at original size" },
  { mode: "auto", description: "Browser default behavior" },
];

export default function ScalingModesDemo() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Background Scaling Modes Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scaleModes.map(({ mode, description }) => (
          <div
            key={mode}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Demo container */}
            <div className="relative h-48 border-2 border-dashed border-gray-300">
              <BackgroundLayer
                id={`demo-${mode}`}
                imageUrl="/images/demo-image.jpg" // Replace with actual demo image
                zIndex={-1}
                scaleMode={mode}
                fallbackColor="#f3f4f6"
                position="absolute"
              />

              {/* Overlay to show the mode name */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{mode}</h3>
                  <p className="text-sm opacity-90">{description}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">scaleMode="{mode}"</h4>
              <p className="text-gray-600 text-sm">{description}</p>

              {/* Code example */}
              <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono">
                {`<BackgroundLayer scaleMode="${mode}" />`}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage recommendations */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">When to Use Each Mode</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-green-600">
              ✅ Recommended
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>cover:</strong> Hero sections, full-width backgrounds
              </li>
              <li>
                <strong>contain:</strong> Logos, icons, preserve aspect ratio
              </li>
              <li>
                <strong>none:</strong> Patterns, textures that should tile
              </li>
              <li>
                <strong>scale-down:</strong> Small images that shouldn't be
                enlarged
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-red-600">
              ❌ Use with Caution
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>fill:</strong> Can distort images, use only when exact
                fit needed
              </li>
              <li>
                <strong>auto:</strong> Unpredictable behavior, prefer explicit
                modes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
