import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

// const MemoriesPage = () => import('@/pages/MemoriesPage.vue')
// const MemoryDetailsPage = () => import('@/pages/MemoryDetailsPage.vue')
// const AddMemoryPage = () => import('@/pages/AddMemoryPage.vue')

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/memories',
  // },
  // {
  //   path: '/memories',
  //   component: MemoriesPage,
  // },
  // {
  //   path: '/memories/:id',
  //   component: MemoryDetailsPage,
  // },
  // {
  //   path: '/memories/add',
  //   component: AddMemoryPage,
  // },
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
