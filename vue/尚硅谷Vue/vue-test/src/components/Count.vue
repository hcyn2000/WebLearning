<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大十倍为:{{ bigSum }}</h1>
    <h1>我在{{ region }} 学 {{ subject }}</h1>
    <h3>Person组件总人数是：{{ personList.length }}</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState("countOptions", ["sum", "region", "subject"]),
    ...mapState("personOptions", ["personList"]),

    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters("countOptions", ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations。（对象写法）
    ...mapMutations("countOptions", { increment: "JIA", decrement: "JIAN" }),

    // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions。（对象写法）
    ...mapActions("countOptions", { incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
