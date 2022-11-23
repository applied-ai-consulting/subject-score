import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json'

export default [{
    input: 'src/lib/index.js',
    output:[
        {
            file:pkg.main,
            format: 'cjs',
        },
        {
            file:pkg.module,
            format: 'esm',
            exports: 'named',
        },
    ],
    plugins:[
        external(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react'],
        }),
        postcss({
            plugins:[],
            minimize: true,
        }),
        terser(),
    ]
}]