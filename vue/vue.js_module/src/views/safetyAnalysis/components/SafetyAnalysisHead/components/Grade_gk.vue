<template>
  <div class="grade_gk" @click="changingOver">
    <div class="TopCardBox" :class="{ 'TopCardBox-selected': selectedIndex == index }">
      <div class="comDivBox">项目综合</div>
      <el-progress
        class="TopCardBox-progress"
        type="circle"
        :percentage="itemObj.percentage"
        :width="90"
        :format="format"
        :color="itemObj.color"
        :text-color="itemObj.color"
      ></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: {
      type: Object,
      default: () => {},
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {
    format(percentage) {
      return `${percentage}分`;
    },
    changingOver() {
      this.$emit("changingOver", this.index);
    },
  },
};
</script>
<style scoped>
.grade_gk {
  flex-shrink: 0;
}
.TopCardBox {
  box-sizing: border-box;
  width: 280px;
  cursor: pointer;
  height: 150px;
  margin: 6px 10px;
  padding: 10px 40px 0px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid transparent;
}
.TopCardBox:hover {
  border: 1px solid rgb(94, 153, 229);
}
.TopCardBox-selected {
  border: 1px solid rgb(94, 153, 229);
}
.comDivBox {
  margin-bottom: 18px;
  font-size: 18px;
  text-align: left;
}
::v-deep .TopCardBox-progress .el-progress__text {
  font-size: 18px !important;
  /* color: var(--progress__text_color) !important; */
}
</style>
