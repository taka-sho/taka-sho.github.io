import Vue from 'vue'
import Router from 'vue-router'

const _74d38e96 = () => import('../pages/blog/2017/01.vue' /* webpackChunkName: "pages/blog/2017/01" */).then(m => m.default || m)
const _99fd37e6 = () => import('../pages/blog/2018/01/02.vue' /* webpackChunkName: "pages/blog/2018/01/02" */).then(m => m.default || m)
const _9a1966e8 = () => import('../pages/blog/2018/01/01.vue' /* webpackChunkName: "pages/blog/2018/01/01" */).then(m => m.default || m)
const _99e108e4 = () => import('../pages/blog/2018/01/03.vue' /* webpackChunkName: "pages/blog/2018/01/03" */).then(m => m.default || m)
const _59c3282c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/blog/2017/01",
			component: _74d38e96,
			name: "blog-2017-01"
		},
		{
			path: "/blog/2018/01/02",
			component: _99fd37e6,
			name: "blog-2018-01-02"
		},
		{
			path: "/blog/2018/01/01",
			component: _9a1966e8,
			name: "blog-2018-01-01"
		},
		{
			path: "/blog/2018/01/03",
			component: _99e108e4,
			name: "blog-2018-01-03"
		},
		{
			path: "/",
			component: _59c3282c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
