<template>
  <div id="app">
    <h1 v-text="msg" ref="msg"></h1>
    <button @click="showDOM">点我显示元素</button>
    <School ref="school"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.msg); // 真实DOM元素
      console.log(this.$refs.school); // School组件实例对象
    },
  },
};
</script>

<style></style>
