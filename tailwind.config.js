/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-orbitron)', 'sans-serif'],
        secondary: ['var(--font-rajdhani)', 'sans-serif'],
        tertiary: ['var(--font-aldrich)', 'sans-serif'],
        kufi: ['var(--font-kufi)', 'sans-serif'],
      },
      colors: {
        primary: '#1a1816',
        accent: {
          DEFAULT: '#c9b8a3',
          secondary: '#a89580',
          tertiary: '#d4c4b0',
          hover: '#e8dcc8',
          active: '#9a8570',
        },
        border: {
          primary: 'rgba(201, 184, 163, 0.15)',
          secondary: 'rgba(201, 184, 163, 0.08)',
          accent: 'rgba(201, 184, 163, 0.35)',
        },
        text: {
          primary: '#f5f1ed',
          secondary: '#d4cfc9',
          muted: '#9a9389',
          disabled: '#6b6560',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #c9b8a3 0%, #a89580 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #a89580 0%, #c9b8a3 100%)',
        'gradient-accent': 'linear-gradient(90deg, #c9b8a3 0%, #d4c4b0 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(201, 184, 163, 0.1) 0%, rgba(168, 149, 128, 0.1) 100%)',
        'gradient-mesh': `
          radial-gradient(at 0% 0%, rgba(201, 184, 163, 0.12) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(168, 149, 128, 0.12) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(212, 196, 176, 0.12) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(201, 184, 163, 0.12) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        'glow': '0 0 40px rgba(201, 184, 163, 0.2)',
        'glow-intense': '0 0 60px rgba(201, 184, 163, 0.35)',
        'glow-sm': '0 0 20px rgba(201, 184, 163, 0.15)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
        slower: '500ms',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 20px rgba(201, 184, 163, 0.2)' },
          'to': { boxShadow: '0 0 40px rgba(201, 184, 163, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
