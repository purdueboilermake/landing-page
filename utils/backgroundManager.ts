// Background layer management utilities for the new layered background system
import { BackgroundLayerConfig } from '@/components/BackgroundManager';

export interface BackgroundLayer extends BackgroundLayerConfig {
  fallbackColor?: string;
}

export interface BackgroundConfig {
  layers: BackgroundLayer[];
  fallbackColor: string;
}

// Default background configuration with placeholder images
export const DEFAULT_BACKGROUND_CONFIG: BackgroundConfig = {
  layers: [
    {
      id: 'base-layer',
      imageUrl: '/images/Gradient.png', // Using existing gradient as placeholder
      zIndex: -3,
      opacity: 1,
      position: 'fixed',
      fallbackColor: '#C5E1E6'
    },
    {
      id: 'overlay-layer',
      imageUrl: '/images/cloud_transition_1.png', // Using existing cloud image
      zIndex: -2,
      opacity: 0.8,
      position: 'fixed',
      fallbackColor: '#C0E2F9'
    },
    {
      id: 'decorative-layer',
      imageUrl: '/images/sun.png', // Using existing sun image
      zIndex: -1,
      opacity: 0.6,
      position: 'fixed',
      fallbackColor: '#DDB47D'
    }
  ],
  fallbackColor: '#C5E1E6'
};

// Generate CSS styles for background layers
export const generateLayerStyles = (layer: BackgroundLayer): React.CSSProperties => {
  return {
    position: layer.position || 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${layer.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: layer.zIndex,
    opacity: layer.opacity || 1,
    mixBlendMode: layer.blendMode as any || 'normal'
  };
};

// Utility to create background layer component props
export const createBackgroundLayerProps = (config: BackgroundConfig) => {
  return config.layers.map(layer => ({
    key: layer.id,
    style: generateLayerStyles(layer),
    'data-layer-id': layer.id
  }));
};

// Screen size breakpoints for responsive design
export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Responsive background configuration
export const getResponsiveBackgroundConfig = (screenSize: ScreenSize): BackgroundConfig => {
  // For now, return the same config for all screen sizes
  // This can be extended later to have different configurations per screen size
  return DEFAULT_BACKGROUND_CONFIG;
};

// Utility functions for background layer management

/**
 * Add a new layer to the background configuration
 */
export const addBackgroundLayer = (
  config: BackgroundConfig, 
  layer: BackgroundLayer
): BackgroundConfig => {
  return {
    ...config,
    layers: [...config.layers, layer].sort((a, b) => a.zIndex - b.zIndex)
  };
};

/**
 * Remove a layer from the background configuration
 */
export const removeBackgroundLayer = (
  config: BackgroundConfig, 
  layerId: string
): BackgroundConfig => {
  return {
    ...config,
    layers: config.layers.filter(layer => layer.id !== layerId)
  };
};

/**
 * Update a specific layer in the background configuration
 */
export const updateBackgroundLayer = (
  config: BackgroundConfig, 
  layerId: string, 
  updates: Partial<BackgroundLayer>
): BackgroundConfig => {
  return {
    ...config,
    layers: config.layers.map(layer => 
      layer.id === layerId ? { ...layer, ...updates } : layer
    ).sort((a, b) => a.zIndex - b.zIndex)
  };
};

/**
 * Get a specific layer by ID
 */
export const getBackgroundLayer = (
  config: BackgroundConfig, 
  layerId: string
): BackgroundLayer | undefined => {
  return config.layers.find(layer => layer.id === layerId);
};

/**
 * Validate background configuration
 */
export const validateBackgroundConfig = (config: BackgroundConfig): boolean => {
  // Check for duplicate IDs
  const ids = config.layers.map(layer => layer.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.warn('Background configuration contains duplicate layer IDs');
    return false;
  }

  // Check for valid z-index values
  const hasInvalidZIndex = config.layers.some(layer => 
    typeof layer.zIndex !== 'number' || !isFinite(layer.zIndex)
  );
  if (hasInvalidZIndex) {
    console.warn('Background configuration contains invalid z-index values');
    return false;
  }

  return true;
};