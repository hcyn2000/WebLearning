<template>
  <div id="app">
    <button>原生</button>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <img src="./bridge_1.svg" width="30px" alt="" />
  </div>
</template>

<script>
// import svgimg from "./bridge_1.svg"
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    img() {
      let app = document.getElementById("app");
      let el = document.createElement("img");
      el.style.width = "30px";
      el.style.height = "30px";
      el.src = "./bridge_1.svg";
      app.appendChild(el);
    },
  },
  mounted() {
    this.img();
  },
  created() {},
};
</script>

<style scoped></style>
