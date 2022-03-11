<template>
  <div class="demo">
    <h2 class="name">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "抚州一中之临川二中",
      address: "抚州",
    };
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
  .name {
    color: red;
  }
}
</style>
