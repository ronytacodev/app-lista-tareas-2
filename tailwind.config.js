/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: "'Anton', serif",
        inter: "'Inter', serif",
      }
    },
  },
  plugins: [],
}
