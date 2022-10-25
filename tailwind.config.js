/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html'],
  theme: {
    screens:{
      'xs':'450px',
      ...defaultTheme.screens,

    },

    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      borderRadius: {
        '-7.5': "0.53333rem",
        '4xl':'2.25rem'
      },
      colors: {

        'pri-col-but': '#007882',
        'pri-col':'#3B4144',

      },

      width:{
        '84.75':'21.1875rem',
        'flex-1/2':'48%',
        'flex-1/3':'30%'
      },
      lineHeight:{
        '4xl':'3rem',
      },
      padding:{
        '3/4':'75%',
        '65':'65%',
      },
      textOverflow:{
        'default':{
          'display':'-webkit-box',

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
