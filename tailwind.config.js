/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

export default {
  prefix: 'tw-',
  important: true,
  content: [
    "./**/*.{js,json,liquid}",
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '1440px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)',
      },
    },
  },
  corePlugins: {
    preflight: false,
 },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    })
  ]
}