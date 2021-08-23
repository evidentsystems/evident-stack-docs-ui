const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  mode: 'jit',
  purge: ['**/*.hbs'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-1': '#002B36',
        'dark-2': '#073642',
        'body-1': '#586E75',
        'body-2': '#657B83',
        'body-3': '#839496',
        'body-4': '#93A1A1',
        'body-5': '#CCCCCC',
        'body-6': '#333333',
        'primary': '#FB8C3A',
        'secondary': '#2FB6E1',
        'secondary-red': '#E15B2F',
        'border-light': '#E6E6E6',
        'border-dark': '#586E75',
        'gradient': '#93A1A1'
      }  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

