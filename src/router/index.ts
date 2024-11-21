import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('@/views/index/index.vue')
    },
    {
    path: '/tabs/',
    component: Footer,
    children: [
        {
          path: '/activity1',
          component: () => import('@/views/activity1/index.vue')
        },
        {
          path: '/activity2',
          component: () => import('@/views/activity2/index.vue')
        },
        {
          path: '/activity3',
          component: () => import('@/views/activity3/index.vue')
        },
        {
          path: '/activity4',
          component: () => import('@/views/activity4/index.vue')
        },
        {
          path: '/activity5',
          component: () => import('@/views/activity5/index.vue')
        },
        {
          path: '/activity6',
          component: () => import('@/views/activity6/index.vue')
        },
       ]
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
