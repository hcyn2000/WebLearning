<template>
  <h1>一个人的消息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁`);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
    };

    // 返回一个函数
    // return () => h("h1", "你好啊");
  },
};
</script>
