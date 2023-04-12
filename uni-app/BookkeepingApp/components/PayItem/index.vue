<template>
  <view class="payItem-container flex-center-between">
    <view class="payItem-left flex-items-center">
      <view class="payItem-icon iconfont icon-jiaotong flex-center"></view>
      <view class="payItem-title">餐饮</view>
    </view>
    <view class="payItem-right flex-col flex-align-end">
      <view class="payItem-money flex-items-center">
        <view class="iconfont icon-ziyuanldpi"></view>
        20.00
      </view>
      <view class="payItem-time">今天 11:20</view>
    </view>
  </view>
</template>

<script setup></script>
<style lang="scss" scoped>
.payItem-container {
  margin-bottom: 14rpx;
  padding: 38rpx 20rpx;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  font-size: var(--font30);

  .payItem-left {
    color: var(--fontColor);
    .payItem-icon {
      margin-right: 14rpx;
      width: 60rpx;
      height: 60rpx;
      background: #e67c72;
      border-radius: 50%;
      // font-size: 28rpx;
      color: #fff;
    }
  }

  .payItem-right {
    .icon-ziyuanldpi {
      font-size: 22rpx;
    }
    .payItem-time {
      margin-top: 16rpx;
      font-size: var(--font26);
      color: var(--fontColor2);
    }
  }
}
</style>
