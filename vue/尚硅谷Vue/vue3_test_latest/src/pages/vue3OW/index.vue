<template>
  <!-- 单个v-model绑定 -->
  <!-- <CustomInput v-model="searchText"></CustomInput> {{ searchText }} -->
  <hr />

  多个 v-model 绑定
  <CustomInput v-model:first-name="first" v-model:last-name="last"></CustomInput>
  {{ `${first} ${last}` }}

  <hr />
  表单输入绑定 修饰符
  <Modifier ref="refModifier"></Modifier>

  <hr />
  内置组件
  <BuiltInCom></BuiltInCom>
</template>

<script setup>
import CustomInput from "./CustomInput.vue";
import Modifier from "./Modifier.vue";
import BuiltInCom from "./BuiltInCom/index.vue";
import { onMounted, ref } from "vue";

// let searchText = ref("123");

// 多个 v-model 绑定
let first = ref("123");
let last = ref("abc");

let refModifier = ref(null);
onMounted(() => {
  console.log(refModifier.value);
  console.log(refModifier.value.msg1);
});
</script>

<style scoped></style>
