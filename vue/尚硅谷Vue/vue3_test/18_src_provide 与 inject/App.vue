<template>
  <div class="app">
    <h3>app组件</h3>
    <input type="text" v-model="name" />
    <input type="text" v-model="price" />
    <Child></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";
import { provide, reactive, toRefs } from "vue";
export default {
  // 组件名称
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({ name: "奔驰", price: "40w" });
    provide("car", car);
    return { ...toRefs(car) };
  },
};
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
