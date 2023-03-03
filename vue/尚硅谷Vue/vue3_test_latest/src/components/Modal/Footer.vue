<template>
  <div class="modal-footer">
    <button @click="onCancel" v-if="type === 'confirm'">取消</button>
    <button @click="onOk">确定</button>
  </div>
</template>

<script setup>
import { inject, defineEmits } from "vue";
const emit = defineEmits(["onCancel", "onOk"]);

const type = inject("modalType", "default");

const onCancel = () => {
  emit("onCancel");
};

const onOk = () => {
  emit("onOk");
};
</script>
