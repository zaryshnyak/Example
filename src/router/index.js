import Vue from 'vue'
import VueRouter from 'vue-router'
 
// импортируем все представления, по
// которым будем навигировать пользователя
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Greeting from '@/views/Greeting.vue'

Vue.use(VueRouter)
 
// заводим массив с роутами
const routes = [
 {
   path: '/',
   name: 'Home',
   component: Home
 },
 {
   path: '/about',
   name: 'About',
   component: About
 },
 {
  path: '/greeting',
  name: 'Greeting',
  component: Greeting
}
]
 
// создаём новый экземпляр класса
// VueRouter, с необходимыми параметрами
const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})
 
// экспортируем сконфигурированный роутер
export default router
