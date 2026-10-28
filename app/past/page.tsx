/**
 * app/past/page.tsx — graffiti-inspired section beneath the BoilerMake XIV skyline.
 * Updated to align with the BoilerMake XIV (/2027) design system.
 */
import Image from "next/image";
import ImageCarousel from "@/app/past/ImageCarousel";

export default function PastPage() {
  return (
    <main className="graffiti-past relative isolate w-full overflow-hidden bg-[#3B344B] text-[#F5F0E8] pt-20 pb-20 md:pt-28 md:pb-24">
      <style>{`
        .graffiti-past {
          font-family: var(--font-code-pro), system-ui, sans-serif;
          background-color: #3B344B;
        }

        .graffiti-past .graffiti-photo-strip img {
          border: 3px solid #171021;
          border-radius: 4px;
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

      {/* Decorative Urban Bricks (2027 Schedule & About style) */}
      <Image
        src="/imagesbm14/schedule/brick2 1.png"
        alt=""
        width={995}
        height={500}
        priority={false}
        className="absolute z-0 opacity-40 top-[3%] left-[-4%] sm:left-[2%] w-[22vw] sm:w-[160px] md:w-[200px] h-auto pointer-events-none select-none"
        style={{ aspectRatio: "995 / 500" }}
      />
      <Image
        src="/imagesbm14/schedule/brick_1 2.png"
        alt=""
        width={745}
        height={520}
        priority={false}
        className="absolute z-0 opacity-40 top-[17%] right-[-3%] sm:right-[3%] w-[18vw] sm:w-[150px] md:w-[180px] h-auto pointer-events-none select-none"
        style={{ aspectRatio: "745 / 520" }}
      />
      <Image
        src="/imagesbm14/schedule/brick2 1.png"
        alt=""
        width={995}
        height={500}
        priority={false}
        className="absolute z-0 opacity-40 top-[45%] left-[-2%] sm:left-[4%] w-[20vw] sm:w-[170px] md:w-[210px] h-auto pointer-events-none select-none"
        style={{ aspectRatio: "995 / 500" }}
      />
      <Image
        src="/imagesbm14/schedule/brick_1 2.png"
        alt=""
        width={745}
        height={520}
        priority={false}
        className="absolute z-0 opacity-40 top-[65%] right-[-3%] sm:right-[2%] w-[16vw] sm:w-[140px] md:w-[170px] h-auto pointer-events-none select-none"
        style={{ aspectRatio: "745 / 520" }}
      />
      <Image
        src="/imagesbm14/schedule/brick2 1.png"
        alt=""
        width={995}
        height={500}
        priority={false}
        className="absolute z-0 opacity-40 bottom-[12%] left-[2%] w-[18vw] sm:w-[160px] md:w-[190px] h-auto pointer-events-none select-none"
        style={{ aspectRatio: "995 / 500" }}
      />

      {/* Floating BM14 Graffiti Stickers */}
      <Image
        src="/imagesbm14/schedule/skateboard.webp"
        alt=""
        width={500}
        height={300}
        className="absolute z-[1] opacity-90 animate-float top-[2%] left-[2%] sm:left-[6%] w-[22vw] sm:w-[180px] md:w-[240px] h-auto pointer-events-none select-none hidden sm:block"
      />
      <Image
        src="/imagesbm14/schedule/star graffiti.webp"
        alt=""
        width={350}
        height={350}
        className="absolute z-[1] opacity-90 animate-[float_6s_ease-in-out_infinite_-1.5s] top-[6%] right-[3%] sm:right-[7%] w-[18vw] sm:w-[130px] md:w-[170px] h-auto pointer-events-none select-none"
      />
      <Image
        src="/imagesbm14/schedule/spray paint.webp"
        alt=""
        width={240}
        height={340}
        className="absolute z-[1] opacity-85 animate-[float_6s_ease-in-out_infinite_-3s] top-[28%] left-[2%] sm:left-[5%] w-[16vw] sm:w-[110px] md:w-[150px] h-auto pointer-events-none select-none"
      />
      <Image
        src="/imagesbm14/schedule/cone.webp"
        alt=""
        width={250}
        height={250}
        className="absolute z-[1] opacity-85 animate-[float_6s_ease-in-out_infinite_-4.5s] top-[56%] right-[3%] sm:right-[6%] w-[16vw] sm:w-[110px] md:w-[140px] h-auto pointer-events-none select-none"
      />
      <Image
        src="/imagesbm14/spons/image-2.png"
        alt=""
        width={150}
        height={150}
        className="absolute z-[1] opacity-80 animate-[float_6s_ease-in-out_infinite_-2s] bottom-[16%] left-[3%] sm:left-[7%] w-[14vw] sm:w-[90px] md:w-[120px] h-auto pointer-events-none select-none"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-10 md:gap-16">
        {/* Section Header */}
        <h1
          className="font-black uppercase text-center text-[#FFE958] px-4 leading-tight tracking-wider"
          style={{
            fontFamily:
              "var(--font-owned), var(--font-sprite-graffiti), sans-serif",
            fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
            lineHeight: 1.1,
            color: "#FFE958",
            textShadow: "4px 4px 0 #DE7B14",
          }}
        >
          <a href="/past" style={{ color: "inherit", textDecoration: "none" }}>
            BoilerMake In The Past
          </a>
        </h1>

        {/* Stats Row */}
        <section className="text-white flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#FFA13E] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
              <h3
                className="text-3xl md:text-5xl font-black leading-tight"
                style={{
                  fontFamily: "var(--font-sprite-graffiti)",
                  fontWeight: 400,
                  fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                  lineHeight: "100%",
                  letterSpacing: "0.04em",
                  color: "black",
                  textShadow:
                    "0 3px 0 #FFA13E, 0 6px 0 #FFA13E, 0 9px 14px rgba(0,0,0,0.45)",
                }}
              >
                500+
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base mt-2 uppercase tracking-widest font-bold"
                style={{
                  fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#171021",
                }}
              >
                Attendees
              </p>
            </div>

            <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#CC5FE6] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
              <h3
                className="text-3xl md:text-5xl font-black leading-tight"
                style={{
                  fontFamily: "var(--font-sprite-graffiti)",
                  fontWeight: 400,
                  fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                  lineHeight: "100%",
                  letterSpacing: "0.04em",
                  color: "black",
                  textShadow:
                    "0 3px 0 #CC5FE6, 0 6px 0 #CC5FE6, 0 9px 14px rgba(0,0,0,0.45)",
                }}
              >
                36
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base mt-2 uppercase tracking-widest font-bold"
                style={{
                  fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#171021",
                }}
              >
                Hours of Hacking
              </p>
            </div>

            <div className="text-center min-w-44 border-[3px] border-[#171021] bg-[#77CF50] px-7 py-5 shadow-[6px_6px_0_#171021] odd:rotate-[-2deg] even:rotate-[2deg]">
              <h3
                className="text-3xl md:text-5xl font-black leading-tight"
                style={{
                  fontFamily: "var(--font-sprite-graffiti)",
                  fontWeight: 400,
                  fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
                  lineHeight: "100%",
                  letterSpacing: "0.04em",
                  color: "black",
                  textShadow:
                    "0 3px 0 #77CF50, 0 6px 0 #77CF50, 0 9px 14px rgba(0,0,0,0.45)",
                }}
              >
                $10,000+
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base mt-2 uppercase tracking-widest font-bold"
                style={{
                  fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#171021",
                }}
              >
                Prizes Awarded
              </p>
            </div>
          </div>
        </section>

        {/* Photo Carousel */}
        <ImageCarousel
          images={[
            { src: "/assets/pics/0.webp", alt: "Event photo 0" },
            { src: "/assets/pics/1.webp", alt: "Event photo 1" },
            { src: "/assets/pics/2.webp", alt: "Event photo 2" },
            { src: "/assets/pics/3.webp", alt: "Event photo 3" },
            { src: "/assets/pics/5.webp", alt: "Event photo 5" },
            { src: "/assets/pics/6.webp", alt: "Event photo 6" },
            { src: "/assets/pics/8.webp", alt: "Event photo 8" },
            { src: "/assets/pics/16.webp", alt: "Event photo 16" },
            { src: "/assets/pics/21.webp", alt: "Event photo 21" },
            { src: "/assets/pics/11.webp", alt: "Event photo 11" },
            { src: "/assets/pics/12.webp", alt: "Event photo 12" },
            { src: "/assets/pics/13.webp", alt: "Event photo 13" },
            { src: "/assets/pics/9.webp", alt: "Event photo 9" },
            { src: "/assets/pics/10.webp", alt: "Event photo 10" },
            { src: "/assets/pics/14.webp", alt: "Event photo 14" },
            { src: "/assets/pics/15.webp", alt: "Event photo 15" },
            { src: "/assets/pics/17.webp", alt: "Event photo 17" },
            { src: "/assets/pics/18.webp", alt: "Event photo 18" },
            { src: "/assets/pics/19.webp", alt: "Event photo 19" },
            { src: "/assets/pics/20.webp", alt: "Event photo 20" },
            { src: "/assets/pics/22.webp", alt: "Event photo 22" },
            { src: "/assets/pics/23.webp", alt: "Event photo 23" },
            { src: "/assets/pics/24.webp", alt: "Event photo 24" },
            { src: "/assets/pics/25.webp", alt: "Event photo 25" },
            { src: "/assets/pics/26.webp", alt: "Event photo 26" },
            { src: "/assets/pics/27.webp", alt: "Event photo 27" },
            { src: "/assets/pics/28.webp", alt: "Event photo 28" },
            { src: "/assets/pics/29.webp", alt: "Event photo 29" },
            { src: "/assets/pics/30.webp", alt: "Event photo 30" },
            { src: "/assets/pics/4.webp", alt: "Event photo 4" },
            { src: "/assets/pics/7.webp", alt: "Event photo 7" },
          ]}
          speed={120}
          className="w-full graffiti-photo-strip"
        />

        {/* BM XII Sponsors Section */}
        <section className="flex flex-col items-center w-full px-5 sm:px-10 md:px-16 lg:px-24 relative">
          <h2
            className="text-center font-black uppercase tracking-wider mb-6 md:mb-12"
            style={{
              fontFamily:
                "var(--font-owned), var(--font-sprite-graffiti), sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "#FFE958",
              textShadow: "4px 4px 0 #DE7B14",
            }}
          >
            BM XII Sponsors
          </h2>

          <div className="graffiti-sponsors flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16 max-w-6xl">
            <a
              href="https://www.caterpillar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.purdue.edu/sao/Fundraising/SOGA%20and%20SFAB.html"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.cs.purdue.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
              <div className="graffiti-sponsor-card relative bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 overflow-hidden shadow-[5px_5px_0_#21152F]">
                <Image
                  src="/assets/sponsors/PurdueCS.svg"
                  alt="Purdue CS"
                  className="absolute left-1/2 top-1/2 max-w-none object-contain"
                  style={{
                    width: "auto",
                    height: "100px",
                    transform: "translate(-50%, calc(-50% + 15%))",
                  }}
                  width={160}
                  height={127}
                  sizes="180px"
                />
              </div>
            </a>

            <a
              href="https://www.deshaw.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.rcac.purdue.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
              <div className="graffiti-sponsor-card relative bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 overflow-hidden shadow-[5px_5px_0_#21152F]">
                <Image
                  src="/assets/sponsors/RCAC_Logo.png"
                  alt="RCAC"
                  className="absolute left-1/2 top-1/2 max-w-none object-contain"
                  style={{
                    width: "auto",
                    height: "100px",
                    transform: "translate(-50%, calc(-50% + 15%))",
                  }}
                  width={223}
                  height={176}
                  sizes="180px"
                />
              </div>
            </a>

            <a
              href="https://engineering.purdue.edu/Engr"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
              <div className="graffiti-sponsor-card relative bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 overflow-hidden shadow-[5px_5px_0_#21152F]">
                <Image
                  src="/assets/sponsors/coe.svg"
                  alt="CoE"
                  className="absolute left-1/2 top-1/2 max-w-none object-contain"
                  style={{
                    width: "auto",
                    height: "100px",
                    transform: "translate(-50%, calc(-50% + 15%))",
                  }}
                  width={160}
                  height={127}
                  sizes="180px"
                />
              </div>
            </a>

            <a
              href="https://roboflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.runpod.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://purdueinnovates.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.klaviyo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.blippayments.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://sync.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://modal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.tacobell.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.cartesia.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.warp.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.wolfram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

        {/* More Past Sponsors Section */}
        <section className="flex flex-col items-center w-full px-5 sm:px-10 md:px-16 lg:px-24 relative">
          <h2
            className="text-center font-black uppercase tracking-wider mb-6 md:mb-12"
            style={{
              fontFamily:
                "var(--font-owned), var(--font-sprite-graffiti), sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "#FFE958",
              textShadow: "4px 4px 0 #DE7B14",
            }}
          >
            More Past Sponsors
          </h2>

          <div className="graffiti-sponsors flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-6xl">
            <a
              href="https://www.cockroachlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.sandia.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.deere.com/en/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.ecolab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.bloomberg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.echo3d.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.deloitte.com/global/en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.sketch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.palantir.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
              <div className="graffiti-sponsor-card bg-[#F5F0E8] border-[3px] border-[#21152F] rounded-2xl p-4 hover:-translate-y-1 transition-[transform,background-color,box-shadow] duration-200 ease-out flex items-center justify-center w-full h-24 shadow-[5px_5px_0_#21152F]">
                <Image
                  src="/assets/sponsors/ford.png"
                  alt="Ford"
                  className="h-16 w-auto object-contain"
                  width={200}
                  height={64}
                  sizes="200px"
                />
              </div>
            </a>

            <a
              href="https://thecodex.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://dagshub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.qualcomm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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

            <a
              href="https://www.capitalone.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-12px)] md:basis-[calc(25%-24px)] flex justify-center"
            >
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
        </section>

        {/* Footer & Social Media Channels (Item 7) */}
        <footer className="flex flex-col items-center justify-center w-full px-4 pt-4 pb-12 mt-6 relative z-10">
          <p
            className="text-center text-white/90 mb-6"
            style={{
              fontFamily: "var(--font-code-pro), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(15px, 1.8vw, 20px)",
              letterSpacing: "0.06em",
              color: "#FFFFFF",
            }}
          >
            Connect with us & stay updated
          </p>

          {/* Social Badges with Icon + Text */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 max-w-4xl">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/boilermake/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BoilerMake Instagram"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/35 border-2 border-white/40 text-[#FFE958] hover:bg-[#FFE958] hover:text-[#171021] hover:border-[#FFE958] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,233,88,0.55)] transition-all duration-300 ease-out"
              style={{
                fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              <i className="fab fa-instagram text-xl sm:text-2xl" />
              <span>@boilermake</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/boilermake/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BoilerMake LinkedIn"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/35 border-2 border-white/40 text-[#FFE958] hover:bg-[#FFE958] hover:text-[#171021] hover:border-[#FFE958] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,233,88,0.55)] transition-all duration-300 ease-out"
              style={{
                fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              <i className="fab fa-linkedin text-xl sm:text-2xl" />
              <span>BoilerMake</span>
            </a>

            {/* Email */}
            <a
              href="mailto:sponsorship@boilermake.org"
              aria-label="BoilerMake Sponsorship Email"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/35 border-2 border-white/40 text-[#FFE958] hover:bg-[#FFE958] hover:text-[#171021] hover:border-[#FFE958] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,233,88,0.55)] transition-all duration-300 ease-out"
              style={{
                fontFamily: "var(--font-code-pro), system-ui, sans-serif",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              <i className="fas fa-envelope text-xl sm:text-2xl" />
              <span>sponsorship@boilermake.org</span>
            </a>
          </div>

          {/* Attribution */}
          <p
            className="text-center text-white/90 tracking-wider"
            style={{
              fontFamily: "var(--font-code-pro)",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.4vw, 16px)",
              letterSpacing: "0.05em",
              textShadow: "0px 0px 10px rgba(255, 233, 88, 0.4)",
            }}
          >
            Made with 💛 by the BoilerMake XIV team
          </p>
        </footer>
      </div>
    </main>
  );
}
