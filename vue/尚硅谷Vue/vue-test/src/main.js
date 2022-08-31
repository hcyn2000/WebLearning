// 引入 Vue
import Vue from "vue/dist/vue";
// 引入 App
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 关闭Vue的生产提升
Vue.config.productionTip = false;

Vue.use(ElementUI);

// 创建vm
new Vue({
  render: (h) => h(App),
}).$mount("#app");
