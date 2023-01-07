import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: '.all',
    component: HomeView
  },
  {
    path: '/about',
    name: '.about',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes
})


// progress bar
NProgress.configure({
  parent: '#app',
  easing: 'linear',
  speed: 700,
  trickleSpeed: 400,
  showSpinner: false,
})

router.beforeEach(() => {
  document.body.classList.add('load')
  NProgress.start()
})

router.afterEach(() => {
  window.scroll(0, 0)
  setTimeout(() => {
    NProgress.done()
    document.body.classList.remove(
      'load',
      'is-nav-open'
    )
  }, 500)
})


export default router
