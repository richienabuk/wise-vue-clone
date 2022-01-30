const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Averta', 'Avenir W02', 'Avenir', ...defaultTheme.fontFamily.sans],
        serif: ['Averta', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: '#37517e',
        secondary: '#5d7079',
        accent: '#00b9ff',
        neutral: '#f2f5f7',
        'accent-hover': '#00a4df',
        'link-active': '#008ec0',
        'bd-neutral': '#e2e6e8',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          '2xl': '1400px',
        }
      },
      fontSize: {
        'xs': '.75rem',
        'tiny': '.875rem',
        'base': '1rem',
        'md': '1.25rem',
        'lg': '1.625rem',
        'xl': '2rem',
        'title-big': '2.625rem',
        'title-small': '1.75rem'
      },
      gridTemplateRows: {
        '1fr': '1fr',
        'auto-fr': 'auto 1fr',
      },
      gridTemplateColumns: {
        '1fr': '1fr',
        '1/2': '50% 50%',
        '1fr-min': '1fr min-content',
      },
      animation: {
        'spin-slow': 'pulsing-ring 1800ms cubic-bezier(.2,.6,.35,1) infinite',
      },
      keyframes: {
        'pulsing-ring': {
          '100%': { transform: 'translate(50%,50%) scale(1.5)', opacity:0 },
        }
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200p': '200% 200%',
        '16': '4rem',
      },
      backgroundPosition: {
        '00': '0 0',
      },
      height: {
        '100-16': 'calc(100% + 16px)',
      },
      boxShadow: {
        'flags': '0 0 1px 0 rgb(0 0 0 / 60%)',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1164px',
          },
        }
      })
    }
  ],
}
