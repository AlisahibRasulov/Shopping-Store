/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '575px'},

      '2xs': {'min': '576px' , 'max': '767px'},
    
      'sm': {'min': '768px', 'max': '991px'},

      'md': {'min': '992px', 'max': '1199px'},

      'lg': {'min': '1200px', 'max': '1399px'},

      'xl': {'min': '1400px', 'max': '1699px'},

      '2xl': {'min': '1700px'},
    },
  },
  plugins: [],
}