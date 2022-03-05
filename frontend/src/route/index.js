import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
{
    path: '/home',
    component: Home,
    name: 'Home'
  },
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
