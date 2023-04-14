<template>
  <div>
    <div class="comDivBox">安全评价指数</div>
    <div id="evaluationIndex-echarts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  // 组件状态值
  data() {
    return {
      chart: null,
      option: {
        color: "#ffad47",
        tooltip: {
          trigger: "axis",
        },
        grid: {
          top: "10%",
          left: "2%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            data: [420, 932, 1201, 934, 590, 1330, 1320],
            type: "line",
            smooth: true,
            symbol: "none",
            areaStyle: {
              opacity: 0.25,
            },
          },
        ],
      },
    };
  },
  // 组件方法
  methods: {},
  mounted() {
    this.chart = echarts.init(document.getElementById("evaluationIndex-echarts"));
    this.chart.setOption(this.option);
    window.addEventListener("resize", this.chart.resize);
  },
};
</script>
<style scoped>
.comDivBox {
  font-size: 18px;
}
#evaluationIndex-echarts {
  width: 100%;
  height: 245px;
}
</style>
