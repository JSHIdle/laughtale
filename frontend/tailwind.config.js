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
                        transform: 'translateX(0px)',
                        backgroundColor: '#121212',opacity : 0.2
                    },
                    '100%': {
                        transform: 'translateX(-1000px)',
                        backgroundColor: '#121212',opacity : 0.2
                    }
                },
                sliderB: {
                    '0%': {
                        transform: 'translateX(-1000px)',
                        backgroundColor: '#121212',opacity : 0.2
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        backgroundColor: '#121212',opacity : 0.2
                    }
                },
                sliderC: {
                    '0%': {
                        transform: 'translateX(-150px)',
                        backgroundColor: '#121212',opacity : 0.2
                    },
                    '100%': {
                        transform: 'translateX(-1150px)',
                        backgroundColor: '#121212',opacity : 0.2
                    }
                },

            },
            animation: {
                sliderA: 'sliderA 120s linear infinite',
                sliderB: 'sliderB 120s linear infinite',
                sliderC: 'sliderC 120s linear infinite',
            }
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}

