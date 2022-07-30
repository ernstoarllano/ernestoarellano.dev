/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        night: '#151515',
        dusk: '#202022',
        day: '#f5ffff',
        dawn: '#949495',
        spotify: '#1ed760'
      },
      backgroundColor: {
        night: '#151515',
        dusk: '#202022',
        day: '#f5ffff',
        dawn: '#949495'
      }
    },
  },
  plugins: [],
}
