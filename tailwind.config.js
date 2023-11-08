/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                nostalgia: ["Nostalgia", "sans-serif"],
                lora: ["Lora", "sans-serif"],
            },
            backgroundImage: {
                eth: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('/src/assets/eth.jpg')",
                eth2: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('/src/assets/eth2.jpg')",
                react: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url('/src/assets/react.jpg')",
            },
        },
    },
    plugins: [],
};
