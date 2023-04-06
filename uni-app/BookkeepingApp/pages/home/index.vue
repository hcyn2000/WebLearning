<template>
  <view class="home-container flex-col">
    <view class="status_bar"></view>
    <view class="home-head flex-center-between">
      <view class="home-head_left">我的记账本</view>
      <view class="iconfont icon-sousuo1"></view>
    </view>
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
      <view class="home-content">
        <!-- 头部 -->
        <view class="thisMonth-box">
          <view class="thisMonth-box_pay">本月支出</view>
          <view class="money-box flex-center-between">
            <view v-if="isMoney" class="flex-items-center">
              <view class="iconfont icon-ziyuanldpi"></view>{{ pay.toLocaleString() }}
            </view>
            <view v-else>****</view>
            <view class="marginR-20 flex-center eye-box" @click="changeIsMoney">
              <view class="iconfont icon-ai-eye" v-if="isMoney"></view>
              <view class="iconfont icon-biyanbi" v-else></view>
            </view>
          </view>
          <view class="income-box flex-items-center">
            <view class="income-box_item flex-items-center flex1">
              本月收入
              <view class="income-box_item_money">
                <text v-if="isMoney">{{ income.toLocaleString() }}</text>
                <text v-else>****</text>
              </view>
            </view>
            <view class="income-box_item flex-items-center flex1" @click="openBudgetPopup">
              预算剩余
              <view class="income-box_item_money">
                <text v-if="isMoney"> 未设置预算</text>
                <text v-else>****</text></view
              >
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
  <BudgetPopup ref="refBudgetPopup"></BudgetPopup>
</template>

<script setup>
import BudgetPopup from "@/components/BudgetPopup";
import { ref } from "vue";
let scrollTop = ref(0);
let pay = ref(1000000); // 收入金额
let income = ref(1000000); // 收入金额
let isMoney = ref(true); // 是否显示金额
let refBudgetPopup = ref(null); // budgetPopup实例

// 是否显示余额方法
function changeIsMoney() {
  isMoney.value = !isMoney.value;
}

function openBudgetPopup() {
  refBudgetPopup.value.dialogVisible = true;
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    background: #f0f1f3;
  }
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
    height: calc(100vh - 104rpx);
    background-color: #f7f7f9;
    .home-content {
      padding: 20rpx 30rpx;
      height: 100%;
      .thisMonth-box {
        padding: 40rpx 30rpx;
        background-color: #fff;
        .thisMonth-box_pay {
          margin-bottom: 46rpx;
          font-size: 26rpx;
          color: var(--fontColor2);
        }
        .money-box {
          font-weight: bold;
          font-size: 70rpx;
          color: var(--fontColor);
          letter-spacing: -1px;
          .icon-ziyuanldpi {
            font-size: 46rpx;
          }
          .eye-box {
            width: 80rpx;
            height: 80rpx;
          }
          .icon-ai-eye,
          .icon-biyanbi {
            font-size: 40rpx;
            color: var(--fontColor2);
          }
        }
        .income-box {
          margin-top: 56rpx;
          .income-box_item {
            font-size: 26rpx;
            color: var(--fontColor2);
            .income-box_item_money {
              margin-left: 20rpx;
              font-size: 34rpx;
              color: var(--fontColor);
            }
          }
        }
      }
    }
  }
}
</style>
