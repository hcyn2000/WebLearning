import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { dialogInstall } from "./components/Modal";
import Modal from "./components/Modal/Modal.vue";
import directive from "./utils/directive";

const app = createApp(App);
directive(app); // 自定义指令
app.component("Modal", Modal); // 注册弹窗组件
app.use(dialogInstall);
app.use(router).mount("#app");
