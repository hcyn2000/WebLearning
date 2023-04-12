<template>
  <view class="popupShell-container" v-if="visible">
    <view class="popupShell-mask"></view>
    <view class="popupShell-centent" :style="{ bottom: popupShellCententBottom + 'px' }">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps({
  // 是否显示弹窗
  visible: {
    type: Boolean,
    default: false,
  },
});
let popupShellCententBottom = ref(0); // bottom

function changeBottom(height) {
  popupShellCententBottom.value = height;
}
defineExpose({
  changeBottom,
});
</script>

<style scoped lang="scss">
.popupShell-enter-active,
.popupShell-leave-active {
  transition: opacity 2.5s ease;
}

.popupShell-enter-from,
.popupShell-leave-to {
  opacity: 0;
}
.popupShell-container {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  .popupShell-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background: #000;
  }
  .popupShell-centent {
    position: absolute;
    bottom: 0px;
    z-index: 11;
    padding: 40rpx;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
</style>
