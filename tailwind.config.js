/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        papaya: "#FDF0D5",

        magenta1: "#D81E5B",

        orange1: "#F0544F",

        black1: "#3a3335",

        ashgray: "#C6D8D3"
      }
},
   
  },
  plugins: [],
}