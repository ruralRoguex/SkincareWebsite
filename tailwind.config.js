/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

export default {
    content: [
      "./**/*.{js,json,liquid}",
    ],
    theme: {
      screens: {
        'md': '750px',
        'lg': '990px',
      },
      extend: {
        fontFamily: {
          'heading': 'var(--font-heading-family)'
        },
      },
    },
    plugins: [
      remToPxPlugin({
        baseFontSize: 16,
      })
    ],
  }