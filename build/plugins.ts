import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import importToCDN from "vite-plugin-cdn-import";
import viteCompression from "vite-plugin-compression";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport from "vite-plugin-style-import";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import {resolve} from "path";
import removeConsole from "vite-plugin-remove-console";
export function getPluginsList(command) {
  console.log(command);
  return [
    vue(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("@/lang/**")]
    }),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    importToCDN({
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "//unpkg.com/vue@3",
        },
        {
          name: "vue-router",
          var: "VueRouter",
          path: "//unpkg.com/vue-router@4.0.15/dist/vue-router.global.js",
        },
        {
          // 引入cdn element-plus
          name: "element-plus",
          var: "ElementPlus",
          path: "//unpkg.com/element-plus",
          // css: "//unpkg.com/element-plus/dist/index.css",
        }
      ],
    }),
    // 该插件2.0.0版本有问题，下载低版本
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
        },
      ],
    }),
    removeConsole(),
    viteCompression()
  ]
}
