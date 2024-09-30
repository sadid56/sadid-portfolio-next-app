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
        outfit:["Outfit", "sans-serif"],
        poppins:["Poppins", "sans-serif"],
      },
      colors:{
        primary: "#03e9f4",
        secondary: "#FFBE7B",
        mainBgColor: "#010610"
      },
      "animation": {
            shimmer: "shimmer 5s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
    },
  },
  plugins: [],
};
export default config;
