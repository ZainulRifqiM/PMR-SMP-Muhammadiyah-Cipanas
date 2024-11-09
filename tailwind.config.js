/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B41B04",
        secondary: "#2597A7",
        textColor: "#565360",
        labelColor: "#908E9B",
      },
      backgroundImage: {
        "hero-pattern": "url('assets/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
