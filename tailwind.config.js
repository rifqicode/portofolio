module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: '#0e1416',
        surface: '#0e1416',
        'surface-lowest': '#090f11',
        'surface-low': '#171d1e',
        'surface-container': '#1b2122',
        'surface-high': '#252b2d',
        'surface-highest': '#303638',
        'on-surface': '#dee3e6',
        'on-surface-variant': '#bcc9cd',
        primary: '#4cd7f6',
        'primary-container': '#06b6d4',
        'primary-fixed': '#acedff',
        secondary: '#4edea3',
        tertiary: '#c0c1ff',
        outline: '#869397',
        'outline-variant': '#3d494c',
        error: '#ff8a80',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        terminal: '0 18px 70px rgba(0, 0, 0, 0.35)',
        glow: '0 0 15px rgba(76, 215, 246, 0.2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
