import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import progress from 'rollup-plugin-progress';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import command from 'rollup-plugin-command';

const production = !process.env.ROLLUP_WATCH;

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output:{
    dir: 'dist',
    format: 'esm',
    plugins: [terser()],
    sourcemap: true
  },

  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    command('npm run start').
    production && progress(),
    production && filesize(),
  ]
}
