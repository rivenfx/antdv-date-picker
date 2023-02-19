import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import visualizer from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //添加jsx/tsx支持
    vueJsx({}),
    //可视化Bundle
    visualizer(),
  ],
  resolve: {
    // preserveSymlinks: false,
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'GCT',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        "@ant-design/icons-vue",
        "abp-web-resources",
        "ant-design-vue",
        "axios",
        "moment",
        "pinia",
        "rxjs",
        "rxjs-compat",
        "vue-router",
        "vuedraggable"
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'vue',
          "@ant-design/icons-vue": "@ant-design/icons-vue",
          "abp-web-resources": "abp-web-resources",
          "ant-design-vue": "ant-design-vue",
          "axios": "axios",
          "moment": "moment",
          "pinia": "pinia",
          "rxjs": "rxjs",
          "rxjs-compat": "rxjs-compat",
          "vue-router": "vue-router",
          "vuedraggable": "vuedraggable",
          "dayjs": "dayjs"
        },
      },
    }
  }
})
