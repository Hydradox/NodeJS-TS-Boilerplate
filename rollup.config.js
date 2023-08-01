import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import progress from 'rollup-plugin-progress';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import run from '@rollup/plugin-run';
import commonjs from '@rollup/plugin-commonjs';
import dotenv from "rollup-plugin-dotenv"

const production = !process.env.ROLLUP_WATCH;

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output:{
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },

  plugins: [
    terser(),
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    commonjs(),
    dotenv(),
    !production && run(),
    production && progress(),
    production && filesize(),
  ]
}
