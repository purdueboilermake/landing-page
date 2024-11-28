import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['var(--font-dosis)'],
        'averia-libre': ['var(--font-averia-libre)'],
        arvo: ['var(--font-arvo)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 120s linear infinite',
        'fade-on-load': 'fade-in 10s ease-in-out',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
