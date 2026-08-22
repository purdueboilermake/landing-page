"use client";

// /**
//  * app/page.tsx
//  * Home page
//  * @DylanMiller
//  * 9-28-2025
//  */

// /*Currently website opens to this page, which is a coming soon announcement for BoilerMake XIV.*/

// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>BoilerMake XIV</title>
//       <link rel="icon" href="assets/favicon.ico" type="image/x-icon" />
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
//         rel="stylesheet"
//       />
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=Inter:wght@100..900&family=Roboto+Mono:wght@400;500;600;700&family=Days+One&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
//         rel="stylesheet"
//       />
//       <meta name="title" content="BoilerMake XIV" />
//       <meta
//         name="description"
//         content="Purdue University's flagship hackathon, BoilerMake, is back in January 2026."
//       />
//       <meta
//         name="keywords"
//         content="boilermake, purdue, midwest, hackathon, boilermaker, uiuc, chicago, Indiana, illinois"
//       />
//       <meta name="robots" content="index, follow" />
//       <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
//       <meta name="language" content="English" />
//       <style
//         dangerouslySetInnerHTML={{
//           __html:
//             '\n            body {\n                font-family: "Dosis", sans-serif;\n                font-weight: 500;\n            }\n\n            h1 {\n                font-family: "Arvo", serif;\n            }\n        '
//         }}
//       />
//       <main
//         className="flex flex-col h-screen w-full overflow-hidden justify-center items-center bg-[#1E1E1E] relative"
//       >
//         {/* Ellipse backdrop layer (below everything) */}
//         <div className="absolute inset-0 pointer-events-none z-1">
//           <div className="relative w-full h-full">
//             <Image
//               src="/images/ellipses.png"
//               alt="Ellipses Background"
//               fill
//               priority
//               className="object-cover object-center"
//             />
//           </div>
//         </div>
//         {/* Gradient layer: fit full viewport height and stretch to width */}
//         <div
//           className="absolute inset-0 bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/Gradient.png')",
//             backgroundSize: '100% 100%', // force stretch both directions to always fill
//             zIndex: 20
//           }}
//           aria-hidden
//         />
//         <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
//           {/* Wider container with transparent side padding so blur can extend without hard edge */}
//           <div
//             className="relative h-screen px-[15vw] box-content"
//             style={{
//               zIndex: 10,
//               backgroundClip: 'padding-box'
//             }}
//           >
//             {/* Sharp (top) layer */}
//             <Image
//               src="/images/Circle.png"
//               alt=""
//               width={1049}
//               height={1049}
//               priority
//               className="h-screen w-auto max-w-none select-none"
//               style={{
//                 WebkitMaskImage: 'linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 100%)',
//                 maskImage: 'linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 100%)'
//               }}
//             />
//           </div>
//         </div>
//         {/* Stars left image */}
//         <div className="absolute bottom-0 left-0 pointer-events-none" style={{ zIndex: 15 }}>
//           <Image
//             src="/images/stars_left.png"
//             alt=""
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-auto h-auto"
//             style={{
//               paddingLeft: '3.984375vw' // 51px / 1280px * 100 = 3.984375vw
//             }}
//           />
//         </div>
//         {/* Stars right image */}
//         <div className="absolute bottom-0 right-0 pointer-events-none" style={{ zIndex: 15 }}>
//           <Image
//             src="/images/stars_right.png"
//             alt=""
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-auto h-auto"
//             style={{
//               paddingRight: '2.421875vw', // 31px / 1280px * 100 = 2.421875vw
//               paddingBottom: '3.125vw' // 26px / 832px * 100 = 3.125vw
//             }}
//           />
//         </div>
//         <div className="flex flex-col items-center justify-between min-h-screen w-full relative z-20" style={{ paddingTop: `${(158 / 832) * 100}vh` }}>
//           <div className="flex flex-col items-center">
//             <Image
//               src="/images/logo_BMXIII.png"
//               alt="BoilerMake Logo"
//               width={158}
//               height={149}
//               className="mb-8"
//               style={{
//                 height: `min(${(149 / 832) * 100}vh, 149px)`,
//                 width: 'auto',
//               }}
//             />
//             <h2 
//               className="text-center mb-6"
//               style={{
//                 fontFamily: 'var(--font-futura-cyrillic)',
//                 fontWeight: 500,
//                 fontSize: 'clamp(18px, 3.5vw, 28px)',
//                 lineHeight: '100%',
//                 letterSpacing: '0.1em',
//                 color: '#FFFFFF',
//                 textShadow: '0px 0px 15px #FFDE00',
//               }}
//             >
//               COMING SOON...
//             </h2>
//             <h1 
//               className="text-center mb-12"
//               style={{
//                 fontFamily: 'var(--font-disket-mono)',
//                 fontWeight: 400,
//                 fontSize: 'clamp(32px, 8vw, 60px)',
//                 lineHeight: '100%',
//                 letterSpacing: '0.1em',
//                 color: '#FFE958',
//                 textShadow: '0px 0px 15px #FFDE00',
//               }}
//             >
//               BOILERMAKE XIV
//             </h1>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               {/* <a
//                 className="bg-[#2A262780] text-white py-2 hover:bg-[#2A2627AA] transition duration-500 ease-in-out text-center whitespace-nowrap flex items-center justify-center"
//                 href="https://docs.google.com/forms/d/e/1FAIpQLScaVyVFmm3Jwn1225SjUPCInKD9-MLZhxIRtQT8o4y1HAxs_g/viewform"
//                 style={{
//                   fontFamily: 'var(--font-futura-cyrillic)',
//                   fontWeight: 700,
//                   fontSize: 'clamp(14px, 1.68vh, 14px)',
//                   lineHeight: '100%',
//                   letterSpacing: '0.05em',
//                   textAlign: 'center',
//                   verticalAlign: 'middle',
//                   height: '50px',
//                   border: '2px solid #FFFFFF',
//                   borderRadius: '30px',
//                   paddingLeft: 'clamp(12px, 3.5vw, 40px)',
//                   paddingRight: 'clamp(12px, 3.5vw, 40px)'
//                 }}
//               >
//                 Early Interest Form
//               </a> */}
//               <a 
//                 className="bg-[#2A262780] text-white py-2 hover:bg-[#2A2627AA] transition duration-500 ease-in-out text-center whitespace-nowrap flex items-center justify-center" 
//                 href="https://docs.google.com/forms/d/e/1FAIpQLSftgeNHXItUDe9s7sSmbDRY5NQWIuFAzT2Vx3EcRNuhOrk5yw/viewform"
//                 style={{
//                   fontFamily: 'var(--font-futura-cyrillic)',
//                   fontWeight: 700,
//                   fontSize: 'clamp(14px, 1.68vh, 14px)',
//                   lineHeight: '100%',
//                   letterSpacing: '0.05em',
//                   textAlign: 'center',
//                   verticalAlign: 'middle',
//                   height: '50px',
//                   border: '2px solid #FFFFFF',
//                   borderRadius: '30px',
//                   paddingLeft: 'clamp(12px, 3.5vw, 40px)',
//                   paddingRight: 'clamp(12px, 3.5vw, 40px)'
//                 }}
//               >
//                 Organizer Application
//               </a>
//               <a
//                 href="/past"
//                 className="bg-[#2A262780] text-white py-2 hover:bg-[#2A2627AA] transition duration-500 ease-in-out text-center whitespace-nowrap flex items-center justify-center"
//                 style={{
//                   fontFamily: 'var(--font-futura-cyrillic)',
//                   fontWeight: 700,
//                   fontSize: 'clamp(14px, 1.68vh, 14px)',
//                   lineHeight: '100%',
//                   letterSpacing: '0.05em',
//                   textAlign: 'center',
//                   verticalAlign: 'middle',
//                   height: '50px',
//                   border: '2px solid #FFFFFF',
//                   borderRadius: '30px',
//                   paddingLeft: 'clamp(12px, 3.5vw, 40px)',
//                   paddingRight: 'clamp(12px, 3.5vw, 40px)'
//                 }}
//               >
//                 In the Past
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-row gap-5 pt-8 pb-16">
//             <a
//               href="mailto:team@boilermake.org"
//               className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
//               onMouseEnter={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = '0px 0px 15px #FFE958';
//               }}
//               onMouseLeave={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = 'none';
//               }}
//             >
//               <i className="fas fa-envelope" style={{ fontSize: '1.75em' }} />
//             </a>
//             <a
//               href="https://www.instagram.com/boilermake/?hl=en"
//               className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
//               onMouseEnter={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = '0px 0px 15px #FFE958';
//               }}
//               onMouseLeave={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = 'none';
//               }}
//             >
//               <i className="fab fa-instagram" style={{ fontSize: '1.75em' }} />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/boilermake/"
//               className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
//               onMouseEnter={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = '0px 0px 15px #FFE958';
//               }}
//               onMouseLeave={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = 'none';
//               }}
//             >
//               <i className="fab fa-linkedin" style={{ fontSize: '1.75em' }} />
//             </a>
//             <a
//               href="https://x.com/BoilerMake1"
//               className="text-[#FFDE00] hover:text-[#FFE958] transition duration-300 ease-in-out"
//               onMouseEnter={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = '0px 0px 15px #FFE958';
//               }}
//               onMouseLeave={(e) => {
//                 const target = e.currentTarget as HTMLElement;
//                 target.style.textShadow = 'none';
//               }}
//             >
//               <i className="fab fa-twitter" style={{ fontSize: '1.75em' }} />
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col z-0">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//             <path
//               fill="#fffbfaff"
//               fillOpacity="0.7"
//               d="M0,224L26.7,229.3C53.3,235,107,245,160,213.3C213.3,181,267,107,320,106.7C373.3,107,427,181,480,197.3C533.3,213,587,171,640,170.7C693.3,171,747,213,800,218.7C853.3,224,907,192,960,149.3C1013.3,107,1067,53,1120,32C1173.3,11,1227,21,1280,64C1333.3,107,1387,181,1413,218.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
//             ></path>
//           </svg>
          
//         </div>
//       </main>
//     </>
//   );
// }


/**
 * app/page.tsx
 * Home page — BoilerMake XIV coming soon
 * @DylanMiller
 * 7-22-2026
 */

import Image from "next/image";

export default function Home() {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        rel="stylesheet"
      />
      <main
        className="relative w-full overflow-x-hidden"
        style={{ backgroundColor: "#0d0618" }}
      >
        {/* Sky — mirror the 2027 background treatment */}
        <div
          className="pointer-events-none absolute z-[1]"
          aria-hidden
          style={{
            top: 0,
            bottom: 0,
            left: "-6%",
            width: "133%",
          }}
        >
          <Image
            src="/imagesbm14/landing/Background.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="select-none object-cover"
            style={{
              objectPosition: "50% 100%",
              transform: "translateY(-135px) translateX(0%) scaleX(1.35)",
              transformOrigin: "top right",
            }}
          />
        </div>

        {/* Sky breathing room — enough room for full buildings below */}
        <div className="relative z-[1]" style={{ height: "22vh" }} aria-hidden />

        {/* Mid buildings — slight overscale to kill edge gaps in the asset */}
        <div className="relative z-[3] w-full">
          <div
            className="relative z-[3] left-1/2"
            style={{ width: "103%", transform: "translate(-50%, -60px)" }}
          >
            <Image
              src="/imagesbm14/landing/Buildings.webp"
              alt=""
              width={1652}
              height={1080}
              priority
              sizes="100vw"
              className="w-full h-auto select-none block"
            />
          </div>

          {/*
            Billboard sits behind the buildings
          */}
          <div
            className="absolute left-1/2 z-[2] pointer-events-none"
            style={{
              bottom: "32%",
              width: "min(72vw, 2000px)",
              transform: "translate(-50%, -60px)",
            }}
          >
            <div className="relative w-full">
              <Image
                src="/imagesbm14/landing/Billboard Before.webp"
                alt=""
                width={905}
                height={578}
                priority
                className="w-full h-auto select-none"
              />
              <div
  className="absolute left-[7%] right-[7%] top-[7%] h-[43%] flex flex-col items-center justify-center text-center"
>
  <h1
    className="w-full"
    style={{
      fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
      fontWeight: 800,
      fontSize: "clamp(1.25rem, 6.2vw, 4rem)",
      lineHeight: 1,
      letterSpacing: "clamp(0.01em, 0.8vw, 0.04em)",
      color: "#1a1a1a",
      whiteSpace: "nowrap",
    }}
  >
    BOILERMAKE XIV
  </h1>

  <p
    style={{
      fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
      fontWeight: 500,
      fontSize: "clamp(0.5rem, 2.3vw, 1.05rem)",
      lineHeight: 1.1,
      color: "#1a1a1a",
      marginTop: "clamp(0.2rem, 1vw, 0.35em)",
      whiteSpace: "nowrap",
    }}
  >
    22-24 January 2026
  </p>
</div>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeExKZR9uEza6FShsE8-WIw1jtwXVZVbb77927ZJ0BLhHp3jQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 z-[5] inline-flex items-center justify-center cursor-pointer"
            style={{
              bottom: "50%",
              transform: "translate(-50%, -60px)",
              fontFamily: "var(--font-roboto-flex), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.8rem, 0.9vw, 0.8rem)",
              color: "#FFFFFF",
              background: "#5A8A4A",
              border: "2px solid #FFFFFF",
              borderRadius: "9999px",
              padding: "clamp(10px, 1.5vw, 14px) clamp(18px, 4vw, 32px)",
              boxShadow: "0 3px 0 rgba(0,0,0,0.18)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Interest Form
          </a>

          {/* Front ledge — overlaps bottom of mid buildings */}
          <div className="absolute inset-x-0 bottom-0 z-[8] w-full pointer-events-none">
            <Image
              src="/imagesbm14/landing/Front_Buildings.webp"
              alt=""
              width={1280}
              height={203}
              priority
              sizes="100vw"
              className="w-full h-auto select-none block"
            />
          </div>

          {/* Socials — overlay on front buildings */}
          <div className="absolute inset-x-0 bottom-0 z-[12] flex justify-center gap-5 sm:gap-6 pb-4 sm:pb-5">
            {[
              { href: "mailto:team@boilermake.org", label: "Email", icon: "fas fa-envelope" },
              { href: "https://www.instagram.com/boilermake/?hl=en", label: "Instagram", icon: "fab fa-instagram" },
              { href: "https://www.linkedin.com/company/boilermake/", label: "LinkedIn", icon: "fab fa-linkedin" },
              { href: "https://x.com/BoilerMake1", label: "X", icon: "fab fa-twitter" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="text-[#FFE958] hover:text-white transition duration-300"
                style={{ fontSize: "1.45em" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
