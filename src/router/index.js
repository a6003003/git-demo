import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
import header from '../components/header.vue'
import userinfo from '../components/userinfo.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    components: {
      view: login
    }
  },
  {
    path: '/',
    name: 'home',
    components: {
      nav:header,
      view:home,
    }
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    components: {
      nav:header,
      view:userinfo,
  }
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
