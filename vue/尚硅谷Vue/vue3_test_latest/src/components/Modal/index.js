import { createApp, provide } from "vue";
import Modal from "./Modal.vue";

// 弹框的函数式调用方法
function openModalJs(options = {}) {
  // 1. 创建弹框组件实例
  const modalApp = createApp(Modal, {
    // 控制弹框是否显示
    status: true,
    // 传入弹框标题
    title: options.title || "title",
    // 传入弹框内容
    content: options.content || "content",
    // 传入关闭弹框的方法
    close: () => {
      // 将弹框实例卸载
      modalApp.unmount(dom);
      // 删除页面节点
      document.body.removeChild(dom);
    },
  });
  // 2. 创建渲染节点
  const dom = document.createElement("div");
  document.body.appendChild(dom);

  // 3. 将实例挂载到页面节点上
  modalApp.mount(dom);
}

function dialogInstall(app) {
  console.log("dialogInstall was invoked");
  app.provide("OPENDIALOG", openModalJs);
}

export { openModalJs, dialogInstall };
