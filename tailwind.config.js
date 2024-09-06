/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./fonts.css",],
  theme: {
    screens:{
      sm:'768px',
    },
    extend: {
      colors:{
        color1: '#353c44',
        color2: '#171717',
        color3: '#28292e',
        text: '#a3adb2',
        color4: '#969696',
      },
      width:{
        '720': '720px',
        '614': '614px',
        '765': '765px',
      },
      height:{
        '316': '316px',
        '330': '330px',
        '62': '62px',
      },
      padding:{
        '26': '108px',
        '17': '70px',
      },
      margin:{
        '17': '70px',
        '100': '-40px',
        '8': '46px'
      },
      border:{
        '56': '56px'
      },
      fontFamily:{
       abc:['Plus Jakarta Sans', 'sans-serif'],
      },
      gap:{
        '6':'22px'
      },
      fontSize:{
        'fsize': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};

