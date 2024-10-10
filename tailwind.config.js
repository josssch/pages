/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: "'Space Grotesk', serif",
            },

            colors: ({ colors }) => ({
                background: colors.gray[900],
                text: colors.blue[200],
            }),

            spacing: {
                sm: 'theme(spacing.1)',
                md: 'theme(spacing.2)',
                lg: 'theme(spacing.4)',
                xl: 'theme(spacing.8)',
                '2xl': 'theme(spacing.16)',
                '3xl': 'theme(spacing.32)',
                '4xl': 'theme(spacing.48)',
            },
        },
    },
    plugins: [],
}
