<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "抚州一中",
      address: "抚州",
      pubId: null,
    };
  },
  methods: {},
  mounted() {
    this.pubId = pubsub.subscribe("hello", (msg, data) => {
      console.log(data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
}
</style>
