import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Edit from '../views/Edit'
import Login from '../views/Login.vue'
import SignIn from '../views/SignIn'
console.log('123')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home-component',
    component: Home
  },
  {
    path: '/login',
    name: 'Login-component',
    component: Login
  },
  {
    path: '/register',
    name: 'SignIn-component',
    component: SignIn
  },
  {
    path: '/edit',
    name: 'Edit-component',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
