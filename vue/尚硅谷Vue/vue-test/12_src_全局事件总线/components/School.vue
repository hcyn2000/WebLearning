<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "抚州一中",
      address: "抚州",
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("hello", (res) => {
      console.log("触发了", res);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
}
</style>
