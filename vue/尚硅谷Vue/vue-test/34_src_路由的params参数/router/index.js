// 该文件专门用于创建整个应用的路由器
// 引入 Vue
import Vue from "vue/dist/vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 使用VueRouter
Vue.use(VueRouter);

// 创建一个路由器
const router = new VueRouter({
  routes: [
    { path: "/about", component: () => import("../pages/About.vue") },
    {
      path: "/home",
      component: () => import("../pages/Home.vue"),
      children: [
        { path: "news", component: () => import("../pages/News.vue") },
        {
          path: "message",
          component: () => import("../pages/Message.vue"),
          children: [
            {
              name: "xiangqing",
              path: "detail/:id/:title",
              component: () => import("../pages/Detail.vue"),
            },
          ],
        },
      ],
    },
  ],
});
export default router;
