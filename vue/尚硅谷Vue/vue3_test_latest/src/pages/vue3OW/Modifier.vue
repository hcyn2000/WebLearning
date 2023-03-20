<template>
  <!-- 表单输入绑定 修饰符 -->
  <!-- .lazy 在 "change" 事件后同步更新而不是 "input" -->
  <input type="text" v-model.lazy="msg1" />

  <!-- .number 用户输入自动转换为数字 如果该值无法被 parseFloat() 处理，那么将返回原始值 -->
  <input v-model.number="age" />

  <!-- .trim 默认自动去除用户输入内容中两端的空格 -->
  <input v-model.trim="msg2" ref="refInput" />
</template>

<script setup>
import { onMounted, ref } from "vue";

let msg1 = ref("123");
let msg2 = ref("456");
let age = ref("789");
let refInput = ref(null);

onMounted(() => {
  // console.log(refInput);
  refInput.value.focus();
});

defineExpose({
  msg1,
  msg2,
  age,
});
</script>

<style scoped></style>
