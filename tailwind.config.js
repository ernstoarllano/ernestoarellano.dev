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
        spotify: '#1ed760',
        php: '#787cb5',
        react: '#61dBfb',
        gatsby: '#639',
        typescript: '#3178c6',
        javascript: '#f7df1e',
        graphql: '#e535ab',
        tailwind: '#07b6d5',
        sanity: '#f04939',
        strapi: '#8e75ff',
        wordpress: '#00749c'
      },
      backgroundColor: {
        night: '#151515',
        dusk: '#202022',
        day: '#f5ffff',
        dawn: '#949495'
      },
      opacity: {
        important: '1 !important',
      }
    },
  },
  plugins: [],
}
