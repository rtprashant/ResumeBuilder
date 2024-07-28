/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        spaceGrotesk : ["Space Grotesk","sans-serif"],
        dmSerif :["DM Serif Display", "serif"],
        staatliches :["Staatliches", "sans-serif"]
      }
    },
  },
  plugins: [],
}