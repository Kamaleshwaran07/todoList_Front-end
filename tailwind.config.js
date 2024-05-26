/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red1: "#E5285C",

        red2: "#FF3364",

        pink1: "#FF97B0",

        pink2: "#FFCBD7",

        black1: "#1E1E1E",

        grey1: "#8D8D8D",

        grey2: "#BABABA"
      }
},
   
  },
  plugins: [],
}