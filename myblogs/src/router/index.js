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
    component: () => import('../views/play/play.vue'),
    children: [{
      path: '/play/tuixiangzi',
      // name: 'tuixiangzi',
      component: () => import('../views/play/tuixiangzi/index.vue'),
    }]
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/study/study.vue')
  },
  {
    path: '/sjl',
    name: 'sjl',
    component: () => import('../views/sjl/sjl.vue')
  },
  {
    path: '/zds',
    name: 'zds',
    component: () => import('../views/zds/zds.vue')
  }, {
    //一级路由中默认显示的vue页面
    path: "*",
    redirect: "/home"
  }

]

const router = new VueRouter({
  mode: 'history',//打包注释
  base: process.env.BASE_URL,
  routes
})

export default router
