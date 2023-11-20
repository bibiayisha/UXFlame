/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'orange': '#FB8045',
        'gray': '#767588',
        'darkBlue': '#1B1B29',
        'offBlue': '#29293D',
        'red': '#FF3D54',
      },
      fontSize: {
        'fs-13':'12px',
        'fs-14':'14px',
        'fs-16': '14px',
        'fs-18': '16px',
        'fs-22': '22px',
        'fs-24': '24px',
      },
      lineHeight: {
        'lh-32': '30px',
        'lh-16px': '16px'
      }
    },
  },
  plugins: [],
}