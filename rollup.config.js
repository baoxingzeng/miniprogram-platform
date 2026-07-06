import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
    // CommonJS
    {
        input: "src/index.ts",
        output: {
            dir: "dist/cjs",
            format: "cjs",
        },
        plugins: [
            typescript({
                outDir: "dist/cjs",
                declarationDir: "dist/cjs/types",
                ignoreDeprecations: "6.0",
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
                ignoreDeprecations: "6.0",
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
                ignoreDeprecations: "6.0",
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
        },
        plugins: [
            typescript({
                outDir: "dist/esm",
                declarationDir: "dist/esm/types",
                ignoreDeprecations: "6.0",
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
                ignoreDeprecations: "6.0",
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
                ignoreDeprecations: "6.0",
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
