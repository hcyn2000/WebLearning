<template>
  <div id="app">
    <Student></Student>
    <hr />
    <Student :info="info"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      info: {
        name: "瑜瑜",
        sex: "人妖",
        age: 21,
      },
    };
  },
};
</script>

<style></style>
