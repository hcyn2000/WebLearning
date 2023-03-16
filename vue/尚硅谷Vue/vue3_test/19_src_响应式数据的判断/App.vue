<template>
  <div class="app">
    <h3>app组件</h3>
  </div>
</template>

<script>
import { ref, reactive, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
  // 组件名称
  name: "App",
  setup() {
    let sum = ref(0);
    let car = reactive({ name: "奔驰", price: "40w" });
    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isRef(car));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(sum));
  },
};
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
