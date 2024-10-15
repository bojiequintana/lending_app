import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "sunset", "luxury", "pastel"],
  },
} satisfies Config;
