import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }; // 代表滚动条在最上方
  },
});

export default router;
