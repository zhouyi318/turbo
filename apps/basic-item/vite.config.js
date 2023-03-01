/*
 * @Author: 周毅
 * @Date: 2023-02-13 16:39:50
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2023-02-28 21:57:56
 * @FilePath: /wework/apps/basic-item/vite.config.js
 */
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
/**
 * vite配置文档：https://vitejs.dev/config/
 * vant配置文档：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
 */
export default defineConfig(async ({ command, mode }) => {
  // eslint-disable-next-line no-undef
  const viteEnv = loadEnv(mode, process.cwd(), "");
  const { VITE_BASE_URL } = viteEnv;

  const basicConfig = {
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
      }),
      viteMockServe({
        mockPath: "./mock/",
        localEnabled: command === "serve",
        watchFiles: true,
      }),
    ],
    resolve: {
      alias: [
        {
          find: /@\/views\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
          replacement: fileURLToPath(
            new URL("./src/views/$1/index.vue", import.meta.url)
          ),
        },
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
  };

  // dev 独有配置
  let devConfig = {};
  if (command === "serve") {
    devConfig.server = {};
    devConfig.server.host = "localhost";
    devConfig.server.port = 8888;
    devConfig.server.cors = true;
    devConfig.server.proxy = {
      "/api": {
        target: "http://xxxx.xxxx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    };
  }

  // build 独有配置
  let proConfig = {};
  if (command === "build") {
    proConfig.build = {};
    proConfig.build.sourcemap = false;
    proConfig.build.chunkSizeWarningLimit = 10240;
    proConfig.build.outDir = "../../dist/basic";
  }

  // 异步配置获取远程资源
  // const data = await asyncFunction()

  // 输出配置文件
  return {
    ...basicConfig,
    ...devConfig,
    ...proConfig,
  };
});
