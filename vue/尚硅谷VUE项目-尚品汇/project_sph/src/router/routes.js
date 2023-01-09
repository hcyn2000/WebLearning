export default [
  {
    // 首页
    path: "/home",
    meta: {
      isFooter: true,
    },
    component: () => import("@/pages/Home"),
  },
  {
    // 查询商品结果页面
    name: "search",
    path: "/search/:keyword?", // params参数后面加 ? 就可以可传可不传
    meta: {
      isFooter: true,
    },
    component: () => import("@/pages/Search"),
  },
  {
    // 商品详情页面
    name: "detail",
    path: "/detail/:id?",
    component: () => import("@/pages/Detail"),
    meta: {
      isFooter: true,
    },
  },
  // 添加到购物车跳转页面
  {
    name: "addCartSuccess",
    path: "/addCartsuccess",
    component: () => import("@/pages/AddCartSuccess"),
    meta: {
      isFooter: true,
    },
  },
  // 购物车页面
  {
    name: "shopCart",
    path: "/shopCart",
    component: () => import("@/pages/ShopCart"),
    meta: {
      isFooter: true,
    },
  },
  // 结算页面
  {
    name: "trade",
    path: "/trade",
    component: () => import("@/pages/Trade"),
    meta: {
      isFooter: true,
    },
  },
  // 支付页面
  {
    name: "pay",
    path: "/pay",
    component: () => import("@/pages/Pay"),
    meta: {
      isFooter: true,
    },
  },
  // 支付成功页面
  {
    name: "paySuccess",
    path: "/paySuccess",
    component: () => import("@/pages/PaySuccess"),
    meta: {
      isFooter: true,
    },
  },
  // 个人中心页面
  {
    name: "center",
    path: "/center",
    component: () => import("@/pages/Center"),
    meta: {
      isFooter: true,
    },
    children: [
      {
        name: "myOrder",
        path: "myOrder",
        component: () => import("@/pages/Center/myOrder"),
        meta: {
          isFooter: true,
        },
      },
      {
        name: "groupOrder",
        path: "groupOrder",
        component: () => import("@/pages/Center/groupOrder"),
        meta: {
          isFooter: true,
        },
      },
    ],
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
];
