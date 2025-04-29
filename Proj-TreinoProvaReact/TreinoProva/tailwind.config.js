module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Certifique-se de incluir os caminhos corretos
    ],
    theme: {
        extend: {
            animation: {
                'custom-bounce': 'customBounce 1.5s ease-in-out infinite',
            },
            keyframes: {
                customBounce: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-5px)' },
                },
            },
        },
    },
    plugins: [],
};