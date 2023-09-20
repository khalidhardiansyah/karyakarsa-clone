/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff5569',
        secondary: '#4a4a4a',
        ternary:'#f5f5f5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}