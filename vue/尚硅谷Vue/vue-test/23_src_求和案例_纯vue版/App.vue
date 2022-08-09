<template>
  <div class="container">
    <Count> </Count>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>
