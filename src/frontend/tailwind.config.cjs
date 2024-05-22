/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  active: {
    extend: {
      colors: {
        main: '#17151C',
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        innerBorder: 'inset 0 0 0 1px #06c',
      },
      colors: {
        main: '#FFFFFF',
        ascent: '#f5f5f7',
        links: '#06c',
        button: '#e8e8ed',
      },
      textColor: {
        footnote: 'rgba(0,0,0,.56)',
        footlink: 'rgba(0,0,0,.72)',
        footlinkhead: 'rgba(0,0,0,.88)',
      },
      fontFamily: {
        semibold: 'SF Pro Text Semibold, Helvetica Neue, Helvetica, Arial, sans-serif',
        sans: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      fontWeight: {
        footlinkhead: 600,
      },

      fontSize: {
        sizeSelector: '17px',
        footnote: '12px',
        footlink: '12px',
        footlinkhead: '12px',
      },
    },
  },
  plugins: [],
};
