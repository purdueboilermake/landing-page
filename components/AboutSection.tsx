/**
 * AboutSection.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @AshokSaravanan222
 * 09-15-2024
 */

export default function AboutSection() {
    return (
        <div className="container mx-auto text-left px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-title pb-2 sm:pb-3 md:pb-4 lg:pb-6 text-black">About</h1>
            <p className="text-sm sm:text-md md:text-xl lg:text-2xl max-w-prose text-black">BoilerMake is Purdue University's premier hackathon, bringing together over 500 students from numerous universities and majors to compete in 36 hours of hacking for $4000+ in prizes. Designed for hackers of all levels, BoilerMake provides unique and valuable experiences regardless of skill level -- you can participate in fun activities, win cool prizes, get free swag and food, and most importantly, have a whole lot of fun! It's also a great opportunity to network with large companies in industry and develop new skills. BoilerMake XII will take place February 21-23, 2025</p>
        </div>
    )
}