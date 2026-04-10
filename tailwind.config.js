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
        'burnt-orange': '#C04500',
        'deep-orange': '#A83C00',
        // Bright accent for text-on-dark — passes WCAG against navy/gray-800 only.
        // Do NOT use as a background with white text — use burnt-orange for that.
        'bright-orange': '#FF6B2C',
        'charcoal': '#2C3333',
        'warm-gray': '#52575D',
        'light-gray': '#E8E8E8',
        'navy-blue': '#0A1628',
        'dark-navy': '#060d1a',
        'navy': '#1a2947',
        'light-navy': '#243352',
      },
      fontFamily: {
        // System font stack — no network request, no font-loading CLS.
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
