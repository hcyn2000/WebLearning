<template>
  <div class="safetyAnalysis-box">
    <div class="safetyAnalysis-box_top">
      <!-- 头部 -->
      <SafetyAnalysisHead></SafetyAnalysisHead>

      <!-- 安全评价指数 -->
      <EvaluationIndex></EvaluationIndex>
    </div>

    <div class="safetyAnalysis-box_bottom">
      <Expert></Expert>
    </div>
  </div>
</template>

<script>
import SafetyAnalysisHead from "./components/SafetyAnalysisHead";
import EvaluationIndex from "./components/EvaluationIndex";
import Expert from "./components/Expert";
export default {
  // 组件名称
  name: "safetyAnalysis",
  components: { SafetyAnalysisHead, EvaluationIndex, Expert },
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {},
};
</script>
<style scoped>
.safetyAnalysis-box {
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fafaff;
}
.safetyAnalysis-box_top {
  background-color: #fff;
  margin-bottom: 15px;
}
.safetyAnalysis-box_bottom {
  display: flex;
  justify-content: space-between;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
