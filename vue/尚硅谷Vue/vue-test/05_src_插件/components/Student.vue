<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click="hello()">点我测试hello方法</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "胜强",
      sex: "女",
    };
  },
};
</script>

<style></style>
