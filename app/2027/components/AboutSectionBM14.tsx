/**
 * AboutSectionBM14.tsx
 * Component will be used to show the about section on the landing page, with the title 'About' and a description of boilermake.
 * @ayushkogta
 * Updated for BoilerMake XIV responsiveness and typography
 */

import React from "react";

/**
 * =========================================================================
 * MANUAL TUNING KNOBS FOR BM-LEFT & BM-RIGHT ASSETS:
 * - width: controls asset size (min, scalable vw, max)
 * - left / right: anchored directly to the left and right edges of the screen.
 *     Negative values push the asset outwards past the screen edge so that
 *     some parts are hidden/cut off.
 *     - More negative (e.g. -140px / -8vw) = MORE of the sticker is hidden off-screen.
 *     - Less negative (e.g. -40px / -2vw) = LESS of the sticker is hidden off-screen.
 *     - 0px = touches the exact screen edge without being hidden.
 * - top: vertical alignment ("50%" with translateY(-50%) centers it with the card)
 * - transform: fine-tuning shift or rotation
 * =========================================================================
 */
export const BM_ASSET_TUNING = {
  left: {
    // Scales responsively from mobile phones (~180px) up to desktop (650px)
    width: "clamp(180px, 34vw, 650px)",
    // Pinned to left screen edge; negative value bleeds outward so parts are hidden
    left: "clamp(-200px, -10vw, -40px)",
    top: "50%",
    transform: "translateY(-40%)",
  },
  right: {
    // Scales responsively from mobile phones (~180px) up to desktop (650px)
    width: "clamp(180px, 34vw, 650px)",
    // Pinned to right screen edge; negative value bleeds outward so parts are hidden
    right: "clamp(-200px, -12vw, -40px)",
    top: "50%",
    transform: "translateY(-35%)",
  },
};

export default function AboutSection() {
  return (
    // Full viewport width container so left/right: 0 anchor directly to screen edges
    <div className="relative w-full py-6 sm:py-10 flex items-center justify-center overflow-visible">
      {/* Decorative sticker strip - LEFT (hidden on mobile phones, visible on sm+ screens) */}
      <img
        src="/imagesbm14/about/bm-left.png"
        alt=""
        className="hidden sm:block absolute pointer-events-none select-none z-[1]"
        style={{
          left: BM_ASSET_TUNING.left.left,
          top: BM_ASSET_TUNING.left.top,
          transform: BM_ASSET_TUNING.left.transform,
          width: BM_ASSET_TUNING.left.width,
          height: "auto",
          aspectRatio: "712 / 1372",
          objectFit: "contain",
        }}
      />

      {/* Decorative sticker strip - RIGHT (hidden on mobile phones, visible on sm+ screens) */}
      <img
        src="/imagesbm14/about/bm-right.png"
        alt=""
        className="hidden sm:block absolute pointer-events-none select-none z-[1]"
        style={{
          right: BM_ASSET_TUNING.right.right,
          top: BM_ASSET_TUNING.right.top,
          transform: BM_ASSET_TUNING.right.transform,
          width: BM_ASSET_TUNING.right.width,
          height: "auto",
          aspectRatio: "718 / 1544",
          objectFit: "contain",
        }}
      />

      {/* Main About Card Container */}
      <div className="relative z-[2] w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
        <div
          className="w-full border-[3px] border-white rounded-[34px] backdrop-blur-sm p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col items-center"
          style={{
            backgroundColor: "rgba(26, 23, 34, 0.42)",
            minHeight: "200px",
          }}
        >
          {/* Section Title INSIDE card: Yellow #fee740 with Orange #de7b14 non-blurry solid shadow */}
          <h2
            className="text-center mb-6 sm:mb-8 select-none tracking-wider"
            style={{
              fontFamily: "var(--font-owned), var(--font-sprite-graffiti), sans-serif",
              color: "#fee740",
              textShadow: "4px 4px 0 #de7b14",
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 1.1,
            }}
          >
            ABOUT
          </h2>

          <p
            className="text-white text-left w-full"
            style={{
              fontFamily: "var(--font-code-pro)",
              fontWeight: 700,
              fontSize: "clamp(0.95rem, 1.15vw, 1.25rem)",
              lineHeight: 1.6,
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
            className="text-white mt-6 text-left w-full"
            style={{
              fontFamily: "var(--font-code-pro)",
              fontWeight: 700,
              fontSize: "clamp(0.95rem, 1.15vw, 1.25rem)",
              lineHeight: 1.6,
            }}
          >
            It's also a great opportunity to network with large companies in
            industry and develop new skills. BoilerMake XIV will take place
            January 22-24, 2027. BoilerMake is also an MLH partner meaning we
            adhere to their Code of Conduct.
          </p>
          <div className="w-full text-left">
            <a
              href="https://hackp.ac/coc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 underline text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-code-pro)", fontWeight: 700 }}
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}