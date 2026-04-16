/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── BRAND (kept) ───────────────────────────────
        'burnt-orange': '#FF6B2C',
        'deep-orange': '#E85D04',
        'navy-blue': '#0A1628',
        'dark-navy': '#060d1a',
        'navy': '#1a2947',
        'light-navy': '#243352',

        // ── ACCENT (new, sparing use) ──────────────────
        'sky-gold': '#F5C842',

        // ── WARM NEUTRALS (existing) ───────────────────
        'cream': '#F5EFE6',
        'light-cream': '#FBF8F3',

        // Slate scale: uses Tailwind default (slate-50 → slate-900 identical values)

        // ── LEGACY (still used in some places) ─────────
        'dark-green': '#0D5C3B',
        'forest-green': '#084225',
        'teal': '#2D9CDB',
        'light-teal': '#56CCF2',
        'charcoal': '#2C3333',
        'warm-gray': '#52575D',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // ── TYPOGRAPHY SCALE ───────────────────────────
        'eyebrow': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em', fontWeight: '700' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5rem' }],
        'body-md': ['1rem', { lineHeight: '1.625rem' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '2.5rem', fontWeight: '700', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.5rem', { lineHeight: '3rem', fontWeight: '700', letterSpacing: '-0.015em' }],
        'display-sm': ['3rem', { lineHeight: '3.25rem', fontWeight: '800', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '4rem', fontWeight: '800', letterSpacing: '-0.025em' }],
        'display-lg': ['4.5rem', { lineHeight: '4.75rem', fontWeight: '800', letterSpacing: '-0.03em' }],
        'display-xl': ['5.5rem', { lineHeight: '5.5rem', fontWeight: '800', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        'button': '0.5rem',  // 8px — NOT pill
        'card': '0.75rem',   // 12px
        'feature': '1rem',   // 16px — larger feature cards
      },
      boxShadow: {
        'premium': '0 4px 24px -4px rgba(10, 22, 40, 0.08), 0 1px 3px rgba(10, 22, 40, 0.04)',
        'premium-lg': '0 12px 40px -8px rgba(10, 22, 40, 0.12), 0 2px 6px rgba(10, 22, 40, 0.06)',
        'premium-hover': '0 20px 50px -12px rgba(10, 22, 40, 0.18), 0 4px 12px rgba(10, 22, 40, 0.08)',
        'premium-navy': '0 12px 40px -12px rgba(255, 107, 44, 0.25)',
      },
      spacing: {
        'section-tight': '4rem',    // 64px
        'section': '6rem',          // 96px
        'section-feature': '8rem',  // 128px
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
