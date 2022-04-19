<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名称给app</button>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      this.$emit("getStudentName", this.name);
      this.$emit("demo", this.name);
    },
    unbind() {
      // this.$off("getStudentName"); // 解绑一个自定义事件
      // this.$off(["getStudentName", "demo"]); // 解绑多个自定义事件
      this.$off(); // 解绑所有的自定义事件
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
}
</style>
