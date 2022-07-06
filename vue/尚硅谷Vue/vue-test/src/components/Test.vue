<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "Test",
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

.hello-enter-active {
  animation: hello 1s;
}

.hello-leave-active {
  animation: hello 1s reverse;
}

@keyframes hello {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
