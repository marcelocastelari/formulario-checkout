import { createRouter, createWebHashHistory } from 'vue-router'
import FormPage from '../components/FormPage.vue'
import ModalPage from '../components/CheckOutPage.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: ModalPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
