/**
 * AboutSection.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @AshokSaravanan222
 * 09-15-2024
 */

export default function AboutSection() {
    return (
        <div className="container mx-auto text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-title pb-2 sm:pb-3 md:pb-4 lg:pb-6 text-black">About</h1>
            <div>
            <p className="text-xs sm:text-lg md:text-lg lg:text-xl max-w-prose text-black">BoilerMake is Purdue University's premier hackathon, bringing together over 500 students from numerous universities and majors to compete in 36 hours of hacking for $4000+ in prizes. Designed for hackers of all levels, BoilerMake provides unique and valuable experiences regardless of skill level -- you can participate in fun activities, win cool prizes, get free swag and food, and most importantly, have a whole lot of fun! It's also a great opportunity to network with large companies in industry and develop new skills. BoilerMake XII will take place February 21-23, 2025. BoilerMake is also an MLH partner meaning we adhere to their <a href="https://hackp.ac/coc" target="_blank" className="z-1000" style={{textDecoration: "underline"}}>Code of Conduct</a></p>
            </div>
        </div>
    )
}