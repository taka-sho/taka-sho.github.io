import Vue from 'vue'
import VueRouter from 'vue-router'
const VueAnalytics = require('vue-analytics').default // TODO generate d.ts file
const VueBootstrap = require('bootstrap-vue').default // TODO generate d.ts file

import Home from './components/Home'
import router from './router'

Vue.use(VueBootstrap)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {
  id: 'UA-116013986-1',
  router
})

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
