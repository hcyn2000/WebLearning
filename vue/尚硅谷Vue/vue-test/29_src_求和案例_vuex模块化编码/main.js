// 引入 Vue
import Vue from "vue/dist/vue";
// 引入 App
import App from "./App.vue";
// 引入插件
import vueResource from "vue-resource";
// 引入store
import store from "./store";
// 关闭Vue的生产提升
Vue.config.productionTip = false;

// 使用插件
Vue.use(vueResource);

// 创建vm
new Vue({
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
