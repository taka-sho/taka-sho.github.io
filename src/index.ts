import Vue from 'vue'
import VueRouter from 'vue-router'

// TODO must generate d.ts file
// import VueBootstrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
const VueBootstrap = require('bootstrap-vue').default

import Top from './components/Top'

Vue.use(VueRouter)
Vue.use(VueBootstrap)

new Vue({
  el: '#app',
  render: h => h(Top)
})
