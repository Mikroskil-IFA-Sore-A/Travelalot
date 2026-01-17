import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@data": path.resolve(__dirname, "src/data"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
        },
    },
})


