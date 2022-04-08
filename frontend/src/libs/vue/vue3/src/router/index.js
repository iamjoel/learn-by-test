import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubA from '../views/sub/SubA.vue'
import SubB from '../views/sub/SubB.vue'
import NotFound from '../views/common/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'default',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'sub-a',
          name: 'sub-a',
          component: SubA
        },
        { // 以 / 开头，不继承父路径
          path: '/other/sub-b',
          name: 'sub-b',
          component: SubB
        },
      ]
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/Counter.vue')
    },
    {
      path: '/detail/:id?',
      name: 'detail',
      // 懒加载
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/about',
      name: 'about',
      // 懒加载
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
