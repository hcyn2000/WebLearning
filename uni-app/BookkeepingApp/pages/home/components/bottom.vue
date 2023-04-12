<template>
  <view class="todayExpenses-container">
    <view class="todayExpenses-title flex-items-center">
      <view class="flex-items-center">
        今日支出<text class="iconfont icon-ziyuanldpi"></text>30
      </view>
      <view class="flex-items-center marginL-14">
        收入<text class="iconfont icon-ziyuanldpi"></text>30
      </view>
    </view>
    <view class="todayExpenses-content">
      <PayItem v-for="(item, index) in 10" :key="index"></PayItem>
    </view>
  </view>
</template>

<script setup>
import PayItem from "@/components/PayItem";
</script>

<style scoped lang="scss">
.todayExpenses-container {
  margin: 50rpx 30rpx 0;
  padding-bottom: 30rpx;
  font-size: var(--font30);

  .todayExpenses-title {
    margin-bottom: 30rpx;
    color: var(--fontColor);
    .icon-ziyuanldpi {
      margin-left: 8rpx;
      font-size: 26rpx;
    }
  }
}
</style>
