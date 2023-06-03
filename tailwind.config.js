/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      }
    },
    colors: {
      red: '#FB2448',
      blue: '#2F1AC4',
      pink: '#FB2E86',
      'dark-blue': '#0D0E43',
      'off-navy-blue': '#3F509E',
      'navy-blue': '#151875',
      'sky-blue': '#F3F9FF',
      'pantone-purple': '#E0D3F5',
      'pale-purple': '#8A8FB9',
      purple: '#7E33E0',
      'off-purple': '#9F63B5',
      white: '#ffffff',
      light: '#F2F0FF'
    }
  },
  plugins: []
}
