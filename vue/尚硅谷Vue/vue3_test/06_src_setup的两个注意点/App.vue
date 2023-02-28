<template>
  <Demo msg="你好啊" school="学校" @hello="demoHello">
    <template v-slot:qd>
      <h2>前端</h2>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function demoHello(value) {
      console.log(value);
    }

    return {
      demoHello,
    };
  },
};
</script>
