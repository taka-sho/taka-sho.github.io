import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from './components/Top'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(Top)
})
