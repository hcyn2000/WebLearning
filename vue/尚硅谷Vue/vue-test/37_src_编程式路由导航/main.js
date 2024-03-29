// 引入 Vue
import Vue from "vue/dist/vue";
// 引入 App
import App from "./App.vue";
// 引入router
import router from "./router";
// 关闭Vue的生产提升
Vue.config.productionTip = false;

// 创建vm
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
