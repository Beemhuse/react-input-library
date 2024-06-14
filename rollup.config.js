import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'auto', // Ensure correct exports in CommonJS format
    },
    {
      file: pkg.module,
      format: 'es', // Use 'es' for ES module format
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from bundle
    resolve(), // Resolve third-party modules
    commonjs(), // Convert CommonJS modules to ES modules
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript files
    postcss({
      // Process CSS files
      plugins: [],
      minimize: true,
    }),
    terser(), // Minify output
  ],
  external: ['react', 'react-dom'], // Exclude React and ReactDOM from bundle
};
