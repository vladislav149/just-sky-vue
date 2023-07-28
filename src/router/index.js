import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('@/views/Price')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/Gallery')
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/Rules')
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: () => import('@/views/PageNotFound')
  }
]

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth'
    }
  }
  return {x: 0, y: 0}
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
})

export default router
