/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,twig}"],
    theme: {

        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                darkgray: '#3D3D3D',
            },
        },
    }
};