/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        // Primary brand colors
        'brand-primary': '#FB2E86', // pink
        'brand-secondary': '#2F1AC4', // blue
        'brand-accent': '#FB2448', // red
        
        // Secondary brand colors
        'brand-mint': '#05E6B7',
        'brand-success': '#08D15F',
        
        // UI colors
        'brand-heading': '#0D0E43', // dark-blue
        'brand-body': '#151875', // navy-blue
        'brand-muted': '#8A8FB9', // pale-purple
        
        // Background colors
        'brand-bg-primary': '#F2F0FF', // light
        'brand-bg-secondary': '#F6F7FB', // purple-white
        'brand-bg-accent': '#F3F9FF', // sky-blue
        'brand-bg-gray': '#F7F7F7', // light-gray
        
        // Interactive elements
        'brand-interactive': '#7E33E0', // purple
        'brand-interactive-hover': '#9F63B5', // off-purple
        
        // Text colors
        'brand-text-primary': '#151875', // navy-blue
        'brand-text-secondary': '#72718F', // steel-blue
        
        // Decorative colors
        'brand-decorative': '#E0D3F5', // pantone-purple
        'brand-highlight': '#3F509E', // off-navy-blue
        'brand-dark-navy': '#1A0B5B' // dark-navy
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
    }
  },
  plugins: []
}
