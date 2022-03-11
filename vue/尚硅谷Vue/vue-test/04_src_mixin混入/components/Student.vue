<template>
  <div>
    <h2 @click="showName">学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  name: "Student",
  mixins: [mixin],
  data() {
    return {
      name: "胜强",
      sex: "女",
    };
  },
  mounted() {
    console.log("你好啊！！！！");
  },
};
</script>

<style></style>
