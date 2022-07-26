<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      name="animate__animated "
      enter-active-class="animate__bounceIn"
      leave-active-class="animate__bounceOut"
      appear
    >
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  // 组件名称
  name: "Test3",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 侦听器
  watch: {},
  // 组件状态值
  data() {
    return {
      isShow: true,
    };
  },
  // 计算属性
  computed: {},
  // 组件方法
  methods: {},
  created() {},
};
</script>
<style scoped>
h1 {
  background-color: skyblue;
}
</style>
