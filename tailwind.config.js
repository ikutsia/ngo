/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e74c3c',
          dark: '#c0392b',
        },
        secondary: {
          DEFAULT: '#2c3e50',
          light: '#34495e',
        },
        gray: {
          light: '#f8f9fa',
          text: '#7f8c8d',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

