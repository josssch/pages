import svg from '@poppanator/sveltekit-svg'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        sveltekit(),
        svg({
            includePaths: ['src/assets/'],
        }),
        tailwind(),
    ],
})
