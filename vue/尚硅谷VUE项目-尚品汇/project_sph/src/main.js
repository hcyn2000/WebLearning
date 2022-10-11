import Vue from "vue"
import App from "./App.vue"
import router from "./router" // 引入路由
import store from "./store" // 引入vuex

// 注册三级联动--全局组件
import TypeNav from "@/components/TypeNav"
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
