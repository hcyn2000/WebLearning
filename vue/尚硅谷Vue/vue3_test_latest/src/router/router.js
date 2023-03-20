import { createRouter, createWebHashHistory } from "vue-router";

// import Login from "../pages/login.vue";
// import Home from "../pages/home.vue";

const routes = [
  {
    path: "/login",
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/vue3OW",
    component: () => import("../pages/vue3OW/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
