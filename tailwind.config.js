module.exports = {
  purge: [
    './src/**/*.html',
    './css/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  fontFamily: {
    body:['Poppins','sans-serif'],
  },
  variants: {
    fontWeight: '700',
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
