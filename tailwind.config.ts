import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bug: "#92BC2C",
        Darkness: "#595761",
        dragon: "#0C69C8",
        Lightning: "#F2D94E",
        fairy: "#EE90E6",
        fighting: "#D3425F",
        fire: "#FBA54C",
        flying: "#A1BBEC",
        ghost: "#5F6DBC",
        grass: "#5FBD58",
        ground: "#DA7C4D",
        ice: "#75D0C1",
        Colorless: "#A0A29F",
        poison: "#B763CF",
        psychic: "#FA8581",
        rock: "#C9BB8A",
        Metal: "#5695A3",
        water: "#539DDF",
      },
    },
  },
  plugins: [],
};
export default config;
