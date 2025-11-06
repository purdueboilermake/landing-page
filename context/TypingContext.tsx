/**
 * TypingContext.tsx
 * Global context for typing animation settings
 * Provides consistent typing behavior across the entire application
 */

'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface TypingSettings {
  defaultSpeed: number; // milliseconds per character
  defaultDelay: number; // initial delay before starting
  globalSkipAnimation: boolean; // global override to skip all animations
  enableCursor: boolean; // show cursor by default
  cursorChar: string; // cursor character
  cursorSpeed: number; // cursor blink speed
}

interface TypingContextType {
  settings: TypingSettings;
  updateSettings: (newSettings: Partial<TypingSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: TypingSettings = {
  defaultSpeed: 8, // Faster typing animation - 8ms per character
  defaultDelay: 0,
  globalSkipAnimation: false,
  enableCursor: false,
  cursorChar: '|',
  cursorSpeed: 500,
};

const TypingContext = createContext<TypingContextType | undefined>(undefined);

interface TypingProviderProps {
  children: ReactNode;
  initialSettings?: Partial<TypingSettings>;
}

export function TypingProvider({ 
  children, 
  initialSettings = {} 
}: TypingProviderProps) {
  const [settings, setSettings] = React.useState<TypingSettings>({
    ...defaultSettings,
    ...initialSettings,
  });

  const updateSettings = React.useCallback((newSettings: Partial<TypingSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const resetSettings = React.useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  const value = React.useMemo(() => ({
    settings,
    updateSettings,
    resetSettings,
  }), [settings, updateSettings, resetSettings]);

  return (
    <TypingContext.Provider value={value}>
      {children}
    </TypingContext.Provider>
  );
}

export function useTypingContext(): TypingContextType {
  const context = useContext(TypingContext);
  if (context === undefined) {
    throw new Error('useTypingContext must be used within a TypingProvider');
  }
  return context;
}

// Hook to get typing settings with optional overrides
export function useTypingSettings(overrides: Partial<TypingSettings> = {}) {
  const { settings } = useTypingContext();
  return { ...settings, ...overrides };
}