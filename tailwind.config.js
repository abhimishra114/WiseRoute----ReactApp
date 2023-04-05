/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-main-blue" : "#011949",
        "banner-blue-left" : "#010449",
        "banner-blue-right" : "#30B3EF",
        "dark-gray" : "#CFD9DF",
        "fade-gray" : "rgba(207, 217, 223, 0.23)"
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'alkatra' : ['Alkatra', 'cursive']
      },
      screens: {
        'sm': '480px', // phone
        'md': '768px', // tablet
        'lg': '1100px',// laptop
        'xl': '1440px' // desktop
      },
      container : {
        center : true,
      },
      height : {
        "100" : "500px"
      },
    },
  },
  plugins: [],
}