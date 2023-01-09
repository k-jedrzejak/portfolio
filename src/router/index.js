import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes:  [
    {
      path: '/',
      name: '.all',
      component: HomeView,
    },
    {
      path: '/about',
      name: '.about',
      component: AboutView,
    }
  ]
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
  setTimeout(() => {
    NProgress.done()
    document.body.classList.remove(
      'load',
      'is-nav-open'
    )
  }, 500)
})

export default router
