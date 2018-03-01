import Vue from 'vue'
import VueRouter from 'vue-router'
const VueBootstrap = require('bootstrap-vue').default // TODO generate d.ts file

import router from './router'
import Home from './components/Home'

Vue.use(VueBootstrap)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
