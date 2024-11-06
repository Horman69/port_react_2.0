/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Включаем поддержку темной темы
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1A',
        'secondary': '#242424',
        'accent': '#3A3A3A',
      },
      gridTemplateColumns: {
        'widgets': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}