import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./routes";
import store from "@/store";
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写 push|replace
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败回调

// call || apply 区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数：call传递参数用逗号隔开。apply传递参数用数组

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }; // 代表滚动条在最上方
  },
});

router.beforeEach(async (to, from, next) => {
  // to：可以获取到你要跳转到哪个路由的信息
  // from：可以获取到你从哪个路由而来的信息
  // next：放行函数  next()放行   next(path) 放行到指定路由   next(false) 阻止放行
  // console.log(to, from);
  // next();
  let userObj = store.state.user;
  let token = userObj.token;
  let name = (userObj.userInfo && userObj.userInfo.name) || "";
  // 已登录
  if (token) {
    // 用户已经登录了不能去login页面
    if (to.path == "/login") {
      next(from.path);
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("user/getUserInfo");
          next();
        } catch (error) {
          await store.dispatch("user/getLogout");
          next("/login");
        }
      }
    }
    // 未登录
  } else {
    let toPath = to.path;
    let list = ["/trade", "/pay", "/paysuccess", "/center/myOrder"];
    console.log(toPath);
    if (list.includes(toPath)) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});

export default router;
