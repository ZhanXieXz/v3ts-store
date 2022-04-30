import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product-list/:id',
    name: 'productList',
    component: () => import('../views/ProductList/list.vue')
  },
  {
    path: '/:pathMatch(.*)',
    // redirect: '/404'
    name: '404',
    component: () => import('../components/404.vue')

  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('../components/404.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
