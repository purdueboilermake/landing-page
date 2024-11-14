/**
 * ScheduleSign.tsx
 * This component is used to display the schedule sign on the landing page.
 * @AshokSaravanan222
 * 09-15-2024
 */
import Image from 'next/image';

export default function ScheduleSign({isMobile}: {isMobile: boolean}) {
    return (
        <div className="w-full h-full">
            <div className="relative w-full h-auto flex items-center justify-center">
                <Image
                    src={"/images/highway_sign.png"}
                    alt="Schedule Sign"
                    className="w-full h-full object-contain"
                    width={200}
                    height={200}
                />
                <div className='absolute z-10 flex flex-col items-center justify-center'>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white font-title mt-2 md: mt-8 ">Schedule</h1>
                    <p className={`text-center text-[#06A77D] text-sm md:text-md lg:text-xl mt-8 ${isMobile ? "" : "pt-12"}`}>Click to learn more!</p>
                </div>
            </div>
        </div>
    );
}

