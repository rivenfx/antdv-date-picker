import nodeResolve from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue' // 处理vue文件
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import visualizer from 'rollup-plugin-visualizer'
import postcss from 'rollup-plugin-postcss'
const input = resolve(__dirname, '../packages') // 入口文件
const output = resolve(__dirname, '../dist') // 输出文件
const config = [
  {
    input: `${input}/index.ts`,
    output: {
      format: 'es',
      file: `${output}/index.esm.js`,
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
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: 'browser',
        exposeFilename: false
      }),
      postcss(),
      //添加jsx/tsx支持
      vueJsx({}),
      
      //可视化Bundle
      visualizer(),
      typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          include: ['packages/**/*'],
          exclude: ['node_modules', 'examples', 'mobile', 'tests']
        },
        abortOnError: false
      })
    ],
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

  }
]

export default config
