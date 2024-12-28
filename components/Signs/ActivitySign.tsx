/**
 * ActivitySign.tsx
 * Component used to show an activity, with time and description
 */

import Image from "next/image";

type ActivitySignProps = {
    title: string;
    time: string;
    size: 'small' | 'medium' | 'large' | 'xlarge';
}

const sizeMap = {
    'small': 'w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] md:w-[200px] md:h-[200px] lg:w-[275px] lg:h-[275px] xl:w-[300px] xl:h-[300px]',
    'medium': 'w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]',
    'large': 'w-[200px] h-[200px] sm:w-[275px] sm:h-[275px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]',
    'xlarge': 'w-[250px] h-[250px] sm:w-[325px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px]'
}

const textOffset = {
    'small': 'pt-[23px] sm:pt-[30px] md:pt-[50px] lg:pt-[65px] xl:pt-[75px]',
    'medium': 'pt-[45px] sm:pt-[55px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]',
    'large': 'pt-[55px] sm:pt-[80px] md:pt-[110px] lg:pt-[120px] xl:pt-[140px]',
    'xlarge': 'pt-[65px] sm:pt-[100px] md:pt-[130px] lg:pt-[160px] xl:pt-[180px]'
}

const timeSize = {
    'small': 'text-[8px] sm:text-[10px] md:text-sm lg:text-lg',
    'medium': 'text-sm sm:text-base md:text-lg lg:text-xl',
    'large': 'text-base sm:text-lg md:text-xl lg:text-2xl',
    'xlarge': 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
}

const titleSize = {
    'small': 'text-[10px] sm:text-[12px] md:text-sm lg:text-base',
    'medium': 'text-sm sm:text-base md:text-lg lg:text-xl',
    'large': 'text-base sm:text-lg md:text-xl lg:text-2xl',
    'xlarge': 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
}

const textMargin = {
    'small': 'mt-0 sm:mt-0 md:mt-1',
    'medium': 'mt-0 sm:mt-0 md:mt-2',
    'large': 'mt-1 sm:mt-1 md:mt-3',
    'xlarge': 'mt-1 sm:mt-2 md:mt-4'
}

export default function ActivitySign({ title, time, size }: ActivitySignProps) {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className={`relative w-${sizeMap[size]} h-${sizeMap[size]}`}>
                <Image src="/images/activity_sign.png" alt="Activity Card" className={sizeMap[size]} width={0} height={0} sizes="100vh" />
                <div 
                    className={`absolute inset-0 flex flex-col items-center select-none ${textOffset[size]}`}
                >
                    <p className={`text-white ${timeSize[size]} font-semibold font-title`}>{time}</p>
                    <p className={`text-white ${titleSize[size]} font-semibold font-title leading-none ${textMargin[size]}`}>
                        {title.split(' ').length === 2 ? (
                            <>
                                {title.split(' ')[0]}<br />
                                {title.split(' ')[1]}
                            </>
                        ) : title}
                    </p>
                </div>
            </div>
        </div>
    );
}