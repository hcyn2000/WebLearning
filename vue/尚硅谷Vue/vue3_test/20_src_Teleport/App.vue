<template>
  <div class="app">
    <h3>app组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  // 组件名称
  name: "App",
  components: { Child },
};
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
