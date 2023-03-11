<template>
  <div><button @click="handleEmitEvent">点击</button></div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {
    handleEmitEvent() {
      this.$emit("test", "Hello Vue.js");
    },
  },
  mounted() {
    this.$on("test", (value) => {
      console.log("B", value);
    });
  },
};
</script>
<style lang="less" scoped></style>
