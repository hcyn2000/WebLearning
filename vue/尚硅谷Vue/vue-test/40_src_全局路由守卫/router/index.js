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
    {
      name: "guanyu",
      path: "/about",
      meta: { title: "关于" },
      component: () => import("../pages/About.vue"),
    },
    {
      name: "zhuye",
      path: "/home",
      meta: { title: "主页" },
      component: () => import("../pages/Home.vue"),
      children: [
        {
          name: "xinwen",
          path: "news",
          meta: { isAuth: true, title: "新闻" },
          component: () => import("../pages/News.vue"),
        },
        {
          name: "xiaoxi",
          path: "message",
          meta: { isAuth: true, title: "消息" },
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

let school = localStorage.getItem("school");

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log("前置", to, from);
  if (to.meta.isAuth) {
    if (school == "fuzhou") {
      next();
    } else {
      alert("权限不足");
    }
  } else {
    next();
  }
});

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log("后置", to, from);
  document.title = to.meta.title || "学习";
});

export default router;
