/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Pixer', ...fontFamily.sans],
        accent: ['Techpixs', ...fontFamily.sans],
        display: ['Unburied', ...fontFamily.sans],
        matrix: ['Chillpixels', ...fontFamily.sans],
      },
      colors: {
        dark: '#070007',
        yellow: '#FFE600',
        orange: '#FF3D00',
        pink: '#FF00C7',
        secondary: '#7D7D7D',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
