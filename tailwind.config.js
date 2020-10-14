module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#e8927c',
          dark: '#d1836f'
        },
        secondary: {
          default: '#fbece8',
          dark: '#f2dbd5'
        },
        success: {
          default: '#24cb99',
          dark: '#21b186'
        },
        blueForm: {
          default: '#4299e1',
          dark: '#2c7dbf'
        }
      },
    },
    fill: theme => theme('colors')
  },
  variants: {},
  plugins: [],
}
