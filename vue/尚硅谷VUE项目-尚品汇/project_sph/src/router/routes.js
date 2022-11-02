export default [
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
    name: "detail",
    path: "/detail/:id?",
    component: () => import("@/pages/Detail"),
    meta: {
      isFooter: true,
    },
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
