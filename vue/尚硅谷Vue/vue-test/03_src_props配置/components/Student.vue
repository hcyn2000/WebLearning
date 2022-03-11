<template>
  <div>
    <h1>学生名称：{{ info.name }}</h1>
    <h1>学生性别：{{ info.sex }}</h1>
    <h1>学生年龄：{{ info.age }}</h1>
  </div>
</template>

<script>
export default {
  // props: ["info"],  //简单声明接收

  // 接收的同时对数据进行类型限制
  // props: {
  //   info: Object,
  // },

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    info: {
      type: Object, // 类型是什么
      required: true, // 是必要的
      // 默认值
      default() {
        return {
          name: "胜强",
          sex: "女",
          age: 21,
        };
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
