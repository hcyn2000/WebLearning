<template>
  <div class="son">
    <h3>son组件</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  // 组件名称
  name: "Son",
  components: { Dialog },
};
</script>
<style scoped>
.son {
  background-color: gold;
  padding: 10px;
}
</style>
