<template>
  <div>
    <School></School>
  </div>
</template>

<script>
import School from "./School";
export default {
  // 组件名称
  name: "App",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {
    School,
  },
  // 侦听器
  watch: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 组件方法
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped></style>
