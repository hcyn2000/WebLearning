<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";

export default {
  name: "School",
  mixins: [mixin],
  data() {
    return {
      name: "抚州一中",
      address: "抚州",
    };
  },
};
</script>

<style></style>
