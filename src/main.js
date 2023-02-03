import Vue from 'vue'
import AdminPanel from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import Router from 'vue-router'


Vue.use(Router)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(AdminPanel),
}).$mount('#app')
