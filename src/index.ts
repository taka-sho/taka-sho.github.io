import Vue from 'vue'
import VueRouter from 'vue-router'

// TODO must generate d.ts file
// import VueBootstrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
const VueBootstrap = require('bootstrap-vue').default

import Top from './components/Top'

Vue.use(VueRouter)
Vue.use(VueBootstrap)

const a: any = new Vue({
  render: h => h(Top)
})

a.el('#app')
