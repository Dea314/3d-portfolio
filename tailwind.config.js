/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#c5cfd8",
        coral: "#fc766a",
        /* tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3", */
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "party-pattern": "url('/src/assets/partybg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
