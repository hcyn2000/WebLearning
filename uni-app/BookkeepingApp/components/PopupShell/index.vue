<template>
  <!-- <transition
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
    class="my-popupShell"
  > -->
  <view class="popupShell-container" v-if="visible">
    <!-- <view class="popupShell-mask"></view> -->
    <view class="popupShell-centent">
      <slot></slot>
    </view>
  </view>
  <!-- </transition> -->
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  // 是否显示弹窗
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.my-popupShell {
  animation-duration: 0.3s;
}
.popupShell-container {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  .popupShell-mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background: #000;
    z-index: 10;
  }
  .popupShell-centent {
    position: absolute;
    bottom: 0;
    z-index: 11;
    padding: 40rpx;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
</style>
