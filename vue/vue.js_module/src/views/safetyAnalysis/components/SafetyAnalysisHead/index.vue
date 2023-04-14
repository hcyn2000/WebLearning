<template>
  <div class="safetyAnalysis-head">
    <div class="head-slideLeft" @click="shiftContent('left')">
      <img src="./slideLeft.b461abb6.png" alt="" />
    </div>
    <div class="head-content" ref="safetyAnalysisHeadContent">
      <div class="head-contentList" ref="safetyAnalysisHeadContentList">
        <GradeGk
          v-for="(item, index) in list"
          :key="index"
          :itemObj="item"
          :selectedIndex="selectedIndex"
          :index="index"
          @changingOver="changingOver"
        ></GradeGk>
      </div>
    </div>
    <div class="head-slideRight" @click="shiftContent('right')">
      <img src="./slideRight.19e99f99.png" alt="" />
    </div>
  </div>
</template>

<script>
import GradeGk from "./components/Grade_gk";
export default {
  components: { GradeGk },
  // 组件状态值
  data() {
    return {
      list: [
        { percentage: 90.1, title: "项目综合", color: "#3E7AFF" },
        { percentage: 90.1, title: "项目综合", color: "#3E7AFF" },
        { percentage: 90.1, title: "项目综合", color: "#3E7AFF" },
        { percentage: 90.1, title: "项目综合", color: "#3E7AFF" },
        { percentage: 90.1, title: "项目综合", color: "#3E7AFF" },
      ],
      selectedIndex: 0, // 选中的盒子index
      movingDistance: 0, // 移动了多少距离
    };
  },
  computed: {
    // 获取可移动距离
    remainingLength() {
      let headContentLength = this.$refs.safetyAnalysisHeadContent.offsetWidth;
      let headContentListLength = this.$refs.safetyAnalysisHeadContentList.offsetWidth;
      return headContentListLength - headContentLength;
    },
  },
  // 组件方法
  methods: {
    // 点击左右箭头移动
    shiftContent(direction) {
      let num = 140;
      let headContentList = this.$refs.safetyAnalysisHeadContentList;
      if (direction == "left") {
        this.movingDistance += num;
        if (this.movingDistance > 0) this.movingDistance = 0;
      } else {
        this.movingDistance -= num;
        if (this.movingDistance < -this.remainingLength)
          this.movingDistance = -this.remainingLength;
      }
      headContentList.style.transform = `translateX(${this.movingDistance}px)`;
    },
    // 切换选中状态
    changingOver(value) {
      this.selectedIndex = value;
    },
  },
};
</script>
<style scoped>
.safetyAnalysis-head {
  display: flex;
  height: 170px;
}
.head-slideLeft,
.head-slideRight {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 26px;
  height: 100%;
}
.head-slideRight {
  justify-content: flex-end;
}
.head-content {
  /* flex: 1; */
  width: 1000px;
  overflow: hidden;
  display: flex;
}
.head-contentList {
  display: flex;
  transition: all 0.6s;
}
</style>
