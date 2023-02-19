// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    browser: true,
    node: true, // 此项指定环境的全局变量，下面的配置指定为node环境
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析器，默认使用Espree
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'warn', // 未使用的变量提示
    '@typescript-eslint/ban-ts-ignore': 'off', // 允许使用ts-ignore
    '@typescript-eslint/explicit-function-return-type': 'off', // 不要求函数和类方法具有显式返回类型
    '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型时的警告
    '@typescript-eslint/no-var-requires': 'off', // 除import语句外，禁止使用require语句
    '@typescript-eslint/no-empty-function': 'off', // 关闭空函数警告
    'vue/custom-event-name-casing': 'off', // 自定义事件名称不强制使用特定大小写
    'no-use-before-define': 'off', // 不允许在变量定义之前使用它们
    '@typescript-eslint/no-use-before-define': 'off', // 允许在定义前使用
    '@typescript-eslint/ban-ts-comment': 'off', // @typescript-eslint/ban-ts-comment
    '@typescript-eslint/ban-types': 'off', // 禁止某些类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 可以使用后缀运算符的非空断言
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 函数不强制有返回类型
    'space-before-function-paren': 'off', // 强制在 function的左括号之前使用一致的空格
    'vue/component-definition-name-casing': 'off', // 不强制在{{}} 中统一间距
    'vue/attributes-order': 'off', // 不强制属性排序
    'vue/one-component-per-file': 'off', // 不强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': 'off', // 不限制每行属性的最大数量
    'vue/multiline-html-element-content-newline': 'off', // 不强制在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 要求单行元素的内容前后有一个换行符
    'vue/attribute-hyphenation': 'off', // 在模板中的自定义组件不强制执行属性命名样式
    'vue/require-default-prop': 'off', // props不需要默认值
    'vue/multi-word-component-names': 'off', // 取消组件名称校验
    'vue/require-explicit-emits': 'off', // 不强制将传入事件注册在emits里
    '@typescript-eslint/no-this-alias': 'off', // 不能给this重命名
    'vue/no-unused-components': 'off', // 允许注册不在模板中使用的组件
    'vue/order-in-components': 'off', // 不强制组件中的属性排序
    'vue/no-reserved-keys': 'off', // 允许覆盖保留关键字
    'no-unused-vars': 'off', //禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 'off', // 允许定义未使用的变量
    'vue/v-on-event-hyphenation': 'off' // 对模板中的自定义组件不强制执行 v-on 事件命名样式
  }
});
