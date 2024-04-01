/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {
            keyframes: {
                sliderA: {
                    '0%': {
                        transform: 'translateX(0px)'
                       ,opacity : 0.2
                    },
                    '100%': {
                        transform: 'translateX(-1000px)'
                        ,opacity : 0.2
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
    },
    plugins: [require('tailwind-scrollbar-hide')],
}

