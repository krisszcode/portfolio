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
      fontFamily: {
        'poppins': ['Poppins', 'sans']
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
  layers: ['base', 'components', 'utilities'],
}
