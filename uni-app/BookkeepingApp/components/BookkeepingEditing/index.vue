<template>
  <view class="bookkeepingEditing-container">
    <view class="edit-top flex-center-between">
      <view class="flex-items-center">
        <view
          class="edit-top_icon iconfont flex-center"
          :class="'icon-' + typeStore.typeList[typeIndex].icon"
        ></view>
        <view class="edit-top_title">{{ typeStore.typeList[typeIndex].name }}</view>
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
        <view
          class="numKeyboard-item"
          v-for="(item, index) in numKeyboardList"
          :key="index"
          @click="inputNumFun(item)"
          >{{ item }}</view
        >
        <view class="numKeyboard-item item-cha" @click="deleteNum"
          ><view class="iconfont icon-chahao"></view
        ></view>
        <view class="numKeyboard-item item-determine" @click="determineFun">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTypeStore } from "@/stores/type";
import { returnFloat } from "@/utils/publicMethods.js";
import dayjs from "dayjs";

const typeStore = useTypeStore();
let amount = ref("0"); // 金额
let typeIndex = ref(0); // 选中type的index
let numKeyboardList = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, "清零", 0, "."]);
let typeSelected = reactive({});

// 改变选中类型
function changeType(item, index) {
  typeIndex.value = index;
}

// 输入数字
function inputNumFun(item) {
  if (item == "清零") {
    amount.value = "0";
  } else {
    if (amount.value.length > 9) return;
    if (amount.value == "0") amount.value = "";
    if (item == ".") {
      if (amount.value.length == 0) {
        amount.value = "0";
        return;
      }
      if (amount.value.split(".").length - 1 >= 1) return;
    }

    amount.value += item;
  }
}

// 删除数字
function deleteNum() {
  amount.value = amount.value.slice(0, -1);
  if (amount.value.length == 0) amount.value = "0";
}

// 确定按钮
function determineFun() {
  if (amount.value == "0") return;
  typeSelected.type = typeStore.typeList[typeIndex.value];
  typeSelected.num = returnFloat(amount.value);
  typeSelected.time = dayjs().format("HH:mm");
  typeStore.addConsume(typeSelected);
  amount.value = "0";
  typeIndex.value = 0;

  uni.navigateTo({
    url: "/pages/home/index",
  });
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
