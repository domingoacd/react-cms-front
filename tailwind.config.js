const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white-tone': '#F7F7F7',
        'base-text': '#626264',
        'text-dark': '#182135',
        'text-light': '#878787',
        'primary' : '#503E9D',
        'primary-light': '#AFA2EB',
        'primary-lighter': '#E1DFE9', 
        'primary-dark': '#40327D',
        'secondary': '#FF1E1E',
        'secondary-light': '#EB6363',
        'secondary-dark': '#9E1313',
        'main-bg': '#F2F2F2',
        'sidebar-bg': '#F8F8F8',
        'icon-color': '#000000'
      },

      fontFamily: {
        'normal': "'Karla', sans-serif",
        'title': "'Spectral', serif;"
      },

      minWidth: {
        '19r': '19rem'
      },

      width: {
        '30%': '30%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-2': {
          '-webkit-line-clamp': '2'
        }
      };
      
      addUtilities(newUtilities)
    })
  ],
}
