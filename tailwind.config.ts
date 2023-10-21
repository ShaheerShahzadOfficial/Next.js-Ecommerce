import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui"), "prettier-plugin-tailwindcss"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f20920",

          secondary: "#cfccff",

          accent: "#0f5ead",

          neutral: "#161723",

          "base-100": "#f1f3f9",

          info: "#94b9e5",

          success: "#6be6d5",

          warning: "#f9ab1a",

          error: "#e53864",
        },
      },
    ],
  },
};
export default config;
