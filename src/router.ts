import VueRouter from 'vue-router'

import Info from './components/Info'
import Blog from './components/Blog'

const routes = [
  {
    path: '/',
    component: Info
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/**',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  base: __dirname
})

export default router
