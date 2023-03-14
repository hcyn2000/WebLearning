<template>
  <div class="child">
    <h3>child组件</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";
export default {
  // 组件名称
  name: "Child",
  components: { Son },
};
</script>
<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
