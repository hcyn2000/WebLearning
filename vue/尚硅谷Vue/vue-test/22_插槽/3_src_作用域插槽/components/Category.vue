<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">没传值，显示默认1。</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["QQ飞车", "穿越火线", "LOL"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
