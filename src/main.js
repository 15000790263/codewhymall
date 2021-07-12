import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from "fastclick"


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


FastClick.attach(document.body)

new Vue({
  router,
  store,
  // Toasted,
  render: h => h(App)
}).$mount('#app')
