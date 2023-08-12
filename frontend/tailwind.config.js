/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
  layers: ['base', 'components', 'utilities'],
}
