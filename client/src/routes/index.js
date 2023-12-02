import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/view/Pedido-Cliente.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/view/Cadastro.vue')
      },

      {
        path: '/Pedido-Cliente',
        name: 'Pedido-Cliente',
        component: () => import("@/view/Pedido-Cliente.vue")
      }
    ]
  })
  
  export default router