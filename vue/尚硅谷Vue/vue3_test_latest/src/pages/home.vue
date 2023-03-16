<template>
  {{ title }}
  <button @click="defaultModal">default Modal</button>
  <button @click="confirmModal">confirm Modal</button>
  <Modal title="学习提示" content="打开了一个弹窗" v-model:status="modalVisible">
    <form>
      <label>姓名:</label>
      <input v-model="name" placeholder="请输入姓名" />
      <br />
      <label>年龄:</label>
      <input v-model="age" placeholder="请输入姓名" />
    </form>
  </Modal>
</template>

<script setup>
import Modal from "../components/Modal/Modal.vue";
import { ref, provide } from "vue";
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
</script>
