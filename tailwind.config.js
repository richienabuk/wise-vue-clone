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
