/** @type {import('tailwindcss').Config} */

import relumeTailwindPreset from "@relume_io/relume-tailwind";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [relumeTailwindPreset],
};
