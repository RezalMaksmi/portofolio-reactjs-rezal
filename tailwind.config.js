/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 2px 4px rgba(0, 0, 0, 0.25)'
      },
   
    },
  },
  plugins: [],
  darkMode: 'class',
}

