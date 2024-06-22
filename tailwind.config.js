/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zenKaku: ['Zen Kaku Gothic Antique', 'sans-serif']
    },
    colors: {
      primary: "#FC6F0E"
    }
  },
  plugins: [],
}
}
