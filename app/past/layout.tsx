import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BoilerMake In The Past | BoilerMake XIV",
  description:
    "Explore past BoilerMake hackathons, sponsor history, and community achievements.",
};

export default function PastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        rel="stylesheet"
      />

      {/* Header — Logo only linking back home */}
      <header
        className="w-full fixed top-0 z-50 transition-all duration-200 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)",
        }}
      >
        <div className="relative flex items-center h-16 px-6 sm:px-8">
          <a
            href="/"
            className="pointer-events-auto absolute left-6 top-4 hover:scale-105 transition"
            aria-label="BoilerMake XIV Home"
          >
            <Image
              src="/imagesbm14/logo_bm14_hammers_only.svg"
              alt="BoilerMake Logo"
              width={64}
              height={56}
              priority
              className="w-10 sm:w-12 md:w-14 h-auto"
            />
          </a>
        </div>
      </header>

      {children}
    </>
  );
}
