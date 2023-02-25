/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#eee8dd',
        spruce: '#2c3a26',
        moss: '#879365',
        sandstone: '#e8be7c',
        dawn: '#d7684a',
        charcoal: '#272323',
      }
    },
  },
  plugins: [],
}
