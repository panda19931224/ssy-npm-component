
import Alert from './pages/components/Alert'
import newPortalNav from './pages/components/top/top.vue'
let myLibs = {}

myLibs.Alert = Alert
const components = {
  newPortalNav
}
const methods = {
  Alert
}
const install = (Vue) => {
  // 遍历注册全局组件
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
  Vue.prototype.$commonMethods = methods
}
export default { myLibs, install }
