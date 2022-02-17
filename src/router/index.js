import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
    },
    {
      path: '/up',
      component: () => import('../components/UP.vue'),
    },
    {
      path: '/fetch',
      component: () => import('../components/Fetch.vue'),
    },
    {
      path: '/search',
      component: () => import('../components/Search.vue'),
    },
  ]
})
