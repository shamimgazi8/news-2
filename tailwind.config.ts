import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#FE0000",
        white: "#fff",
        secondary: "#1D1D1B",
        tertiary: "#EA0519",
        grey: "#F4F7FF",
        black: "#000",
        hover: "#be1622",
        heading: "#4B4B4B",
        body: "#575757",
      },
      fontSize: {
        headerLg: "56px",
      },
    },
  },
  plugins: [],
};
export default config;
