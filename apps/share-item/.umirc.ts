import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  base: '/share/',
  publicPath: '/share/',
  outputPath: '../../dist/share',
  hash: true,
  presets: [require.resolve('@umijs/preset-vue')],
});
