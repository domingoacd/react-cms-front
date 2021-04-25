module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary' : '#503E9D',
        'primary-light': '#AFA2EB',
        'primary-dark': '#40327D',
        'secondary': '#FF1E1E',
        'secondary-light': '#EB6363',
        'secondary-dark': '#9E1313',
        'white-tone': '#F7F7F7',
        'main-bg': '#F2F2F2',
        'sidebar-bg': '#F8F8F8',
        'text': '#626264',
        'text-dark': '#182135',
        'text-light': '#878787',
        'icon-color': '#000000'
      },

      fontFamily: {
        'normal': "'Karla', sans-serif",
        'title': "'Spectral', serif;"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
