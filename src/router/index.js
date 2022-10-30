import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Price from '@/views/Price'
import Gallery from '@/views/Gallery'
import Rules from '@/views/Rules'
import PageNotFound from '@/views/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
