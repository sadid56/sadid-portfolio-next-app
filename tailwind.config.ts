import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu:["Outfit", "sans-serif"]
      },
      colors:{
        primary: "#03e9f4",
        secondary: "#FFBE7B"
      },
    },
  },
  plugins: [],
};
export default config;
