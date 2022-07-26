<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getStudents() {
      axios
        .get("http://172.30.101.194:8080/api/students")
        .then((res) => {
          console.log("请求成功", res.data);
        })
        .catch((error) => {
          console.log("请求失败", error.message);
        });
    },
    getCars() {
      axios
        .get("http://172.30.101.194:8080/car/cars")
        .then((res) => {
          console.log("请求成功", res.data);
        })
        .catch((error) => {
          console.log("请求失败", error.message);
        });
    },
  },
};
</script>

<style></style>
