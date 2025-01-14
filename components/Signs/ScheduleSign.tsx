/**
 * ScheduleSign.tsx
 * This component is used to display the schedule sign on the landing page.
 * @AshokSaravanan222
 * 09-15-2024
 */
import Image from 'next/image';

export default function ScheduleSign() {
    return (
        <div className="w-full h-full">
            <div className="relative w-full h-auto flex items-center justify-center">
                <Image
                    src={"/images/highway_sign.png"}
                    alt="Schedule Sign"
                    className="w-full h-full object-contain"
                    width={0}
                    height={0}
                    sizes='100vw'
                />
                <div className='absolute z-10 flex flex-col items-center justify-center'>
                    <h1 className="text-xl font-semibold text-white font-title mt-2 md:mt-8"></h1>
                    <a href="/schedule.pdf" target="_blank" rel="noopener noreferrer" className="text-center text-[#06A77D] text-sm md:text-md lg:text-xl pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 font-semibold hover:underline">click for more!</a>
                </div>
            </div>
        </div>
    );
}
