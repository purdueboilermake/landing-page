/**
 * app/past/page.tsx — graffiti-inspired section beneath the BoilerMake XIV skyline.
 * The home page, social icons, carousel logic, sponsors, and links remain unchanged.
 */
import Image from 'next/image'
import ImageCarousel from '@/app/past/ImageCarousel'

export default function PastPage() {
  return (
    <main className="graffiti-past relative isolate w-full overflow-hidden bg-[#1B0A29] text-[#F5F0E8] pt-20 pb-24 md:pt-28">
      <style>{`
        .graffiti-past {
          font-family: var(--font-sprite-graffiti), sans-serif;
          background-color: #1B0A29;
        }
          
        .graffiti-past::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .65;
          background: linear-gradient(180deg, #1B0A29 0%, #271437 35%, #1B0A29 100%);
          z-index: -1;
        }
        .graffiti-past .graffiti-photo-strip img {
          border: 3px solid #171021;
          border-radius: 2px;
          box-shadow: 5px 5px 0 #aa7bdb;
        }
        /* White sponsor cards, with alternating flat graffiti colors on hover. */
        .graffiti-past .graffiti-sponsors > a:nth-child(6n + 1) { --hover-color: #F0D675; }
        .graffiti-past .graffiti-sponsors > a:nth-child(6n + 2) { --hover-color: #A9C7FA; }
        .graffiti-past .graffiti-sponsors > a:nth-child(6n + 3) { --hover-color: #DDBBFA; }
        .graffiti-past .graffiti-sponsors > a:nth-child(6n + 4) { --hover-color: #FFB994; }
        .graffiti-past .graffiti-sponsors > a:nth-child(6n + 5) { --hover-color: #F4BED0; }
        .graffiti-past .graffiti-sponsors > a:nth-child(6n) { --hover-color: #B8E5CB; }
        .graffiti-past .graffiti-sponsor-card { background-color: #DEDEDE; }
        .graffiti-past .graffiti-sponsors > a:hover .graffiti-sponsor-card,
        .graffiti-past .graffiti-sponsors > a:focus-visible .graffiti-sponsor-card {
          background-color: var(--hover-color);
          box-shadow: 7px 7px 0 #171021;
        }
        .graffiti-past a:focus-visible { outline: 3px dashed #f0d675; outline-offset: 5px; }
      `}</style>
      <div className="relative z-10 flex w-full flex-col items-center gap-10 md:gap-16">
                <h1
                    className="font-black uppercase text-4xl md:text-6xl text-center text-[#F5F0D9] px-4 md:px-0 leading-tight rotate-[-1deg]"
                    style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "#FFE958",
            textShadow: "0 3px 0 #F0A83A, 0 6px 0 #F0A83A, 0 9px 14px rgba(0,0,0,0.45)",
          }}
                >
                    BoilerMake In The Past         
                    </h1>
                <section className="text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                        <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#FFA13E] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
                            <h3 className="text-3xl md:text-5xl font-black leading-tight" style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "black",
            textShadow: "0 3px 0 #FFA13E, 0 6px 0 #FFA13E, 0 9px 14px rgba(0,0,0,0.45)",
          }}>500+</h3>
                            <p className="text-sm md:text-base mt-2 uppercase tracking-wider" style={{
                        fontFamily: "var(--font-futura-cyrillic)",
                        fontWeight: 400,
                        fontSize: "2cqi",
                        letterSpacing: "0.1em",
                        color: "#21152F",
                        marginBottom: "0.5em",
                      }}>Attendees</p>
                        </div>
                        <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#CC5FE6] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
                            <h3 className="text-3xl md:text-5xl font-black leading-tight" style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "black",
            textShadow: "0 3px 0 #CC5FE6, 0 6px 0 #CC5FE6, 0 9px 14px rgba(0,0,0,0.45)",
            
          }}>36</h3>
                            <p className="text-sm md:text-base mt-2 uppercase tracking-wider" style={{
                        fontFamily: "var(--font-futura-cyrillic)",
                        fontWeight: 400,
                        fontSize: "2cqi",
                        letterSpacing: "0.1em",
                        color: "#21152F",
                        marginBottom: "0.5em",
                      }}>Hours of Hacking</p>
                        </div>
                        <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#77CF50] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
                            <h3 className="text-3xl md:text-5xl font-black leading-tight" style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "black",
            textShadow: "0 3px 0 #77CF50, 0 6px 0 #77CF50, 0 9px 14px rgba(0,0,0,0.45)",
          }}>$10,000+</h3>
                            <p className="text-sm md:text-base mt-2 uppercase tracking-wider" style={{
                        fontFamily: "var(--font-futura-cyrillic)",
                        fontWeight: 400,
                        fontSize: "2cqi",
                        letterSpacing: "0.1em",
                        color: "#21152F",
                        marginBottom: "0.5em",
                      }}>Prizes Awarded</p>
                        </div>
                    </div>
                </section>
                <ImageCarousel
                    images={[
                        { src: "/assets/pics/0.JPG", alt: "Event photo 0" },
                        { src: "/assets/pics/1.JPG", alt: "Event photo 1" },
                        { src: "/assets/pics/2.JPG", alt: "Event photo 2" },
                        { src: "/assets/pics/3.JPG", alt: "Event photo 3" },
                        { src: "/assets/pics/5.JPG", alt: "Event photo 5" },
                        { src: "/assets/pics/6.JPG", alt: "Event photo 6" },
                        { src: "/assets/pics/8.JPG", alt: "Event photo 8" },
                        { src: "/assets/pics/16.JPG", alt: "Event photo 16" },
                        { src: "/assets/pics/21.JPG", alt: "Event photo 21" },
                        { src: "/assets/pics/11.JPG", alt: "Event photo 11" },
                        { src: "/assets/pics/12.JPG", alt: "Event photo 12" },
                        { src: "/assets/pics/13.JPG", alt: "Event photo 13" },
                        { src: "/assets/pics/9.JPG", alt: "Event photo 9" },
                        { src: "/assets/pics/10.JPG", alt: "Event photo 10" },
                        { src: "/assets/pics/14.JPG", alt: "Event photo 14" },
                        { src: "/assets/pics/15.JPG", alt: "Event photo 15" },
                        { src: "/assets/pics/17.JPG", alt: "Event photo 17" },
                        { src: "/assets/pics/18.JPG", alt: "Event photo 18" },
                        { src: "/assets/pics/19.JPG", alt: "Event photo 19" },
                        { src: "/assets/pics/20.JPG", alt: "Event photo 20" },
                        { src: "/assets/pics/22.JPG", alt: "Event photo 22" },
                        { src: "/assets/pics/23.JPG", alt: "Event photo 23" },
                        { src: "/assets/pics/24.JPG", alt: "Event photo 24" },
                        { src: "/assets/pics/25.JPG", alt: "Event photo 25" },
                        { src: "/assets/pics/26.JPG", alt: "Event photo 26" },
                        { src: "/assets/pics/27.JPG", alt: "Event photo 27" },
                        { src: "/assets/pics/28.JPG", alt: "Event photo 28" },
                        { src: "/assets/pics/29.JPG", alt: "Event photo 29" },
                        { src: "/assets/pics/30.JPG", alt: "Event photo 30" },
                        { src: "/assets/pics/4.JPG", alt: "Event photo 4" },
                        { src: "/assets/pics/7.JPG", alt: "Event photo 7" },
                    ]}
                    speed={120} // higher is slower, speed = seconds for one complete scroll cycle
                    className="w-full graffiti-photo-strip"
                />
                <section className="flex flex-col items-center w-full px-5 sm:px-10 md:px-16 lg:px-24 relative">
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-12 text-center text-[#F0D675]" style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "#FFE958",
            textShadow: "0 3px 0 #F0A83A, 0 6px 0 #F0A83A, 0 9px 14px rgba(0,0,0,0.45)",
          }}>
                       ❃  BM XII Sponsors ❃  
                    </h2>
                    <div className="graffiti-sponsors flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16 max-w-6xl">
                        <a href="https://www.caterpillar.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                <section className="flex flex-col items-center w-full px-5 sm:px-10 md:px-16 lg:px-24 relative">
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-12 text-center text-[#F0D675]" style={{
            fontFamily: "var(--font-sprite-graffiti)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
            lineHeight: "100%",
            letterSpacing: "0.04em",
            color: "#FFE958",
            textShadow: "0 3px 0 #F0A83A, 0 6px 0 #F0A83A, 0 9px 14px rgba(0,0,0,0.45)",
          }}>
                       ✮ More Past Sponsors ✮
                    </h2>
                                        <div className="graffiti-sponsors flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-6xl">
                        <a href="https://www.cockroachlabs.com/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
                                <Image src="/assets/sponsors/ford.png" alt="Ford" className="h-16 w-auto object-contain" width={200} height={64} sizes="200px" />
                            </div>
                        </a>
                        <a href="https://thecodex.me/" target="_blank" className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center">
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                            <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
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
                    <p className="my-16 text-lg text-center text-white" style={{
                        fontFamily: "var(--font-futura-cyrillic)",
                        fontWeight: 400,
                        fontSize: "2cqi",
                        letterSpacing: "0.1em",
                        color: "#DEDEDE",
                        marginBottom: "0.5em",
                      }}>
                        Interested? Reach out to us at{" "}
                        <a href="mailto:sponsorship@boilermake.org" className="underline text-[#F0D675] hover:text-[#F5F0D9]">
                            sponsorship@boilermake.org
                        </a>
                        !
                    </p>
                </section>

      </div>
    </main>
  )
}
