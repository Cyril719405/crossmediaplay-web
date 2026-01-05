/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#F57C00',
          light: '#FF9800',
          dark: '#E65100',
        },
        charcoal: {
          DEFAULT: '#3d3d3d',
          light: '#4a4a4a',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          section: '#111111',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
