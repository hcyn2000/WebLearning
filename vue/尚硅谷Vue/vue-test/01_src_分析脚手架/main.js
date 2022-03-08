import Vue from "vue/dist/vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  // template: `<h1><App/></h1>`,
  render: (h) => h(App),

  // render: (h) => h("h1", "哈哈哈"),

  // components: { App },
}).$mount("#app");
