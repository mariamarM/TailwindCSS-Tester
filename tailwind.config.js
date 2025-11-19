/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./part*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: false,
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: '#6366f1', // Formato simple hexadecimal
        // O si quieres variantes:
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff', 
          500: '#6366f1',
          600: '#4f46e5',
          900: '#312e81',
          DEFAULT: '#6366f1',
          dark: '#4f46e5'
        }
      },
    },
  },
  plugins: [],
};