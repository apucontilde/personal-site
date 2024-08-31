import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({ include: /\.(jsx|js)$/ }),
        legacy({
            // to be compatible with legacy browsers
            targets: ["ie >= 11"],
            // generate legacy browser's chunks
            renderLegacyChunks: true,
            /**
             * auto detect
             */
            modernPolyfills: true,
            /**
             * or add manually, for examples
             */
            // for legacy browsers only
            // polyfills: ['es/global-this', 'es/array/includes'],
            // for modern browsers only
            // modernPolyfills: ['es/global-this'],
        }),
    ],
    esbuild: {
        // configure this value when the browser version of the development environment is lower
        // minimum support es2015
        // https://esbuild.github.io/api/#target
        target: "es2015",
        include: /\.(ts|jsx|tsx)$/,
    },
    // for production build environments only
    build: {
        // minimum support es2015
        target: "es2015",
        rollupOptions: {
            input: {
                main: "index.html",
                404: "public/404.html",
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
        coverage: {
            reporter: ["text", "html"],
            exclude: ["node_modules/", "src/setupTests.js"],
        },
    },
});