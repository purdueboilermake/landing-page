import React, { useState, useEffect } from "react";

export type BackgroundScaleMode =
  | "cover" // Default - scales to cover entire container, may crop
  | "contain" // Scales to fit entirely within container, may show empty space
  | "fill" // Stretches to fill container exactly, may distort
  | "scale-down" // Like contain but never scales up beyond original size
  | "none" // Shows image at original size
  | "auto"; // Browser default behavior

export interface BackgroundLayerProps {
  id: string;
  imageUrl: string;
  zIndex: number;
  opacity?: number;
  blendMode?: string;
  position?: "fixed" | "absolute";
  scaleMode?: BackgroundScaleMode;
  backgroundPosition?: string;
  // Positioning props for vertical stacking
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  fallbackColor?: string;
  onLoadError?: (layerId: string) => void;
  onLoadSuccess?: (layerId: string) => void;
}

/**
 * BackgroundLayer component for the new layered background system
 * Replaces parallax-based background layers with CSS positioning
 */
const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  id,
  imageUrl,
  zIndex,
  opacity = 1,
  blendMode = "normal",
  position = "fixed",
  scaleMode = "cover",
  backgroundPosition = "center",
  top,
  left,
  right,
  bottom,
  width,
  height,
  fallbackColor = "transparent",
  onLoadError,
  onLoadSuccess,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the image to handle loading states
    const img = new Image();

    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
      onLoadSuccess?.(id);
    };

    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
      onLoadError?.(id);
    };

    img.src = imageUrl;

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl, id, onLoadError, onLoadSuccess]);

  const layerStyles: React.CSSProperties = {
    position,
    top: top ?? 0,
    left: left ?? 0,
    right: right,
    bottom: bottom,
    width: width ?? "100%",
    height: height ?? "100%",
    zIndex,
    opacity,
    mixBlendMode: blendMode as any,
    transition: "opacity 0.3s ease-in-out",
    pointerEvents: "none", // Prevent interference with page interactions
  };

  // Show fallback color if image failed to load or is still loading
  if (imageError || !imageLoaded) {
    return (
      <div
        data-layer-id={id}
        data-layer-status={imageError ? "error" : "loading"}
        style={{
          ...layerStyles,
          backgroundColor: fallbackColor,
        }}
        aria-hidden="true"
      />
    );
  }

  // Show the background image once loaded
  return (
    <div
      data-layer-id={id}
      data-layer-status="loaded"
      style={{
        ...layerStyles,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: scaleMode,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
      }}
      aria-hidden="true"
    />
  );
};

export default BackgroundLayer;
