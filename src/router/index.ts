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
    component: () => import('../views/Product/list.vue')
  },
  {
    path: '/product-detail/:id',
    name: 'productDetail',
    component: () => import('../views/Product/detail.vue')
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
