import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  // Next.js Image specific props
  priority?: boolean;
  alt?: string;
  sizes?: string;
  // Height behavior control
  useIntrinsicHeight?: boolean; // If true, uses image's natural aspect ratio; if false, stretches to given height
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
  top,
  left,
  right,
  bottom,
  width,
  height,
  fallbackColor = "transparent",
  onLoadError,
  onLoadSuccess,
  priority = false,
  alt = "",
  sizes = "100vw",
  useIntrinsicHeight = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority || false);
  const [isClient, setIsClient] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    if (!priority) {
      // For non-priority images, start loading on client side
      setShouldLoad(true);
    }
  }, [priority]);

  // Enhanced loading logic for background images
  useEffect(() => {
    if (!isClient) return; // Wait for client-side hydration
    
    if (priority) {
      // Priority images should always load immediately
      setShouldLoad(true);
      return;
    }

    // For non-priority images, use intersection observer with expanded root margin
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            // Once we decide to load, we don't need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Large root margin to start loading before images are actually visible
        // Using pixels instead of vh units
        rootMargin: "1000px 0px 1000px 0px",
        threshold: 0,
      }
    );

    if (layerRef.current) {
      observer.observe(layerRef.current);
    }

    return () => {
      if (layerRef.current) {
        observer.unobserve(layerRef.current);
      }
    };
  }, [priority, isClient]);

  // Force loading on scroll position change for fixed/absolute positioned images
  useEffect(() => {
    if (!isClient || priority || shouldLoad) return;

    const handleScrollOrResize = () => {
      if (!layerRef.current) return;

      // Get viewport and element position
      const rect = layerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check if element might be visible considering current scroll position
      // More generous margins for background images
      const isNearViewport = 
        rect.top < viewportHeight + 200 && // 200px below viewport
        rect.bottom > -200; // 200px above viewport

      if (isNearViewport) {
        setShouldLoad(true);
      }
    };

    // Check immediately
    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [priority, shouldLoad, isClient]);

  // Handle image load success
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    onLoadSuccess?.(id);
  };

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    onLoadError?.(id);
  };

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
    // Ensure backgrounds extend to the very top on all devices
    margin: 0,
    padding: 0,
  };

  // Convert scaleMode to Next.js Image objectFit
  const getObjectFit = (
    mode: BackgroundScaleMode
  ): React.CSSProperties["objectFit"] => {
    switch (mode) {
      case "cover":
        return "cover";
      case "contain":
        return "contain";
      case "fill":
        return "fill";
      case "scale-down":
        return "scale-down";
      case "none":
        return "none";
      default:
        return "cover";
    }
  };

  // Show fallback color if image failed to load
  if (imageError) {
    return (
      <div
        data-layer-id={id}
        data-layer-status="error"
        style={{
          ...layerStyles,
          backgroundColor: fallbackColor,
        }}
        aria-hidden="true"
      />
    );
  }

  // Determine rendering strategy based on props
  const useExplicitDimensions =
    width && height && typeof width === "number" && typeof height === "number";

  const useResponsiveWidth =
    width &&
    (typeof width === "string" || typeof width === "number") &&
    (!height || useIntrinsicHeight);

  const useStretchToHeight =
    width &&
    height &&
    (typeof width === "string" || typeof width === "number") &&
    !useIntrinsicHeight;

  const useFillMode =
    !useExplicitDimensions && !useResponsiveWidth && !useStretchToHeight;

  // Show the background image using Next.js Image
  return (
    <div
      ref={layerRef}
      data-layer-id={id}
      data-layer-status={imageLoaded ? "loaded" : shouldLoad ? "loading" : "waiting"}
      style={{
        ...layerStyles,
        // Adjust container styles based on rendering strategy
        ...(useExplicitDimensions
          ? {
              width: "auto",
              height: "auto",
              display: "inline-block",
            }
          : useResponsiveWidth
          ? {
              width: width,
              height: "auto",
              display: "block",
            }
          : useStretchToHeight
          ? {
              width: width,
              height: height,
              display: "block",
            }
          : {}),
        // Next.js Image with fill requires position: relative on the parent
        position:
          layerStyles.position === "static" ? "relative" : layerStyles.position,
      }}
      aria-hidden="true"
    >
      {shouldLoad && !imageError ? (
        <>
          {useExplicitDimensions ? (
            <Image
              src={imageUrl}
              alt={alt}
              width={width as number}
              height={height as number}
              priority={priority}
              sizes={sizes}
              loading={priority ? "eager" : "lazy"}
              style={{
                objectFit: getObjectFit(scaleMode),
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : useResponsiveWidth ? (
            <Image
              src={imageUrl}
              alt={alt}
              width={0}
              height={0}
              priority={priority}
              sizes={sizes}
              loading={priority ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "auto",
                objectFit: getObjectFit(scaleMode),
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : useStretchToHeight ? (
            <Image
              src={imageUrl}
              alt={alt}
              width={0}
              height={0}
              priority={priority}
              sizes={sizes}
              loading={priority ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: getObjectFit(scaleMode),
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <Image
              src={imageUrl}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              loading={priority ? "eager" : "lazy"}
              style={{
                objectFit: getObjectFit(scaleMode),
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </>
      ) : null}
      {/* Show fallback color while loading or if error */}
      {(!imageLoaded || imageError) && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: fallbackColor,
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

export default BackgroundLayer;
