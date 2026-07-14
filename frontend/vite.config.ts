import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({
        target: 'react',
        tsconfig: 'tsconfig.app.json',
        autoCodeSplitting : true,
        codeSplittingOptions : {
            defaultBehavior : [
                [
                    'component',
                    'errorComponent',
                    'notFoundComponent',
                    'pendingComponent',
                    'loader'
                ]
            ]
        }
    }),
    react()],
})
