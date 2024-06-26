import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import NProgress from 'nprogress';
import { removeBodyClass, addBodyClass} from '@/utils';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
  addBodyClass('load')
  NProgress.start()
})

router.afterEach(() => {
  window.scroll(0,0);
  setTimeout(() => {
    NProgress.done()
    removeBodyClass(
      'load',
      'is-nav-open'
    )
  }, 500)
})

export default router
