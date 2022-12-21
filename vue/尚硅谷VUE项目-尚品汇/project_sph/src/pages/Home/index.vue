<template>
  <div class="home-box">
    <!-- 商品分类导航 -->
    <TypeNav></TypeNav>

    <!--列表-->
    <ListContainer></ListContainer>

    <!--今日推荐-->
    <TodayRecommend></TodayRecommend>

    <!-- 商品排行 -->
    <Rank></Rank>

    <!-- 猜你喜欢 -->
    <Like></Like>

    <Floor v-for="item in floorList" :key="item.id" :floorObj="item"></Floor>

    <!-- 商标 -->
    <Brand></Brand>

    <button class="backToTop" @click="backToTop">回到顶部</button>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  // 组件名称
  name: "Home",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  // 组件状态值
  data() {
    return {};
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
  // 组件方法
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.$store.dispatch("home/categoryList"); // 获取商品分类三级列表
    this.$store.dispatch("home/getFloorList");
  },
  created() {},
};
</script>
<style lang="less" scoped>
.backToTop {
  position: fixed;
  right: 80px;
  bottom: 80px;
}
</style>
