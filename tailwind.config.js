/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#2E3239',
  white: twColors.white,
  primary: '#FF9902',
  secondary: '#161D25',
  "bg-color": '#F2F2F5',
  aqua: '#268697'
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
    keyframes: {
      animationOpacity: {
        from: { opacity: 0.2 },
        to: { opacity: 1 }
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)'
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)'
        },
      }
    }
  },
  plugins: [],
}
