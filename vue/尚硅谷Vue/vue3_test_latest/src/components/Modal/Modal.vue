<template>
  <div class="modal" v-if="props.status">
    <div class="modal-content">
      <div class="modal-header">{{ props.title }}</div>
      <div class="modal-body">
        <div>
          {{ props.content }}
        </div>
        <slot></slot>
      </div>
      <Footer @onCancel="onCancel" @onOk="onOk"></Footer>
    </div>
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  content: String,
  status: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:status"]);

const onCancel = () => {
  emit("update:status", false);
};

const onOk = () => {
  emit("update:status", false);
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(109, 109, 109, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: 500px;
  height: 200px;
  background-color: #fff;
}
.modal-body {
  height: 100px;
}
</style>
