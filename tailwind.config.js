/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

export default {
  prefix: 'tw-',
  important: true,
  content: [
    "./**/*.{js,json,liquid}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '1440px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)',
        roslindale:["Roslindale", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
 },
  plugins: [
    require("./node_modules/tw-elements/plugin.cjs"),
    remToPxPlugin({
      baseFontSize: 16,
    })
  ]
}