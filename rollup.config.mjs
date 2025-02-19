import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ 
                tsconfig: './tsconfig.json',
                exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
                outDir: './dist',
                declaration: false, // Change this to false
            }),
            postcss({
                extensions: ['.css'],
                inject: true,
                extract: false
            }),
        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/, 'react', 'react-dom'],
    }
];