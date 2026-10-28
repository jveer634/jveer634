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
        },
    },
    plugins: [],
};
