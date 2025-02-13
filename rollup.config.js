import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/quick-ai-sdk.umd.js",
            format: "umd",
            name: "QuickAiSdkClient",
            sourcemap: false,
            exports: "named",
            globals: {
                tslib: "tslib",
            }
        },
        {
            file: "dist/quick-ai-sdk.cjs.js",
            format: "cjs",
            sourcemap: false,
            exports: "named",
        },
        {
            file: "dist/quick-ai-sdk.esm.js",
            format: "es",
            sourcemap: false,
            exports: "named",
        },
    ],
    external: ["tslib"],
    plugins: [typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
    })],
};
