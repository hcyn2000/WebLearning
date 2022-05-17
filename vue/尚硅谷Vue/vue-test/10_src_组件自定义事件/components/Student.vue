<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前值为 {{ number }}</h2>
    <button @click="add">number++</button>
    <button @click="sendStudentName">把学生名称给app</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前Student组件实例</button>
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
    add() {
      console.log("add");
      this.number++;
    },
    sendStudentName() {
      this.$emit("getStudentName", this.name);
      this.$emit("demo", this.name);
    },
    unbind() {
      // this.$off("getStudentName"); // 解绑一个自定义事件
      // this.$off(["getStudentName", "demo"]); // 解绑多个自定义事件
      this.$off(); // 解绑所有的自定义事件
    },
    death() {
      this.$destroy(); // 销毁了当前Student组件实例,销毁后Student实例的自定义事件全部失效
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
}
</style>
