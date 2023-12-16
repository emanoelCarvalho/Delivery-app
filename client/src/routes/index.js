import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Gestor.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/AdminLogin.vue"),
    },
    {
      path: "/registerItem",
      name: "registerItem",
      component: () => import("@/components/ItemRegister.vue"),
    },
    {
      path: "/registerSideDish",
      name: "registerSideDish",
      component: () => import("@/components/SideDishRegister.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: () => import("@/components/Store.vue"),
    },
  ],
})

export default router
