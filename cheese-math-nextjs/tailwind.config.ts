import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            50: "#FFF4E6",
            100: "#FFE8CC",
            200: "#FFD199",
            300: "#FFB966",
            400: "#FFA233",
            500: "#FF8B00",
            600: "#CC6F00",
            700: "#995300",
            800: "#663800",
            900: "#331C00",
            DEFAULT: "#FF8B00",
            foreground: "#FFFFFF",
          },
          secondary: {
            50: "#FFF0F0",
            100: "#FFE0E0",
            200: "#FFC2C2",
            300: "#FFA3A3",
            400: "#FF8585",
            500: "#FF6666",
            600: "#CC5252",
            700: "#993D3D",
            800: "#662929",
            900: "#331414",
            DEFAULT: "#FF6666",
            foreground: "#FFFFFF",
          },
        },
      },
      dark: {
        colors: {
          background: "#0A0A0A",
          foreground: "#ECEDEE",
          primary: {
            50: "#331C00",
            100: "#663800",
            200: "#995300",
            300: "#CC6F00",
            400: "#FF8B00",
            500: "#FFA233",
            600: "#FFB966",
            700: "#FFD199",
            800: "#FFE8CC",
            900: "#FFF4E6",
            DEFAULT: "#FFA233",
            foreground: "#000000",
          },
          secondary: {
            50: "#331414",
            100: "#662929",
            200: "#993D3D",
            300: "#CC5252",
            400: "#FF6666",
            500: "#FF8585",
            600: "#FFA3A3",
            700: "#FFC2C2",
            800: "#FFE0E0",
            900: "#FFF0F0",
            DEFAULT: "#FF8585",
            foreground: "#000000",
          },
        },
      },
    },
  })],
};

export default config;
