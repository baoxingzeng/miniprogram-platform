import { dts } from "rollup-plugin-dts";
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

    {
        input: "dist/esm/types/index.d.ts", // Types
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
