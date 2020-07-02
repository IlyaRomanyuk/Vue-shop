import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
