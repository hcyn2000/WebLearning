import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/customList",
    name: "CustomList",
    component: () => import(/* webpackChunkName: "about" */ "../views/customList.vue"),
  },
  {
    path: "/testPorp",
    component: () => import("../views/TestPorp"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
