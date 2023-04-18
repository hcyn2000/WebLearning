<template>
  <view class="bookkeepingEditing-container">
    <view class="edit-top flex-center-between">
      <view class="flex-items-center">
        <view class="edit-top_icon iconfont icon-jiaotong flex-center"></view>
        <view class="edit-top_title">餐饮</view>
      </view>
      <view class="flex-items-center" style="font-size: 40rpx">
        <view class="iconfont icon-ziyuanldpi"></view>{{ amount }}
      </view>
    </view>
    <view class="typeSelection-box">
      <view
        class="type-item flex-col"
        :class="{ active: typeIndex == index }"
        v-for="(item, index) in typeStore.typeList"
        :key="index"
        @click="changeType(item, index)"
      >
        <view class="type-item_icon iconfont flex-center" :class="'icon-' + item.icon"></view>
        <view>{{ item.name }}</view>
      </view>
    </view>

    <view class="edit-bottom">
      <view class="numKeyboard-box">
        <view class="numKeyboard-item" v-for="(item, index) in numKeyboardList" :key="index">{{
          item
        }}</view>
        <view class="numKeyboard-item item-cha"><view class="iconfont icon-chahao"></view></view>
        <view class="numKeyboard-item item-determine">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTypeStore } from "@/stores/type";

const typeStore = useTypeStore();
let amount = ref(0);
let typeIndex = ref(0); // 选中type的index
let numKeyboardList = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, "清零", 0, "."]);

//
function changeType(item, index) {
  typeIndex.value = index;
}
</script>

<style scoped lang="scss">
.bookkeepingEditing-container {
  height: 100%;
  background-color: #f7f7f9;

  .edit-top {
    padding: 24rpx 30rpx;
    border-bottom: 1px #f3f3f3 solid;
    background-color: #fff;
    color: var(--fontColor);
    .edit-top_icon {
      margin-right: 18rpx;
      width: 78rpx;
      height: 78rpx;
      background: #e67c72;
      border-radius: 50%;
      font-size: 48rpx;
      color: #fff;
    }

    .icon-ziyuanldpi {
      font-size: 20rpx;
    }
  }

  .typeSelection-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 40rpx;
    padding: 36rpx 40rpx;
    overflow: auto;
    width: 100%;
    max-height: 452rpx;
    background-color: #fff;

    .type-item {
      align-items: center;
      font-size: var(--font26);
      color: var(--fontColor2);
      .type-item_icon {
        margin-bottom: 14rpx;
        width: 60rpx;
        height: 60rpx;
        background: #efefef;
        border-radius: 50%;
        font-size: 40rpx;
        color: #c2c2c2;
      }
    }
    .active {
      color: var(--fontColor);
      .type-item_icon {
        background: #e67c72;
        color: #fff;
      }
    }
  }

  .edit-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    .numKeyboard-box {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rpx;
      grid-template-areas:
        ". . . a"
        ". . . b"
        ". . . b"
        ". . . b";
      background-color: #fff;
      .numKeyboard-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 36rpx 0;
        color: var(--fontColor);
        background-color: #f0f1f3;
      }
      .item-cha {
        grid-area: a;
      }
      .item-determine {
        grid-area: b;
      }
    }
  }
}
</style>
