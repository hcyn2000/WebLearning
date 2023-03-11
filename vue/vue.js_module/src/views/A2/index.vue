<template>
  <div><B></B> <button @click="name = 'Long'">改变name</button></div>
</template>

<script>
import B from "./components/B";
export default {
  // provide: {
  //   name: "Aresn",
  // },
  provide() {
    return {
      A2: this, // provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
    };
  },
  components: { B },
  // 组件状态值
  data() {
    return {
      name: "Aresn",
    };
  },
};
</script>
