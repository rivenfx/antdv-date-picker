import { App } from 'vue'

// 自动扫描注册
// const components = import.meta.globEager('./**/*.vue')
// const ComponentsInstall = (app: App) => {
//   Object.keys(components).forEach(key => {
//     try {
//       const component = components[key].default
//       app.component(component.name, component)
//     } catch (error) {
//       console.error(`注册模块全局组件失败. ${key}  ${error}`)
//     }
//   })
// }

// export { ComponentsInstall }

export default () => {

}