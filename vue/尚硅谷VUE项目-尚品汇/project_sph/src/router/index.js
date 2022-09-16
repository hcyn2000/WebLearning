import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写 push|replace
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败回调

// call || apply 区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数：call传递参数用逗号隔开。apply传递参数用数组

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      meta: {
        isFooter: true,
      },
      component: () => import("@/pages/Home"),
    },
    {
      name: "search",
      path: "/search/:keyword?", // params参数后面加 ? 就可以可传可不传
      meta: {
        isFooter: true,
      },
      component: () => import("@/pages/Search"),
    },
    {
      path: "/login",
      component: () => import("@/pages/Login"),
    },
    {
      path: "/register",
      component: () => import("@/pages/Register"),
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
})

export default router
