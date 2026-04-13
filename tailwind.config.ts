import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ─── Colour System ───────────────────────────────────────────────── */
      colors: {
        // Brand core
        "primary":                '#0A1F14',
        "primary-container":      '#1A2F24',
        "mid-green":              '#244233',

        // Accent — warm gold
        "tertiary":               '#966F2D',
        "tertiary-container":     '#B88A44',
        "tertiary-fixed":         '#E5C996',
        "tertiary-fixed-dim":     '#CFA861',

        // Secondary — brown range
        "secondary":              '#6F5730',
        "secondary-container":    '#E7D1AC',
        "secondary-fixed":        '#E5C996',
        "secondary-fixed-dim":    '#C7A56D',

        // Surfaces
        "surface":                '#F5F1E8',
        "surface-dim":            '#EBE7DF',
        "surface-bright":         '#FAF8F3',
        "background":             '#F5F1E8',
        "surface-container-lowest": '#FFFFFF',
        "surface-container-low":  '#F0ECE4',
        "surface-container":      '#EBE7DF',
        "surface-container-high": '#E5E1DA',
        "surface-container-highest": '#DFDBD4',
        "surface-variant":        '#E5E2DD',

        // On- / Text colours
        "on-background":          '#1A1E1B',
        "on-surface":             '#1A1E1B',
        "on-surface-variant":     '#4A5249',
        "on-primary":             '#FFFFFF',
        "on-secondary":           '#FFFFFF',
        "on-tertiary":            '#FFFFFF',
        "on-primary-container":   '#84A496',
        "on-secondary-container": '#6A4F1E',
        "on-tertiary-container":  '#3D2A10',
        "on-primary-fixed":       '#00140E',
        "on-secondary-fixed":     '#241A00',
        "on-tertiary-fixed":      '#2B1D0A',
        "on-primary-fixed-variant": '#2F4D41',
        "on-secondary-fixed-variant": '#5F4920',
        "on-tertiary-fixed-variant": '#5F4920',
        "on-error":               '#FFFFFF',
        "on-error-container":     '#93000A',

        // Utility / decorative
        "outline":                '#727974',
        "outline-variant":        '#C1C8C3',
        "surface-tint":           '#2D6349',
        "inverse-surface":        '#31302D',
        "inverse-primary":        '#ADCEBE',
        "inverse-on-surface":     '#F3F0EB',
        "primary-fixed":          '#C8EADA',
        "primary-fixed-dim":      '#ADCEBE',

        // Status
        "error":                  '#BA1A1A',
        "error-container":        '#FFDAD6',
      },

      /* ─── Typography ──────────────────────────────────────────────────── */
      fontFamily: {
        display:  ['var(--font-display)', 'Cormorant', 'serif'],
        headline: ['var(--font-sans-ui)', 'Instrument Sans', 'sans-serif'],
        body:     ['var(--font-sans-ui)', 'Instrument Sans', 'sans-serif'],
        label:    ['var(--font-sans-ui)', 'Instrument Sans', 'sans-serif'],
      },

      /* ─── Border Radius ───────────────────────────────────────────────── */
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },

      /* ─── Shadows ─────────────────────────────────────────────────────── */
      boxShadow: {
        'card':       '0 1px 3px rgba(10,31,19,0.04), 0 6px 16px rgba(10,31,19,0.06)',
        'card-hover': '0 4px 12px rgba(10,31,19,0.08), 0 20px 48px rgba(10,31,19,0.10)',
        'elevated':   '0 8px 30px rgba(10,31,19,0.12)',
        'hero':       '0 24px 80px rgba(10,31,19,0.20)',
        'glow-gold':  '0 0 32px rgba(184,138,68,0.25)',
      },

      /* ─── Keyframes & Animations ──────────────────────────────────────── */
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to:   { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to:   { height: '0', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'accordion-down':  'accordion-down 0.3s ease-out',
        'accordion-up':    'accordion-up 0.2s ease-out',
        'fade-up':         'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':         'fade-in 0.4s ease-out forwards',
        'slide-in-right':  'slide-in-right 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'bounce-subtle':   'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
