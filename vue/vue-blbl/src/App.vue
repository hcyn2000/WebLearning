<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="getJoke">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    getJoke() {
      this.axios
        .get("api/x/web-interface/ranking/region", {
          params: {
            day: 1,
            rid: 1,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
