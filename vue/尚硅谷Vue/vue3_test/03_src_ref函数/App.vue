<template>
  <h1>一个人的消息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>职业：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <button @click="changInfo">修改个人信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("万勋");
    let age = ref(18);
    let job = ref({
      type: "前端",
      salary: "100k",
    });

    function changInfo() {
      name.value = "建峰";
      age.value = 20;
      job.value.type = "后端";
      job.value.salary = "99k";
    }
    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changInfo,
    };
  },
};
</script>
