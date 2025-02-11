import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/quick-ai-sdk.umd.js",
            format: "umd",
            name: "QuickAiSdkClient",
            sourcemap: true,
        },
        {
            file: "dist/quick-ai-sdk.esm.js",
            format: "es",
            sourcemap: true,
        },
    ],
    plugins: [typescript()],
};
