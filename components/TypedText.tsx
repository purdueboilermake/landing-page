/**
 * TypedText.tsx
 * Component wrapper for typewriter animation
 * Provides consistent typing behavior across the application
 */

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypingContext } from '@/contexts/TypingContext';

interface TypedTextProps {
  children: string;
  speed?: number; // milliseconds per character
  delay?: number; // initial delay before starting
  skipAnimation?: boolean; // force skip animation
  className?: string;
  as?: keyof JSX.IntrinsicElements; // HTML element type
  showCursor?: boolean; // show blinking cursor
  cursorChar?: string; // cursor character
  cursorSpeed?: number; // cursor blink speed
}

export default function TypedText({
  children,
  speed,
  delay,
  skipAnimation,
  className = '',
  as: Component = 'span',
  showCursor,
  cursorChar,
  cursorSpeed
}: TypedTextProps) {
  const { settings } = useTypingContext();
  
  // Use context settings as defaults, with props taking precedence
  const finalSpeed = speed ?? settings.defaultSpeed;
  const finalDelay = delay ?? settings.defaultDelay;
  const finalSkipAnimation = skipAnimation ?? settings.globalSkipAnimation;
  const finalShowCursor = showCursor ?? settings.enableCursor;
  const finalCursorChar = cursorChar ?? settings.cursorChar;
  const finalCursorSpeed = cursorSpeed ?? settings.cursorSpeed;

  const { displayText, isTyping, isComplete } = useTypewriter(children, {
    speed: finalSpeed,
    delay: finalDelay,
    skipAnimation: finalSkipAnimation
  });

  const [showCursorChar, setShowCursorChar] = React.useState(finalShowCursor);

  // Handle cursor blinking
  React.useEffect(() => {
    if (!finalShowCursor || !isTyping) {
      setShowCursorChar(false);
      return;
    }

    const interval = setInterval(() => {
      setShowCursorChar(prev => !prev);
    }, finalCursorSpeed);

    return () => clearInterval(interval);
  }, [finalShowCursor, isTyping, finalCursorSpeed]);

  return (
    <Component className={className}>
      {displayText}
      {finalShowCursor && isTyping && showCursorChar && (
        <span className="animate-pulse">{finalCursorChar}</span>
      )}
    </Component>
  );
}

// Convenience components for common use cases
export function TypedHeading({ 
  children, 
  level = 1, 
  className = '', 
  ...props 
}: TypedTextProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <TypedText as={HeadingTag} className={className} {...props}>
      {children}
    </TypedText>
  );
}

export function TypedParagraph({ 
  children, 
  className = '', 
  ...props 
}: TypedTextProps) {
  return (
    <TypedText as="p" className={className} {...props}>
      {children}
    </TypedText>
  );
}