import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            png: {
                // https://sharp.pixelplumbing.com/api-output#png
                quality: 30,
            },
            svg: {
                multipass: true,
                plugins: [
                    {
                        name: "preset-default",
                        params: {
                            overrides: {
                                cleanupNumericValues: false,
                                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                            },
                            cleanupIDs: {
                                minify: true,
                                remove: false,
                            },
                            convertPathData: false,
                        },
                    },
                    "sortAttrs",
                    {
                        name: "addAttributesToSVGElement",
                        params: {
                            attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                        },
                    },
                ],
            },
        }),
    ],
});
