<template>
  <div class="school">
    <h2>南昌大学</h2>
    <button @click="showX">点击</button>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "school",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 侦听器
  watch: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 组件方法
  methods: {
    showX() {
      console.log(this);
    },
  },
  created() {},
};
</script>
<style scoped>
.school {
  background: red;
}
</style>
