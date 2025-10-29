import React, { useState, useCallback, useMemo } from "react";
import BackgroundLayer, {
  BackgroundLayerProps,
  BackgroundScaleMode,
} from "./BackgroundLayer";

export interface BackgroundLayerConfig {
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
  // Next.js Image specific props
  priority?: boolean;
  alt?: string;
  sizes?: string;
  // Height behavior control
  useIntrinsicHeight?: boolean;
}

export interface BackgroundManagerProps {
  layers: BackgroundLayerConfig[];
  globalFallbackColor?: string;
  onLayerLoadError?: (layerId: string, error: string) => void;
  onLayerLoadSuccess?: (layerId: string) => void;
  onAllLayersLoaded?: () => void;
  className?: string;
}

/**
 * BackgroundManager component manages multiple background layers
 * Provides fallback system and layer management for the new background system
 */
const BackgroundManager: React.FC<BackgroundManagerProps> = ({
  layers,
  globalFallbackColor = "#C5E1E6",
  onLayerLoadError,
  onLayerLoadSuccess,
  onAllLayersLoaded,
  className = "",
}) => {
  const [loadedLayers, setLoadedLayers] = useState<Set<string>>(new Set());
  const [errorLayers, setErrorLayers] = useState<Set<string>>(new Set());

  // Handle successful layer loading
  const handleLayerLoadSuccess = useCallback(
    (layerId: string) => {
      setLoadedLayers((prev) => {
        const newSet = new Set(prev);
        newSet.add(layerId);
        return newSet;
      });

      setErrorLayers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(layerId); // Remove from error set if it was there
        return newSet;
      });

      onLayerLoadSuccess?.(layerId);

      // Check if all layers are now loaded
      setLoadedLayers((currentLoaded) => {
        if (currentLoaded.size === layers.length) {
          onAllLayersLoaded?.();
        }
        return currentLoaded;
      });
    },
    [layers.length, onLayerLoadSuccess, onAllLayersLoaded]
  );

  // Handle layer loading errors
  const handleLayerLoadError = useCallback(
    (layerId: string) => {
      setErrorLayers((prev) => {
        const newSet = new Set(prev);
        newSet.add(layerId);
        return newSet;
      });

      setLoadedLayers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(layerId); // Remove from loaded set if it was there
        return newSet;
      });

      const errorMessage = `Failed to load background layer: ${layerId}`;
      onLayerLoadError?.(layerId, errorMessage);
    },
    [onLayerLoadError]
  );

  // Sort layers by z-index to ensure proper rendering order
  const sortedLayers = useMemo(() => {
    return [...layers].sort((a, b) => a.zIndex - b.zIndex);
  }, [layers]);

  // Create background layer props with enhanced fallback handling
  const backgroundLayerProps = useMemo(() => {
    return sortedLayers.map(
      (layer): BackgroundLayerProps => ({
        id: layer.id,
        imageUrl: layer.imageUrl,
        zIndex: layer.zIndex,
        opacity: layer.opacity,
        blendMode: layer.blendMode,
        position: layer.position,
        scaleMode: layer.scaleMode,
        top: layer.top,
        left: layer.left,
        right: layer.right,
        bottom: layer.bottom,
        width: layer.width,
        height: layer.height,
        fallbackColor: layer.fallbackColor || globalFallbackColor,
        onLoadError: handleLayerLoadError,
        onLoadSuccess: handleLayerLoadSuccess,
        // Next.js Image specific props
        priority: layer.priority,
        alt: layer.alt || "",
        sizes: layer.sizes || "100vw",
        // Height behavior control
        useIntrinsicHeight: layer.useIntrinsicHeight,
      })
    );
  }, [
    sortedLayers,
    globalFallbackColor,
    handleLayerLoadError,
    handleLayerLoadSuccess,
  ]);

  // Calculate loading progress
  const loadingProgress = useMemo(() => {
    const totalLayers = layers.length;
    const loadedCount = loadedLayers.size;
    return totalLayers > 0 ? (loadedCount / totalLayers) * 100 : 0;
  }, [layers.length, loadedLayers.size]);

  return (
    <div
      className={`background-manager ${className}`}
      data-loading-progress={loadingProgress}
      data-loaded-layers={loadedLayers.size}
      data-total-layers={layers.length}
      data-error-layers={errorLayers.size}
    >
      {/* Global fallback background */}
      <div
        className="background-fallback"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: globalFallbackColor,
          zIndex: -1000, // Ensure it's behind all layers
        }}
        aria-hidden="true"
      />

      {/* Render all background layers */}
      {backgroundLayerProps.map((layerProps) => (
        <BackgroundLayer key={layerProps.id} {...layerProps} />
      ))}

      {/* Loading indicator (optional, can be styled with CSS) */}
      {loadingProgress < 100 && (
        <div
          className="background-loading-indicator"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${loadingProgress}%`,
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            zIndex: 9999,
            transition: "width 0.3s ease-out",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default BackgroundManager;
