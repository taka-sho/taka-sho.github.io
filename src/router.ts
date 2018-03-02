import VueRouter from 'vue-router'

// import Info from './components/Info'
// import Blog from './components/Blog'

const Blog = () => import('./components/Blog')
const Info = () => import('./components/Info')

const Blog0303 = () => import('./components/Blog/0303')

const routes = [
  {
    path: '/',
    component: Info
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '0303', component: Blog0303 }
    ]
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
