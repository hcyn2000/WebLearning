<template>
  <view class="home-container">
    <ContainerShell></ContainerShell>
    <view class="home-head flex-center-between">
      <view class="home-head_left">我的记账本</view>
      <view class="iconfont icon-sousuo1"></view>
    </view>
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
      <view class="home-content">
        <!-- 头部 -->
        <Top></Top>
        <Bottom></Bottom>
      </view>
    </scroll-view>
    <view class="home-bottom">
      <view class="home-bottom_bookkeeping flex-items-center" @click="jumpToPage">
        <view class="iconfont icon-jizhang marginR-4"></view>记一笔
      </view>
    </view>
  </view>
</template>

<script setup>
import ContainerShell from "@/components/ContainerShell";
import Top from "./components/top.vue";
import Bottom from "./components/bottom.vue";
import { ref } from "vue";

let scrollTop = ref(0);

function jumpToPage() {
  uni.navigateTo({
    url: "/pages/takeNotes/index",
  });
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
  .home-head {
    padding: 0 30rpx;
    width: 100%;
    height: 104rpx;
    background: #f0f1f3;
    .home-head_left {
      font-size: 40rpx;
      font-weight: bold;
      color: var(--fontColor);
    }
    .icon-sousuo1 {
      font-size: 40rpx;
    }
  }
  .scroll-Y {
    height: calc(100vh - var(--status-bar-height) - 104rpx);
    background-color: #f7f7f9;
    .home-content {
      padding: 20rpx 0rpx;
      height: 100%;
    }
  }

  .home-bottom {
    position: absolute;
    bottom: 42rpx;
    width: 100%;
    .home-bottom_bookkeeping {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      padding: 30rpx 70rpx;
      border-radius: 50rpx;
      background-color: #4a9d7f;
      color: #fff;
    }
  }
}
</style>
