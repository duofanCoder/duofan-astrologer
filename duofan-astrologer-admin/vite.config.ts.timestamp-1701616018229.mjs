// vite.config.ts
import path2 from "path";
import { loadEnv } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite@3.2.2_sass@1.55.0/node_modules/vite/dist/node/index.js";
import dayjs2 from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/dayjs.min.js";

// package.json
var package_default = {
  name: "vue3-basic-admin",
  private: true,
  version: "1.8.3",
  type: "module",
  scripts: {
    start: "vite",
    build: "vue-tsc --noEmit && vite build",
    report: "cross-env REPORT=true npm run build",
    preview: "vite preview",
    lint: "eslint --ext=vue,js src",
    "lint:fix": "eslint --ext=vue,js --fix src",
    prepare: "husky install"
  },
  dependencies: {
    "@element-plus/icons-vue": "^2.0.10",
    axios: "^0.27.2",
    dayjs: "^1.11.7",
    echarts: "^5.3.3",
    "echarts-liquidfill": "3",
    "echarts-wordcloud": "2",
    "element-plus": "^2.2.19",
    mockjs: "^1.1.0",
    nprogress: "^0.2.0",
    "path-browserify": "^1.0.1",
    pinia: "^2.0.18",
    "pinia-plugin-persistedstate": "^2.3.0",
    tinymce: "^6.3.1",
    vditor: "^3.9.0",
    vue: "^3.2.37",
    "vue-json-pretty": "^2.2.3",
    "vue-router": "^4.1.3",
    vuedraggable: "^4.1.0"
  },
  devDependencies: {
    "@commitlint/cli": "^17.2.0",
    "@commitlint/config-conventional": "^17.2.0",
    "@types/mockjs": "^1.0.7",
    "@types/node": "^18.11.9",
    "@types/nprogress": "^0.2.0",
    "@types/path-browserify": "^1.0.0",
    "@typescript-eslint/eslint-plugin": "^5.42.0",
    "@typescript-eslint/parser": "^5.42.0",
    "@vitejs/plugin-vue": "^3.0.2",
    "@vitejs/plugin-vue-jsx": "^2.1.1",
    "@vue/compiler-sfc": "^3.2.47",
    "@vueuse/core": "^9.6.0",
    "cross-env": "^7.0.3",
    eslint: "^8.0.1",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-n": "^15.0.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-vue": "^9.7.0",
    husky: "^8.0.2",
    "lint-staged": "^13.0.3",
    picocolors: "^1.0.0",
    prettier: "^2.7.1",
    "rollup-plugin-visualizer": "^5.9.0",
    sass: "^1.55.0",
    typescript: "^4.6.4",
    "unplugin-auto-import": "^0.11.4",
    "unplugin-element-plus": "^0.7.0",
    "unplugin-vue-components": "^0.22.9",
    vite: "^3.0.6",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.0",
    "vite-plugin-imagemin": "^0.6.1",
    "vite-plugin-mock": "^2.9.6",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-tsc": "^0.39.5"
  },
  resolutions: {
    "bin-wrapper": "npm:bin-wrapper-china",
    rollup: "^2.56.3",
    gifsicle: "5.2.0"
  },
  "lint-staged": {
    "*.{js,ts,tsx,jsx,vue}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
      "prettier --write--parser json"
    ],
    "package.json": [
      "prettier --write"
    ],
    "*.md": [
      "prettier --write"
    ]
  }
};

// build/plugins.ts
import path from "path";
import vue from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.2_vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/unplugin-auto-import@0.11.4_@vueuse+core@9.6.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/unplugin-vue-components@0.22.9_rollup@2.79.1_vue@3.2.41/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/unplugin-vue-components@0.22.9_rollup@2.79.1_vue@3.2.41/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { createSvgIconsPlugin } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@3.2.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vueJsx from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2_vue@3.2.41/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import ElementPlus from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/unplugin-element-plus@0.7.0_rollup@2.79.1/node_modules/unplugin-element-plus/dist/vite.mjs";
import { viteMockServe } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@3.2.2/node_modules/vite-plugin-mock/dist/index.js";
import { createHtmlPlugin } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite-plugin-html@3.2.0_vite@3.2.2/node_modules/vite-plugin-html/dist/index.mjs";
import { visualizer } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/rollup-plugin-visualizer@5.9.0_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteImagemin from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@3.2.2/node_modules/vite-plugin-imagemin/dist/index.mjs";
import compressPlugin from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@3.2.2/node_modules/vite-plugin-compression/dist/index.mjs";

// build/info.ts
import { readdir, stat } from "fs";
import dayjs from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/dayjs.min.js";
import duration from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/plugin/duration.js";
import pkg from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js";
var { green, blue, bold } = pkg;
dayjs.extend(duration);
var staticPath = "dist";
var fileListTotal = [];
var recursiveDirectory = (folder, callback) => {
  readdir(folder, (err, files) => {
    if (err)
      throw err;
    let count = 0;
    const checkEnd = () => {
      ++count === files.length && callback();
    };
    files.forEach((item) => {
      stat(folder + "/" + item, async (err2, stats) => {
        if (err2)
          throw err2;
        if (stats.isFile()) {
          fileListTotal.push(stats.size);
          checkEnd();
        } else if (stats.isDirectory()) {
          recursiveDirectory(`${folder}/${item}/`, checkEnd);
        }
      });
    });
    files.length === 0 && callback();
  });
};
var sum = (arr) => {
  return arr.reduce((t, c) => {
    return t + c;
  }, 0);
};
var formatBytes = (a, b) => {
  if (a === 0)
    return "0 Bytes";
  const c = 1024;
  const d = b || 2;
  const e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
};
function viteBuildInfo() {
  let config;
  let startTime;
  let endTime;
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    buildStart() {
      console.log(bold(green(`\u{1F44F}\u6B22\u8FCE\u4F7F\u7528${blue("[vue3-basic-admin]")}\uFF0C\u73B0\u5728\u6B63\u5168\u529B\u4E3A\u60A8${config.command === "build" ? "\u6253\u5305" : "\u7F16\u8BD1"}`)));
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date());
        recursiveDirectory(staticPath, () => {
          console.log(
            bold(
              green(
                `\u606D\u559C\u6253\u5305\u5B8C\u6210\u{1F389}\uFF08\u603B\u7528\u65F6${dayjs.duration(endTime.diff(startTime)).format("mm\u5206ss\u79D2")}\uFF0C\u6253\u5305\u540E\u7684\u5927\u5C0F\u4E3A${formatBytes(
                  sum(fileListTotal)
                )}\uFF09`
              )
            )
          );
        });
      }
    }
  };
}

// build/name.ts
import { compileScript, parse } from "file:///D:/Development/project/myself/fly-boot-admin/node_modules/.pnpm/@vue+compiler-sfc@3.2.47/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js";
function setupName() {
  return {
    name: "vite:setupName",
    enforce: "pre",
    transform(code, id) {
      var _a;
      if (/\.vue$/.test(id) || /\.vue\?.*type=script.*/.test(id)) {
        const { descriptor } = parse(code);
        if (!descriptor.script && descriptor.scriptSetup && !((_a = descriptor.scriptSetup.attrs) == null ? void 0 : _a.extendIgnore)) {
          const result = compileScript(descriptor, { id });
          const name2 = result.attrs.name;
          const lang = result.attrs.lang;
          const inheritAttrs = result.attrs.inheritAttrs;
          if (name2 || inheritAttrs) {
            const template = `<script${lang ? ` lang="${lang}"` : ""}>
                        import { defineComponent } from 'vue'
                        export default defineComponent({
                          ${name2 ? `name: "${name2}",` : ""}
                          ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== "false"},` : ""}
                        })
                        <\/script>
`;
            code += template;
          }
        }
      }
      return code;
    }
  };
}

// build/plugins.ts
var __vite_injected_original_dirname = "D:\\Development\\project\\myself\\fly-boot-admin\\build";
var resolve = (dir) => path.join(__vite_injected_original_dirname, dir);
var configImagemin = () => {
  return viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false
    },
    optipng: {
      optimizationLevel: 7
    },
    mozjpeg: {
      quality: 20
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4
    },
    svgo: {
      plugins: [
        {
          name: "removeViewBox"
        },
        {
          name: "removeEmptyAttrs",
          active: false
        }
      ]
    }
  });
};
var configCompress = (compress, deleteOriginFile = false) => {
  const compressList = compress.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile
      })
    );
  }
  return plugins;
};
function createVitePlugins(env, isBuild) {
  const { VITE_APP_NAME } = env;
  const isReport = process.env.REPORT === "true";
  const vitePluginList = [
    vue(),
    vueJsx(),
    AutoImport({
      dts: resolve("../src/components.d.ts"),
      imports: [
        "vue",
        "pinia",
        "vue-router",
        {
          "@vueuse/core": []
        }
      ],
      eslintrc: {
        enabled: true,
        filepath: resolve("../.eslintrc-auto-import.json"),
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      extensions: ["vue", "md"],
      dts: resolve("../src/auto-imports.d.ts"),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve("../src/icons")],
      symbolId: "svg-[name]"
    }),
    ElementPlus({
      useSource: true
    }),
    createHtmlPlugin({
      minify: isBuild,
      inject: {
        data: {
          title: VITE_APP_NAME,
          injectScript: `<script>
                          console.log("version:${package_default.version}")
                    <\/script>`
        }
      }
    }),
    viteBuildInfo(),
    setupName(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: !isBuild,
      prodEnabled: isBuild,
      injectCode: `
              import { setupProdMockServer } from './mockProdServer';

              setupProdMockServer();
            `
    })
  ];
  if (isReport) {
    vitePluginList.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "report.html"
      })
    );
  }
  if (isBuild) {
    vitePluginList.push(configImagemin());
    vitePluginList.push(configCompress("gzip"));
  }
  return vitePluginList;
}

// vite.config.ts
var __vite_injected_original_dirname2 = "D:\\Development\\project\\myself\\fly-boot-admin";
var resolve2 = (dir) => path2.join(__vite_injected_original_dirname2, dir);
var { dependencies, devDependencies, name, version } = package_default;
var __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs2().format("YYYY-MM-DD HH:mm:ss")
};
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = env;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: createVitePlugins(env, isBuild),
    optimizeDeps: {
      include: ["element-plus/lib/locale/lang/zh-cn"]
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    resolve: {
      alias: {
        "~/": `${path2.resolve(__vite_injected_original_dirname2, "src")}/`,
        "@": resolve2("src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/theme/index.scss" as *;`
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 4e3,
      open: true,
      cors: true,
      proxy: {
        "/api": {
          target: "http://192.168.56.1:8000",
          changeOrigin: true,
          rewrite: (path3) => path3.replace(/^\/api/, "")
        }
      }
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2e3,
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvcGx1Z2lucy50cyIsICJidWlsZC9pbmZvLnRzIiwgImJ1aWxkL25hbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0XFxcXG15c2VsZlxcXFxmbHktYm9vdC1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdFxcXFxteXNlbGZcXFxcZmx5LWJvb3QtYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0RldmVsb3BtZW50L3Byb2plY3QvbXlzZWxmL2ZseS1ib290LWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcbmltcG9ydCB7IGNyZWF0ZVZpdGVQbHVnaW5zIH0gZnJvbSBcIi4vYnVpbGQvcGx1Z2luc1wiO1xuXG5jb25zdCByZXNvbHZlID0gKGRpcjogc3RyaW5nKSA9PiBwYXRoLmpvaW4oX19kaXJuYW1lLCBkaXIpO1xuXG5jb25zdCB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0gPSBwa2c7XG5jb25zdCBfX0FQUF9JTkZPX18gPSB7XG4gICAgcGtnOiB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0sXG4gICAgbGFzdEJ1aWxkVGltZTogZGF5anMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgY29tbWFuZCwgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcblxuICAgIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdCk7XG4gICAgY29uc3QgeyBWSVRFX1BVQkxJQ19QQVRILCBWSVRFX0RST1BfQ09OU09MRSB9ID0gZW52O1xuXG4gICAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09IFwiYnVpbGRcIjtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBWSVRFX1BVQkxJQ19QQVRILFxuICAgICAgICByb290LFxuICAgICAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyhlbnYsIGlzQnVpbGQpLFxuICAgICAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgICAgIC8vIFx1OTg4NFx1NTJBMFx1OEY3RFxuICAgICAgICAgICAgaW5jbHVkZTogW1wiZWxlbWVudC1wbHVzL2xpYi9sb2NhbGUvbGFuZy96aC1jblwiXVxuICAgICAgICB9LFxuICAgICAgICBlc2J1aWxkOiB7XG4gICAgICAgICAgICBwdXJlOiBWSVRFX0RST1BfQ09OU09MRSA/IFtcImNvbnNvbGUubG9nXCIsIFwiZGVidWdnZXJcIl0gOiBbXVxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgIFwifi9cIjogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIil9L2AsXG4gICAgICAgICAgICAgICAgXCJAXCI6IHJlc29sdmUoXCJzcmNcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJ+L3N0eWxlcy90aGVtZS9pbmRleC5zY3NzXCIgYXMgKjtgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgICAgICAgICAgcG9ydDogNDAwMCwgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgICAgICAgICBvcGVuOiB0cnVlLCAvLyBcdTY3MERcdTUyQTFcdTU0MkZcdTUyQThcdTY1RjZcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcbiAgICAgICAgICAgIGNvcnM6IHRydWUsXG4gICAgICAgICAgICAvLyBcdThERThcdTU3REZcdTRFRTNcdTc0MDZcdTkxNERcdTdGNkVcbiAgICAgICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0OiBcImh0dHBzOi8vbW9jay5tZW5neHVlZ3UuY29tL21vY2svNjI5ZDcyN2U2MTYzODU0YTMyZTgzMDdlXCIsIC8vIGVhc3ltb2NrXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldDogXCJodHRwczovL3d3dy5mYXN0bW9jay5zaXRlL21vY2svZjgxZTgzMzNjMWE5Mjc2MjE0YmNkYmMxNzBkOWUwYTBcIiwgLy8gZmFzdG1vY2tcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xOTIuMTY4LjU2LjE6ODAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgICAgICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTdDN0JcdTYyNTNcdTUzMDVcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwic3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwic3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVmaW5lOiB7XG4gICAgICAgICAgICAvLyBcdTg5RTNcdTUxQjNcdTYyNTNcdTUzMDVcdTYyQTVcdTk1MTlcbiAgICAgICAgICAgIF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX186IEpTT04uc3RyaW5naWZ5KGZhbHNlKSxcbiAgICAgICAgICAgIC8vIFx1N0NGQlx1N0VERlx1NEZFMVx1NjA2RlxuICAgICAgICAgICAgX19BUFBfSU5GT19fOiBKU09OLnN0cmluZ2lmeShfX0FQUF9JTkZPX18pXG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdFxcXFxteXNlbGZcXFxcZmx5LWJvb3QtYWRtaW5cXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RcXFxcbXlzZWxmXFxcXGZseS1ib290LWFkbWluXFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0RldmVsb3BtZW50L3Byb2plY3QvbXlzZWxmL2ZseS1ib290LWFkbWluL2J1aWxkL3BsdWdpbnMudHNcIjtpbXBvcnQgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcclxuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gXCJ1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZVwiO1xyXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7XHJcbmltcG9ydCBjb21wcmVzc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHsgdml0ZUJ1aWxkSW5mbyB9IGZyb20gXCIuL2luZm9cIjtcclxuaW1wb3J0IHsgc2V0dXBOYW1lIH0gZnJvbSBcIi4vbmFtZVwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBwa2cgZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiO1xyXG5cclxuY29uc3QgcmVzb2x2ZSA9IChkaXI6IHN0cmluZykgPT4gcGF0aC5qb2luKF9fZGlybmFtZSwgZGlyKTtcclxuXHJcbmNvbnN0IGNvbmZpZ0ltYWdlbWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgICAgZ2lmc2ljbGU6IHtcclxuICAgICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgICAgIGludGVybGFjZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3pqcGVnOiB7XHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxyXG4gICAgICAgICAgICBzcGVlZDogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Znbzoge1xyXG4gICAgICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVWaWV3Qm94XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZW1vdmVFbXB0eUF0dHJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWdDb21wcmVzcyA9IChjb21wcmVzczogXCJnemlwXCIgfCBcImJyb3RsaVwiIHwgXCJub25lXCIsIGRlbGV0ZU9yaWdpbkZpbGUgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY29tcHJlc3NMaXN0ID0gY29tcHJlc3Muc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW107XHJcblxyXG4gICAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcyhcImd6aXBcIikpIHtcclxuICAgICAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgICAgICAgIGNvbXByZXNzUGx1Z2luKHtcclxuICAgICAgICAgICAgICAgIGV4dDogXCIuZ3pcIixcclxuICAgICAgICAgICAgICAgIGRlbGV0ZU9yaWdpbkZpbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoXCJicm90bGlcIikpIHtcclxuICAgICAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgICAgICAgIGNvbXByZXNzUGx1Z2luKHtcclxuICAgICAgICAgICAgICAgIGV4dDogXCIuYnJcIixcclxuICAgICAgICAgICAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlT3JpZ2luRmlsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGx1Z2lucztcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlUGx1Z2lucyhlbnY6IGFueSwgaXNCdWlsZDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgeyBWSVRFX0FQUF9OQU1FIH0gPSBlbnY7XHJcblxyXG4gICAgY29uc3QgaXNSZXBvcnQgPSBwcm9jZXNzLmVudi5SRVBPUlQgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAgIGNvbnN0IHZpdGVQbHVnaW5MaXN0OiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbXHJcbiAgICAgICAgdnVlKCksXHJcbiAgICAgICAgdnVlSnN4KCksXHJcbiAgICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHVGRjBDXHU1MzczXHU0RTNBXHU0RTBEXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHVGRjBDXHU4QkJFXHU3RjZFXHU0RTNBXHU4REVGXHU1Rjg0XHU1MzczXHU1NzI4XHU1RjUzXHU1MjREXHU4REVGXHU1Rjg0XHU3NTFGXHU2MjEwXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU2NTg3XHU0RUY2ICB0cnVlXHU1MzczXHU5RUQ4XHU4QkE0Li9hdXRvLWltcG9ydC5kLnRzXHJcbiAgICAgICAgICAgIGR0czogcmVzb2x2ZShcIi4uL3NyYy9jb21wb25lbnRzLmQudHNcIiksXHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIFwidnVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInBpbmlhXCIsXHJcbiAgICAgICAgICAgICAgICBcInZ1ZS1yb3V0ZXJcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIkB2dWV1c2UvY29yZVwiOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSwgLy8gRGVmYXVsdCBgZmFsc2VgXHJcbiAgICAgICAgICAgICAgICBmaWxlcGF0aDogcmVzb2x2ZShcIi4uLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uXCIpLCAvLyBEZWZhdWx0IGAuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uYFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSAvLyBEZWZhdWx0IGB0cnVlYCwgKHRydWUgfCBmYWxzZSB8ICdyZWFkb25seScgfCAncmVhZGFibGUnIHwgJ3dyaXRhYmxlJyB8ICd3cml0ZWFibGUnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxyXG4gICAgICAgICAgICBkdHM6IHJlc29sdmUoXCIuLi9zcmMvYXV0by1pbXBvcnRzLmQudHNcIiksXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXHJcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLCAvW1xcXFwvXVxcLmdpdFtcXFxcL10vLCAvW1xcXFwvXVxcLm51eHRbXFxcXC9dL10sXHJcbiAgICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgICB9KSxcclxuICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShcIi4uL3NyYy9pY29uc1wiKV0sXHJcbiAgICAgICAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXHJcbiAgICAgICAgICAgIHN5bWJvbElkOiBcInN2Zy1bbmFtZV1cIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFx1NjI0Qlx1NTJBOFx1NUYxNVx1NTE2NVx1NjVGNlx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NjgzN1x1NUYwRlxyXG4gICAgICAgIEVsZW1lbnRQbHVzKHtcclxuICAgICAgICAgICAgdXNlU291cmNlOiB0cnVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gaHRtbCB0aXRsZVxyXG4gICAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgICAgICBtaW5pZnk6IGlzQnVpbGQsXHJcbiAgICAgICAgICAgIGluamVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBWSVRFX0FQUF9OQU1FLFxyXG4gICAgICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdDogYDxzY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2ZXJzaW9uOiR7cGtnLnZlcnNpb259XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU2M0QwXHU3OTNBXHU0RkUxXHU2MDZGXHJcbiAgICAgICAgdml0ZUJ1aWxkSW5mbygpLFxyXG4gICAgICAgIC8vIHNldHVwTmFtZVx1NkRGQlx1NTJBMFxyXG4gICAgICAgIHNldHVwTmFtZSgpLFxyXG4gICAgICAgIHZpdGVNb2NrU2VydmUoe1xyXG4gICAgICAgICAgICAvLyBtb2NrXHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHJcbiAgICAgICAgICAgIG1vY2tQYXRoOiBcIm1vY2tcIixcclxuICAgICAgICAgICAgLy8gXHU2NzJDXHU1NzMwXHU4QzAzXHU4QkQ1XHJcbiAgICAgICAgICAgIGxvY2FsRW5hYmxlZDogIWlzQnVpbGQsXHJcbiAgICAgICAgICAgIC8vIFx1NjI1M1x1NTMwNW1vY2tcclxuICAgICAgICAgICAgcHJvZEVuYWJsZWQ6IGlzQnVpbGQsXHJcbiAgICAgICAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NEY3Rlx1NzUyOG1vY2tcclxuICAgICAgICAgICAgaW5qZWN0Q29kZTogYFxyXG4gICAgICAgICAgICAgIGltcG9ydCB7IHNldHVwUHJvZE1vY2tTZXJ2ZXIgfSBmcm9tICcuL21vY2tQcm9kU2VydmVyJztcclxuXHJcbiAgICAgICAgICAgICAgc2V0dXBQcm9kTW9ja1NlcnZlcigpO1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcblxyXG4gICAgaWYgKGlzUmVwb3J0KSB7XHJcbiAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU1MjA2XHU2NzkwXHJcbiAgICAgICAgdml0ZVBsdWdpbkxpc3QucHVzaChcclxuICAgICAgICAgICAgdmlzdWFsaXplcih7XHJcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZ3ppcFNpemU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBicm90bGlTaXplOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IFwicmVwb3J0Lmh0bWxcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNCdWlsZCkge1xyXG4gICAgICAgIC8vIFx1NTZGRVx1NzI0N1x1NTM4Qlx1N0YyOVxyXG4gICAgICAgIHZpdGVQbHVnaW5MaXN0LnB1c2goY29uZmlnSW1hZ2VtaW4oKSk7XHJcbiAgICAgICAgLy8gZy16aXBcclxuICAgICAgICB2aXRlUGx1Z2luTGlzdC5wdXNoKGNvbmZpZ0NvbXByZXNzKFwiZ3ppcFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpdGVQbHVnaW5MaXN0O1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGV2ZWxvcG1lbnRcXFxccHJvamVjdFxcXFxteXNlbGZcXFxcZmx5LWJvb3QtYWRtaW5cXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RcXFxcbXlzZWxmXFxcXGZseS1ib290LWFkbWluXFxcXGJ1aWxkXFxcXGluZm8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0RldmVsb3BtZW50L3Byb2plY3QvbXlzZWxmL2ZseS1ib290LWFkbWluL2J1aWxkL2luZm8udHNcIjtpbXBvcnQgeyByZWFkZGlyLCBzdGF0IH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGRheWpzLCB7IERheWpzIH0gZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBkdXJhdGlvbiBmcm9tIFwiZGF5anMvcGx1Z2luL2R1cmF0aW9uXCI7XHJcbmltcG9ydCBwa2cgZnJvbSBcInBpY29jb2xvcnNcIjtcclxuXHJcbmNvbnN0IHsgZ3JlZW4sIGJsdWUsIGJvbGQgfSA9IHBrZztcclxuZGF5anMuZXh0ZW5kKGR1cmF0aW9uKTtcclxuXHJcbmNvbnN0IHN0YXRpY1BhdGggPSBcImRpc3RcIjtcclxuY29uc3QgZmlsZUxpc3RUb3RhbDogbnVtYmVyW10gPSBbXTtcclxuXHJcbmNvbnN0IHJlY3Vyc2l2ZURpcmVjdG9yeSA9IChmb2xkZXI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XHJcbiAgICByZWFkZGlyKGZvbGRlciwgKGVyciwgZmlsZXM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgY2hlY2tFbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICsrY291bnQgPT09IGZpbGVzLmxlbmd0aCAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXQoZm9sZGVyICsgXCIvXCIgKyBpdGVtLCBhc3luYyAoZXJyLCBzdGF0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3RUb3RhbC5wdXNoKHN0YXRzLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXJlY3RvcnkoYCR7Zm9sZGVyfS8ke2l0ZW19L2AsIGNoZWNrRW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlsZXMubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1bSA9IChhcnI6IG51bWJlcltdKSA9PiB7XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgodDogbnVtYmVyLCBjOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gdCArIGM7XHJcbiAgICB9LCAwKTtcclxufTtcclxuY29uc3QgZm9ybWF0Qnl0ZXMgPSAoYTogbnVtYmVyLCBiPzogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIGlmIChhID09PSAwKSByZXR1cm4gXCIwIEJ5dGVzXCI7XHJcbiAgICBjb25zdCBjID0gMTAyNDtcclxuICAgIGNvbnN0IGQgPSBiIHx8IDI7XHJcbiAgICBjb25zdCBlID0gW1wiQnl0ZXNcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdO1xyXG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IoTWF0aC5sb2coYSkgLyBNYXRoLmxvZyhjKSk7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYSAvIE1hdGgucG93KGMsIGYpKS50b0ZpeGVkKGQpKSArIFwiIFwiICsgZVtmXTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aXRlQnVpbGRJbmZvKCk6IFBsdWdpbiB7XHJcbiAgICBsZXQgY29uZmlnOiB7IGNvbW1hbmQ6IHN0cmluZyB9O1xyXG4gICAgbGV0IHN0YXJ0VGltZTogRGF5anM7XHJcbiAgICBsZXQgZW5kVGltZTogRGF5anM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwidml0ZTpidWlsZEluZm9cIixcclxuICAgICAgICBjb25maWdSZXNvbHZlZChyZXNvbHZlZENvbmZpZzogeyBjb21tYW5kOiBzdHJpbmcgfSkge1xyXG4gICAgICAgICAgICBjb25maWcgPSByZXNvbHZlZENvbmZpZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ1aWxkU3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvbGQoZ3JlZW4oYFx1RDgzRFx1REM0Rlx1NkIyMlx1OEZDRVx1NEY3Rlx1NzUyOCR7Ymx1ZShcIlt2dWUzLWJhc2ljLWFkbWluXVwiKX1cdUZGMENcdTczQjBcdTU3MjhcdTZCNjNcdTUxNjhcdTUyOUJcdTRFM0FcdTYwQTgke2NvbmZpZy5jb21tYW5kID09PSBcImJ1aWxkXCIgPyBcIlx1NjI1M1x1NTMwNVwiIDogXCJcdTdGMTZcdThCRDFcIn1gKSkpO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1hbmQgPT09IFwiYnVpbGRcIikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gZGF5anMobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlQnVuZGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1hbmQgPT09IFwiYnVpbGRcIikge1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZSA9IGRheWpzKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlRGlyZWN0b3J5KHN0YXRpY1BhdGgsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyZWVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcdTYwNkRcdTU1OUNcdTYyNTNcdTUzMDVcdTVCOENcdTYyMTBcdUQ4M0NcdURGODlcdUZGMDhcdTYwM0JcdTc1MjhcdTY1RjYke2RheWpzLmR1cmF0aW9uKGVuZFRpbWUuZGlmZihzdGFydFRpbWUpKS5mb3JtYXQoXCJtbVx1NTIwNnNzXHU3OUQyXCIpfVx1RkYwQ1x1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NFx1NTkyN1x1NUMwRlx1NEUzQSR7Zm9ybWF0Qnl0ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bShmaWxlTGlzdFRvdGFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHVGRjA5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXERldmVsb3BtZW50XFxcXHByb2plY3RcXFxcbXlzZWxmXFxcXGZseS1ib290LWFkbWluXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXZlbG9wbWVudFxcXFxwcm9qZWN0XFxcXG15c2VsZlxcXFxmbHktYm9vdC1hZG1pblxcXFxidWlsZFxcXFxuYW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXZlbG9wbWVudC9wcm9qZWN0L215c2VsZi9mbHktYm9vdC1hZG1pbi9idWlsZC9uYW1lLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7IGNvbXBpbGVTY3JpcHQsIHBhcnNlIH0gZnJvbSBcIkB2dWUvY29tcGlsZXItc2ZjXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBOYW1lKCk6IFBsdWdpbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwidml0ZTpzZXR1cE5hbWVcIixcclxuICAgICAgICBlbmZvcmNlOiBcInByZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybShjb2RlLCBpZCkge1xyXG4gICAgICAgICAgICBpZiAoL1xcLnZ1ZSQvLnRlc3QoaWQpIHx8IC9cXC52dWVcXD8uKnR5cGU9c2NyaXB0LiovLnRlc3QoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRlc2NyaXB0b3IgfSA9IHBhcnNlKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZXNjcmlwdG9yLnNjcmlwdCAmJiBkZXNjcmlwdG9yLnNjcmlwdFNldHVwICYmICFkZXNjcmlwdG9yLnNjcmlwdFNldHVwLmF0dHJzPy5leHRlbmRJZ25vcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21waWxlU2NyaXB0KGRlc2NyaXB0b3IsIHsgaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJlc3VsdC5hdHRycy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhbmcgPSByZXN1bHQuYXR0cnMubGFuZztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmhlcml0QXR0cnMgPSByZXN1bHQuYXR0cnMuaW5oZXJpdEF0dHJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lIHx8IGluaGVyaXRBdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGA8c2NyaXB0JHtsYW5nID8gYCBsYW5nPVwiJHtsYW5nfVwiYCA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtuYW1lID8gYG5hbWU6IFwiJHtuYW1lfVwiLGAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7aW5oZXJpdEF0dHJzID8gYGluaGVyaXRBdHRyczogJHtpbmhlcml0QXR0cnMgIT09IFwiZmFsc2VcIn0sYCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxcbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gdGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU9BLFdBQVU7QUFDakIsU0FBUyxlQUFlO0FBQ3hCLE9BQU9DLFlBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsTUFDRCxxQkFBcUI7QUFBQSxRQUNqQixNQUFNO0FBQUEsVUFDRixnQkFBZ0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFFTixPQUFPO0FBQUEsUUFDSCxRQUFRO0FBQUEsVUFHSixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUNDLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUNoRDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxzQkFBc0I7QUFBQSxNQUN0Qix1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFFWCxRQUFRO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFFSiwyQkFBMkIsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUUvQyxjQUFjLEtBQUssVUFBVSxZQUFZO0FBQUEsSUFDN0M7QUFBQSxFQUNKO0FBQ0o7IiwKICAibmFtZXMiOiBbInBhdGgiLCAiZGF5anMiLCAiZXJyIiwgIm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgImRheWpzIl0KfQo=
