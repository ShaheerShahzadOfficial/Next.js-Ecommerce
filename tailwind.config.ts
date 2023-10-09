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
          primary: "#d3399a",

          secondary: "#ed6c6a",

          accent: "#3ae066",

          neutral: "#33253c",

          "base-100": "#e7e1ea",

          info: "#9ad4f9",

          success: "#136359",

          warning: "#ed970c",

          error: "#f46696",
        },
      },
    ],
  },
};
export default config;
