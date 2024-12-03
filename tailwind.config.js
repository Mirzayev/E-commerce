/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'nav-bg':  'rgba(255, 255, 255, 0.7)'
      }
    },
  },
  plugins: [],
}