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
    "#00E5FF", // Cyan
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
                className="bg-[#000000]/25 border-[4px] border-white rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-default w-full"
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
        <div className="w-[100vw] relative flex flex-col items-center overflow-x-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 relative pb-10">
                {/* Section title — graffiti asset */}
                <div className="relative flex justify-center items-center text-center mb-24 min-h-[140px] w-full">
                    <Image
                        src="/imagesbm14/schedule/title.png"
                        alt="Schedule"
                        width={850}
                        height={250}
                        className="object-contain w-auto h-auto max-h-[220px]"
                        priority
                    />
                </div>

                {/* "ACTIVITY SECTION" vertical text on the right side */}
                <div className="absolute right-[-2%] md:right-0 bottom-[10%] md:bottom-[15%] z-0 pointer-events-none">
                    <Image src="/imagesbm14/schedule/activity sign.png" alt="Activity Section" width={200} height={600} className="object-contain w-[15vw] md:w-[150px] lg:w-[200px] h-auto" />
                </div>

                {/* Background Bricks */}
                <Image src="/imagesbm14/schedule/brick2 1.png" alt="Bricks" width={180} height={180} className="absolute z-[-1] opacity-50 top-[8%] left-[8%] w-[15vw] md:w-[180px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/brick_1 2.png" alt="Bricks" width={160} height={160} className="absolute z-[-1] opacity-50 top-[35%] right-[10%] w-[12vw] md:w-[160px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/brick2 1.png" alt="Bricks" width={200} height={200} className="absolute z-[-1] opacity-50 bottom-[20%] left-[12%] w-[18vw] md:w-[200px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/brick_1 2.png" alt="Bricks" width={140} height={140} className="absolute z-[-1] opacity-50 top-[50%] left-[38%] w-[10vw] md:w-[140px] h-auto pointer-events-none" />

                {/* Decorative images */}
                <Image src="/imagesbm14/schedule/star graffiti.png" alt="Star" width={350} height={350} className="absolute z-0 opacity-90 animate-[float_6s_ease-in-out_infinite] top-[15%] md:top-[15%] left-[-10%] md:left-[-10%] w-[25vw] md:w-[250px] lg:w-[350px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/skateboard.png" alt="Skateboard" width={500} height={300} className="absolute z-0 opacity-90 animate-[float_6s_ease-in-out_infinite_-1s] top-[12%] right-[2%] md:right-[3%] w-[30vw] md:w-[300px] lg:w-[400px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/spray paint.png" alt="Spraypaint" width={240} height={340} className="absolute z-0 opacity-90 animate-[float_6s_ease-in-out_infinite_-2s] top-[40%] left-[38%] md:left-[38%] w-[15vw] md:w-[180px] lg:w-[240px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/cone.png" alt="Cone" width={250} height={250} className="absolute z-0 opacity-90 animate-[float_6s_ease-in-out_infinite_-3s] bottom-[8%] md:bottom-[5%] left-[50%] w-[18vw] md:w-[180px] lg:w-[220px] h-auto pointer-events-none" />
                <Image src="/imagesbm14/schedule/BMLogoSchedule.png" alt="Logo" width={500} height={500} className="absolute z-0 opacity-[0.85] animate-[float_6s_ease-in-out_infinite_-4s] top-[42%] md:top-[42%] left-[-5%] md:left-[-4%] w-[35vw] md:w-[350px] lg:w-[500px] h-auto pointer-events-none" />

                {/* RoughTexPurple was moved to the bottom of the wrapper */}

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

            {/* RoughTexPurple at the very bottom, below all activity boxes */}
            <div className="w-full h-[250px] md:h-[400px] relative z-[-1] pointer-events-none mt-10">
                <Image src="/imagesbm14/schedule/RoughTexPurple.png" alt="Rough Texture" fill className="object-cover object-top opacity-90" />
            </div>
        </div>
    );
}