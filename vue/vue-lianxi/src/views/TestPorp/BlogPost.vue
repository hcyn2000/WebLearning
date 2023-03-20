// vue3官网 props
<template>
  <div>
    <h3>姓名: {{ name }}</h3>
    <h3>年龄: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  // 组件状态值
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
