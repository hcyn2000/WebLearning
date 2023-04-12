// 预算弹窗
<template>
  <PopupShell :visible="dialogVisible" ref="popupShell">
    <view class="budget-title flex-center"
      >设置预算 <view class="title-icon" @click="close">×</view></view
    >
    <input
      v-model="budgetValue"
      class="budget-input"
      type="number"
      placeholder="输入本月预算"
      :maxlength="9"
      focus
      :adjust-position="false"
      @keyboardheightchange="inputKeyboardheightchange"
    />
    <button class="budget-button" type="primary" @click="define">确定</button>
  </PopupShell>
</template>

<script setup>
import PopupShell from "@/components/PopupShell";
import { ref, defineExpose } from "vue";
import { useMoneyStore } from "@/stores/money";

const money = useMoneyStore();
let dialogVisible = ref(false); // 是否显示弹窗
let popupShell = ref(null);
let budgetValue = ref(0); // 输入框实例

// 打开弹窗
function open() {
  budgetValue.value = money.budgetValue;
  dialogVisible.value = true;
}
// 关闭弹窗
function close() {
  dialogVisible.value = false;
}
// 确定按钮
function define() {
  money.setBudget(budgetValue.value);
  close();
}
// 获取输入框键盘高度
function inputKeyboardheightchange(e) {
  popupShell.value.changeBottom(e.detail.height);
}

defineExpose({
  open,
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
