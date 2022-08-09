<template>
  <div class="container">
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Count, Person },
  data() {
    return {};
  },
  mounted() {
    console.log("App", this);
  },
};
</script>

<style scoped></style>
