/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0D5C3B',
        'forest-green': '#084225',
        'teal': '#2D9CDB',
        'light-teal': '#56CCF2',
        'cream': '#F5EFE6',
        'light-cream': '#FBF8F3',
        'burnt-orange': '#E85D04',
        'deep-orange': '#CC4F00',
        'charcoal': '#2C3333',
        'warm-gray': '#52575D',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
