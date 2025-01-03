/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        scrollbar: {
          track: "#1F2937", // gray-800
          thumb: "#4B5563", // gray-600
          hover: "#6B7280", // gray-500
        },
      },
    },
  },
  plugins: [],
};
