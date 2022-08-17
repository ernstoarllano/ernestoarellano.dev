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
        sand: '#eee8dd',
        spruce: '#2c3a26',
        moss: '#879365',
        sandstone: '#e8be7c',
        dawn: '#d7684a',
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
      opacity: {
        important: '1 !important',
      }
    },
  },
  plugins: [],
}
