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

    <Floor></Floor>
    <Floor></Floor>

    <!-- 商标 -->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brand from "./Brand"
export default {
  // 组件名称
  name: "Home",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  // 组件状态值
  data() {
    return {}
  },
  // 组件方法
  methods: {},
  created() {},
}
</script>
<style lang="less" scoped></style>
