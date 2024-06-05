import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [

        laravel({
            input: [
                'resources/css/app.scss',
                'resources/js/app.ts',
            ],
            refresh: true,
        }),
        vue(),
    ],
    // build: {
    //     // the built files will be added here
    //     outDir: "./../public/app",
    // },
    // mode:'development',
  
});
