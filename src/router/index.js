import {createWebHistory, createRouter} from 'vue-router'

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
    path: '/:any(.*)',
    name: 'pageNotFound',
    component: () => import('@/views/PageNotFound')
  }
]

const scrollBehavior = function (to, _, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  } else {
    return {top: 0}
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
