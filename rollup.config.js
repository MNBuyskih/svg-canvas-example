import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        sourcemap: true,
        format: "umd",
        exports: "default",
        name: "svg_canvas_example",
    },

    plugins: [
        typescript(),
    ]
}
