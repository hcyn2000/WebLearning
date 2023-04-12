<template>
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
    <!-- 本月收入 -->
    <view class="income-box flex-items-center">
      <view class="income-box_item flex-align-end flex1">
        本月收入
        <view class="income-box_item_money">
          <text v-if="isMoney">{{ income.toLocaleString() }}</text>
          <text v-else>****</text>
        </view>
      </view>
      <view class="income-box_item flex-align-end flex1" @click="openBudgetPopup">
        预算剩余
        <view class="income-box_item_money">
          <text v-if="isMoney">{{ money.budgetValue ? money.budgetValue : "未设置预算" }}</text>
          <text v-else>****</text>
        </view>
      </view>
    </view>
    <!-- 查看图表分析 -->
    <view class="home-content_bottom flex-center">
      <view class="iconfont icon-fenxi"></view>
      查看图表分析
    </view>
  </view>
  <BudgetPopup ref="refBudgetPopup"></BudgetPopup>
</template>

<script setup>
import BudgetPopup from "@/components/BudgetPopup";
import { ref } from "vue";
import { useMoneyStore } from "@/stores/money";

const money = useMoneyStore();
let pay = ref(1000000); // 收入金额
let income = ref(1000000); // 收入金额
let isMoney = ref(true); // 是否显示金额
let refBudgetPopup = ref(null); // budgetPopup实例

// 是否显示余额方法
function changeIsMoney() {
  isMoney.value = !isMoney.value;
}

// 打开预算弹窗
function openBudgetPopup() {
  refBudgetPopup.value.open();
}
</script>

<style scoped lang="scss">
.thisMonth-box {
  margin: 0rpx 30rpx;
  padding: 40rpx 30rpx;
  background-color: #fff;
  .thisMonth-box_pay {
    margin-bottom: 46rpx;
    font-size: var(--font26);
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
      font-size: var(--font26);
      color: var(--fontColor2);
      .income-box_item_money {
        margin-left: 20rpx;
        font-size: var(--font30);
        color: var(--fontColor);
      }
    }
  }

  .home-content_bottom {
    margin: 54rpx 0 20rpx 0;
    font-size: var(--font26);
    color: #4c8c76;
    .icon-fenxi {
      margin-right: 26rpx;
      font-size: 46rpx;
    }
  }
}
</style>
