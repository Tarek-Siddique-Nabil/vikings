/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f6",
      },
      fontFamily: {
        Hanson: ["Hanson Bold", "sans-serif"],
        HappyMonkey: ["Happy Monkey", "cursive"],
        MonumentExtendedUltrabold: [
          "Monument Extended Ultrabold",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
