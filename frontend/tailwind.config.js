/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {
            zIndex: {
                '1000': 1000,
            },
            fontSize: {
                '10xl': '18rem', // 원하는 크기에 맞게 조정
            },
            colors: {
                'custom-bronze': '#58CE7E',
                'custom-silver': '#E8974D',
                'custom-gold': '#DAEE66',
                'custom-platinum': '#67B9E2',
                'custom-diamond': '#E970D6',
                'custom-bronze-dark': 'rgba(173,86,0,0.8)',
                'custom-silver-dark': 'rgba(67,95,122,0.8)',
                'custom-gold-dark': 'rgba(236,154,0,0.8)',
                'custom-platinum-dark': 'rgba(39,226,164,0.8)',
                'custom-diamond-dark': 'rgba(0,180,252,0.8)',
            },
            keyframes: {
                sliderA: {
                    '0%': {
                        transform: 'translateX(0px)'
                        , opacity: 0.2
                    },
                    '100%': {
                        transform: 'translateX(-1000px)'
                        , opacity: 0.2
                    }
                },
                sliderB: {
                    '0%': {
                        transform: 'translateX(-1000px)',
                        backgroundColor: '#FFFFFF'
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        backgroundColor: '#FFFFFF'
                    }
                },
                sliderC: {
                    '0%': {
                        transform: 'translateX(-150px)',
                        backgroundColor: '#FFFFFF'
                    },
                    '100%': {
                        transform: 'translateX(-1150px)',
                        backgroundColor: '#FFFFFF'
                    }
                },

            },
            animation: {
                sliderA: 'sliderA 120s linear infinite',
                sliderB: 'sliderB 60s linear infinite',
                sliderC: 'sliderC 60s linear infinite',
            }
        },

