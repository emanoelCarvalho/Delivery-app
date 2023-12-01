import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../components/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/components/Cadastro.vue')
      },
    ]
  })
  
  export default router