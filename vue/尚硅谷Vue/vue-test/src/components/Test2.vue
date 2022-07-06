<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">hello</h1>
    </transition>

    <!-- 多个元素 每个得有唯一key值 -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="!isShow" key="2">bey</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "Test2",
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

/* 进入的整个过程、离开的整个过程 */
.hello-enter-active,
.hello-leave-active {
  transition: 1s;
}

/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>
