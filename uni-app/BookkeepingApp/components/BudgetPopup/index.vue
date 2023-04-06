// 预算弹窗
<template>
  <PopupShell :visible="dialogVisible">
    <view class="budget-title flex-center"
      >设置预算 <view class="title-icon" @click="close">×</view></view
    >
    <input
      class="budget-input"
      type="number"
      placeholder="输入本月预算"
      :maxlength="9"
      :adjust-position="false"
    />
    <button class="budget-button" type="primary">确定</button>
  </PopupShell>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import PopupShell from "@/components/PopupShell";

let dialogVisible = ref(false); // 是否显示弹窗

function close() {
  dialogVisible.value = false;
}
defineExpose({
  dialogVisible,
});
</script>

<style scoped lang="scss">
.budget-title {
  position: relative;
  margin-bottom: 36rpx;
  width: 100%;
  font-size: 44rpx;
  color: var(--fontColor);
  .title-icon {
    font-size: 66rpx;
    position: absolute;
    right: 0;
  }
}
.budget-input {
  margin-bottom: 20rpx;
  height: 100rpx;
  font-size: 44rpx;
}
.budget-button {
}
</style>
