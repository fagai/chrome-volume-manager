import { resolve } from 'path'
import { defineConfig } from "vite"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'static/*',
                    dest: '',
                }
            ]
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'popup.html'),
                background: resolve(__dirname, 'src', 'background.ts'),
            },
            output: {
                entryFileNames: '[name].js',
            }
        },
    }
})