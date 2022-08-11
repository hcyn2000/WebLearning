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

              // props的第一种写法，值为对象，该对象中的所有键值对都会以props的形式传给Detail组件
              // props: { a: 1, b: "hello" },  // 只能写死

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件  只能是params形式
              // props: true,

              // props的第三种写法，值为函数,会收到$route，返回值必须是对象
              props($route) {
                // return { id: $route.query.id, title: $route.query.title }; //query形式
                return { id: $route.params.id, title: $route.params.title }; // params形式
              },

              // https://blog.csdn.net/qzw752890913/article/details/123400033
            },
          ],
        },
      ],
    },
  ],
});
export default router;
