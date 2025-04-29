/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            animation: {
                'custom-bounce': 'customBounce 700ms ease-in-out infinite',
            },
            keyframes: {
                customBounce: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-5px)' },
                },
            }
        },

    },
    plugins: [],
}