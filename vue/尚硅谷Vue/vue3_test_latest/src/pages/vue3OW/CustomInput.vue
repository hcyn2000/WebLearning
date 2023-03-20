// 组件 v-model
<template>
  <!-- <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  <!-- 多个 v-model 绑定 -->
  <input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
  <input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// defineProps(["modelValue"]);
// defineEmits(["update:modelValue"]);

// 多个 v-model 绑定
defineProps({
  firstName: String,
  lastName: String,
});
defineEmits(["update:firstName", "update:lastName"]);
</script>
