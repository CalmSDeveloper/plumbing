/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        tonyRed: '#ef4444',
        tonyBlue: '#2563eb',
        tonyOrange: '#f97316',
        tonyDark: '#0f172a'
      }
    }
  },
  plugins: [],
}
