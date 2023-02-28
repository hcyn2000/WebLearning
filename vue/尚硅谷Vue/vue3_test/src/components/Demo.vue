<template>
  <h2>{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // 数据
    let sum = ref(0);

    //通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
      console.log(sum.value);
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
      console.log(sum.value);
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });

    // 返回一个对象（常用）
    return {
      sum,
    };
  },
  //通过配置项的形式使用生命周期钩子
  //#region
  /* beforeCreate() {
    console.log("---beforeCreate---");
  },
  created() {
    console.log("---created---");
    console.log(this.sum);
  },
  beforeMount() {
    console.log("---beforeMount---");
  },
  mounted() {
    console.log("---mounted---");
  },
  beforeUpdate() {
    console.log("---beforeUpdate---");
  },
  updated() {
    console.log("---updated---");
    console.log(this.sum);
  },
  beforeUnmount() {
    console.log("---beforeUnmount---");
  },
  unmounted() {
    console.log("---unmounted---");
  }, */
  //#endregion
};
</script>
