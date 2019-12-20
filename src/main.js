import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@common/filter'
import VueTouch from 'vue-touch'
import store from './store'
import './lib/loading/index.js'
import KemengUI from './lib'

Vue.use(KemengUI)
Vue.use(VueTouch,{name:"v-touch"});

//手动配置element-ui
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
