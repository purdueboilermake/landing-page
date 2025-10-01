/**
 * app/past/page.tsx
 * Will show the past information of boilermake
 * @VarunJasti @DylanMiller
 * 9-30-2025
 */

import Image from 'next/image'
import ImageCarousel from '@/components/ImageCarousel'

export default function PastPage() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>In the Past | BoilerMake XII</title>
            <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=Inter:wght@100..900&family=Roboto+Mono:wght@400;500;600;700&family=Days+One&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <meta name="title" content="In the Past | BoilerMake XII" />
            <meta
                name="description"
                content="Purdue University's flagship hackathon, BoilerMake, is back in January 2025. Adventure Awaits."
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n            body {\n                font-family: "Dosis", sans-serif;\n                font-weight: 500;\n            }\n            h1 {\n                font-family: "Arvo", serif;\n            }\n        '
                }}
            />
            <Image
                src="/images/stars_left.png"
                className="absolute top-0 left-0 z-10 w-0 h-0 md:w-36 md:h-36"
                width={0}
                height={0}
                sizes="100vw"
                alt="Stars"
            />
            <main className="flex flex-col bg-[#1E1E1E] h-full w-full pt-20 gap-8 md:gap-16 justify-between items-center relative">
                {/* Ellipse backdrop layer (below everything) */}
                <div className="absolute inset-0 pointer-events-none z-1">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/ellipses.png"
                            alt="Ellipses Background"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                {/* Gradient layer */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/Gradient.png')",
                        backgroundSize: '100% 100%',
                        zIndex: 20
                    }}
                    aria-hidden
                />
                <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
                    <div
                        className="relative h-full px-[15vw] box-content"
                        style={{
                            zIndex: 10,
                            backgroundClip: 'padding-box'
                        }}
                    >
                        <Image
                            src="/images/Circle.png"
                            alt=""
                            width={1049}
                            height={1049}
                            className="h-full w-auto max-w-none select-none opacity-30"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 100%)',
                                maskImage: 'linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full relative z-30 gap-8 md:gap-16 items-center">
                <h1 className="font-bold text-6xl text-center text-[#FFE958]" style={{
                    fontFamily: 'Days One',
                    textShadow: '0px 0px 15px #FFDE00'
                }}>BoilerMake In The Past</h1>
                <section className="text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="text-center">
                            <h3 className="text-4xl" style={{
                                fontFamily: 'Roboto Mono',
                                color: '#FFE958',
                                textShadow: '0px 0px 15px #FFDE00'
                            }}>500+</h3>
                            <p style={{ fontFamily: 'Roboto Mono', color: '#FFFFFF' }}>Attendees</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl" style={{
                                fontFamily: 'Roboto Mono',
                                color: '#FFE958',
                                textShadow: '0px 0px 15px #FFDE00'
                            }}>36</h3>
                            <p style={{ fontFamily: 'Roboto Mono', color: '#FFFFFF' }}>Hours of Hacking</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-4xl" style={{
                                fontFamily: 'Roboto Mono',
                                color: '#FFE958',
                                textShadow: '0px 0px 15px #FFDE00'
                            }}>$10,000+</h3>
                            <p style={{ fontFamily: 'Roboto Mono', color: '#FFFFFF' }}>Prizes Awarded</p>
                        </div>
                    </div>
                </section>
                <ImageCarousel
                    images={[
                        { src: "/assets/pics/0.JPG", alt: "Event photo 0" },
                        { src: "/assets/pics/1.JPG", alt: "Event photo 1" },
                        { src: "/assets/pics/2.JPG", alt: "Event photo 2" },
                        { src: "/assets/pics/3.JPG", alt: "Event photo 3" },
                        { src: "/assets/pics/4.JPG", alt: "Event photo 4" },
                        { src: "/assets/pics/5.JPG", alt: "Event photo 5" },
                        { src: "/assets/pics/6.JPG", alt: "Event photo 6" },
                        { src: "/assets/pics/7.JPG", alt: "Event photo 7" },
                        { src: "/assets/pics/8.JPG", alt: "Event photo 8" },
                        { src: "/assets/pics/9.JPG", alt: "Event photo 9" },
                        { src: "/assets/pics/10.JPG", alt: "Event photo 10" },
                        { src: "/assets/pics/11.JPG", alt: "Event photo 11" },
                        { src: "/assets/pics/12.JPG", alt: "Event photo 12" },
                        { src: "/assets/pics/13.JPG", alt: "Event photo 13" },
                        { src: "/assets/pics/14.JPG", alt: "Event photo 14" },
                        { src: "/assets/pics/15.JPG", alt: "Event photo 15" },
                        { src: "/assets/pics/16.JPG", alt: "Event photo 16" },
                        { src: "/assets/pics/17.JPG", alt: "Event photo 17" },
                        { src: "/assets/pics/18.JPG", alt: "Event photo 18" },
                        { src: "/assets/pics/19.JPG", alt: "Event photo 19" },
                        { src: "/assets/pics/20.JPG", alt: "Event photo 20" },
                        { src: "/assets/pics/21.JPG", alt: "Event photo 21" },
                        { src: "/assets/pics/22.JPG", alt: "Event photo 22" },
                        { src: "/assets/pics/23.JPG", alt: "Event photo 23" },
                        { src: "/assets/pics/24.JPG", alt: "Event photo 24" },
                        { src: "/assets/pics/25.JPG", alt: "Event photo 25" },
                        { src: "/assets/pics/26.JPG", alt: "Event photo 26" },
                        { src: "/assets/pics/27.JPG", alt: "Event photo 27" },
                        { src: "/assets/pics/28.JPG", alt: "Event photo 28" },
                        { src: "/assets/pics/29.JPG", alt: "Event photo 29" },
                        { src: "/assets/pics/30.JPG", alt: "Event photo 30" }
                    ]}
                    speed={45}
                    className="w-full"
                />
                <section className="flex flex-col items-center w-full px-24 md:px-60 lg:px-72 relative">
                    <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center text-[#FFE958]" style={{
                        fontFamily: 'Days One',
                        textShadow: '0px 0px 15px #FFDE00'
                    }}>
                        BMXII Sponsors
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16">
                        <a href="https://www.caterpillar.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/cat.png"
                                    alt="CAT"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.purdue.edu/sao/Fundraising/SOGA%20and%20SFAB.html" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/SFAB.png"
                                    alt="SFAB"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.cs.purdue.edu/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/PurdueCS.svg"
                                    alt="Purdue CS"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.deshaw.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/deshaw.png"
                                    alt="D.E. Shaw"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.rcac.purdue.edu/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/RCAC_Logo.png"
                                    alt="RCAC"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://engineering.purdue.edu/Engr" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/coe.svg"
                                    alt="CoE"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://roboflow.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/roboflow.png"
                                    alt="Roboflow"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.runpod.io/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/runpod_color.png"
                                    alt="Runpod"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://purdueinnovates.org/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/purdue_innovates.png"
                                    alt="Purdue Innovates"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.klaviyo.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/klaviyo.png"
                                    alt="Klaviyo"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.blippayments.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/blip.png"
                                    alt="Blip"
                                    className="h-26 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://sync.so/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/sync.png"
                                    alt="Sync"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://modal.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/modal.svg"
                                    alt="Modal"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.tacobell.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/TacoBell.svg"
                                    alt="Taco Bell"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.cartesia.ai/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/cartesia.svg"
                                    alt="Cartesia"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.warp.dev/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/warp.png"
                                    alt="Warp"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.wolfram.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/wolfram.png"
                                    alt="Wolfram"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                    </div>
                </section>
                <section className="flex flex-col items-center w-full px-24 md:px-60 lg:px-72 relative">
                    <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center text-[#FFE958]" style={{
                        fontFamily: 'Days One',
                        textShadow: '0px 0px 15px #FFDE00'
                    }}>
                        More Past Sponsors
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        <a href="https://www.cockroachlabs.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/cockroachdb.svg"
                                    alt="CockroachDB"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.sandia.gov/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/sandia.png"
                                    alt="Sandia National Labs"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.digitalocean.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/digitalocean.png"
                                    alt="Digital Ocean"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.deere.com/en/index.html" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/johndeere.png"
                                    alt="John Deere"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.ecolab.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/ecolab.png"
                                    alt="EcoLab"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.bloomberg.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/bloomberg.png"
                                    alt="Bloomberg"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.echo3d.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/echo3d.png"
                                    alt="Echo3D"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.deloitte.com/global/en.html" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/deloitte.png"
                                    alt="Deloitte"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.sketch.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/sketch.png"
                                    alt="Sketch"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.palantir.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/palantir.png"
                                    alt="Palantir"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a
                            href="https://corporate.ford.com/social-impact/community.html"
                            target="_blank"
                            className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
                        >
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image src="/assets/sponsors/ford.png" alt="Ford" className="h-16 w-auto object-contain" width={200} height={64} sizes="200px" />
                            </div>
                        </a>
                        <a href="https://thecodex.me/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/codex.png"
                                    alt="The Codex"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://dagshub.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/dagshub.svg"
                                    alt="Dagshub"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.qualcomm.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/qualcomm.png"
                                    alt="Qualcomm"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                        <a href="https://www.capitalone.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="bg-[#FFFFFFBB] border-2 border-white rounded-xl p-4 hover:bg-white transition duration-500 ease-in-out flex items-center justify-center w-full h-24">
                                <Image
                                    src="/assets/sponsors/capitalone.png"
                                    alt="CapitalOne"
                                    className="h-16 w-auto object-contain"
                                    width={200}
                                    height={64}
                                    sizes="200px"
                                />
                            </div>
                        </a>
                    </div>
                    <p className="my-16 text-lg text-center text-white" style={{ fontFamily: 'Roboto Mono' }}>
                        Interested? Reach out to us at{" "}
                        <a href="mailto:sponsorship@boilermake.org" className="underline text-[#FFE958] hover:text-[#FFDE00]">
                            sponsorship@boilermake.org
                        </a>
                        !
                    </p>
                    <Image
                        src="/images/stars_right.png"
                        alt="Stars"
                        className="absolute bottom-0 right-0 h-0 w-0 md:h-32 md:w-32"
                        width={1000}
                        height={1000}
                        sizes="100vw"
                    />
                </section>
                </div>
            </main>
        </>
    )
}
