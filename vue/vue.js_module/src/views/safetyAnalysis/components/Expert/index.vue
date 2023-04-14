<template>
  <div class="container">
    <div class="contentCardBox">
      <div class="contentCardBox-head">
        <div class="comDivBox">排雷小能手</div>
        <div class="safeCard">
          <div>排雷总数<span class="safeTotal">18813</span>条</div>
          <div>已整改<span class="solveTotal">16851</span>条</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件状态值
  data() {
    return {};
  },
  // 组件方法
  methods: {},
};
</script>
<style scoped>
.comDivBox {
  font-size: 18px;
}
.container {
  padding-left: 8px;
  padding-right: 8px;
  flex: 0 0 33.33%;
  max-width: 33.3%;
  /* background-color: #fff; */
}
.contentCardBox {
  height: 336px;
  overflow-y: hidden;
  width: 100%;
  padding: 20px 20px 0 20px;
  border-radius: 4px;
  background-color: #fff;
}
.contentCardBox-head {
  display: flex;
  justify-content: space-between;
}
.safeCard {
  display: flex;
  margin-right: 36px;
  width: 250px;
}
.safeTotal,
.solveTotal {
  font-size: 20px;
  font-weight: 700;
}
.safeTotal {
  color: #5de988;
}
.solveTotal {
  color: #f9ae61;
}
</style>
