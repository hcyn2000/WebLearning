<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue.js",
    };
  },
  methods: {
    sayHello() {
      window.alert("Hello");
      console.log("component-a", this.$parent);
    },
  },
};
</script>
<style lang="less" scoped></style>
