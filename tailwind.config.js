/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Plus Jakarta Sans", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                caveat: ["Caveat", "cursive"],
                syne: ["Syne", "sans-serif"],
                mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
                poppins: ["Poppins", "sans-serif"],
                nostalgia: ["Nostalgia", "sans-serif"],
                lora: ["Lora", "sans-serif"],
            },
            colors: {
                canvas: "var(--color-canvas)",
                surface: "var(--color-surface)",
                "surface-elevated": "var(--color-surface-elevated)",
                card: "var(--color-card)",
                "card-border": "var(--color-border)",
                "border-hover": "var(--color-border-hover)",
                "paralyse-red": "#ff1744",
                "susanoo-purple": "#8b5cf6",
                "accent-indigo": "var(--color-accent-indigo)",
                "accent-blue": "var(--color-accent-blue)",
                "accent-amber": "var(--color-accent-amber)",
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
