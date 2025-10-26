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
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
): UseTypewriterReturn {
  const { speed = 50, delay = 0, skipAnimation = false } = options;
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Create a unique key for this text
    const storageKey = `typed-${text.slice(0, 50)}-${text.length}`;
    
    // Check if this text has been typed before in this session
    const hasBeenTyped = false; // Always retype on refresh
    
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
          // Mark as typed (but will retype on refresh)
          // sessionStorage.setItem(storageKey, 'true');
        }
      }, speed);
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
  }, [text, speed, delay, skipAnimation]);

  return { displayText, isTyping, isComplete };
}