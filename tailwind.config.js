/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#084225',
        'peach': '#F9DEA7',
        'alabaster': '#EEEEDD',
        'burnt-orange': '#CC4F00',
        'jet-black': '#3A3839',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
