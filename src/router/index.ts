import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },

    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Contact'
    },

    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    meta: {
      title: 'Shop'
    },

    component: () => import( '../views/Shop.vue')
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    meta: {
      title: 'Maintenance'
    },

    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/forum',
    name: 'Forum' ,
    meta: {
      title: 'Forum'
    },

    component: () => import( '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'NTIC | ' + to.meta.title
  next()
})

export default router
