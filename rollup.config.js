import { dts } from "rollup-plugin-dts";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
    // CommonJS
    {
        input: "src/index.ts",
        output: {
            dir: "dist/cjs",
            format: "cjs",
            preserveModules: true,
        },
        plugins: [
            typescript({
                outDir: "dist/cjs",
                declarationDir: "dist/cjs/types",
                moduleResolution: "bundler",
            }),
        ],
    },

    // CommonJS (singlefile)
    {
        input: "src/index.ts",
        output: {
            file: "dist/miniprogram-platform.cjs.js",
            format: "cjs",
        },
        plugins: [
            typescript({
                declarationDir: "dist/types",
                moduleResolution: "bundler",
            }),
            babel({
                babelHelpers: "bundled",
                extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
            }),
        ],
    },

    // CommonJS (singlefile, minimized)
    {
        input: "src/index.ts",
        output: {
            file: "dist/miniprogram-platform.cjs.min.js",
            format: "cjs",
        },
        plugins: [
            typescript({
                declarationDir: "dist/types",
                moduleResolution: "bundler",
            }),
            babel({
                babelHelpers: "bundled",
                extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
            }),
            terser(),
        ],
    },

    // ES6
    {
        input: "src/index.ts",
        output: {
            dir: "dist/esm",
            format: "es",
            preserveModules: true,
        },
        plugins: [
            typescript({
                outDir: "dist/esm",
                declarationDir: "dist/esm/types",
                moduleResolution: "bundler",
            }),
        ],
    },

    // ES6 (singlefile)
    {
        input: "src/index.ts",
        output: {
            file: "dist/miniprogram-platform.esm.js",
            format: "es",
        },
        plugins: [
            typescript({
                declarationDir: "dist/types",
                moduleResolution: "bundler",
            }),
            babel({
                babelHelpers: "bundled",
                extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
            }),
        ],
    },

    // ES6 (singlefile, minimized)
    {
        input: "src/index.ts",
        output: {
            file: "dist/miniprogram-platform.esm.min.js",
            format: "es",
        },
        plugins: [
            typescript({
                declarationDir: "dist/types",
                moduleResolution: "bundler",
            }),
            babel({
                babelHelpers: "bundled",
                extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
            }),
            terser(),
        ],
    },

    {
        input: "dist/esm/types/index.d.ts", // Types
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
