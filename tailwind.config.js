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
        disabledColor: "#E1DFE9",
      },
      backgroundImage: {
        "hero-pattern": "url('assets/bg-hero.png')",
        proker1: "url('assets/proker1.png')",
        proker2: "url('assets/proker2.png')",
      },
      height: {
        24: "6rem",
      },
    },
  },
  plugins: [],
};
