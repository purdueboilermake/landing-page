/**
 * ScheduleSection.tsx
 * Shows the schedule of BoilerMake in a zig-zag layout with colorful activity cards,
 * scroll-triggered animations, and decorative illustrations.
 */

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────────

type Activity = {
    title: string;
    startDate: string;
    endDate?: string;
    location: string;
    description: string;
};

type ScheduleSectionProps = {
    activities: Activity[];
};

// ── Title color palette (cycles if more activities are added) ──────────────────

const TITLE_COLORS = [
    "#FFE42D", // Yellow
    "#FF6EC7", // Pink
    "#FF4D4D", // Red/Coral
    "#39FF14", // Green
    "#E040FB", // Purple/Magenta
    "#00E5FF", // Cyan (extra for future 6th)
];

// ── ActivityCard (inline sub-component) ────────────────────────────────────────

type ActivityCardProps = {
    activity: Activity;
    index: number;
    colorIndex: number;
};

function ActivityCard({ activity, index, colorIndex }: ActivityCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Determine position: 0 = left, 1 = center, 2 = right, 3 = center
    const pos = index % 4;
    const alignment = pos === 0 ? "flex-start" : pos === 2 ? "flex-end" : "center";

    // Format time from ISO string
    const startDateObj = new Date(activity.startDate);
    const startTime = startDateObj.toLocaleString([], {
        hour: "numeric",
        minute: "2-digit",
    });
    const endTime = activity.endDate
        ? new Date(activity.endDate).toLocaleString([], {
            hour: "numeric",
            minute: "2-digit",
        })
        : null;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Scroll-triggered animation
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the animation based on card index
                    const delay = index * 100;
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [index]);

    const titleColor = TITLE_COLORS[colorIndex % TITLE_COLORS.length];

    return (
        <div
            ref={cardRef}
            className="flex"
            style={{
                alignSelf: alignment,
                marginLeft: isMobile ? "5%" : (pos === 0 ? "clamp(5%, 8vw, 12%)" : "0"),
                marginRight: isMobile ? "5%" : (pos === 2 ? "clamp(5%, 8vw, 12%)" : "0"),
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? "translate(0, 0) scale(1)"
                    : `translate(${pos === 0 ? "-60px" : pos === 2 ? "60px" : "0"}, ${pos === 1 || pos === 3 ? "40px" : "0"}) scale(0.95)`,
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                width: isMobile ? "clamp(220px, 70vw, 320px)" : "clamp(260px, 38vw, 380px)",
            }}
        >
            <div
                className="bg-[#2A2627E6] border-[5px] border-white rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-default w-full"
                style={{ padding: "clamp(1.2rem, 3vw, 2rem) clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
                {/* Time */}
                <div
                    className="text-white/85 tracking-widest mb-1 font-semibold"
                    style={{ fontFamily: 'var(--font-roboto-flex)', fontSize: "clamp(14px, 2vw, 18px)" }}
                >
                    {startTime}
                    {endTime && ` – ${endTime}`}
                </div>

                {/* Title */}
                <h3
                    className="leading-tight mb-3"
                    style={{ color: titleColor, fontFamily: 'var(--font-rubik-wet-paint)', fontSize: "clamp(22px, 3.5vw, 34px)" }}
                >
                    {activity.title}
                </h3>

                {/* Description */}
                <p
                    className="text-white/80 leading-relaxed font-light"
                    style={{ fontFamily: 'var(--font-roboto-flex)', fontSize: "clamp(12px, 1.6vw, 15px)" }}
                >
                    {activity.description}
                </p>
            </div>
        </div>
    );
}

// ── Main ScheduleSection component ─────────────────────────────────────────────

export default function ScheduleSection({
    activities,
}: ScheduleSectionProps) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 relative pb-20">
            {/* Section title — text fallback until graffiti asset is provided */}
            <div className="relative flex justify-center items-center text-center mb-16 min-h-[120px]">
                {/* Placeholder for the Schedule graffiti title */}
                {/* <Image 
          src="/imagesbm14/schedule-title.png" 
          alt="Schedule" 
          width={400} 
          height={120} 
          className="hidden md:block" 
        /> */}
                <h2
                    className="text-[#FFE42D]"
                    style={{
                        fontFamily: 'var(--font-rubik-wet-paint), cursive',
                        fontSize: "clamp(36px, 8vw, 72px)",
                        textShadow: "0px 0px 20px rgba(255, 222, 0, 0.6)"
                    }}
                >
                    Schedule
                </h2>
            </div>

            {/* Placeholder for "ACTIVITY SECTION" vertical text on the right side */}
            {/* <div className="absolute right-0 top-1/4">
        <Image src="/imagesbm14/activity-section.png" alt="Activity Section" width={50} height={400} />
      </div> */}

            {/* Decorative placeholders */}
            {/* <Image src="/imagesbm14/star.png" alt="Star" width={80} height={80} className="absolute z-0 opacity-80 animate-[float_6s_ease-in-out_infinite] top-[10%] left-[15%] hidden md:block" /> */}
            {/* <Image src="/imagesbm14/skateboard.png" alt="Skateboard" width={120} height={60} className="absolute z-0 opacity-80 animate-[float_6s_ease-in-out_infinite_-1s] top-[25%] right-[20%] hidden md:block" /> */}
            {/* <Image src="/imagesbm14/spraypaint.png" alt="Spraypaint" width={80} height={120} className="absolute z-0 opacity-80 animate-[float_6s_ease-in-out_infinite_-2s] top-[45%] left-[35%] hidden md:block" /> */}
            {/* <Image src="/imagesbm14/cone.png" alt="Cone" width={70} height={70} className="absolute z-0 opacity-80 animate-[float_6s_ease-in-out_infinite_-3s] top-[75%] left-[45%] hidden md:block" /> */}
            {/* <Image src="/imagesbm14/logo.png" alt="Logo" width={100} height={100} className="absolute z-0 opacity-80 animate-[float_6s_ease-in-out_infinite_-4s] top-[85%] right-[25%] hidden md:block" /> */}

            {/* Zig-zag card container */}
            <div
                className="flex flex-col relative w-full"
                style={{ gap: "clamp(2.5rem, 6vw, 5rem)" }}
            >
                {activities.map((activity, index) => (
                    <ActivityCard
                        key={`schedule-${index}`}
                        activity={activity}
                        index={index}
                        colorIndex={index}
                    />
                ))}
            </div>
        </div>
    );
}