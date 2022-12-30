import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  outputPath: '../../dist/share',
  base: '/share/',
  publicPath: '/share/',
  hash: true,
});
