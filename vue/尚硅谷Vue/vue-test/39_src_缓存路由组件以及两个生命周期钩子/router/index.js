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
              path: "detail",
              component: () => import("../pages/Detail.vue"),

              // props的第三种写法，值为函数,会收到$route，返回值必须是对象
              props($route) {
                return { id: $route.query.id, title: $route.query.title }; //query形式
                // return { id: $route.params.id, title: $route.params.title }; // params形式
              },
            },
          ],
        },
      ],
    },
  ],
});
export default router;
