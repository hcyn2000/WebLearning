<template>
  <div>
    <Header ref="Header"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.isFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch("home/categoryList"); // 获取商品分类三级列表
  },
};
</script>

<style></style>
