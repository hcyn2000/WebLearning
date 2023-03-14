<template>
  <div class="son">
    <h3>son组件</h3>
    <h3>名称：{{ name }}</h3>
    <h3>价格：{{ price }}</h3>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  // 组件名称
  name: "Son",
  // 组件状态值
  setup() {
    const car = inject("car");
    return { ...toRefs(car) };
  },
};
</script>
<style scoped>
.son {
  background-color: gold;
  padding: 10px;
}
</style>
