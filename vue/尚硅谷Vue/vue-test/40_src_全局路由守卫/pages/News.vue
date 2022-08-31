<template>
  <ul>
    <li :style="{ opacity }">欢迎学习前端</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
      time: null,
    };
  },
  mounted() {},
  beforeDestroy() {
    console.log("News组件即将被销毁");
  },
  activated() {
    console.log("News组件被激活了");
    this.time = setInterval(() => {
      console.log("@@");
      this.opacity -= 0.01;
      if (this.opacity < 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("New组件被失活了");
    clearInterval(this.time);
  },
};
</script>

<style></style>
