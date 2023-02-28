<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <slot name="qd"></slot>
  <button @click="test">触发Deom组件的hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    console.log(props);
    console.log(context.slots);
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    function test() {
      context.emit("hello", "你好");
    }

    // 返回一个对象（常用）
    return {
      person,
      test,
    };
  },
};
</script>
