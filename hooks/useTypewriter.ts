/**
 * useTypewriter.ts
 * Custom hook for typewriter animation with sessionStorage persistence
 * Types text letter by letter on first render, then shows instantly on subsequent renders
 * @tristansze
 */

import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  speed?: number; // milliseconds per character
  delay?: number; // initial delay before starting
  skipAnimation?: boolean; // force skip animation
  instanceKey?: string; // unique key to track if this instance has been typed before
  shouldStart?: boolean; // whether typing should start (for intersection observer)
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
}

// Track which instances have been typed before (per component instance)
const typedInstances = new Set<string>();

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
): UseTypewriterReturn {
  // Don't set default speed here - it should always be provided by TypedText from context
  const { speed, delay = 0, skipAnimation = false, instanceKey, shouldStart = true } = options;
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    // Clear any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Calculate finalSpeed inside effect to ensure it's always current
    const currentSpeed = speed ?? 8;

    // Check if this instance has been typed before
    const hasBeenTyped = instanceKey ? typedInstances.has(instanceKey) : false;
    
    // If shouldStart is false, don't start typing yet
    if (!shouldStart) {
      // If it's been typed before, keep showing the text even when shouldStart is false
      // This prevents the text from disappearing when the accordion closes
      if (hasBeenTyped) {
        setDisplayText(text);
        setIsTyping(false);
        setIsComplete(true);
      } else {
        setDisplayText('');
        setIsTyping(false);
        setIsComplete(false);
      }
      return;
    }
    
    if (hasBeenTyped || skipAnimation) {
      // Show text immediately if already typed or animation is skipped
      setDisplayText(text);
      setIsTyping(false);
      setIsComplete(true);
      return;
    }

    // Start typing animation
    setDisplayText('');
    setIsTyping(true);
    setIsComplete(false);
    hasTypedRef.current = false;

    let index = 0;

    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          // Animation complete
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsTyping(false);
          setIsComplete(true);
          hasTypedRef.current = true;
          // Mark this instance as typed
          if (instanceKey) {
            typedInstances.add(instanceKey);
          }
        }
      }, currentSpeed);
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, delay, skipAnimation, instanceKey, shouldStart]);

  return { displayText, isTyping, isComplete };
}