/**
 * AboutSectionBM14.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @ayushkogta
 * 06-26-2026
 */

import React from "react";
 
export default function AboutSection() {
  return (
    // left-1/2 + -translate-x-1/2 centers the band on the (centered) section,
    // so w-screen spans the full viewport instead of starting at the section's edge
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen overflow-visible flex items-center justify-center"
      style={{ background: " #3B344B", }}
    >
 
      {/* Decorative sticker strips. top/left/height are calibrated so the bricks
          baked into the PNGs land above the title and below the card. */}
      <img
        src="/imagesbm14/about/bm-left.png"
        alt=""
        className="hidden sm:block absolute pointer-events-none select-none z-[1]"
        style={{
          left: "clamp(-55px, -6vw, -20px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(200px, 40vw, 500px)",
          height: "auto",
          maxHeight: "120vh",
        }}
      />
      <img
        src="/imagesbm14/about/bm-right.png"
        alt=""
        className="hidden sm:block absolute pointer-events-none select-none z-[1]"
        style={{
          right: "clamp(-55px, -6vw, -20px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(200px, 40vw, 400px)",
          height: "auto",
          maxHeight: "120vh",

        }}
      />
 
      <div className="relative z-[2] w-full max-w-[1180px] px-5 flex flex-col items-center gap-7">
        <img
          src="/imagesbm14/about/about-graffiti.png"
          alt="About"
          className="select-none pointer-events-none"
          style={{
            width: "clamp(220px, 20vw, 520px)",
            height: "auto",
            aspectRatio: "1940 / 840",
          }}
        />
 
        <div
          className="w-full border-[3px] border-white rounded-[34px] backdrop-blur-sm p-8 sm:p-10 md:p-12 lg:p-14"
          style={{
            backgroundColor: "rgba(26, 23, 34, 0.42)",
            minHeight: "200px",
          }}
        >
          <p
            className="text-white"
            style={{
              fontFamily: "var(--font-code-pro)",
              fontWeight: 700,
              fontSize: "clamp(1rem, 1.7vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            BoilerMake is Purdue University's premier hackathon, bringing together
            over 500 students from numerous universities and majors to compete in
            36 hours of hacking for $4000+ in prizes. Designed for hackers of all
            levels, BoilerMake provides unique and valuable experiences regardless
            of skill level -- you can participate in fun activities, win cool
            prizes, get free swag and food, and most importantly, have a whole lot
            of fun!
          </p>
          <p
            className="text-white mt-6"
            style={{
              fontFamily: "var(--font-code-pro)",
              fontWeight: 700,
              fontSize: "clamp(1rem, 1.7vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            It's also a great opportunity to network with large companies in
            industry and develop new skills. BoilerMake XIV will take place
            January 22-24, 2027. BoilerMake is also an MLH partner meaning we
            adhere to their Code of Conduct.
          </p>
          <a
            href="https://hackp.ac/coc"
            target="_blank"
            className="inline-block mt-6 underline text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
            style={{ fontFamily: "var(--font-code-pro)", fontWeight: 700 }}
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </div>
  );
}