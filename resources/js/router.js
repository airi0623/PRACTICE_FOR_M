import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/main/Home.vue'
import Main from '@/views/main/Main.vue'

Vue.use(VueRouter)

const routes = [
  // ======== main ========
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home',
      },
    ],
  },
]

const routePush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routePush.call(this, location).catch(() => {})
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes,
})

export default router
