import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: '#011632',
        midBlue: '#BBBBBB',
        skyBlue:'#25B4F8',
        lightBlue: '#E6F6FE',
        secondaryColor:'#FFFFFF',
        bodyText:'#3C4959',
        success: '#17BF28',
        warning:'#EC942C',
        error:'#E52323'

      },
      screens: {
        'lg-laptop': '992px', // Large Laptops
        'hd-tv': '1280px', // HD Screens
        'full-hd': '1920px', // Full HD
        '4k': '3840px', // 4K Displays
      },
     
    },
  },
  plugins: [],
};
export default config;
