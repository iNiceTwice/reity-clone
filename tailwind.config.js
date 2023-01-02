/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#509999",
        secondary:"#F36B21",
        dark:"#1A1919"
      },
      fontFamily:{
        montserrat:["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [],
}
