// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import myLibs from './index'
import top from './pages/components/top/top'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(top)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
