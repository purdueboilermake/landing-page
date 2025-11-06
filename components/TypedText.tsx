/**
 * TypedText.tsx
 * Component wrapper for typewriter animation
 * Provides consistent typing behavior across the application
 */

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypingContext } from '@/context/TypingContext';

interface TypedTextProps {
  children: string;
  delay?: number; // initial delay before starting
  skipAnimation?: boolean; // force skip animation
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements; // HTML element type
  showCursor?: boolean; // show blinking cursor
  cursorChar?: string; // cursor character
  cursorSpeed?: number; // cursor blink speed
  instanceKey?: string; // unique key to track if this instance has been typed before
  shouldStart?: boolean; // whether typing should start (for intersection observer)
}

export default function TypedText({
  children,
  delay,
  skipAnimation,
  className = '',
  style,
  as: Component = 'span',
  showCursor,
  cursorChar,
  cursorSpeed,
  instanceKey,
  shouldStart = true
}: TypedTextProps) {
  const { settings } = useTypingContext();

  // Always use context defaultSpeed - no prop override allowed for consistency
  const finalSpeed = settings.defaultSpeed;
  const finalDelay = delay ?? settings.defaultDelay;
  const finalSkipAnimation = skipAnimation ?? settings.globalSkipAnimation;
  const finalShowCursor = showCursor ?? settings.enableCursor;
  const finalCursorChar = cursorChar ?? settings.cursorChar;
  const finalCursorSpeed = cursorSpeed ?? settings.cursorSpeed;

  const { displayText, isTyping, isComplete } = useTypewriter(children, {
    speed: finalSpeed,
    delay: finalDelay,
    skipAnimation: finalSkipAnimation,
    instanceKey,
    shouldStart
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
    <Component className={className} style={style}>
      {displayText}
      {finalShowCursor && isTyping && showCursorChar && (
        <span className="animate-pulse">{finalCursorChar}</span>
      )}
    </Component>
  );
}

// TypedHeading component for semantic headings
interface TypedHeadingProps extends Omit<TypedTextProps, 'as'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function TypedHeading({ level = 1, className = '', ...props }: TypedHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <TypedText as={HeadingTag} className={className} {...props}>
      {props.children}
    </TypedText>
  );
}

// TypedParagraph component for semantic paragraphs
export function TypedParagraph({ className = '', ...props }: TypedTextProps) {
  return (
    <TypedText as="p" className={className} {...props}>
      {props.children}
    </TypedText>
  );
}