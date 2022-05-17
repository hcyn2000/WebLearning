<template>
  <div id="app" class="app">
    <h1>{{ msg }} 学生姓名是{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 使用@-->
    <!-- <Student @getStudentName="getStudentName" @demo="demo"></Student> -->

    <!-- 使用ref -->
    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "你啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("拿到学校名", name);
    },
    getStudentName(name) {
      console.log("拿到学生名", name);
      this.studentName = name;
    },
    demo() {
      console.log("demo触发了");
    },
    // 触发原生事件
    show() {
      console.log("show");
    },
  },
  mounted() {
    // console.log(this.$refs.student.name);
    this.$refs.student.$on("getStudentName", this.getStudentName); // 绑定自定义事件
    // this.$refs.student.$once("getStudentName", this.getStudentName); // 绑定自定义事件 只触发一次
  },
};
</script>

<style scoped>
.app {
  background: gray;
}
</style>
