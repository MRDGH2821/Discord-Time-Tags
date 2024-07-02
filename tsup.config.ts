// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: false,
  entry: ['src/**/*.ts', '!src/**/*.d.ts'],
  format: ['cjs'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: false,
  target: 'esnext',
  tsconfig: 'tsconfig.json',
  bundle: false,
  shims: false,
  keepNames: true,
  splitting: false,
  cjsInterop: true,
});
