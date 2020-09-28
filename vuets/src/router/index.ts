import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('../views/play/play.vue')
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/study/study.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
