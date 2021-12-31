import Router from 'vue-router'
import Home from '../views/Home.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login'
      // component: login
    }
  ]
})