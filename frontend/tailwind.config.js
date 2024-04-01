/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-bronze': 'rgb(173,86,0)',
        'custom-silver': 'rgb(67,95,122)',
        'custom-gold': 'rgb(236,154,0)',
        'custom-platinum': 'rgb(39,226,164)',
        'custom-diamond': 'rgb(0,180,252)',
        'custom-bronze-dark': 'rgba(173,86,0,0.8)',
        'custom-silver-dark': 'rgba(67,95,122,0.8)',
        'custom-gold-dark': 'rgba(236,154,0,0.8)',
        'custom-platinum-dark': 'rgba(39,226,164,0.8)',
        'custom-diamond-dark': 'rgba(0,180,252,0.8)',
      },
      zIndex: {
        '1000': 1000,
      },
      fontSize: {
        '10xl': '18rem', // 원하는 크기에 맞게 조정
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

