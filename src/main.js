import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@common'
import '@common/filter'
import VueTouch from 'vue-touch'
import store from './store'

Vue.use(VueTouch,{name:"v-touch"});

//手动配置element-ui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
