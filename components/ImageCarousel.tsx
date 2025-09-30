'use client'

import React from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  speed?: number // Duration in seconds for one complete scroll cycle
  className?: string
}

export default function ImageCarousel({ 
  images, 
  speed = 60, // Default: 60 seconds for one complete cycle
  className = ''
}: ImageCarouselProps) {
  // For seamless infinite scroll, we need to duplicate the images
  // We'll create 3 sets: the original set is in the middle, with copies on both sides
  const extendedImages = [...images, ...images, ...images]
  
  // Calculate the width for each image (including padding)
  const imageWidth = 304 // 300px width + 4px padding (2px on each side)
  const totalOriginalWidth = images.length * imageWidth

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The scrolling container */}
      <div
        className="flex infinite-scroll-container"
        style={{
          width: `${extendedImages.length * imageWidth}px`,
          animationDuration: `${speed}s`,
          '--scroll-distance': `-${totalOriginalWidth}px`
        } as React.CSSProperties}
      >
        {extendedImages.map((image, index) => (
          <div 
            key={`${image.src}-${index}`}
            className="flex-shrink-0 px-2"
            style={{ width: `${imageWidth}px` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-xl h-72 w-full object-cover"
              width={300}
              height={288}
              sizes="300px"
              priority={index < 6} // Prioritize first few images
            />
          </div>
        ))}
      </div>
    </div>
  )
}
