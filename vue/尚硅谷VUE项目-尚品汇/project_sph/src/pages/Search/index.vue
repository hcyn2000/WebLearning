<template>
  <div>
    <h1>params--- {{ this.$route.params.keyword }}</h1>
    <h1>query-- {{ this.$route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "search",
  // 组件状态值
  data() {
    return {}
  },
  // 组件方法
  methods: {},
  created() {},
}
</script>
<style lang="less" scoped></style>
