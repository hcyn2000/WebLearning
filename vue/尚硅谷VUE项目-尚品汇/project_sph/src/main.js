import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由
import store from "./store"; // 引入vuex

import "@/mock/moclServe"; // 引入mock数据
import "swiper/css/swiper.css"; // 引入swiper样式

import "@/utils/globalComponents"; // 引入全局组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
