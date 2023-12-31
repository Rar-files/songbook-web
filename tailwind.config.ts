import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: ['class'],
    theme: {
        extend: {},
    },
    plugins: [
        // Iconify plugin
        addDynamicIconSelectors(),
    ],
}
export default config
