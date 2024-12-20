"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

interface TeamMember {
  name: string;
  image: string;
}

interface Team {
  name: string;
  members: TeamMember[];
}

interface TeamCarouselProps {
  team: Team;
  onClose: () => void;
}

export default function TeamCarousel({ team, onClose }: TeamCarouselProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 px-4 md:px-8 ${isMounted ? 'bg-black bg-opacity-50' : 'bg-transparent bg-opacity-0'
        }`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-7xl relative"
        onClick={e => e.stopPropagation()}
      >
        <h1 className='relative mb-4 text-3xl md:text-4xl font-bold text-white font-dosis text-center md:text-left'>
          {team.name}
        </h1>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={12}
          slidesPerView="auto"
          loop={true}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumRatio: 0.25,
            minimumVelocity: 0.1
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={10000}
          className="w-full !overflow-visible"
          watchSlidesProgress={true}
          breakpoints={{
            // Mobile first - smaller slides and spacing
            320: {
              slidesPerView: "auto",
              spaceBetween: 12
            },
            // Tablet and up
            768: {
              slidesPerView: "auto",
              spaceBetween: 24
            }
          }}
        >
          {team.members.map((member, index) => (
            <SwiperSlide
              key={index}
              className="!w-48 md:!w-64 !flex-shrink-0 animate-slide-in opacity-0"
              style={{
                animationDelay: `${index * 0.1 + 0.1}s`,
              }}
            >
              <div className="relative h-48 md:h-64 w-full mb-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-2xl md:rounded-3xl object-cover"
                />
              </div>
              <div className="w-full flex justify-center -translate-y-8 md:-translate-y-12">
                <div className='bg-white py-1 px-2 w-11/12 text-center rounded-lg text-black'>
                  <p className="text-sm md:text-base font-semibold truncate">
                    {member.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
