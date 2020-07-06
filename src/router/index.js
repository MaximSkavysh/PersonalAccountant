import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/detail-record/:id',
    name: 'dertail-record',
    meta: { layout: 'main' },
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/planning',
    name: 'planing',
    meta: { layout: 'main' },
    component: () => import('../views/Planning.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;