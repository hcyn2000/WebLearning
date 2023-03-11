<template>
  <div>
    <div class="flex-aic">
      <i-button size="large" id="btn1" class="btn-submit">
        <span slot="icon">@</span> 按钮1
      </i-button>
      <i-button size="default"><strong>按钮2</strong></i-button>
      <i-button size="small" @click.native="handleClick"></i-button>
      <i-button disabled></i-button>
    </div>
    <hr />
    <componentA ref="comA"></componentA>
    <button @click="gainComA">获取comA数据</button>
    <button @click="gainChildren">获取子组件数据</button>
  </div>
</template>

<script>
import IButton from "./components/IButton";
import componentA from "./components/component-a";
export default {
  // 组件名称
  name: "Ayi",
  components: { IButton, componentA },
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {
    handleClick() {
      console.log(1);
    },

    gainComA() {
      const comA = this.$refs.comA;
      console.log(comA.title); // Vue.js
      comA.sayHello(); // 弹窗
    },
    gainChildren() {
      console.log("A1", this.$children);
    },
  },
  created() {},
};
</script>
<style scoped></style>
