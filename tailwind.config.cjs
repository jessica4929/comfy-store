/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mynight: {
          primary: "#6d0076",
          secondary: "#38bdf8",
          accent: "#ff8900",
          neutral: "#192232",
          "base-100": "#0f172a",
        },
      },
      "fantasy",
      "night",
    ],
  },
};
