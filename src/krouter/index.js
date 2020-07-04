import Vue from 'vue'
// import VueRouter from 'vue-router'
import KVueRouter from './kvue-router';
import Home from '../views/Home.vue'

Vue.use(KVueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new KVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
