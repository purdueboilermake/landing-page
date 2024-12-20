import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

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
        'infinite-scroll-right': 'infinite-scroll-right 120s linear infinite',
        'fade-on-load': 'fade-in 10s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'fade-in': {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      textShadow: {
        sm: '0 0 0.5rem var(--tw-shadow-color)',
        DEFAULT: '0 0 1rem var(--tw-shadow-color)',
        lg: '0 0 2rem var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
