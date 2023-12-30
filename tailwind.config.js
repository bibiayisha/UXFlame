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
        'fs-11':'10px',
        'fs-12':'11px',
        'fs-13':'12px',
        'fs-14':'13px',
        'fs-16': '14px',
        'fs-18': '16px',
        'fs-20': '18px',
        'fs-22': '20px',
        'fs-24': '24px',
        'fs-27': '25px',
        'fs-34': '30px',
        'fs-120': '105px',
      },
      lineHeight: {
        'lh-32': '30px',
        'lh-16': '16px',
        'lh-21': '21px',
        'lh-43': '43px',
        'lh-24': '22px',
      },
      letterSpacing: {
        'ls-neg':'-0.84px',
        'ls-neg2':'-0.4px'
      }
    },
  },
  plugins: [],
}