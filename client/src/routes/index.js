import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/PerfilAdmin.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/view/Cadastro.vue"),
    },

    {
      path: "/PedidoCliente",
      name: "PedidoCliente",
      component: () => import("@/view/PedidoCliente.vue"),
    },
    {
      path: "/PedidoCliente/finalizarPedido", 
      name: "finalizarPedido", 
      component: () => import("@/view/finalizarPedido.vue"), 
    }
  ],
});

export default router;
