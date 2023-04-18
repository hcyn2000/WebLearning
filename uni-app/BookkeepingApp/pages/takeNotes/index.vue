<template>
  <view class="takeNotes-container">
    <SwiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></SwiperTabHead>

    <swiper @change="change" :current="tabIndex" class="swiper-content">
      <swiper-item class="swiperitem-content">
        <BookkeepingEditing></BookkeepingEditing>
      </swiper-item>
      <swiper-item class="swiperitem-content">
        <view class="nav_item"> 选项卡2页面 </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import SwiperTabHead from "@/components/SwiperTabHead";
import BookkeepingEditing from "@/components/BookkeepingEditing";
import { ref, reactive, onMounted } from "vue";

let tabIndex = ref(0); // 选中的
let fullHeight = ref(0);
let tabBars = reactive([
  { name: "支出", id: "zhichu" },
  { name: "收入", id: "shouru" },
]);

//接受子组件传过来的值点击切换导航
function tabtap(index) {
  tabIndex.value = index;
}
// swiper滑动时，获取其索引，也就是第几个
function change(e) {
  const { current } = e.detail;
  tabIndex.value = current;
}
</script>

<style scoped lang="scss">
.takeNotes-container {
  display: flex;
  flex-direction: column;
  padding-top: var(--status-bar-height);
  width: 100%;
  height: 100vh;
  background: #f0f1f3;

  .swiper-content {
    height: calc(100vh - var(--status-bar-height) - 100rpx);
    .swiperitem-content {
      height: 100%;
      background-color: #ffffff;
      .nav_item {
        background-color: #ffffff;
        padding: 20rpx 40rpx 0rpx 40rpx;
      }
    }
  }
}
</style>
