import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
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
  mode: 'history',//打包注释
  base: process.env.BASE_URL,
  routes
})

export default router
