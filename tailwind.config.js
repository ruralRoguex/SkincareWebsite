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
      'lg': '990px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)'
      },
    },
  },
  corePlugins: {
    preflight: false,
 },
  plugins: [
    require("tw-elements/plugin.cjs"),
    remToPxPlugin({
      baseFontSize: 16,
    })
  ],
  darkMode: "class"
}