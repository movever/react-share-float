import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss({
            // Tailwind CSS v4 配置
            config: './tailwind.config.js'
        })
    ],
    resolve: {
        alias: {
            'react-share-float': path.resolve(__dirname, '../../src')
        }
    },
    server: {
        open: false
    },
})


