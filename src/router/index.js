import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
      component: () => import('../views/AboutView.vue'),
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
