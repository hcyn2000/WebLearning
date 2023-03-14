<template>
  <div><B @test="test"></B></div>
</template>

<script>
import B from "./B.vue";
export default {
  components: { B },
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {
    test(value) {
      console.log("a3", value);
    },
  },
};
</script>
