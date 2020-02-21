import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: Login
  },
  {
    path:'/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
