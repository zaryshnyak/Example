import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Edit from '../components/Edit.vue'
import Login from '../components/Login.vue'
import SignIn from '../components/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
