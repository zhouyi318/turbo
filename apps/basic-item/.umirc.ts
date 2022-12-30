import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  base: '/basic/',
  publicPath: '/basic/',
  outputPath: '../../dist/basic',
  hash: true,
  presets: [require.resolve('@umijs/preset-vue')],
});
