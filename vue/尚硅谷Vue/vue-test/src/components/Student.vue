<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="OnClick">触发事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    OnClick() {
      this.$bus.$emit("hello", 666);
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
}
</style>
