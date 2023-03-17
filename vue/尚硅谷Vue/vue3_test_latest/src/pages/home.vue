<template>
  {{ title }}
  <button @click="defaultModal">default Modal</button>
  <button @click="confirmModal">confirm Modal</button>
  <button @click="clickOpenDialog">打开弹窗</button>
  <Modal title="学习提示" content="打开了一个弹窗" v-model:status="modalVisible">
    <form>
      <label>姓名:</label>
      <input v-focus v-model="name" placeholder="请输入姓名" />
      <br />
      <label>年龄:</label>
      <input v-focus="'skyblue'" v-model="age" placeholder="请输入年龄" />
    </form>
  </Modal>
</template>

<script setup>
import { ref, provide, reactive, toRefs, inject } from "vue";

const openModalJs = inject("OPENDIALOG");
let { name, age } = {
  ...toRefs(
    reactive({
      name: "张三",
      age: 18,
    })
  ),
};

let title = ref("这里是home页面");
let modalVisible = ref(false);
let modalType = ref("default");

provide("modalType", modalType);

function defaultModal() {
  openModal();
}

function confirmModal() {
  modalType.value = "confirm";
  openModal();
}
function openModal() {
  modalVisible.value = true;
}

// 利用js打开弹窗
function clickOpenDialog() {
  openModalJs({
    title: "标题",
    content: "内容",
  });
}
</script>
