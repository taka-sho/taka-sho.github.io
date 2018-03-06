import VueRouter from 'vue-router'

// Main components
const Blog = () => import('./components/Blog')
const Info = () => import('./components/Info')

// Blog components
const Blog0306 = () => import('./components/Blog/2018-0306')

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
