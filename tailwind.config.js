/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        gloock: 'Gloock',
        pacifico: 'Pacifico',
        romono: 'Roboto+Mono',
      }
    },
    minWidth: {
      '72': '18rem',
    }
  },
  plugins: [],

}
