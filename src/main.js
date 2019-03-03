import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import './plugins/lightbox'
import App from './App.vue'
import store from './store'
import router from './router'
import '@mdi/font/css/materialdesignicons.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
